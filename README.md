# Mr. Hoelee Resume - Animated Resume

This project is inspired by: [Animating Resume](https://github.com/jirengu-inc/animating-resume)
Deep respect to the original author.

An interactive animated resume built with Vue 3 and Vite that showcases your professional profile in a unique and engaging way. Features responsive design with separate mobile and desktop experiences.

## Prerequisites

- **Node.js**: >= 18.0.0 ([Download](https://nodejs.org/))
- **npm**: >= 9.0.0
- **Git**: [Download](https://git-scm.com/)

## Usage

1. Clone this repository:

```bash
git clone <your-repository-url>
cd hoelee-profile2
npm install
npm run dev
```

2. The development server will automatically open in your browser at `http://localhost:8080`

## Build and Deployment

### Building for Production

1. Build the project:

```bash
npm run build
```

2. The built files will be generated in the `dist/` directory

### Deployment Options

#### Option 1: Static Web Server

Upload the contents of the `dist/` directory to any static web server (Netlify, Vercel, GitHub Pages, etc.)

#### Option 2: Preview Locally

Test the production build locally:

```bash
npm run preview
```

## Development

- `npm run dev` - Start development server with hot reload (opens at <http://localhost:8080>)
- `npm run build` - Build for production (outputs to `dist/` directory)
- `npm run preview` - Preview production build locally

## Project Structure

```text
src/
├── App.vue          # Desktop version of the resume
├── Mobile.vue       # Mobile-optimized version
├── main.js          # Entry point with responsive logic
├── assets/          # Stylesheets and static assets
│   └── reset.css    # CSS reset styles
└── components/      # Resume components
    ├── ResumeEditor.vue  # Resume content editor
    ├── StyleEditor.vue   # Style/CSS editor
    └── ThankEditor.vue   # Thank you section
```

## Features

- **Responsive Design**: Automatically switches between desktop and mobile versions based on screen width (500px breakpoint)
- **Interactive Animation**: Type-writer effect for resume content
- **Live Preview**: Real-time preview of resume as it's being "typed"
- **Modern Stack**: Built with Vue 3 composition API and Vite for fast development
- **Syntax Highlighting**: Integrated Prism.js for code highlighting
- **Markdown Support**: Uses marked.js for markdown parsing

## Customization

### Personalizing Your Resume

1. **Content**: Edit the resume content in `src/components/ResumeEditor.vue`
2. **Styling**: Modify CSS styles in `src/components/StyleEditor.vue`
3. **Layout**: Adjust the main layout in `src/App.vue` (desktop) or `src/Mobile.vue` (mobile)
4. **Title**: Update the page title in `index.html`

### Configuration

- **Port**: Development server port is set to 8080 in `vite.config.js`
- **Build Output**: Configured to output to `dist/` directory with organized asset structure
- **Aliases**: Path aliases are set up for easy imports (`@`, `src`, `assets`, `components`)

## Technologies Used

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Vite** - Next-generation frontend build tool
- **Prism.js** - Syntax highlighting library
- **Marked** - Markdown parser and compiler
- **CSS3 Animations** - Smooth typing animations and transitions
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

## Browser Support

This project uses modern JavaScript features and is compatible with:

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## License

This project is for personal/educational use. Please respect the original author's work.
