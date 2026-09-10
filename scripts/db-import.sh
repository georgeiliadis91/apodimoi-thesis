#!/usr/bin/env bash
# Import a dump produced by db-export.sh into the local docker-compose
# Postgres container. Intended to be run on a *different* machine than the
# one the dump came from (or locally, to restore a backup).
#
# This is DESTRUCTIVE: it drops and recreates every object in the target
# database before restoring. It will prompt for confirmation unless -y/--yes
# is passed.
#
# Usage:
#   docker-compose up -d          # make sure the target Postgres is running
#   scripts/db-import.sh path/to/dump.dump [--yes]

set -euo pipefail

CONTAINER="${DB_CONTAINER:-strapiDB}"
DB_USER="${DB_USER:-strapi}"
DB_NAME="${DB_NAME:-strapi}"

ASSUME_YES=0
DUMP_FILE=""
for arg in "$@"; do
  case "$arg" in
    -y|--yes) ASSUME_YES=1 ;;
    *) DUMP_FILE="$arg" ;;
  esac
done

if [ -z "$DUMP_FILE" ]; then
  echo "Usage: $0 path/to/dump.dump [--yes]" >&2
  exit 1
fi

if [ ! -f "$DUMP_FILE" ]; then
  echo "Error: dump file '$DUMP_FILE' not found." >&2
  exit 1
fi

if ! docker inspect -f '{{.State.Running}}' "$CONTAINER" >/dev/null 2>&1; then
  echo "Error: container '$CONTAINER' is not running. Start it with 'docker-compose up' first." >&2
  exit 1
fi

if [ "$ASSUME_YES" -ne 1 ]; then
  read -r -p "This will DROP and recreate all objects in database '$DB_NAME' on container '$CONTAINER' before restoring '$DUMP_FILE'. Continue? [y/N] " reply
  case "$reply" in
    [yY]|[yY][eE][sS]) ;;
    *) echo "Aborted."; exit 1 ;;
  esac
fi

echo "Restoring '$DUMP_FILE' into database '$DB_NAME' on container '$CONTAINER'..."

# pg_restore needs a seekable file for the custom (-F c) format, so the dump
# has to live inside the container rather than be piped over `docker exec -i`.
CONTAINER_TMP="/tmp/$(basename "$DUMP_FILE")"
cleanup() { docker exec "$CONTAINER" rm -f "$CONTAINER_TMP" >/dev/null 2>&1 || true; }
trap cleanup EXIT

docker cp "$DUMP_FILE" "$CONTAINER:$CONTAINER_TMP"

docker exec "$CONTAINER" pg_restore \
  -U "$DB_USER" \
  -d "$DB_NAME" \
  --clean \
  --if-exists \
  --no-owner \
  --no-acl \
  "$CONTAINER_TMP"

echo "Import complete."
