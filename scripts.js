const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section
        if (targetSection) {
            // Smoothly scroll to the target section with perfect alignment
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Aligns the section to the top of the viewport
                inline: 'nearest'
            });
        }
    });
});

// Add the 'visible' class to sections when they come into view
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // Reset animation when section is out of view
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is visible
});

sections.forEach(section => {
    observer.observe(section);
});

// Hide/Show Navbar on Scroll
const nav = document.querySelector('.nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        nav.classList.add('hidden');
    } else {
        // Scrolling up
        nav.classList.remove('hidden');
    }

    // Show navbar when at the top of the page
    if (window.scrollY === 0) {
        nav.classList.remove('hidden');
    }

    lastScrollY = window.scrollY; // Update the last scroll position
});