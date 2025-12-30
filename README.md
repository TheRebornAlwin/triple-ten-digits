# Premium Marketing Agency Website

A cutting-edge, luxury marketing agency website built with modern web technologies. Designed to stand out from typical agency sites with premium aesthetics, smooth animations, and psychological optimization.

## Features

- 🎨 **Luxury Design System** - Deep blacks, charcoal grays, and gold accents for premium feel
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Framer Motion for sophisticated micro-interactions
- 📱 **Fully Responsive** - Optimized for all devices
- 🧠 **Psychologically Optimized** - Designed using luxury web design principles
- 🎯 **Conversion-Focused** - Clear CTAs and strategic user journey

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework with custom luxury theme
- **Framer Motion** - Production-ready animation library
- **React Intersection Observer** - Scroll-triggered animations

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  'luxury-black': '#0A0A0A',
  'luxury-charcoal': '#1A1A1A',
  'luxury-gold': '#D4AF37',
  // ... more colors
}
```

### Content

- **Logo**: Update the logo URL in `src/components/Header.jsx` and `src/components/Footer.jsx`
- **Case Studies**: Edit portfolio data in `src/components/Portfolio.jsx`
- **Testimonials**: Update client testimonials in `src/components/Testimonials.jsx`
- **Contact Links**: Update Calendly link in `src/components/CTA.jsx`
- **Email**: Update contact email in `src/components/Footer.jsx`

### SEO

Update meta tags in `index.html` for search engine optimization.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with logo and CTA
│   │   ├── Hero.jsx            # Hero section
│   │   ├── WhatWeDo.jsx        # Services section
│   │   ├── HowWereDifferent.jsx # Differentiation section
│   │   ├── Portfolio.jsx       # Case studies
│   │   ├── WhoWeWorkWith.jsx   # Target audience
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   ├── Process.jsx         # How we work
│   │   ├── About.jsx           # About/philosophy
│   │   ├── CTA.jsx             # Final call-to-action
│   │   └── Footer.jsx          # Footer with links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── public/
│   └── favicon.svg             # Site favicon
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## Design Philosophy

This website is built on luxury web design principles:

- **Restraint over excess** - Generous white space, clean layouts
- **Scarcity signals** - Selective client language, exclusivity cues
- **Dopamine triggers** - Scroll reveals, smooth animations, visual rewards
- **Trust through quality** - Premium aesthetics, attention to detail
- **Clear hierarchy** - Bold headlines, obvious CTAs

## Performance

- Optimized bundle size with code splitting
- Lazy loading for images and components
- Smooth 60fps animations
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.
