# Animated Profile

> Type your way to a stunning developer showcase.

## Demo

See the live animated resume in action:

- **Primary site** → [**me.hoelee.com**](https://me.hoelee.com)
- **GitHub Pages mirror** → [**hoelee.github.io/hoelee-profile**](https://hoelee.github.io/hoelee-profile/)

[![Live demo](https://img.shields.io/badge/demo-me.hoelee.com-0066cc)](https://me.hoelee.com)
[![GitHub Pages](https://img.shields.io/badge/demo-github.io-2ea44f)](https://hoelee.github.io/hoelee-profile/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](LICENSE)

An interactive animated resume template built with Vue 3 and Vite.

## Quick Start

1. Click **Use this template** on GitHub, or clone the repository:

   ```bash
   git clone https://github.com/hoelee/hoelee-profile.git
   cd hoelee-profile
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Edit `src/config/profile.js` and fill in your name, bio, skills, and contact information.

4. Start a local preview at <http://localhost:8080>:

   ```bash
   npm run dev
   ```

5. Create a production build in `dist/`:

   ```bash
   npm run build
   ```

6. Deploy `dist/` to Netlify, Vercel, GitHub Pages, or any static host.

## Typing Speed

Set `typingSpeed` in `src/config/profile.js` to control the milliseconds per character. `1` is fastest; `20` creates a slow, dramatic effect.

## Project Structure

| Path | Purpose |
| --- | --- |
| `src/App.vue` | Desktop animated profile |
| `src/Mobile.vue` | Mobile animated profile |
| `src/config/profile.js` | Personal details, Markdown, animation speed, and typed CSS |
| `src/main.js` | Responsive application entry point |
| `src/components/` | Resume, style, and thank-you editors |
| `src/assets/` | Reset stylesheet and static assets |
| `public/robots.txt` | SEO crawler directives |

## Deployment

| Platform | Approach |
| --- | --- |
| GitHub Pages | [hoelee.github.io/hoelee-profile](https://hoelee.github.io/hoelee-profile/) — auto-deploys via GitHub Actions on every push to `main`. |
| Netlify | Build with `npm run build` and publish `dist/`. |
| Vercel | Import the repository; Vite settings are detected automatically. |
| Static server | Upload the contents of `dist/` to any static web server. |

`public/robots.txt` is pre-included for SEO and is copied into the production build.

## Tech Stack

| Technology | Role |
| --- | --- |
| Vue 3 | UI framework |
| Vite | Development server and build tool |
| Prism.js | Syntax highlighting |
| marked.js | Markdown rendering |

## License

Licensed under [Apache-2.0](LICENSE).

## Credits

This project is inspired by and credits [jirengu-inc/animating-resume](https://github.com/jirengu-inc/animating-resume) — the original animated resume project by jirengu-inc.
