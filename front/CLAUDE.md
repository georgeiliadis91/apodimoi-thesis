# Frontend (Next.js)

See the [root CLAUDE.md](../CLAUDE.md) first for project-wide context and guardrails
(there's a committed-secrets / committed-DB-data situation you should know about).

## Stack

- **Next.js 12**, **pages router** (`pages/`) — there is no `app/` dir; don't
  introduce app-router patterns.
- **React 17**, plain JSX — no TypeScript in this project. Don't add `.tsx`
  files or a TS toolchain unless explicitly asked.
- Data fetching: `axios` directly against the Strapi API
  (`NEXT_PUBLIC_API_URL` in `.env.local`).
- Auth: JWT stored in a cookie via `nookies`; login/logout state lives in a
  plain React Context (`store/store.js`, `UserContext`) — no Redux/Zustand/etc.
- Charts: `chart.js` + `react-chartjs-2` (see `components/UserLocationChart`).
- Maps: `leaflet` + `react-leaflet` + `react-leaflet-markercluster`
  (see `components/UserMap`).
- i18n: **hand-rolled**, not `next-i18next`. Strings live in
  `translations/el.js` / `translations/en.js`, consumed via
  `hooks/useTranslations.js`. Follow this pattern for new strings rather than
  introducing a real i18n library.
- Styling: CSS Modules co-located with components (`Foo.jsx` + `Foo.module.css`).

## Structure

- `pages/` — routes (about, advisor, classes, communities, contact, news,
  radio, services, users incl. `users/[id]`, `users/me`, login/register)
- `components/` — one folder per feature/component (ArticlesBlock,
  FieldRenderer, Footer, ImageCarousel, Navbar, Profile, UserBlock,
  UserLocationChart, UserMap, views)
- `store/` — global auth context
- `hooks/`, `utils/` — `formatters.js`, `dataFormatters.js`,
  `formValidation.js`, `helpers.js`, `profileEdit.js`
- `constants/`, `json-data-files/`, `translations/`

## Conventions to preserve

- Match existing component structure: a component's own folder with a
  `.jsx` + `.module.css` pair.
- `FieldRenderer` is the generic renderer for Strapi's dynamic/flexible
  content — check it before writing a one-off renderer for a new content type.
- Backend responses drive most page content (Strapi `home`/`layout`/etc.
  singletons) — check the corresponding backend content-type schema before
  assuming a field exists or guessing its shape.

## Before calling UI work done

Start the dev server and click through the affected page(s) in a browser —
type-checking doesn't exist here (no TS) and there's no test suite, so a
successful build is not evidence the feature works.
