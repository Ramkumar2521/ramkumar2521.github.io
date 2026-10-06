/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");

        navLinks.classList.toggle("open");

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            menuBtn.classList.remove("active");

            navLinks.classList.remove("open");

        });

    });

}


/* =====================================================
   TYPING EFFECT
===================================================== */

const typedElement = document.getElementById("typed");

const roles = [
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Enthusiast",
    "Python Developer",
    "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typedElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typedElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typedElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =====================================================
   PROJECT CARD MOUSE SPOTLIGHT
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.setProperty(
            "--mouse-x",
            "50%"
        );

        card.style.setProperty(
            "--mouse-y",
            "50%"
        );

    });

});


/* =====================================================
   PROJECT 3D TILT
===================================================== */

if (
    window.matchMedia("(hover: hover)").matches
) {

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - 0.5) * 8;

                const rotateX =
                    ((y / rect.height) - 0.5) * -8;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(-8px)";

            }
        );

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navItems.forEach(link => {

                        link.classList.remove(
                            "active-nav"
                        );

                        if (
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        ) {

                            link.classList.add(
                                "active-nav"
                            );

                        }

                    });

                }

            });

        },
        {
            threshold: 0.4
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,5,5,.85)";

        } else {

            navbar.style.background =
                "rgba(5,5,5,.45)";

        }

    }
);


/* =====================================================
   HERO PARALLAX
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual &&
    window.matchMedia("(hover: hover)").matches) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5);

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5);

            heroVisual.style.transform =
                `translate(${x * 12}px,
                            ${y * 12}px)`;

        }
    );

}
