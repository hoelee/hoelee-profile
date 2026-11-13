# hoelee-profile

Personal profile and animated resume for **Lee Teong Hoe (Mr Hoelee)** — Full Stack Engineer · AI & Automation · DevOps.

**Live:** https://me.hoelee.com

[![Live](https://img.shields.io/badge/live-me.hoelee.com-0b4a6f)](https://me.hoelee.com)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](LICENSE)

## What this is

An animated developer profile: the page types its own stylesheet in a code editor on the left while
rendering the resume on the right, then finishes with a thank-you / contact panel.

It's a personal site — the content is my resume, not a reusable template. The *technique* is adapted
from [jirengu-inc/animating-resume](https://github.com/jirengu-inc/animating-resume) (Apache-2.0);
see Credits.

## Tech stack

| Technology | Role |
| --- | --- |
| Vue 3 | UI framework |
| Vite 6 | Dev server and build tool |
| Prism.js | Syntax highlighting in the code panel |
| marked | Markdown → HTML rendering |

## Project structure

| Path | Purpose |
| --- | --- |
| `src/App.vue` | Desktop layout — orchestrates the typewriter sequence |
| `src/Mobile.vue` | Mobile/tablet layout (used when viewport ≤ 900px) |
| `src/config/profile.js` | **All content lives here** — details, Markdown, animation speed, typed CSS |
| `src/components/StyleEditor.vue` | Left panel: highlighted, self-typing CSS |
| `src/components/ResumeEditor.vue` | Right panel: resume markdown → HTML |
| `src/components/ThankEditor.vue` | Footer: thank-you / contact panel |
| `src/main.js` | Entry point, picks desktop vs mobile |
| `src/assets/reset.css` | Reset + border-box baseline |
| `public/robots.txt` | Crawler directives (copied into the build) |

## Editing the content

Everything you'd want to change is in `src/config/profile.js`:

- `name`, `title` — identity and headline
- `typingSpeed` — ms per character (`1` = near-instant, `20` = slow and dramatic)
- `resumeMarkdown` — the resume body
- `thanksMarkdown` — the thank-you / contact panel
- `desktopStyles` / `mobileStyles` — **arrays** of CSS strings, typed in sequence

> **Note on the CSS arrays.** Each array is typed in order and every stage is *appended to the same
> injected `<style>` tag*. Because they all end up in one stylesheet, a later stage's shorthand
> (e.g. `margin: 0 auto`) overrides an earlier stage's longhand (`margin-top: 1em`). Keep the final
> visual values in the **last** stage of each array — that is what wins.

## Development

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

Requires Node ≥ 18 (built and tested on Node 24).

## Deployment

Source of truth: **Gitea** — `git.hoelee.com/hoelee/hoelee-profile` (mirrored to GitHub).

`me.hoelee.com` is served by an `nginx:alpine` container (`nginx-me.hoelee.com`) on the VPS at
`41.216.187.102`, behind Traefik. The container mounts the built site read-only:

| Host path | Container path |
| --- | --- |
| `/docker/web/me.hoelee.com/public` | `/var/www/html` |
| `/docker/web/me.hoelee.com/nginx/default.conf` | `/etc/nginx/conf.d/default.conf` |

To deploy a new build:

```bash
npm run build
rsync -av --delete dist/ root@41.216.187.102:/docker/web/me.hoelee.com/public/
```

Without SSH the same build can be pushed over the Portainer Docker API with a tar archive
(`PUT /api/endpoints/4/docker/containers/php-me.hoelee.com/archive?path=/var/www/html`) — that
container is the writable side of the mount. Remove stale `static/js/index-*.js` bundles in place;
do **not** delete and recreate the directory, because the read-only bind mount keeps pointing at the
old inode and nginx starts returning 403.

### Tor mirror

The same container is published as a Tor onion service — the unRaid `tor-server` maps
`hoeleeaiwowgndbxswegtdzoeupz7lkkechtqmurbmnpvwa4k3vyuyid.onion` to `41.216.187.102:10001`, which is
this nginx. There is no second copy of the site: one deploy updates clearnet and onion together.

### nginx config

`deploy/nginx/me.hoelee.com.conf` is the versioned copy of the live config (gzip on, immutable
caching for the hashed `static/` assets, SPA fallback to `index.html`). To apply:

```bash
scp deploy/nginx/me.hoelee.com.conf root@41.216.187.102:/docker/web/me.hoelee.com/nginx/default.conf
ssh root@41.216.187.102 'docker exec nginx-me.hoelee.com nginx -t && docker exec nginx-me.hoelee.com nginx -s reload'
```

The site is static — no PHP or database is used. The `php:9000` sidecar is a leftover from the shared
web template and is not needed by this site.

## Credits

Adapted from [jirengu-inc/animating-resume](https://github.com/jirengu-inc/animating-resume) by
jirengu-inc — the original animated resume project.

## License

[Apache-2.0](LICENSE).
