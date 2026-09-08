# apodimoi-thesis

Web app for expatriates of the Aegean islands ("apodimoi") to stay connected with
their home communities: news/articles, local services and associations directory,
Greek-lesson content, radio, an advisor directory, and a user directory with
island/dimotiki-enotita/birthplace stats (map + chart views).

Full-stack, two separate git repos on disk:

- **This repo** (`apodimoi-thesis`) — the Next.js frontend (`front/`) plus the
  `docker-compose.yml` that runs the local Postgres database.
- **`/home/geo/code/thesis/backend`** — a *separate* git repo/remote
  (`thesis_backend`) containing the Strapi CMS backend. It has its own
  [CLAUDE.md](/home/geo/code/thesis/backend/CLAUDE.md).

Frontend-specific conventions live in [front/CLAUDE.md](front/CLAUDE.md).

Treat these as three independent projects that happen to run together locally.
Never assume a change in one repo is "committed" alongside the other — they have
separate histories and separate remotes.

## Stack at a glance

- Frontend: Next.js 12 (pages router), React 17, Chart.js, Leaflet — see front/CLAUDE.md
- Backend: Strapi 4.1.5 CMS, Node — see backend CLAUDE.md
- DB: Postgres via `docker-compose.yml` at repo root, data volume mounted at `./data`

## Run order (see [README.md](README.md) for full first-time setup)

1. `docker-compose up` (Postgres)
2. Backend: `npm run develop` in `/home/geo/code/thesis/backend` → localhost:1337
3. Frontend: `npm run dev` in `front/` → localhost:3000

## Ground rules

- **Keep it simple.** This is a small thesis project, not enterprise software.
  Prefer the smallest change that solves the problem over new abstractions,
  new dependencies, or "while we're here" refactors. Match existing patterns
  (plain JS/JSX, no TypeScript, no new state-management libraries) unless the
  user explicitly asks to introduce something new.
- **Don't upgrade major versions of the stack** (Next, React, Strapi, Node)
  as a side effect of another task. These are pinned old versions
  (Next 12 / React 17 / Strapi 4.1.5) and a major bump is a project of its
  own — always ask first.
- **Ask before schema/data changes.** Strapi content-type schema edits,
  destructive DB operations, or anything touching `db_backup/` (in the
  backend repo) or the `data/` volume here should be confirmed with the user
  first — they're either shared state or hard to reverse.
- **Two repos, two remotes.** Before running `git` commands, confirm which
  repo's working tree you're actually in (`git remote -v`). Never push either
  repo without explicit confirmation.

## ⚠️ Known issues to work around (not to silently "fix")

These were found during setup review. They're pre-existing conditions of the
project, not something to casually clean up mid-task — flag/ask before acting
on any of them:

1. **The Postgres data directory is committed to this git repo.**
   `.gitignore` excludes `.data` but the actual directory used by
   `docker-compose.yml` is `data` (no dot) — a naming mismatch. As a result
   **~1,491 raw Postgres data files are tracked in git history**. Do not add,
   modify, or `git add` anything under `data/`. Fixing this properly means
   untracking the directory and likely rewriting history to remove the blobs
   — that's a decision for the user, not something to do unprompted.
2. **`front/.env.local` is tracked in git.** Its current contents are just
   public API URLs, so low risk today, but treat it as already-exposed: don't
   add real secrets to it without first discussing untracking it.
3. **Backend secrets were committed to git history.** The backend's `.env`
   (containing real `APP_KEYS`, `JWT_SECRET`, `API_TOKEN_SALT`) is tracked in
   the `thesis_backend` repo and was added back after being gitignored (see
   commit `3b71059` "git ignore removal"). These values should be treated as
   compromised. Recommend the user **rotate them** before any production use;
   don't generate or commit new secrets into a tracked `.env` file.
4. **Node version mismatch.** The backend's `package.json` pins
   `"node": ">=12.x.x <=16.x.x"`, but the local machine runs Node v22. Running
   backend commands under Node 22 may work by luck or may not — if you hit
   install/runtime errors in the backend, suspect this first (use `nvm`
   to switch versions) rather than "fixing" it by upgrading Strapi.

## Explicit permission required (project-specific, in addition to general rules)

- Editing `.gitignore` / untracking files, or any git history rewrite
- Editing anything under `data/` or `db_backup/`
- Changing or rotating secrets in any `.env` file
- Strapi content-type/schema changes (`schema.json` files, new content types)
- Dependency major-version bumps or `npm audit fix --force`
- Any `docker-compose` command that recreates/removes volumes
