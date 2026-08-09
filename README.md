# Animated Profile

> Type your way to a stunning developer showcase.

[![Live demo](https://img.shields.io/badge/demo-me.hoelee.com-0066cc)](https://me.hoelee.com)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](LICENSE)

An interactive animated resume template built with Vue 3 and Vite. It is inspired by and credits [jirengu-inc/animating-resume](https://github.com/jirengu-inc/animating-resume).

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
| GitHub Pages | The included GitHub Actions workflow deploys every push to `main`. |
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

Inspired by the original [animating-resume](https://github.com/jirengu-inc/animating-resume) project by jirengu-inc.
