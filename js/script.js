// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typed.js Animation for Hero Section
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Full Stack Developer', 'AI Enthusiast', 'Tech Innovator'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// Scroll Reveal Animation (Simple Implementation)
const revealElements = document.querySelectorAll('.heading, .home-content, .about-content, .skill-box, .project-box, .services-box');

const revealOnScroll = () => {
    let windowHeight = window.innerHeight;
    let revealPoint = 150;

    revealElements.forEach((el) => {
        let revealTop = el.getBoundingClientRect().top;
        if(revealTop < windowHeight - revealPoint) {
            // Apply a simple fade-in transform (needs CSS rules, but adding here as inline for simplicity or we can just add a class)
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else {
            // Optional: reset on scroll up
            // el.style.opacity = '0';
            // el.style.transform = 'translateY(50px)';
        }
    });
};

// Initial state for reveal elements
revealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Contact Form Submit Mock
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This is a mock submission.');
    this.reset();
});
