/*
  Project Manager Portfolio - Interactive JavaScript
  Comprehensive functionality for modern, aesthetic portfolio
*/

document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500); // Show loading for 1.5s minimum
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-menu a, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileToggle.classList.remove('active');
                    }
                }
            }
        });
    });

    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
            
            if (navLink) {
                if (scrollPos >= top && scrollPos < top + height) {
                    document.querySelectorAll('.nav-menu a').forEach(link => {
                        link.classList.remove('active');
                    });
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Header Background on Scroll
    const nav = document.querySelector('.nav');
    
    function updateHeaderBackground() {
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            nav.style.background = 'rgba(26, 26, 32, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0)';
            nav.style.backdropFilter = 'blur(20px)';
        }
    }

    window.addEventListener('scroll', updateHeaderBackground);

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Trigger skill progress animations
                if (entry.target.classList.contains('skills-grid')) {
                    animateSkillBars(entry.target);
                }
                
                // Trigger counter animations
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounters(entry.target);
                }
                
                // Trigger project metrics animations
                if (entry.target.classList.contains('project-metrics')) {
                    animateCounters(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
        .section-header,
        .about-card,
        .project-card,
        .methodology-card,
        .timeline-item,
        .testimonial-card,
        .contact-method,
        .skills-grid,
        .hero-stats,
        .project-metrics
    `);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Skill Bar Animation
    function animateSkillBars(skillsGrid) {
        const skillBars = skillsGrid.querySelectorAll('.skill-progress');
        
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.style.getPropertyValue('--progress') || '0%';
            }, index * 200);
        });
    }

    // Counter Animation
    function animateCounters(container) {
        const counters = container.querySelectorAll('.stat-number, .metric-value');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                // Preserve original formatting
                const originalText = counter.textContent;
                const formattedNumber = Math.floor(current).toString();
                
                if (originalText.includes('%')) {
                    counter.textContent = formattedNumber + '%';
                } else if (originalText.includes('$')) {
                    counter.textContent = '$' + formattedNumber + (target >= 1000000 ? 'M+' : 'K+');
                } else if (originalText.includes('K+')) {
                    counter.textContent = formattedNumber + 'K+';
                } else if (originalText.includes('+')) {
                    counter.textContent = formattedNumber + '+';
                } else {
                    counter.textContent = formattedNumber;
                }
            }, 16);
        });
    }

    // Tools Section Animation (Enhanced)
    const toolsSection = document.querySelector('.tools-section');
    const toolNodes = document.querySelectorAll('.tool-node');
    const svg = document.querySelector('.tools-network-svg');

    if (toolsSection && toolNodes.length && svg) {
        const toolsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate SVG lines
                    svg.classList.add('animate');
                    const paths = svg.querySelectorAll('path');
                    paths.forEach((path, i) => {
                        path.style.animationDelay = `${i * 0.2}s`;
                    });
                    // Animate tool nodes except center PM
                    toolNodes.forEach((node, i) => {
                        if (!node.classList.contains('tool-node--center')) {
                            setTimeout(() => {
                                node.classList.add('animate-in');
                            }, 500 + (i * 150));
                        }
                    });
                    toolsObserver.disconnect();
                }
            });
        }, { threshold: 0.3 });
        toolsObserver.observe(toolsSection);
    }

    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Notification System
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#6366F1'};
            color: white;
            padding: 16px 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }
        }, 5000);
    }

    // Parallax Effect for Hero Background
    const heroBackground = document.querySelector('.hero-bg-animation');
    
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }

    // Enhanced Button Interactions
    const buttons = document.querySelectorAll('.btn, .btn-nav');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('btn-primary')) {
                this.style.transform = 'translateY(0)';
            }
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });

    // Project Card Tilt Effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // Testimonial Card Carousel (if more than 3)
    const testimonialGrid = document.querySelector('.testimonials-grid');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (testimonialCards.length > 3) {
        let currentTestimonial = 0;
        
        function showTestimonials() {
            testimonialCards.forEach((card, index) => {
                card.style.display = 'none';
                if (index >= currentTestimonial && index < currentTestimonial + 3) {
                    card.style.display = 'block';
                }
            });
        }
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 3) % testimonialCards.length;
            showTestimonials();
        }, 5000);
        
        showTestimonials();
    }

    // Smooth reveal animations for elements
    const revealElements = document.querySelectorAll('.about-card, .project-card, .timeline-item');
    
    revealElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add CSS for animate-in class
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .tools-network-svg.animate path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: svgLineDraw 1.2s cubic-bezier(0.77,0,0.18,1) forwards;
        }
        
        @keyframes svgLineDraw {
            to { stroke-dashoffset: 0; }
        }
        
        .tool-node.animate-in {
            animation: nodePopIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        @keyframes nodePopIn {
            0% { opacity: 0; transform: scale(0.3); }
            100% { opacity: 1; transform: scale(1); }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @media (max-width: 768px) {
            .nav-menu.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(26, 26, 32, 0.95);
                backdrop-filter: blur(20px);
                border: 1px solid var(--border-color);
                border-radius: 0 0 24px 24px;
                padding: 20px;
                gap: 16px;
            }
            
            .mobile-menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);

    // Performance optimization: Throttle scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(() => {
        updateActiveNav();
        updateHeaderBackground();
    }, 16));

    console.log('🚀 Project Manager Portfolio loaded successfully!');
}); 