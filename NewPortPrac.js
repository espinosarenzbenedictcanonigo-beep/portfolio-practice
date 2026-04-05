// Simple welcome message in browser console
console.log("Portfolio website loaded successfully!");

// Optional simple reveal effect on scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial hidden state
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});