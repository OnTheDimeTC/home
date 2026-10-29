# On The Dime Timing — GitHub Pages site

This is a ready-to-publish static website. It does not require a build step, npm, or a server.

## Publish
1. Create a new GitHub repository (e.g. `otd-website`).
2. Upload **the files inside this folder** to the repository root, including the `assets` folder.
3. Go to **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. Open the GitHub Pages URL to verify the website before changing DNS.

## Update content without touching code
Edit `content.json` in GitHub's browser editor and commit the changes. `featuredRaces` controls homepage race cards. Add or remove race objects; set `image` to a local file like `assets/merriest-night.jpg` after uploading it, or to a publicly hosted image URL. `company` controls email, phone and social links.

## Connect live / past / upcoming results
In `content.json`, edit `results.live`, `results.past` and `results.upcoming`:
- `embedUrl`: the actual public URL of your hosted results viewer. This is displayed in an iframe.
- `openUrl`: the public results link to open in a new tab.
- `description`: text above the viewer.

**Important:** These are intentionally empty. The exact OTD Live URL(s) were not confirmed. Do not put private admin URLs here. Some hosts block iframe embedding using CSP or X-Frame-Options; if so, the 'Open full results' link still works. To embed properly, configure the results host to permit embedding from your domain. GitHub Pages cannot run a websocket server, API, or race-scoring backend; keep OTD Live hosted separately.

## Custom domain / DNS
1. In GitHub Pages settings, set Custom domain to `www.onthedimetiming.com`.
2. At your DNS provider, set `www` CNAME to `<your-github-username>.github.io` (replace placeholder).
3. For the root `onthedimetiming.com`, use GitHub's documented apex A/AAAA records, or forward the root to `www` using your DNS provider. Do not guess IP addresses.
4. Remove **conflicting** old Google Sites records only after the new Pages deployment works. DNS propagation takes time. Enable 'Enforce HTTPS' when available.
5. Review https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site for current instructions.

## Limitations
This is a functional redesign using verified homepage text, **not a pixel-exact clone** of the Google Sites layout. Google Sites visual assets and full subpage/navigation structure were not accessible in the development environment. Replace the placeholder OTD mark with your official logo and add your existing images for closer visual fidelity. The sample Merriest Night registration URL is a provisional link and must be checked before publishing.

## Preview locally
Run `python -m http.server 8000` inside the project directory and open `http://localhost:8000`. Opening index.html directly with file:// may prevent the JSON from loading.

## Connected results viewers

Live and upcoming: https://onthedimetc.github.io/live/

Historical: https://onthedimetc.github.io/historicalresults/

Both are configured in `content.json` and embedded as iframes. If a browser or hosting policy blocks framing, the **Open full results** link provides a reliable fallback. These are separate GitHub Pages sites and continue to manage their own data.


## Multi-page navigation (October 2026 update)
- `index.html`: homepage with links to results sections.
- `events.html`: featured events pulled from `content.json`.
- `live-results.html`: embeds the OTD Live site.
- `historical-results.html`: embeds the archive.
- `about.html` and `contact.html`: informational pages.
- The live and archive sites remain separately hosted; their iframe policies must allow embedding. Use the provided open-in-new-tab links if not.
- To add events or change results URLs, edit `content.json` and commit to GitHub.
