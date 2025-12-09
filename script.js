// -----------------------
// MOBILE MENU TOGGLE
// -----------------------
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuBtn.classList.toggle("open");
    });
}

// -----------------------
// SMOOTH SCROLL
// -----------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth"
            });
        }
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});

// -----------------------
// REVEAL ON SCROLL
// -----------------------
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // run on load

// -----------------------
// NAVBAR SHADOW ON SCROLL
// -----------------------
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// -----------------------
// DARK MODE (Optional Toggle Support)
// -----------------------
const body = document.body;

function enableDarkMode() {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
}

function disableDarkMode() {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
}

(function applyStoredTheme() {
    if (localStorage.getItem("theme") === "dark") {
        enableDarkMode();
    }
})();
