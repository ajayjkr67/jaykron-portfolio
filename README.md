# 🚀 JayKron Portfolio

A modern, interactive, and responsive portfolio website showcasing Ajay Jaykar's skills and experience as a Frontend UI Developer.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and visually appealing interface
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🌙 **Dark/Light Mode** - Toggle between themes with smooth transitions
- ✨ **Interactive Animations** - Powered by Framer Motion for engaging UX
- ⚡ **Performance Optimized** - Built with Vite for fast loading
- 🔧 **TypeScript** - Type-safe development with excellent DX
- ♿ **Accessible** - Following web accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v3.4 with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📱 Portfolio Sections

1. **🏠 Hero Section** - Introduction with animated profile and CTAs
2. **👨‍💻 About Me** - Personal journey, skills, and professional highlights
3. **🛠️ Skills** - Interactive skill cards with proficiency levels
4. **💼 Projects** - Featured projects with live demos and source code
5. **📈 Experience** - Professional timeline with detailed work history
6. **🎓 Education** - Academic background and qualifications
7. **🏆 Certifications** - Professional certifications with provider logos
8. **📞 Contact** - Contact form and social media integration
9. **🔗 Footer** - Additional links and scroll-to-top functionality

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ajayjkr67/jaykron-portfolio.git
   cd jaykron-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation and theme toggle
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects gallery
│   ├── Experience.tsx  # Work experience timeline
│   ├── Education.tsx   # Education section
│   ├── Certifications.tsx # Certifications display
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer with links
├── data/
│   └── portfolio.ts    # Portfolio data and content
├── hooks/
│   └── useTheme.ts     # Theme management hook
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization

### Personal Information
Update your details in `src/data/portfolio.ts`:
- Personal info (name, title, bio, contact details)
- Skills and proficiency levels
- Projects with descriptions and links
- Work experience and education
- Certifications and achievements

### Styling
- Modify colors and themes in `tailwind.config.js`
- Custom CSS classes are defined in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Images
Replace placeholder images with your own:
- Profile picture
- Project screenshots
- Certification logos

## 🌟 Key Features Explained

### Theme System
- Automatic system preference detection
- Manual toggle with smooth transitions
- Persistent theme selection using localStorage

### Animations
- Scroll-triggered animations using Framer Motion
- Hover effects and micro-interactions
- Smooth page transitions and loading states

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized typography and spacing

## 🚀 Deployment

### Recommended Hosting Platforms

1. **Vercel** (Recommended)
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel
   ```

2. **Netlify**
   - Connect your GitHub repository
   - Build command: `pnpm build`
   - Publish directory: `dist`

3. **GitHub Pages**
   ```bash
   # Build and deploy
   pnpm build
   # Upload dist/ folder to gh-pages branch
   ```

## 📊 Performance

- ⚡ **Fast Loading** - Optimized with Vite bundling
- 🎯 **SEO Ready** - Proper meta tags and structure
- 📱 **Mobile Optimized** - Responsive design and touch-friendly
- ♿ **Accessible** - WCAG compliant components

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Ajay Jaykar** - Frontend UI Developer

- 📧 Email: [jaykron.dev@gmail.com](mailto:jaykron.dev@gmail.com)
- 💼 LinkedIn: [ajay-jaykar61](https://www.linkedin.com/in/ajay-jaykar61)
- 🐙 GitHub: [ajayjkr67](https://github.com/ajayjkr67)
- 📘 Facebook: [JayKron.Dev](https://www.facebook.com/JayKron.Dev)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Bundled with [Vite](https://vitejs.dev/)

---

⭐ **If you found this project helpful, please give it a star on GitHub!**

**Made with ❤️ by Ajay Jaykar**
