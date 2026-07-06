// Simple Scroll Reveal Logic
const revealElements = document.querySelectorAll('.project-card, .hero-content, .contact-card');

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            revealElements[i].style.opacity = "1";
            revealElements[i].style.transform = "translateY(0)";
            revealElements[i].style.transition = "all 0.6s ease-out";
        }
    }
};

// Set initial states for cards
revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
});

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load to show elements above the fold
window.addEventListener('load', revealOnScroll);
