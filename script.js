// Scroll reveal effect
function reveal() {
    let elements = document.querySelectorAll(".reveal");

    for (let i = 0; i < elements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = elements[i].getBoundingClientRect().top;
        let visible = 150;

        if (elementTop < windowHeight - visible) {
            elements[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial trigger
reveal();

console.log("Portfolio Loaded Successfully with Animations!");
