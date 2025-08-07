# LinuxWale - Next.js

A modern, responsive website for the LinuxWale community built with Next.js, TypeScript, and Tailwind CSS.

## 🐧 About LinuxWale

LinuxWale is a community passionately dedicated to promoting Open Source Software like Linux. Whether you're a beginner seeking education alongside peers or an experienced user ready to share knowledge, LinuxWale is your go-to space for embracing the power of FOSS and Linux.

**Why windows, when we have doors?**

## 🚀 Features

- **Modern Next.js Architecture**: Built with Next.js 15 and React 19
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with custom CSS
- **Animated Terminal Welcome**: Interactive terminal experience for first-time visitors
- **Animated Title**: Dynamic font-switching animation on the homepage
- **SEO Optimized**: Proper meta tags and structured data
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Google Fonts (Fira Code, Press Start 2P, VT323, Fira Mono)
- **Images**: Next.js Image optimization
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AnimatedTitle.tsx
│   ├── ClientScripts.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── WelcomeTerminal.tsx
public/
└── images/
    ├── LW_B_on_W.webp
    └── LW_W_on_B.webp
```

## 🎨 Design Features

- **Dark Theme**: Terminal-inspired dark color scheme
- **Green Accent**: Signature Linux green (#00ff00) throughout
- **Retro Fonts**: Press Start 2P for headings, Fira Code for body text
- **Glowing Effects**: CSS text-shadow and box-shadow effects
- **Discord-Style Layout**: Alternating content sections
- **Smooth Animations**: Intersection Observer for scroll animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linuxwale-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

- **Home** (`/`): Hero section with animated title and community information
- **About** (`/about`): Mission, vision, values, and community information
- **Services** (`/services`): Education, support, consulting, and resources
- **Contact** (`/contact`): Community channels, social media, and FAQ

## 🎯 Key Components

### WelcomeTerminal
Interactive terminal experience for first-time visitors with commands:
- `echo namaste world`
- `cd /Home`

### AnimatedTitle
Dynamic title animation with random font switching and color changes.

### Navbar
Responsive navigation with active page highlighting.

### Footer
Community links and resources.

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
    --bg-primary: #000000;
    --text-primary: #ffffff;
    --accent-green: #00ff00;
    /* ... more variables */
}
```

### Fonts
Update font imports in `globals.css` and component styles.

### Content
Edit page content in respective `page.tsx` files.

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
The app is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- Any Node.js hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐧 Join LinuxWale

- **Discord**: [Join our server](#)
- **Telegram**: [Join our group](#)
- **Reddit**: [r/LinuxWale](#)
- **GitHub**: [Contribute to our projects](#)

---

**We love penguins 🐧**

*Why windows, when we have doors?*# LinuxWaleWebsite
