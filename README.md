# Timothy Khalayi - React Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Showcasing skills, projects, and experience as a Full Stack Developer with a sleek, professional design.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for instant page loads and HMR
- 🎨 **Tailwind CSS** - Modern utility-first styling with responsive design
- 📱 **Mobile First** - Fully responsive design for all devices
- 🧩 **Component Based** - Modular React components for easy customization
- 🎭 **Smooth Animations** - Engaging micro-interactions and transitions
- 📍 **Smooth Navigation** - Seamless scroll-to-section navigation
- 🌙 **Dark Mode Ready** - Professional dark theme with accent colors
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🔍 **SEO Optimized** - Meta tags and structured content
- 📦 **Production Ready** - Optimized build with TypeScript support

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Package Manager** | pnpm |

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation & mobile menu
│   │   ├── Hero.tsx            # Hero section with intro
│   │   ├── About.tsx           # About section with stats
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Contact.tsx         # Contact form & info
│   │   └── Footer.tsx          # Footer
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React DOM entry point
│   ├── index.css               # Tailwind CSS setup
│   └── App.css                 # Component-specific styles
├── public/
│   ├── timo.jpg                # Profile image
│   ├── project1.jpg            # Project images
│   ├── project2.jpg
│   └── brand.jpg
├── index.html                  # HTML template
├── tailwind.config.ts          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

## 📦 Installation & Setup

### Prerequisites
- **Node.js** 16+ or **pnpm** 8+
- A modern web browser

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies with pnpm**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:5173` in your browser

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   ```

## 🎨 Customization Guide

### Update Your Information

#### 1. **Header & Logo** (`src/components/Header.tsx`)
```tsx
<span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
  Your Name
</span>
```

#### 2. **Hero Section** (`src/components/Hero.tsx`)
- Update your name, title, and introduction
- Replace profile image path

#### 3. **About Section** (`src/components/About.tsx`)
- Update biographical text
- Modify statistics (projects, experience, clients)

#### 4. **Skills** (`src/components/Skills.tsx`)
```tsx
const skills = [
  { category: 'Your Category', items: ['Skill 1', 'Skill 2'] },
  // Add more skills...
];
```

#### 5. **Projects** (`src/components/Projects.tsx`)
```tsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    image: '/project.jpg',
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/...',
    live: 'https://...'
  },
  // Add more projects...
];
```

#### 6. **Contact** (`src/components/Contact.tsx`)
- Update email address
- Add social media links
- Configure form submission (email service, API, etc.)

### Styling Customization

#### Colors
Edit `tailwind.config.ts`:
```tsx
theme: {
  extend: {
    colors: {
      primary: {
        400: '#your-color',
        600: '#your-color',
      },
      dark: {
        900: '#your-dark-color',
      },
    },
  },
}
```

#### Fonts
Modify font family in `tailwind.config.ts` or `index.css`

#### Animations
Add custom animations in `tailwind.config.ts`:
```tsx
keyframes: {
  'fade-in': { /* your animation */ },
}
```

## 🚀 Deployment

### Deploy to Netlify
```bash
pnpm build
# Drag and drop the dist/ folder to Netlify
```

### Deploy to Vercel
```bash
pnpm install -g vercel
vercel
```

### Deploy to GitHub Pages
1. Update `vite.config.ts`:
```tsx
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```
2. Push to GitHub and enable Pages in repository settings

### Deploy to Traditional Hosting
1. Run `pnpm build`
2. Upload the `dist/` folder to your web server via FTP

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start dev server with HMR

# Production
pnpm build            # Build for production
pnpm preview          # Preview production build locally

# Code Quality
pnpm lint             # Run ESLint
pnpm lint --fix       # Fix linting issues
```

## 📱 Responsive Design

The site is optimized for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- ✅ Code splitting with Vite
- ✅ Image optimization recommendations
- ✅ Lazy loading components (can be added)
- ✅ Minified CSS with Tailwind
- ✅ Fast refresh with HMR

## 📚 Components Documentation

### Header Component
- Responsive navigation
- Mobile hamburger menu
- Smooth scroll functionality

### Hero Component
- Large introductory section
- Call-to-action buttons
- Animated elements

### Skills Component
- Organized skill categories
- Hover effects
- Easy to expand

### Projects Component
- Project cards with images
- Technology badges
- GitHub and live demo links

### Contact Component
- Contact form
- Contact information
- Social media links

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the **MIT License**. Feel free to use this as a template for your own portfolio!

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

## 🆘 Troubleshooting

### Port 5173 already in use
```bash
pnpm dev -- --port 3000
```

### Tailwind styles not working
- Ensure `tailwind.config.ts` paths are correct
- Run `pnpm install` and clear node_modules if needed
- Restart dev server

### Build errors
```bash
pnpm install
rm -rf dist/
pnpm build
```

## 📧 Contact

**Timothy Khalayi**
- 🌐 Portfolio: [Your URL]
- 💼 LinkedIn: [Your LinkedIn]
- 🐙 GitHub: [Your GitHub]
- 📧 Email: timothy@example.com

---

**Happy Coding! 🚀**

Last Updated: 2026  
Version: 2.0 (React + Vite + Tailwind)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
