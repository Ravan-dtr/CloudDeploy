# ☁️ CloudDeploy

CloudDeploy is a modern DevOps automation platform built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It showcases cloud infrastructure management, CI/CD pipelines, Kubernetes orchestration, server monitoring, and deployment workflows through a clean, responsive, and interactive user interface.

## 📁 Project Structure

```text
clouddeploy/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── landing/        # Landing page sections
│   │   └── ui/             # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── routes/             # Application routes
│   ├── router.tsx          # Router configuration
│   ├── styles.css          # Global styles
│   └── main.tsx            # Application entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/clouddeploy.git
cd clouddeploy
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Framework: **Vite** (auto-detected).
4. Click **Deploy**.

### Deploy on Netlify

1. Connect your GitHub repository.
2. Set the build command:

```bash
npm run build
```

3. Set the publish directory:

```text
dist
```

4. Deploy the site.
