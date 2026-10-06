/* ---------- MOBILE MENU ---------- */
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.classList.remove('active');
    });
});

/* ---------- TYPING EFFECT ---------- */
const roles = ['Data Science Aspirant', 'Python Developer', 'ML Enthusiast', 'Data Storyteller'];
const typed = document.getElementById('typed');
let r = 0, c = 0, deleting = false;

function type() {
    const word = roles[r];
    typed.textContent = word.slice(0, deleting ? --c : ++c);
    let delay = deleting ? 40 : 85;

    if (!deleting && c === word.length) { deleting = true; delay = 1600; }
    else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 400; }

    setTimeout(type, delay);
}
setTimeout(type, 1200);

/* ---------- SCROLL REVEAL (STAGGERED) ---------- */
document.querySelectorAll('.skills-row').forEach(row => {
    row.querySelectorAll('.skill-box').forEach((box, i) => box.style.setProperty('--i', i));
});
document.querySelectorAll('.project-card').forEach((card, i) => card.style.setProperty('--i', i % 3));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .project-card').forEach(el => revealObserver.observe(el));

/* ---------- SCROLL PROGRESS + NAVBAR SHRINK ---------- */
const progress = document.querySelector('.progress-bar');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------- ACTIVE NAV (SCROLL SPY) ---------- */
const navAnchors = document.querySelectorAll('.nav-links a');
const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navAnchors.forEach(a => a.classList.toggle('active-nav', a.getAttribute('href') === '#' + entry.target.id));
        }
    });
}, { threshold: 0.35 });

document.querySelectorAll('section[id]').forEach(s => spy.observe(s));

/* ---------- SMOOTH CURSOR GLOW ---------- */
const glow = document.querySelector('.cursor-glow');
let mx = window.innerWidth / 2, my = window.innerHeight / 2, gx = mx, gy = my;

window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function follow() {
    gx += (mx - gx) * 0.08;   // easing gives the lagging, fluid feel
    gy += (my - gy) * 0.08;
    glow.style.transform = `translate(${gx - 190}px, ${gy - 190}px)`;
    requestAnimationFrame(follow);
})();

/* ---------- 3D TILT + SPOTLIGHT ON PROJECT CARDS ---------- */
if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotY = ((x / rect.width) - 0.5) * 12;
            const rotX = ((y / rect.height) - 0.5) * -12;

            card.classList.add('tilting');
            card.style.setProperty('--mx', x + 'px');
            card.style.setProperty('--my', y + 'px');
            card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('tilting');
            card.style.transform = '';
        });
    });
}
