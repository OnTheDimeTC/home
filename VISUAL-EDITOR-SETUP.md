# OTD Visual Editor Setup

This package adds Pages CMS to your existing GitHub Pages website. It does not change the public domain, site design, or deployment settings.

1. Copy the ZIP contents into the **root** of the `OnTheDimeTC/home` repository. Keep the existing `CNAME` file (`onthedimetiming.com`) if GitHub generated it; this package does not remove it.
2. Commit and push to `main` in GitHub Desktop.
3. Open https://app.pagescms.org and sign in with GitHub.
4. Install/authorize the Pages CMS GitHub App for `OnTheDimeTC/home` (select only this repository if desired).
5. Open the `home` repository and `main` branch. You'll see **Featured Races & Announcements** and **Get Involved - Event Opportunities**.
6. Save a small edit. Pages CMS commits the JSON update to GitHub; GitHub Pages deploys the change automatically.

## Editing
- **Featured races:** Add, remove, reorder, and update race entries in `content.json`.
- **What's New:** Edit headline, intro and announcement cards; now loads from `content.json`.
- **Pricing:** Edit packages and add-ons in `content.json`.
- **Get Involved:** Add new event dropdowns and edit sponsor/vendor opportunities in `opportunities.json`.
- **Images:** Upload files through Pages CMS media manager to `assets/uploads/`, then enter the corresponding `assets/uploads/your-image.png` path in an image field.

## Important
- GitHub Pages does not provide its own visual editor. Pages CMS is hosted at `app.pagescms.org`; do not expect a `/admin` page on your website.
- Content fields are visual forms, not drag-and-drop editing of the page layout. Layout and CSS remain code-managed.
- Never paste passwords, API keys, or sensitive private information into the CMS.
- Keep `.pages.yml` in the repository root and keep the domain's `CNAME` file.

## Uploading race logos and images
In Pages CMS, open Featured Races & Announcements or Get Involved. Select a race/event, click its image field, and upload or select a logo/photo. The file is stored in `assets/uploads/` and its path is saved in the JSON automatically. Announcement cards and individual opportunity cards also support optional images. PNG, JPG, and WebP are good choices; use transparent PNG for logos. Save the CMS form to publish via GitHub Pages.
