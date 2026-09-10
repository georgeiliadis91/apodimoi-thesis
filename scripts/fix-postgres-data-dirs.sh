#!/usr/bin/env bash
# Postgres keeps several directories under its data dir empty during normal
# operation (pg_notify, pg_stat, pg_logical/snapshots, etc). Git doesn't
# track empty directories, so this repo's committed ./data directory is
# always missing them on a fresh clone, and Postgres refuses to start with
# an error like:
#   FATAL:  could not open directory "pg_notify": No such file or directory
#
# This recreates the missing empty directories with the ownership Postgres
# expects. It never touches existing files. Run it once after cloning,
# before `docker-compose up`.
#
# Usage:
#   scripts/fix-postgres-data-dirs.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
DATA_DIR="$REPO_ROOT/data"

if [ ! -d "$DATA_DIR" ]; then
  echo "Error: $DATA_DIR does not exist." >&2
  exit 1
fi

DIRS=(
  pg_notify
  pg_commit_ts
  pg_dynshmem
  pg_replslot
  pg_serial
  pg_snapshots
  pg_stat
  pg_tblspc
  pg_twophase
  pg_logical/snapshots
  pg_logical/mappings
)

MKDIR_CMDS=""
for d in "${DIRS[@]}"; do
  MKDIR_CMDS+="mkdir -p /pgdata/$d && chown 999:1000 /pgdata/$d && chmod 700 /pgdata/$d; "
done

echo "Recreating missing empty Postgres data directories in $DATA_DIR ..."
docker run --rm -v "$DATA_DIR:/pgdata" alpine sh -c "$MKDIR_CMDS"
echo "Done. You can now run: docker-compose up -d"
