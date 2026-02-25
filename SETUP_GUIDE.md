# Portfolio Setup & Customization Guide

## 🚀 Quick Start

Follow these steps to get your portfolio up and running:

### Step 1: Install Dependencies
```bash
cd /home/naim/Desktop/Portfolio
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Step 3: Customize with Your Information

#### 📝 Update Personal Information

**File:** `src/data/portfolio.js`
```javascript
personal: {
  name: 'Your Name',
  title: 'Your Professional Title',
  bio: 'Your bio here',
  email: 'your.email@example.com',
}
```

#### 🎨 Update Hero Section

**File:** `src/app/page.jsx` (Search for "Hero Section")
- Change your name and profession
- Update the subtitle
- Modify the call-to-action text

#### 📋 Update About Section

**File:** `src/app/page.jsx` (Search for "About Section")
- Replace placeholder text with your biography
- Add a professional photo to `public/` folder
- Import and use the Image component

#### 🛠 Update Skills

**File:** `src/app/page.jsx` (Search for `const skills`)
```javascript
const skills = [
  'Your Skill 1',
  'Your Skill 2',
  'Your Skill 3',
  // Add more skills
]
```

#### 💼 Update Projects

**File:** `src/app/page.jsx` (Search for `const projects`)
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    link: 'https://project-link.com'
  },
  // Add more projects
]
```

#### 🏢 Update Experience

**File:** `src/app/page.jsx` (Search for `const experience`)
```javascript
const experience = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'MM/YYYY - Present',
    description: 'Your responsibilities'
  },
  // Add more positions
]
```

#### 📞 Update Contact Links

**File:** `src/app/page.jsx` (Search for "Contact Section")
- Update email link
- Add LinkedIn profile URL
- Add GitHub profile URL
- Add any other social links

## 🎨 Customize Colors

**File:** `tailwind.config.js`
```javascript
colors: {
  primary: '#2D3436',    // Main dark color
  accent: '#0984E3',     // Highlight color
  light: '#F5F6FA',      // Light background
}
```

Popular color combinations:
- **Tech Blue**: primary: '#1E3A5F', accent: '#00D9FF'
- **Dark Purple**: primary: '#2C1B47', accent: '#A855F7'
- **Elegant Black**: primary: '#0F0F1E', accent: '#FF6B6B'

## 📸 Add Your Photo

1. Save your photo to `public/` folder (e.g., `public/profile.jpg`)
2. Update the About section in `src/app/page.jsx`:
```jsx
import Image from 'next/image'
// In the About section, replace the placeholder div with:
<Image 
  src="/profile.jpg" 
  alt="Your Name"
  width={400}
  height={400}
  className="rounded-lg shadow-lg"
/>
```

## 🚀 Deployment

### Option 1: Deploy to Vercel (Easiest)
```bash
npm i -g vercel
vercel
```
Follow the prompts to connect your GitHub and deploy.

### Option 2: Deploy to Netlify
```bash
npm run build
# Drag and drop the `.next` folder to Netlify
```

### Option 3: Deploy to GitHub Pages
Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export'
}
module.exports = nextConfig
```

Then:
```bash
npm run build
# Push to GitHub and enable Pages in settings
```

## 🔗 Add Social Media Links

Update navbar and footer links in:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`

Replace the `#` href values with your actual profile URLs:
- GitHub: `https://github.com/your-username`
- LinkedIn: `https://linkedin.com/in/your-username`
- Twitter: `https://twitter.com/your-username`

## ✨ Additional Features to Consider

### 1. Blog Section
Create a `/blog` route with your articles:
```bash
mkdir src/app/blog
```

### 2. Dark Mode Toggle
Install `next-themes` and add dark mode support.

### 3. Contact Form
Integrate Formspree or SendGrid for email submissions.

### 4. Analytics
Add Google Analytics or Vercel Analytics.

### 5. Resume PDF
Add a downloadable resume link:
```jsx
<a href="/resume.pdf" download>Download Resume</a>
```

## 🆘 Troubleshooting

**Module not found errors?**
- Run `npm install` again
- Delete `node_modules` and `.next` folders
- Clear npm cache: `npm cache clean --force`

**Styling not showing?**
- Ensure Tailwind CSS is properly configured
- Restart the dev server: `npm run dev`

**Build errors?**
- Check for syntax errors in your files
- Verify all imports are correct
- Run `npm run build` locally to debug

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [Vercel Deployment](https://vercel.com/docs)

---

**Ready to deploy? Good luck! 🎉**
