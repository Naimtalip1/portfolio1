# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 14**: React framework with built-in optimizations
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Latest features and hooks
- **Responsive Design**: Mobile-first approach

## 📋 Features

- ✅ Modern, professional design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Hero section
- ✅ About me section
- ✅ Skills showcase
- ✅ Projects portfolio
- ✅ Experience/Work history
- ✅ Contact section
- ✅ SEO optimized
- ✅ Quick deployment to Vercel

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

## 📝 Customization Guide

### Update Your Information

#### In `src/app/page.jsx`:
1. **Hero Section**: Change "Your Name" and subtitle
2. **About Section**: Replace placeholder text with your bio
3. **Skills**: Update the `skills` array with your technical skills
4. **Projects**: Update the `projects` array with your projects
5. **Experience**: Update the `experience` array with your work history
6. **Contact**: Add your email, LinkedIn, and GitHub links

#### In `src/components/Navbar.jsx`:
1. Update navigation links if needed
2. Customize colors in `tailwind.config.js`

### Add Your Photo
1. Place your photo in `public/` folder
2. Update the "About" section with an Image component:
```jsx
import Image from 'next/image'
<Image 
  src="/your-photo.jpg" 
  alt="Your Name"
  width={400}
  height={400}
  className="rounded-lg"
/>
```

### Customize Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#2D3436',      // Dark color
  accent: '#0984E3',       // Blue accent
  light: '#F5F6FA',        // Light background
}
```

## 🎨 Design Sections

1. **Navigation Bar**: Fixed header with smooth scrolling
2. **Hero**: Eye-catching landing section
3. **About**: Personal introduction
4. **Skills**: Grid layout of technical skills
5. **Projects**: Featured portfolio projects
6. **Experience**: Timeline of work history
7. **Contact**: Call-to-action with links

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the `.next` folder to Netlify
```

### Deploy to GitHub Pages
1. Update `next.config.js` for static export
2. Push to GitHub
3. Enable GitHub Pages in repository settings

## 📧 Contact Integration

To add email functionality, consider:
- **Formspree**: Free form backend
- **SendGrid**: Email delivery
- **Nodemailer**: Node.js email service

Example with Formspree:
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  {/* form fields */}
</form>
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📄 License

This project is open source and available for personal and commercial use.

---

**Created with ❤️ - Feel free to customize and deploy!**
