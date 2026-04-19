window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 23, 42, 0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.05)";
        navbar.style.boxShadow = "none";
    }
});

/* Reveal Animation on Scroll */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});