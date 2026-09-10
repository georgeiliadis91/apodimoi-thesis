#!/usr/bin/env bash
# Export the Postgres database from the local docker-compose container into a
# single portable dump file, so it can be copied to another machine and
# imported with db-import.sh.
#
# Usage:
#   scripts/db-export.sh [output-file]
#
# Defaults to backups/strapi-<timestamp>.dump if no output file is given.

set -euo pipefail

CONTAINER="${DB_CONTAINER:-strapiDB}"
DB_USER="${DB_USER:-strapi}"
DB_NAME="${DB_NAME:-strapi}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="$REPO_ROOT/backups"

if ! docker inspect -f '{{.State.Running}}' "$CONTAINER" >/dev/null 2>&1; then
  echo "Error: container '$CONTAINER' is not running. Start it with 'docker-compose up' first." >&2
  exit 1
fi

mkdir -p "$BACKUP_DIR"

OUT_FILE="${1:-$BACKUP_DIR/strapi-$(date +%Y%m%d-%H%M%S).dump}"

echo "Dumping database '$DB_NAME' from container '$CONTAINER' -> $OUT_FILE"

docker exec "$CONTAINER" pg_dump \
  -U "$DB_USER" \
  -d "$DB_NAME" \
  -F c \
  --no-owner \
  --no-acl \
  > "$OUT_FILE"

echo "Done. Wrote $(du -h "$OUT_FILE" | cut -f1) to $OUT_FILE"
echo "Copy this file to the target machine and run: scripts/db-import.sh $(basename "$OUT_FILE")"
