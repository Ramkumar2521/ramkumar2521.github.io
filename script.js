// Scroll Reveal Animation
function reveal() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 150) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check
