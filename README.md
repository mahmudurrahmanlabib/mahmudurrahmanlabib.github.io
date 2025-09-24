# Portfolio Website

A modern, responsive portfolio website with a dark theme inspired by contemporary UX/UI design principles. Built with vanilla HTML, CSS, and JavaScript.

## 🌟 Features

- **Modern Dark Theme**: Sleek dark design with purple accent colors
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Elements**: Skill bars, typing effects, and button ripples
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Debounced scroll events and intersection observers
- **Accessibility Focused**: Semantic HTML and keyboard navigation support

## 🏗️ Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality and interactions
└── README.md          # This file
```

## 🚀 Getting Started

1. **Clone or Download** the files to your local machine
2. **Open `index.html`** in your web browser
3. **That's it!** The website runs entirely in the browser

### For Development
If you want to use a local server for development:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if you have live-server installed)
npx live-server

# Using PHP (if installed)
php -S localhost:8000
```

## 🎨 Customization

### Personal Information
Edit the content in `index.html` to match your personal information:

- Update the hero section with your name and title
- Modify the "Estudios" section with your education background
- Update skills in the "Habilidades blandas" section
- Change tools in the "Herramientas" section
- Update experience in the "Experiencia" section
- Modify testimonials with real references

### Colors and Styling
The website uses CSS custom properties (variables) for easy theming. Edit these in `styles.css`:

```css
:root {
    --bg-primary: #0a0a0f;      /* Main background */
    --bg-secondary: #111117;     /* Section backgrounds */
    --bg-card: #1a1a20;        /* Card backgrounds */
    --text-primary: #ffffff;     /* Main text color */
    --text-secondary: #b8b8c8;  /* Secondary text */
    --accent-primary: #6366f1;   /* Primary accent */
    --accent-secondary: #8b5cf6; /* Secondary accent */
}
```

### Adding Your Own Images
Replace the placeholder elements with your own images:

1. Add your profile photo to replace the avatar icon
2. Add screenshots of your work to replace placeholder content
3. Update the streaming section image

Example:
```html
<!-- Replace this -->
<div class="avatar-container">
    <i class="fas fa-user-circle"></i>
</div>

<!-- With this -->
<div class="avatar-container">
    <img src="your-photo.jpg" alt="Your Name">
</div>
```

### Social Media Links
Update the footer social links with your actual profiles:

```html
<div class="footer-social">
    <a href="https://github.com/yourusername"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/yourusername"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/yourusername"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com/yourusername"><i class="fab fa-instagram"></i></a>
</div>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🔧 Technical Features

### JavaScript Functionality
- Smooth scrolling navigation
- Mobile menu toggle
- Skill bar animations on scroll
- Card fade-in animations
- Typing effect for hero title
- Parallax scrolling effects
- Active navigation highlighting
- Button ripple effects
- Performance optimizations

### CSS Features
- CSS Grid and Flexbox layouts
- CSS Custom Properties (variables)
- Backdrop filters for modern blur effects
- Smooth transitions and animations
- Hover effects and transforms

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the folder to [Netlify](https://netlify.com)
2. Your site will be deployed automatically

### Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Deploy with default settings

## 🎯 SEO Optimization

To improve SEO, add these meta tags to the `<head>` section:

```html
<meta name="description" content="Your Name - UX/UI Designer & Frontend Developer">
<meta name="keywords" content="UX Designer, UI Designer, Frontend Developer, Portfolio">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="UX/UI Designer & Frontend Developer Portfolio">
<meta property="og:image" content="your-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

## 🐛 Browser Support

- ✅ Chrome (80+)
- ✅ Firefox (75+)
- ✅ Safari (13+)
- ✅ Edge (80+)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips

1. **Images**: Optimize your images for web (use WebP format when possible)
2. **Performance**: Keep images under 1MB each
3. **Accessibility**: Add alt text to all images
4. **Content**: Keep text concise and impactful
5. **Testing**: Test on multiple devices and browsers

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them!

---

**Made with ❤️ for showcasing your amazing work!** 