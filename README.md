Staging build trigger – test
# HomeschoolResorts — Staging Kit

This project is ready for **Vercel + GitHub** with staging safeguards.

## Environments
- **Production:** branch `main` with `NEXT_PUBLIC_ENV=production`
- **Staging:** branch `staging` with `NEXT_PUBLIC_ENV=staging`

`app/robots.ts` blocks Google on staging. The UI shows a red **STAGING** ribbon on staging.

## Quick Start
1. Upload all files to a GitHub repo.
2. In Vercel: Import the repo → Deploy (Production).
3. Create branch **staging** in GitHub. Vercel will deploy a **Preview** URL.
4. In Vercel → Project → Settings → Environment Variables:
   - For **Production**: `NEXT_PUBLIC_ENV=production`
   - For **Preview**: `NEXT_PUBLIC_ENV=staging`
5. Visit your staging URL — you'll see the STAGING ribbon.

## Feature Flags
- `NEXT_PUBLIC_ENABLE_LOGIN` (default true)
- `NEXT_PUBLIC_ENABLE_HOST_WIZARD` (default true)

Set to `false` in Preview if you want those modals hidden during testing.

## Releasing without breaks
- Work in **staging** branch only.
- Use the **SMOKE-TEST checklist** below before merging to `main`.
- Open a Pull Request from `staging` → `main` when ready.

## SMOKE-TEST (2 minutes)
- Page loads without errors.
- Dark mode toggle works.
- “Join waitlist” scrolls correctly.
- Open **Login** → can close it.
- Open **Host Wizard** → navigate steps → submit → confirmation shows.
- No typos in headers/sections.
- Footer shows current year.

If any fail, fix on staging, wait 60–90 seconds, and retest.

## How to revert
If a production deploy has a problem:
- In GitHub, open **Releases** or **Commits** and click **Revert** to the last good one, or
- Re-open your previous Pull Request and click **Revert**, then **Merge`.
Vercel redeploys automatically.
