# Hriday HQ

Premium, responsive fashion-house workspace for Hriday. Brand system: bottle green `#0F3D2E`, ivory `#F5F0E6`, muted gold `#C6A15B`.

## Files
- `index.html` — full-width responsive interface; H monogram opens the navigation drawer.
- `config.js` — public Supabase URL and publishable-key configuration.

## Cloud connection status
`config.js` now contains the project URL and its public publishable key. This key is intended for browser use; it is not a service-role key. However, **do not use this build for live business data yet**. An audit found mismatches between the frontend data model and existing Supabase tables/columns (including product, order, and chat paths). Those must be mapped and tested with owner/designer accounts before cloud mode is considered production-ready. The search field and Enter/search control are fixed; search filters the current records page and searches workspace sections from other pages. Do not add real customer, designer, or financial records until the schema integration and RLS tests pass. Existing database records are not deleted or seeded by this bundle.

## Free static hosting
GitHub Pages can host the static interface for free. Upload `index.html`, `config.js`, and `README.md` to the repository root in one final commit. Keep the three files together; the HTML loads `config.js` from the same folder. Static hosting alone does not provide authentication or database security; Supabase Auth and RLS must be correctly configured.

## Agreed access model
- Owner: `gaganbogar9021@gmail.com`.
- Two separate designer accounts.
- Designers submit drafts for owner approval; no publishing without approval.
- Financials, margins, supplier purchasing and expenses remain owner-only.
- Designers see assigned order details only and may view/request materials; only owner adjusts stock.
- Only owner can permanently delete records; activity logging and secure account recovery are required.
