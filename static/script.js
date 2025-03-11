// Smooth Scroll for Navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Scroll to the target element
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animations and Effects
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Hero Section Animation
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    if (scrollPosition > heroHeight * 0.2) {
        hero.classList.add('animate');
    } else {
        hero.classList.remove('animate');
    }

    // Sticky Navbar Effect
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    if (scrollPosition > navbarHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    // Gradient Background Change on Scroll
    const body = document.body;
    if (scrollPosition > 100) {
        body.style.animation = 'gradientAnimation 15s ease infinite';
    } else {
        body.style.animation = '';
    }

    // Scroll Animation for Skill Section and Portfolio Grid
    const fadeInSections = [document.querySelector('.skills'), document.querySelector('.portfolio-grid')];
    fadeInSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('fadeInSection');
        }
    });

    // Scroll Animation for Footer Section
    const footer = document.querySelector('footer');
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < windowHeight - 50) {
        footer.classList.add('fadeInUp');
    }
});

// Hover Effect for Navbar Links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#00d4ff';
        link.style.color = '#000';
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.color = '';
    });
});

// Add sticky effect to the navbar when scrolled (Avoid redundant sticky effect listener)
const navbarContainer = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50 && !navbarContainer.classList.contains('sticky')) {
        navbarContainer.classList.add('sticky');
    } else if (window.scrollY <= 50 && navbarContainer.classList.contains('sticky')) {
        navbarContainer.classList.remove('sticky');
    }
});

// Hover Effect for Button in Hero Section
const heroButton = document.querySelector('.hero .btn');
heroButton.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#00a9cc';
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 15px 30px rgba(0, 212, 255, 0.6)';
});
heroButton.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#00d4ff';
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.4)';
});

// Form Button Hover Effect
const formButton = document.querySelector('form button');
formButton.addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.1)';
});
formButton.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
});

// Adding Dynamic Hover Effects for Skill Cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
});

// Contact Form Focus Effect
const formInputs = document.querySelectorAll('form input, form textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.style.background = '#1e1e1e';
        this.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.7)';
    });
    input.addEventListener('blur', function () {
        this.style.background = '#121212';
        this.style.boxShadow = '';
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Check if the "Home" link was clicked
        if (this.getAttribute('href') === '#home') {
            window.scrollTo({
                top: 0,   // Scroll to the top of the page
                behavior: 'smooth'
            });
        } else {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Scroll to the target element
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
