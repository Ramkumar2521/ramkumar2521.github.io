/* ---------- GLOBAL ---------- */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Poppins", sans-serif; }
html { scroll-behavior: smooth; }
section[id] { scroll-margin-top: 90px; }

body.dark { background: #0b0b0e; color: #fff; overflow-x: hidden; }
h2 { letter-spacing: 0.5px; }

/* ---------- SCROLL PROGRESS ---------- */
.progress-bar {
    position: fixed; top: 0; left: 0; height: 3px; width: 100%;
    background: linear-gradient(90deg, #5a9df9, #9b6bff);
    transform: scaleX(0); transform-origin: left; z-index: 1000;
}

/* ---------- AMBIENT BACKGROUND ---------- */
.bg-blob {
    position: fixed; width: 460px; height: 460px; border-radius: 50%;
    filter: blur(110px); opacity: 0.22; z-index: -1; pointer-events: none;
}
.blob-1 { background: #5a9df9; top: -120px; left: -120px; animation: float1 18s ease-in-out infinite; }
.blob-2 { background: #9b6bff; bottom: -140px; right: -120px; animation: float2 22s ease-in-out infinite; }

@keyframes float1 { 50% { transform: translate(180px, 140px) scale(1.15); } }
@keyframes float2 { 50% { transform: translate(-200px, -120px) scale(1.2); } }

.cursor-glow {
    position: fixed; width: 380px; height: 380px; border-radius: 50%;
    background: radial-gradient(circle, rgba(90,157,249,0.16), transparent 65%);
    pointer-events: none; z-index: -1; left: 0; top: 0;
    transform: translate(-50%, -50%); will-change: transform;
}

/* ---------- NAVBAR ---------- */
.navbar {
    display: flex; justify-content: space-between; align-items: center;
    padding: 22px 70px; position: sticky; top: 0; z-index: 999;
    backdrop-filter: blur(12px); background: rgba(11,11,14,0.55);
    border-bottom: 1px solid transparent; transition: 0.4s;
}
.navbar.scrolled { padding: 14px 70px; border-bottom-color: #25252b; }
.logo { font-size: 26px; font-weight: 600; }
.nav-links { display: flex; list-style: none; gap: 40px; }
.nav-links a {
    color: #ccc; text-decoration: none; font-size: 16px; position: relative; padding-bottom: 4px;
    transition: color 0.3s;
}
.nav-links a::after {
    content: ""; position: absolute; left: 0; bottom: 0; height: 2px; width: 100%;
    background: #5a9df9; transform: scaleX(0); transform-origin: right;
    transition: transform 0.4s cubic-bezier(.2,.8,.2,1);
}
.nav-links a:hover, .nav-links a.active-nav { color: #fff; }
.nav-links a:hover::after, .nav-links a.active-nav::after { transform: scaleX(1); transform-origin: left; }

/* ---------- MOBILE MENU BUTTON ---------- */
.menu-btn { width: 35px; height: 28px; display: none; flex-direction: column; justify-content: space-between; cursor: pointer; }
.menu-btn span { width: 100%; height: 4px; background: #fff; border-radius: 5px; transition: 0.3s; }
.menu-btn.active span:nth-child(1) { transform: translateY(12px) rotate(45deg); }
.menu-btn.active span:nth-child(2) { opacity: 0; }
.menu-btn.active span:nth-child(3) { transform: translateY(-12px) rotate(-45deg); }

/* ---------- HERO ---------- */
.hero-section { display: flex; justify-content: space-between; align-items: center; padding: 90px 70px; gap: 50px; }
.hello-text, .title, .subtitle, .contact-btn { opacity: 0; animation: rise 0.9s cubic-bezier(.2,.8,.2,1) forwards; }
.hello-text { font-size: 18px; color: #bbb; animation-delay: 0.1s; }
.title {
    font-size: 58px; font-weight: 700; margin-top: 5px; animation-delay: 0.3s;
    background: linear-gradient(90deg, #fff, #5a9df9, #fff); background-size: 200%;
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
    animation: rise 0.9s 0.3s cubic-bezier(.2,.8,.2,1) forwards, shine 6s linear infinite;
}
.subtitle { font-size: 26px; color: #5a9df9; margin: 10px 0 30px; min-height: 40px; animation-delay: 0.5s; }
.caret { display: inline-block; width: 3px; height: 1em; background: #5a9df9; margin-left: 4px; vertical-align: -3px; animation: blink 0.8s steps(1) infinite; }
.contact-btn {
    padding: 12px 28px; background: #5a9df9; border-radius: 10px; color: #fff; font-weight: 600;
    text-decoration: none; display: inline-block; animation-delay: 0.7s;
    position: relative; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s;
}
.contact-btn::before {
    content: ""; position: absolute; top: 0; left: -80%; width: 50%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent);
    transform: skewX(-20deg); transition: left 0.7s;
}
.contact-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(90,157,249,0.4); }
.contact-btn:hover::before { left: 130%; }

.img-wrap { position: relative; animation: bob 6s ease-in-out infinite; }
.img-wrap::before {
    content: ""; position: absolute; inset: -4px; border-radius: 24px; z-index: -1;
    background: conic-gradient(from 0deg, #5a9df9, #9b6bff, #5a9df9);
    animation: spin 6s linear infinite; filter: blur(14px); opacity: 0.6;
}
.hero-img { display: block; width: 280px; height: 330px; border-radius: 20px; object-fit: cover; border: 3px solid #2d2d31; }

@keyframes rise { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
@keyframes shine { to { background-position: 200%; } }
@keyframes blink { 50% { opacity: 0; } }
@keyframes bob { 50% { transform: translateY(-14px); } }
@keyframes spin { to { transform: rotate(360deg); } }

/* ---------- SECTIONS ---------- */
.about-section { padding: 80px 70px; max-width: 900px; margin: auto; }
.skills-section, .projects-section, .contact-section { padding: 80px 70px; }
.about-section h2, .skills-section h2, .projects-section h2, .contact-section h2 {
    font-size: 32px; margin-bottom: 20px; display: inline-block; position: relative;
}
.about-section h2::after, .skills-section h2::after, .projects-section h2::after, .contact-section h2::after {
    content: ""; position: absolute; left: 0; bottom: -6px; height: 3px; width: 100%;
    background: linear-gradient(90deg, #5a9df9, #9b6bff);
    transform: scaleX(0); transform-origin: left; transition: transform 0.9s 0.3s cubic-bezier(.2,.8,.2,1);
}
.active > h2::after, h2.active::after { transform: scaleX(1); }
.about-section p { color: #ccc; line-height: 1.8; font-size: 17px; }

/* ---------- SKILLS ---------- */
.skills-group { margin-top: 35px; }
.skills-group h3 { font-size: 22px; margin-bottom: 15px; color: #e0e0e0; }
.skills-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 18px; }
.skill-box {
    background: #17171b; padding: 16px; border-radius: 12px; text-align: center; font-size: 16px;
    border: 1px solid #2a2a30; opacity: 0; transform: translateY(24px) scale(0.96);
    transition: opacity 0.6s ease, transform 0.6s cubic-bezier(.2,.8,.2,1), border-color 0.3s, box-shadow 0.3s, background 0.3s;
    transition-delay: calc(var(--i, 0) * 70ms), calc(var(--i, 0) * 70ms), 0s, 0s, 0s;
}
.skills-group.active .skill-box { opacity: 1; transform: none; }
.skills-group.active .skill-box:hover {
    transform: translateY(-5px) scale(1.04); border-color: #5a9df9; background: #1d1d23;
    box-shadow: 0 10px 25px rgba(90,157,249,0.18); transition-delay: 0s;
}

/* ---------- PROJECTS ---------- */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 28px; perspective: 1000px; }
.project-card {
    position: relative; background: #17171b; padding: 26px; border-radius: 16px;
    border: 1px solid #2a2a30; overflow: hidden; display: flex; flex-direction: column;
    opacity: 0; transform: translateY(50px) rotateX(8deg);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.2,.8,.2,1), border-color 0.3s;
    transition-delay: calc(var(--i, 0) * 90ms);
    transform-style: preserve-3d; will-change: transform;
}
.project-card.active { opacity: 1; transform: none; }
.project-card.tilting { transition: transform 0.08s linear, border-color 0.3s; transition-delay: 0s; border-color: #5a9df9; }
.project-card::before {
    content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity 0.3s;
    background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(90,157,249,0.18), transparent 70%);
}
.project-card.tilting::before { opacity: 1; }
.project-card h3 { font-size: 20px; margin-bottom: 10px; }
.project-card p { color: #b5b5bd; line-height: 1.7; font-size: 15px; flex: 1; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0; }
.tags span { font-size: 12px; padding: 4px 12px; border-radius: 20px; background: rgba(90,157,249,0.12); color: #7db3ff; border: 1px solid rgba(90,157,249,0.25); }
.repo-link { color: #5a9df9; text-decoration: none; font-weight: 600; font-size: 14px; align-self: flex-start; transition: letter-spacing 0.3s; }
.repo-link:hover { letter-spacing: 0.8px; }

/* ---------- CONTACT ---------- */
.contact-section p { font-size: 16px; margin-bottom: 10px; }
.contact-section a { color: #5a9df9; text-decoration: none; }
.contact-section a:hover { text-decoration: underline; }

/* ---------- REVEAL ---------- */
.reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.2,.8,.2,1); }
.reveal.active { opacity: 1; transform: none; }

/* ---------- MOBILE ---------- */
@media (max-width: 900px) {
    .navbar, .navbar.scrolled { padding: 16px 20px; }
    .menu-btn { display: flex; }
    .nav-links {
        position: absolute; top: 100%; right: 0; background: #1a1a1e; width: 100%;
        flex-direction: column; align-items: center; gap: 25px; padding: 25px 0;
        transform: translateY(-200%); transition: 0.4s ease-in-out; z-index: -1;
    }
    .nav-links.open { transform: translateY(0); }
    .hero-section { flex-direction: column; text-align: center; padding: 60px 20px; }
    .hero-img { width: 250px; height: 300px; }
    .about-section, .skills-section, .projects-section, .contact-section { padding: 60px 20px; }
    .projects-grid { grid-template-columns: 1fr; }
}

/* ---------- ACCESSIBILITY ---------- */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
    .reveal, .skill-box, .project-card, .hello-text, .title, .subtitle, .contact-btn { opacity: 1 !important; transform: none !important; }
}

/* =====================================================
   GLASSMORPHISM + 3D FLOATING THEME
===================================================== */
body.dark {
    background:
        radial-gradient(circle at 15% 20%, #2a1766 0, transparent 45%),
        radial-gradient(circle at 85% 75%, #0b3b6b 0, transparent 45%),
        #070714;
    background-attachment: fixed;
}
.blob-1 { background: #7c5cff; opacity: 0.4; }
.blob-2 { background: #00c2ff; opacity: 0.32; }

/* glass surface shared by all panels */
.navbar, .skills-group, .project-card, .skill-box, .about-section, .contact-section, .chip {
    background: linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03));
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    border: 1px solid rgba(255,255,255,0.14);
    box-shadow: 0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18);
}
.navbar { border-radius: 0 0 22px 22px; }
.about-section, .contact-section { border-radius: 24px; }
.about-section { padding: 50px; margin: 40px auto; }
.contact-section { margin: 40px 70px 70px; padding: 50px; }
.skills-group { padding: 26px; border-radius: 22px; margin-top: 26px; }
.skill-box { border-radius: 14px; }
.project-card { border-radius: 22px; }
.skills-group.active .skill-box:hover, .project-card.tilting {
    border-color: rgba(124,92,255,0.8);
    box-shadow: 0 20px 50px rgba(124,92,255,0.3), inset 0 1px 0 rgba(255,255,255,0.25);
}
.tags span { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.18); color: #cfd6ff; }
.repo-link, .contact-section a, .subtitle { color: #8fb4ff; }
.contact-btn { background: linear-gradient(135deg, #7c5cff, #00c2ff); }

/* 3D tilt for the hero image + floating chips */
.hero-right { position: relative; transform-style: preserve-3d; transition: transform 0.15s ease-out; padding: 30px; }
.hero-img { border: 1px solid rgba(255,255,255,0.25); box-shadow: 0 30px 70px rgba(0,0,0,0.55); }
.chip {
    position: absolute; padding: 8px 16px; border-radius: 30px; font-size: 13px; font-weight: 600;
    z-index: 3; white-space: nowrap; animation: chipFloat 5s ease-in-out infinite;
}
.c1 { top: 0; left: -30px; }
.c2 { top: 28%; right: -70px; animation-delay: -1.2s; }
.c3 { bottom: 18%; left: -50px; animation-delay: -2.4s; }
.c4 { bottom: 0; right: -20px; animation-delay: -3.6s; }
@keyframes chipFloat {
    0%, 100% { transform: translateZ(70px) translateY(0); }
    50% { transform: translateZ(90px) translateY(-14px); }
}

/* floating 3D background shapes */
.scene { position: fixed; inset: 0; z-index: -1; pointer-events: none; overflow: hidden; }
.shape { position: absolute; will-change: transform; }
.shape i { display: block; animation: drift 9s ease-in-out infinite; }
.orb {
    width: 110px; height: 110px; border-radius: 50%;
    background: radial-gradient(circle at 30% 28%, #fff9 0, #8d7bff 25%, #3a1fa8 65%, #120a3a 100%);
    box-shadow: 0 25px 60px rgba(124,92,255,0.45);
}
.orb.small { width: 64px; height: 64px; background: radial-gradient(circle at 30% 28%, #fff9 0, #4fd8ff 28%, #0a5d9c 70%, #06203d 100%); box-shadow: 0 20px 45px rgba(0,194,255,0.4); animation-delay: -3s; }
.ring {
    width: 130px; height: 130px; border-radius: 50%; border: 16px solid rgba(255,255,255,0.14);
    box-shadow: inset 0 0 25px rgba(255,255,255,0.18), 0 0 40px rgba(124,92,255,0.25);
    backdrop-filter: blur(4px); animation: drift 11s ease-in-out infinite, tumble 16s linear infinite;
}
.ring.thin { width: 90px; height: 90px; border-width: 6px; opacity: 0.5; }
.cube {
    width: 90px; height: 90px; border-radius: 22px; background: linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.03));
    border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px);
    animation: drift 10s ease-in-out infinite, tumble 20s linear infinite reverse;
}
@keyframes drift { 50% { translate: 0 -30px; } }
@keyframes tumble { to { rotate: 360deg; } }

@media (max-width: 900px) {
    .chip, .scene .ring { display: none; }
    .about-section { margin: 30px 20px; padding: 30px 22px; }
    .contact-section { margin: 30px 20px 60px; padding: 30px 22px; }
    .skills-group { padding: 18px; }
    .navbar { border-radius: 0; }
}
