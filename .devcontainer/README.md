# HustleTech GitHub Pages – Dev Container

> **A professional, elegant, and developer-centric environment for React static sites.**

---

## 🚀 Quick Start

1. **Open in VS Code**
2. Press `Ctrl+Shift+P` → `Dev Containers: Reopen in Container`
3. Wait for the environment to be ready
4. Use npm commands or VS Code tasks for all development needs

---

## 🧭 Philosophy

- **No auto-run**: The container is your dev environment, not a runtime.
- **Manual, explicit, and safe**: You control when to build, test, run, or deploy.
- **React + Vite ready**: Modern React development with hot reload and fast builds.
- **GitHub Pages optimized**: Perfect setup for static site deployment.
- **Zero surprises**: No hidden scripts, no magic. Everything is transparent and documented.

---

## 🛠️ Main Commands (npm)

| Command | Description |
|---------|-------------|
| `npm create vite@latest . -- --template react` | Initialize React project |
| `npm install` | Install dependencies |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (static files) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |

All these are also available as VS Code tasks (⇧⌘P → `Tasks: Run Task`).

---

## 🧩 VS Code Integration

- **Tasks**: All npm commands are mapped as VS Code tasks for one-click execution.
- **Extensions**: React, TypeScript, ESLint, Prettier, and more are pre-installed.
- **Formatting & Linting**: Automatic, using Prettier and ESLint.
- **Hot Reload**: Instant feedback during development.

---

## 🌐 Development Servers

| Service | Host Port | Container Port | Status | Purpose |
|---------|-----------|----------------|--------|---------|
| Vite Dev | 3000 | 3000 | Manual start | Development with HMR |
| Vite Preview | 4173 | 4173 | Manual start | Production preview |

> Use `npm run dev` to start the development server with hot module replacement.

---

## 🏗️ Project Structure

```
hustletech.github.io/
├── .devcontainer/              # Development container configuration
│   ├── docker/                 # Dockerfiles
│   │   └── devcontainer.Dockerfile # Main development container
│   ├── docker-compose.yaml     # Service orchestration
│   ├── devcontainer.json      # VS Code dev container config
│   ├── .env                   # Environment variables
│   └── README.md              # This documentation
├── src/                       # React source code
│   ├── components/            # Reusable React components
│   ├── pages/                 # Page components
│   ├── assets/               # Static assets (images, etc.)
│   ├── App.jsx               # Main App component
│   └── main.jsx              # React entry point
├── public/                    # Public static files
├── dist/                      # Built static files (GitHub Pages serves from here)
├── package.json              # Node.js dependencies and scripts
├── vite.config.js           # Vite configuration
├── index.html               # HTML template
├── CNAME                    # Custom domain configuration
└── README.md                # Project documentation
```

---

## 🚀 GitHub Pages Deployment

### Option A - Manual Deploy
```bash
npm run build
git add dist/
git commit -m "Deploy: Update static files"
git push origin main
```

### Option B - GitHub Actions (Recommended)
We'll set up automated deployment that:
1. Detects changes in React code
2. Builds static files automatically
3. Deploys to GitHub Pages
4. Preserves your custom domain (`hustletech.dev`)

---

## 🎯 Development Workflow

1. **Start Development**: `npm run dev`
2. **Edit React Components**: Hot reload will update instantly
3. **Preview Production Build**: `npm run preview`
4. **Build for Deployment**: `npm run build`
5. **Deploy**: Push to GitHub (manual or automatic)

---

## 💡 Tips & Best Practices

- **Hot Reload**: Development server automatically reloads on file changes
- **Static Assets**: Place images and files in `public/` or `src/assets/`
- **Components**: Keep components modular and reusable
- **Styling**: Use CSS modules, styled-components, or Tailwind CSS
- **Build Optimization**: Vite automatically optimizes for production

---

## 🔧 Configuration Files

- **`.env`**: Environment variables for development
- **`vite.config.js`**: Vite build configuration
- **`package.json`**: Dependencies and npm scripts
- **`devcontainer.json`**: VS Code development container settings

---

## 🎨 Styling Options

The setup supports multiple styling approaches:
- **Plain CSS**: Traditional CSS files
- **CSS Modules**: Scoped CSS classes
- **Tailwind CSS**: Utility-first CSS framework
- **Styled Components**: CSS-in-JS solution

Choose what fits your project best!
