// Scroll reveal animation
function reveal() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();
