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


/* =====================================================
   SHOWCASE: VIDEO + ANIMATED CANVAS FALLBACK
===================================================== */

const videoFrame = document.querySelector(".video-frame");
const showcaseVideo = document.getElementById("showcaseVideo");
const motionCanvas = document.getElementById("motionCanvas");
const videoPlayBtn = document.getElementById("videoPlay");

let mediaVisible = false;
let userPaused = false;
let hasVideo = false;

if (videoFrame && motionCanvas) {

    const ctx = motionCanvas.getContext("2d");
    const reduceMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const POINTS = 48;
    const noise = Array.from({ length: POINTS },
        () => Math.random() * 2 - 1);

    let w = 0, h = 0, t = 0, rafId = null;

    function resizeCanvas() {
        const rect = motionCanvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        w = rect.width;
        h = rect.height;
        motionCanvas.width = w * dpr;
        motionCanvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const ease = x => x < 0.5
        ? 2 * x * x
        : 1 - Math.pow(-2 * x + 2, 2) / 2;

    const trendY = (i, time) =>
        h * (0.68 - 0.36 * (i / (POINTS - 1))
            + 0.05 * Math.sin(i * 0.45 + time * 0.03));

    const stageNames = ["RAW DATA", "CLEANING", "MODELLING", "INSIGHT"];

    function drawFrame() {

        ctx.clearRect(0, 0, w, h);

        // grid
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.lineWidth = 1;
        for (let i = 1; i < 10; i++) {
            ctx.beginPath();
            ctx.moveTo((w / 10) * i, 0);
            ctx.lineTo((w / 10) * i, h);
            ctx.stroke();
        }
        for (let i = 1; i < 6; i++) {
            ctx.beginPath();
            ctx.moveTo(0, (h / 6) * i);
            ctx.lineTo(w, (h / 6) * i);
            ctx.stroke();
        }

        const phase = (t % 720) / 720;
        const k = phase < 0.7 ? ease(phase / 0.7) : 1;
        const fade = phase > 0.92 ? (1 - phase) / 0.08 : 1;
        const stage = phase < 0.25 ? 0 : phase < 0.5 ? 1 : phase < 0.7 ? 2 : 3;

        ctx.globalAlpha = fade;

        const xAt = i => w * 0.08 + (i / (POINTS - 1)) * w * 0.84;

        // scattered -> converging points
        for (let i = 0; i < POINTS; i++) {
            const x = xAt(i) + noise[i] * 30 * (1 - k);
            const y = trendY(i, t) + noise[(i * 7) % POINTS] * h * 0.3 * (1 - k);
            ctx.beginPath();
            ctx.arc(x, y, 3.2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(217,154,255,0.9)";
            ctx.shadowColor = "#b44cff";
            ctx.shadowBlur = 14;
            ctx.fill();
        }
        ctx.shadowBlur = 0;

        // forecast line draws in
        const progress = Math.min(Math.max((phase - 0.5) / 0.25, 0), 1);
        const last = Math.floor(progress * (POINTS - 1));
        if (last > 0) {
            ctx.beginPath();
            for (let i = 0; i <= last; i++) {
                const x = xAt(i), y = trendY(i, t);
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = "#b44cff";
            ctx.lineWidth = 2.5;
            ctx.shadowColor = "#b44cff";
            ctx.shadowBlur = 20;
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        ctx.globalAlpha = 1;

        // stage label
        ctx.fillStyle = "#d99aff";
        ctx.font = "500 11px Poppins, sans-serif";
        ctx.fillText(
            `0${stage + 1} / ${stageNames[stage]}`.split("").join(String.fromCharCode(8202)),
            24, 34
        );

        // progress bar
        ctx.fillStyle = "rgba(255,255,255,0.12)";
        ctx.fillRect(24, h - 24, w - 48, 2);
        ctx.fillStyle = "#b44cff";
        ctx.fillRect(24, h - 24, (w - 48) * phase, 2);
    }

    function loop() {
        t++;
        drawFrame();
        rafId = requestAnimationFrame(loop);
    }

    function updatePlayState() {
        const shouldPlay = mediaVisible && !userPaused && !reduceMotion;

        if (hasVideo) {
            shouldPlay ? showcaseVideo.play().catch(() => {}) : showcaseVideo.pause();
        } else {
            if (shouldPlay && !rafId) loop();
            if (!shouldPlay && rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        }

        videoPlayBtn.textContent = userPaused ? "▶" : "❚❚";
        videoPlayBtn.setAttribute(
            "aria-label", userPaused ? "Play animation" : "Pause animation"
        );
    }

    // exposed for voice commands
    window.setShowcasePaused = paused => {
        userPaused = paused;
        updatePlayState();
    };

    resizeCanvas();
    drawFrame();
    window.addEventListener("resize", () => {
        resizeCanvas();
        drawFrame();
    });

    // switch to the real video as soon as it can play
    if (showcaseVideo) {
        showcaseVideo.addEventListener("loadeddata", () => {
            hasVideo = true;
            videoFrame.classList.add("has-video");
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            updatePlayState();
        });
    }

    videoPlayBtn.addEventListener("click", () => {
        window.setShowcasePaused(!userPaused);
    });

    new IntersectionObserver(entries => {
        mediaVisible = entries[0].isIntersecting;
        updatePlayState();
    }, { threshold: 0.35 }).observe(videoFrame);
}


/* =====================================================
   VOICE: READ ALOUD + VOICE COMMANDS
===================================================== */

const listenBtn = document.getElementById("listenBtn");
const micBtn = document.getElementById("micBtn");
const voiceDock = document.getElementById("voiceDock");
const voiceToast = document.getElementById("voiceToast");

const synth = window.speechSynthesis;
const SpeechRec =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let speechToken = 0;
let toastTimer;

function showToast(message) {
    if (!voiceToast) return;
    voiceToast.textContent = message;
    voiceToast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(
        () => voiceToast.classList.remove("show"), 2800
    );
}

/* ---------- Text to speech ---------- */

function stopSpeaking() {
    speechToken++;
    if (synth) synth.cancel();
    if (listenBtn) {
        listenBtn.classList.remove("active");
        listenBtn.setAttribute("aria-pressed", "false");
    }
}

function speak(text) {
    if (!synth) return;
    stopSpeaking();

    const myToken = speechToken;
    const chunks =
        text.replace(/\s+/g, " ").match(/[^.!?]+[.!?]?/g) || [text];

    listenBtn.classList.add("active");
    listenBtn.setAttribute("aria-pressed", "true");

    chunks.forEach((chunk, index) => {
        const utterance = new SpeechSynthesisUtterance(chunk.trim());
        utterance.lang = "en-IN";
        utterance.rate = 1;

        if (index === chunks.length - 1) {
            utterance.onend = () => {
                if (myToken === speechToken) stopSpeaking();
            };
        }
        synth.speak(utterance);
    });
}

function currentSection() {
    let best = null;
    let bestDistance = Infinity;

    document.querySelectorAll("main > section").forEach(section => {
        const distance =
            Math.abs(section.getBoundingClientRect().top - 90);
        if (distance < bestDistance) {
            bestDistance = distance;
            best = section;
        }
    });

    return best;
}

function readCurrentSection() {
    const section = currentSection();
    if (!section) return;

    const source =
        section.querySelector(".hero-content, .section-content, .contact-content")
        || section;

    const text = source.innerText
        .replace(/View Project →/g, "")
        .replace(/[•→]/g, ",");

    speak(text);
}

/* ---------- Voice commands ---------- */

function goTo(id, label) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        showToast(`Going to ${label}`);
    }
}

function handleCommand(raw) {
    const said = raw.toLowerCase().trim();
    showToast(`"${said}"`);

    if (/\b(stop|quiet|silence)\b/.test(said)) return stopSpeaking();
    if (/\b(read|listen|speak)\b/.test(said)) return readCurrentSection();

    if (/\b(pause)\b/.test(said) && window.setShowcasePaused)
        return window.setShowcasePaused(true);
    if (/\b(play|video|animation)\b/.test(said) && window.setShowcasePaused) {
        goTo("showcase", "showcase");
        return window.setShowcasePaused(false);
    }

    if (/\b(home|top|start)\b/.test(said)) return goTo("home", "home");
    if (/\babout\b/.test(said)) return goTo("about", "about");
    if (/\bskills?\b/.test(said)) return goTo("skills", "skills");
    if (/\b(projects?|work)\b/.test(said)) return goTo("projects", "projects");
    if (/\b(showcase|motion)\b/.test(said)) return goTo("showcase", "showcase");
    if (/\b(contact|email|hire)\b/.test(said)) return goTo("contact", "contact");

    if (/\bresume\b/.test(said)) {
        const link = document.querySelector('a[href$="resume.pdf"]');
        if (link) link.click();
        return;
    }

    if (/\bscroll down\b|\bdown\b/.test(said))
        return window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    if (/\bscroll up\b|\bup\b/.test(said))
        return window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "smooth" });

    showToast(`Didn't catch a command in "${said}"`);
}

let recognition = null;
let micOn = false;

function startMic() {
    recognition = new SpeechRec();
    recognition.lang = "en-IN";
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = event => {
        const result = event.results[event.results.length - 1];
        if (result.isFinal) handleCommand(result[0].transcript);
    };

    recognition.onerror = event => {
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
            showToast("Microphone permission was blocked");
            micOn = false;
            micBtn.classList.remove("active");
            micBtn.setAttribute("aria-pressed", "false");
        }
    };

    // browsers end continuous sessions on silence, so restart while enabled
    recognition.onend = () => {
        if (micOn) {
            try { recognition.start(); } catch (e) {}
        }
    };

    recognition.start();
    micOn = true;
    micBtn.classList.add("active");
    micBtn.setAttribute("aria-pressed", "true");
    showToast("Listening… try “projects”, “contact”, “play video”");
}

function stopMic() {
    micOn = false;
    if (recognition) recognition.stop();
    micBtn.classList.remove("active");
    micBtn.setAttribute("aria-pressed", "false");
    showToast("Voice commands off");
}

/* ---------- Wire up ---------- */

if (voiceDock && (synth || SpeechRec)) {

    voiceDock.hidden = false;

    if (synth) {
        listenBtn.addEventListener("click", () => {
            listenBtn.classList.contains("active")
                ? stopSpeaking()
                : readCurrentSection();
        });
    } else {
        listenBtn.remove();
    }

    if (SpeechRec) {
        micBtn.addEventListener("click", () => {
            micOn ? stopMic() : startMic();
        });
    } else {
        micBtn.remove();
    }
}

window.addEventListener("beforeunload", stopSpeaking);
