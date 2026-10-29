# On The Dime Timing — navigation and branding repair

Upload the full contents of this folder to the root of `OnTheDimeTC/home`.

- Clean routes are served by directories (`events/index.html`, etc.).
- Old `.html` routes remain working standalone pages rather than redirecting.
- Removed the navigation overlay and meta-refresh redirects responsible for flashing/loops.
- Full OTD logo in header and footer; Daisy favicon.
- Footer is horizontal navy, without the tall image stretched as a background.
- Assets use `<base href="/home/">` to support GitHub project Pages.

If GitHub Pages still shows the old version, wait for deployment and force-refresh with Ctrl+Shift+R.

Repository: https://github.com/OnTheDimeTC/home
Site: https://onthedimetc.github.io/home/
All HTML pages use <base href="/home/"> so shared assets and navigation resolve from the renamed repository.


Updated clean routes: `/home/live/` and `/home/historical/` (or `/live/` and `/historical/` once the custom domain is attached to this repository). Legacy results routes are retained for existing links. Favicon source is full-body Daisy, centered with generous transparent padding; references have a version query to refresh cached icons.


### New informational sections
Homepage: Planning An Event links. Services: race director FAQ. Events: volunteer/vendor/sponsorship inquiry. These are informational and do not submit or store data. Existing contact link handles inquiries.

## Sponsorship & Opportunities page
The `/opportunities/` page is powered by `opportunities.json` at the repository root. To update the opportunities before Decap CMS is installed, edit that file in GitHub (pencil icon), changing titles, descriptions, email subjects, or adding/removing entries from the `opportunities` list. Keep the JSON syntax valid. `assets/opportunities.js` renders the cards automatically. Once Decap CMS is configured, this JSON can be registered as an editable file collection. No sponsorship prices, guaranteed placements, or confirmed vendor spaces are claimed on this page.

## Editing sponsorship opportunities
Update `opportunities.json`. Each entry in `events` becomes its own expandable event dropdown. Add an event object with `name`, `date`, `location`, `image`, `summary`, `status`, and `opportunities`. Each opportunity has `title`, `eyebrow`, `description`, and `subject`. The email address is controlled by the top-level `email` field. The first event opens by default.

**Image uploads:** The CMS configuration includes upload/select image fields for race logos, event logos, announcement images, and opportunity images. Media files are saved in `assets/uploads/`.
