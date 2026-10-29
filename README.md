# On The Dime Timing – updated GitHub Pages website

Upload the **contents** of this ZIP to the root of the `website` repository, preserving the `assets/` directory.

- `services.html` now contains the full pricing cards and add-ons directly in the HTML, so pricing is visible even when `content.json` fails to load. Update prices in `services.html` (and `content.json` if you use the configuration).
- `assets/` contains the OTD and Merriest Night artwork with filenames matching the HTML.
- Instagram is linked to `@onthedimetiming` as listed on the event registration page. The Facebook button currently opens a Facebook search because the exact official page URL was not verifiable; replace that URL with your official page URL.
- All regular pages have a navy/orange branded transition when following internal links, plus an OTD favicon.
- The live and historical results pages retain full-screen iframes and only a back-to-home bar. An iframe cannot conceal the GitHub origin from browser developer tools, and embedding still depends on the results apps' frame policies.
- Test on `https://onthedimetc.github.io/website/` before moving your domain.


## Clean URLs
Upload all folders (`home/`, `events/`, `services/`, `about/`, `contact/`, `live-results/`, `historical-results/`) and `assets/` with their structure intact. GitHub Pages serves `/website/events` from `events/index.html` (may normalize to `/events/`). The `<base href="/website/">` tag keeps assets and links working on nested routes. Root `/website/` remains the homepage. The old `.html` routes redirect to clean paths. Facebook links point to the official provided profile.
