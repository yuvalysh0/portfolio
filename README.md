<div align="center">

# 🚀 Yuval Shalom - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

**[🌐 Live Demo](https://yuvalshalom.com)** • **[📧 Contact](mailto:yuvalysh0@gmail.com)** • **[💼 LinkedIn](https://linkedin.com/in/yuvalshalom)**

</div>

---

## 📖 About

A modern, performant, and fully responsive portfolio website showcasing my journey as a **Frontend Developer** with 4 years of experience. Built with cutting-edge web technologies, this portfolio demonstrates my expertise in React, Angular, TypeScript, and modern web development practices.

**Key Highlights:**

- ⚡ **Lightning-fast** performance with Next.js 14 App Router
- 🎨 **Beautiful animations** powered by Framer Motion
- 📱 **Fully responsive** design across all devices
- 🌙 **Dark mode** support with theme persistence
- ♿ **Accessible** and SEO-optimized
- 🎯 **Real-time GitHub activity** integration
- 🎭 **Easter eggs** for interactive user experience

---

## ✨ Features

### 🏠 **Hero Section**

- Dynamic introduction with animated text
- Professional profile picture
- Quick access to social links and resume

### 👨‍💻 **About Me**

- Professional background and expertise
- Tech stack visualization with interactive cards
- Years of experience and key skills

### 📊 **Statistics Dashboard**

- Live GitHub contribution stats
- Project completion metrics
- Years of experience counter
- Technologies mastered

### 💼 **Experience Timeline**

- Work history at LSports and other companies
- Detailed project descriptions
- Technologies used per role
- Achievements and responsibilities

### 🎯 **Projects Showcase**

- Featured projects with live demos
- GitHub integration
- Tech stack tags
- Project descriptions and outcomes

### 📈 **GitHub Activity**

- Real-time contribution graph
- Recent repository updates
- Commit activity visualization

### 💬 **Testimonials**

- Client and colleague recommendations
- Professional endorsements
- Rating system

### 📬 **Contact Form**

- Form validation with React Hook Form
- Real-time toast notifications
- Direct email integration
- Social media links

---

## 🛠️ Tech Stack

### **Core**

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library

### **Styling**

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Tailwind component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### **UI Components**

- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[FontAwesome](https://fontawesome.com/)** - Brand icons
- **[React Scroll](https://www.npmjs.com/package/react-scroll)** - Smooth scrolling
- **[React Scroll Parallax](https://react-scroll-parallax.damnthat.tv/)** - Parallax effects

### **Forms & Notifications**

- **[React Hook Form](https://react-hook-form.com/)** - Form validation
- **[React Hot Toast](https://react-hot-toast.com/)** - Toast notifications

### **Optimization**

- **[Sharp](https://sharp.pixelplumbing.com/)** - Image optimization
- Server-side rendering (SSR)
- Lazy loading and code splitting

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yuvalysh0/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_USERNAME=yuvalysh0
# Add other environment variables as needed
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── NavBar.tsx
│   │   │   └── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutMe.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Statistics.tsx
│   │   ├── GitHubActivity.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── EasterEggs.tsx
│   │   └── ...
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/
│   └── assets/              # Images and static files
├── utils/
│   ├── github.ts            # GitHub API utilities
│   └── testimonials.ts      # Testimonials data
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🎨 Key Components

### Navigation Bar

- Responsive mobile menu
- Smooth scroll navigation
- Theme toggle
- Social links

### Interactive Elements

- **Easter Eggs**: Hidden interactive surprises
- **Parallax Effects**: Smooth scroll animations
- **Loading Screen**: Professional loading animation
- **Back to Top**: Quick navigation button

### Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for heavy components
- Code splitting for faster initial load
- SEO optimization with metadata

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)
- 🖥️ Large screens (1536px+)

---

## 🚀 Deployment

The portfolio is deployed on **Vercel** with automatic deployments from the `main` branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yuvalysh0/portfolio)

Or manually:

```bash
npm run build
npm run start
```

---

## 🎯 Performance

- ⚡ **Lighthouse Score**: 95+ on all metrics
- 🚀 **First Contentful Paint**: < 1.5s
- ⚡ **Time to Interactive**: < 2s
- 📦 **Bundle Size**: Optimized with code splitting

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Yuval Shalom** - Frontend Developer

- 🌐 Website: [yuvalshalom.com](https://yuvalshalom.com)
- 📧 Email: [ys@yuvalshalom.net](mailto:ys@yuvalshalom.net)
- 💼 LinkedIn: [linkedin.com/in/yuvalshalom](https://linkedin.com/in/yuvalshalom)
- 🐙 GitHub: [github.com/yuvalysh0](https://github.com/yuvalysh0)
- 𝕏 Twitter: [x.com/yuvalysh0](https://x.com/yuvalysh0)

---

<div align="center">

### ⭐ If you like this project, please consider giving it a star!

**Made with ❤️ by [Yuval Shalom](https://yuvalshalom.com)**

</div>
