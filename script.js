/* ---------- MOBILE MENU ---------- */
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => { menuBtn.classList.toggle('active'); navLinks.classList.toggle('open'); });
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open'); menuBtn.classList.remove('active');
}));

/* ---------- REVEAL (STAGGERED) ---------- */
document.querySelectorAll('.skills-row').forEach(row =>
    row.querySelectorAll('.skill-box').forEach((b, i) => b.style.setProperty('--i', i)));
document.querySelectorAll('.project-card').forEach((c, i) => c.style.setProperty('--i', i % 3));

const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('active'); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal, .project-card').forEach(el => io.observe(el));

/* ---------- SCROLL SPY ---------- */
const anchors = document.querySelectorAll('.nav-links a');
const spy = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) anchors.forEach(a => a.classList.toggle('active-nav', a.getAttribute('href') === '#' + e.target.id));
}), { threshold: 0.35 });
document.querySelectorAll('section[id]').forEach(s => spy.observe(s));

/* ---------- PROJECT CARD TILT + SPOTLIGHT ---------- */
if (matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
            card.classList.add('tilting');
            card.style.setProperty('--mx', x + 'px');
            card.style.setProperty('--my', y + 'px');
            card.style.transform = `perspective(900px) rotateX(${((y / r.height) - 0.5) * -10}deg) rotateY(${((x / r.width) - 0.5) * 10}deg) translateY(-5px)`;
        });
        card.addEventListener('mouseleave', () => { card.classList.remove('tilting'); card.style.transform = ''; });
    });
}

/* =====================================================
   CINEMATIC 3D SCENE  (scroll-driven particle object)
   orb -> rotates -> explodes into purple powder
===================================================== */
const canvas = document.getElementById('fx');
const ctx = canvas.getContext('2d');
const stage = document.querySelector('.stage');
const layers = [...document.querySelectorAll('.t')];
const countEl = document.getElementById('count');
const hint = document.querySelector('.hint');
let W, H, DPR;

function resize() {
    DPR = Math.min(devicePixelRatio || 1, 2);
    W = canvas.width = innerWidth * DPR;
    H = canvas.height = innerHeight * DPR;
}
resize(); addEventListener('resize', resize);

/* soft glowing sprite, drawn once */
function sprite(color) {
    const s = document.createElement('canvas'); s.width = s.height = 32;
    const g = s.getContext('2d'), grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    grd.addColorStop(0, color); grd.addColorStop(0.35, color.replace('1)', '0.35)')); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 32, 32);
    return s;
}
const silver = sprite('rgba(235,238,255,1)');
const violet = sprite('rgba(180,76,255,1)');
const pink = sprite('rgba(255,140,255,1)');

/* particles on a spiky, organic "chrome flower" surface */
const N = innerWidth < 700 ? 900 : 1700;
const pts = Array.from({ length: N }, () => {
    const th = Math.acos(2 * Math.random() - 1), ph = Math.random() * Math.PI * 2;
    const spike = 1 + 0.75 * Math.pow(Math.abs(Math.sin(5 * ph) * Math.cos(3 * th)), 1.5);
    const shell = Math.random() < 0.8 ? 1 : 0.35 + Math.random() * 0.5;   // some inner core points
    const r = spike * shell;
    return {
        x: Math.sin(th) * Math.cos(ph), y: Math.cos(th), z: Math.sin(th) * Math.sin(ph),
        r, speed: 0.6 + Math.random() * 2.2, size: 0.5 + Math.random() * 1.2,
        tint: Math.random(), delay: Math.random() * 0.5
    };
});

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = t => t * t * (3 - 2 * t);
let target = 0, prog = 0, mx = 0, my = 0, smx = 0, smy = 0, intro = 0, t0 = performance.now();

addEventListener('mousemove', e => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; });

function frame(now) {
    const time = (now - t0) / 1000;
    const range = stage.offsetHeight - innerHeight;
    target = clamp((-stage.getBoundingClientRect().top) / range);
    prog += (target - prog) * 0.07;                 // smooth, weighty scroll
    smx += (mx - smx) * 0.05; smy += (my - smy) * 0.05;
    intro = Math.min(1, intro + 0.012);              // opening assemble animation
    const p = prog, ie = ease(intro);

    /* burst amount 0..1 across the last part of the scroll */
    const burst = ease(clamp((p - 0.58) / 0.34));
    const fade = 1 - ease(clamp((p - 0.97) / 0.03));
    canvas.style.opacity = stage.getBoundingClientRect().bottom < 0 ? 0 : fade;

    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    const cx = W / 2, cy = H / 2, base = Math.min(W, H) * (0.2 + 0.1 * ease(clamp(p / 0.35)));
    const rotY = time * 0.25 + p * 5 + smx * 1.5, rotX = 0.35 + smy * 1.2 + p * 1.5;
    const cY = Math.cos(rotY), sY = Math.sin(rotY), cX = Math.cos(rotX), sX = Math.sin(rotX);

    for (const q of pts) {
        const local = clamp((ie - q.delay * 0.6) / 0.5);              // each point flies in from far away
        const fly = 1 + (1 - ease(local)) * 6;
        const b = burst * q.speed;
        const rad = q.r * fly * (1 + b * 2.6);
        let x = q.x * rad, y = q.y * rad, z = q.z * rad;
        let x1 = x * cY - z * sY, z1 = x * sY + z * cY;
        let y1 = y * cX - z1 * sX, z2 = y * sX + z1 * cX;
        const persp = 2.6 / (2.6 + z2 * 0.5);
        const sx = cx + x1 * base * persp, sy = cy + y1 * base * persp;
        if (sx < -50 || sx > W + 50 || sy < -50 || sy > H + 50) continue;

        const depth = clamp((z2 + 2) / 4);
        const s = (q.size * (0.8 + depth) * DPR * 6) * (1 + burst * 1.4) * persp;
        ctx.globalAlpha = clamp((0.25 + depth * 0.75) * local * (1 - burst * 0.35));
        const img = burst > 0.15 ? (q.tint > 0.7 ? pink : violet) : (burst > 0.02 && q.tint > 0.5 ? violet : silver);
        ctx.drawImage(img, sx - s / 2, sy - s / 2, s, s);
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';

    /* text layers cross-fade with scroll */
    const o = [
        1 - ease(clamp((p - 0.18) / 0.1)),
        ease(clamp((p - 0.26) / 0.1)) * (1 - ease(clamp((p - 0.5) / 0.08))),
        ease(clamp((p - 0.62) / 0.1)) * (1 - ease(clamp((p - 0.96) / 0.04)))
    ];
    layers.forEach((l, i) => {
        l.style.opacity = o[i] * (i === 0 ? ie : 1);
        l.style.transform = `translateY(${(1 - o[i]) * (i === 0 ? -40 : 40)}px)`;
    });
    if (countEl) countEl.textContent = '+' + String(Math.round(7 * ease(clamp((p - 0.7) / 0.22)))).padStart(2, '0');
    hint.style.opacity = 1 - clamp(p / 0.06);

    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
