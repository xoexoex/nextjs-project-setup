# NEWMT2 Server Presentation Website

A beautiful, responsive website clone of newmt2.com/presentation built with Next.js, TypeScript, and Tailwind CSS featuring a stunning red, black, and gold color scheme.

## Features

- **Responsive Design**: Mobile-friendly with hamburger menu navigation
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Color Scheme**: Dramatic red, black, and gold theme perfect for medieval fantasy gaming
- **Comprehensive Content**: 
  - Hero section with country flags
  - Server features showcase
  - Game systems overview
  - Server statistics
  - Contact information

## Quick Setup

1. **Extract the zip file** to your desired location
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** and visit `http://localhost:3000`

## Build for Production

To create a production build:

```bash
npm run build
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify

### Option 3: Static Export
Add to `next.config.ts`:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

Then run:
```bash
npm run build
```

## File Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main presentation page
│   ├── components/ui/       # shadcn/ui components
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## Customization

- **Colors**: Modify the color scheme in `src/app/page.tsx`
- **Content**: Update text and images in the same file
- **Styling**: Adjust Tailwind classes or add custom CSS

## Technologies Used

- Next.js 15.3.2
- React 19
- TypeScript
- Tailwind CSS 4.1.6
- shadcn/ui components

## Support

For any issues or questions, refer to the Next.js documentation at https://nextjs.org/docs

---

**Created by**: AI Assistant
**Version**: 1.0.0
**Last Updated**: 2024
