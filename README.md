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
