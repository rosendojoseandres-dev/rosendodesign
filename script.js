let currentSlide = 0;
const totalSlides = 3;
let isLogoTicking = false;
let resizeCarouselTimeout;
let resizeNetworkTimeout;

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu || !icon) return;
    menu.classList.toggle('active');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    const isOpen = menu.classList.contains('active');
    if (window.lucide) {
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
    }
}

function updateCarousel() {
    const viewport = document.getElementById('viewport');
    const cards = document.querySelectorAll('.project-card');
    const labels = document.querySelectorAll('.nav-label');

    if (!viewport || !cards.length) return;

    const gap = 32;
    const cardWidth = cards[0].offsetWidth;
    const containerWidth = document.body.clientWidth;
    const offset = -(currentSlide * (cardWidth + gap)) + (containerWidth / 2) - (cardWidth / 2);

    viewport.style.transform = `translateX(${offset}px)`;

    cards.forEach((card, i) => card.classList.toggle('active', i === currentSlide));
    labels.forEach((label, i) => {
        label.classList.toggle('active', i === currentSlide);
        label.classList.toggle('text-white', i === currentSlide);
        label.classList.toggle('text-zinc-600', i !== currentSlide);
    });
}

function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; updateCarousel(); }
function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateCarousel(); }
function goToSlide(index) { currentSlide = index; updateCarousel(); }

function updateLogoReveal() {
    const section = document.getElementById('logo-reveal-section');
    const container = document.getElementById('logo-container');
    const glow = document.getElementById('logo-glow');
    const aboutText = document.getElementById('about-text');

    if (!section || !container) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewHeight = window.innerHeight;
    let progress = -rect.top / (sectionHeight - viewHeight);
    progress = Math.max(0, Math.min(1, progress));

    container.style.transform = `translateY(${20 - (progress * 20)}px) scale(${0.4 + (progress * 0.75)})`;
    container.style.opacity = progress * 1.8;
    container.style.filter = `blur(${18 - (progress * 18)}px)`;
    if (glow) {
        glow.style.opacity = progress;
        glow.style.transform = `scale(${0.5 + progress})`;
    }

    if (aboutText) {
        const textProgress = Math.max(0, (progress - 0.25) / 0.75);
        aboutText.style.opacity = textProgress;
        aboutText.style.transform = `translateY(${30 - (textProgress * 30)}px)`;
    }
}

function updateServicesParallax() {
    if (window.innerWidth <= 1024) return;
    const section = document.getElementById('servicios');
    if (!section) return;
    const images = section.querySelectorAll('.reveal-media');
    images.forEach(img => {
        img.style.setProperty('--service-parallax', '0px');
    });
}

function initServices() {
    const section = document.getElementById('servicios');
    if (!section) return;
    const triggers = Array.from(section.querySelectorAll('.tab-trigger'));
    const visuals = Array.from(section.querySelectorAll('.framer-visual-container .visual-content'));
    if (!triggers.length || !visuals.length) return;

    const setActive = (tabId) => {
        triggers.forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === tabId));
    };

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const tabId = trigger.getAttribute('data-tab');
            setActive(tabId);
            const target = document.getElementById(tabId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    }, { root: null, threshold: 0.35, rootMargin: "-20% 0px -40% 0px" });

    visuals.forEach(visual => observer.observe(visual));
}

function initRevealObserver() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
    }, { threshold: 0.2, rootMargin: "0px 0px -20% 0px" });

    document.querySelectorAll('.reveal-media').forEach(el => revealObserver.observe(el));
}

function initNetworkCanvas() {
    const canvas = document.getElementById('networkCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const section = canvas.closest('section');
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };
    let isMobile = window.innerWidth < 768;
    let particleCount = isMobile ? 40 : 90;
    let connectionDistance = isMobile ? 110 : 180;
    let connectionDistanceSq = connectionDistance * connectionDistance;
    let animationFrameId = null;
    let isAnimating = false;
    let isVisible = true;
    let isDocumentVisible = !document.hidden;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    window.addEventListener('mousemove', (event) => {
        if (!isAnimating) return;
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        isMobile = window.innerWidth < 768;
        particleCount = isMobile ? 40 : 90;
        connectionDistance = isMobile ? 110 : 180;
        connectionDistanceSq = connectionDistance * connectionDistance;
        mouse.radius = isMobile ? 120 : 150;
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(i));
        }
    }

    class Particle {
        constructor(index) {
            this.index = index;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * (isMobile ? 0.25 : 0.4);
            this.vy = (Math.random() - 0.5) * (isMobile ? 0.25 : 0.4);
            this.maxRadius = Math.random() * (isMobile ? 1.2 : 2) + 0.8;
            this.maxAlpha = Math.random() * 0.35 + 0.2;
            this.growth = 0;
            this.delay = index * (isMobile ? 2 : 4);
            this.spawnSpeed = 0.02;
        }

        update() {
            if (this.delay > 0) {
                this.delay--;
                return;
            }
            if (this.growth < 1) this.growth += this.spawnSpeed;
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            if (mouse.x != null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= dx * force * 0.02;
                    this.y -= dy * force * 0.02;
                }
            }
        }

        draw() {
            if (this.delay > 0 || this.growth <= 0) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.maxRadius * this.growth, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.maxAlpha * this.growth})`;
            ctx.shadowBlur = (isMobile ? 3 : 6) * this.growth;
            ctx.shadowColor = "white";
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            if (particles[i].delay > 0) continue;
            for (let j = i + 1; j < particles.length; j++) {
                if (particles[j].delay > 0) continue;
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distanceSq = dx * dx + dy * dy;
                if (distanceSq < connectionDistanceSq) {
                    ctx.beginPath();
                    const distance = Math.sqrt(distanceSq);
                    const maturity = (particles[i].growth + particles[j].growth) / 2;
                    const opacity = (1 - distance / connectionDistance) * (isMobile ? 0.12 : 0.22) * maturity;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = isMobile ? 0.7 : 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        if (!isAnimating) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        for (const p of particles) {
            p.update();
            p.draw();
        }
        drawLines();
        ctx.globalCompositeOperation = 'source-over';
        animationFrameId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (isAnimating || prefersReducedMotion.matches || !isVisible || !isDocumentVisible) return;
        isAnimating = true;
        animate();
    }

    function stopAnimation() {
        if (!isAnimating) return;
        isAnimating = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    if (section) {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            isVisible = entry ? entry.isIntersecting : true;
            if (isVisible) {
                startAnimation();
            } else {
                stopAnimation();
            }
        }, { threshold: 0.1 });
        observer.observe(section);
    }

    document.addEventListener('visibilitychange', () => {
        isDocumentVisible = !document.hidden;
        if (isDocumentVisible) {
            startAnimation();
        } else {
            stopAnimation();
        }
    });

    prefersReducedMotion.addEventListener('change', () => {
        if (prefersReducedMotion.matches) {
            stopAnimation();
        } else {
            startAnimation();
        }
    });

    window.addEventListener('resize', () => {
        clearTimeout(resizeNetworkTimeout);
        resizeNetworkTimeout = setTimeout(() => {
            init();
            startAnimation();
        }, 150);
    });

    init();
    startAnimation();
}

window.addEventListener('load', () => {
    if (window.lucide) lucide.createIcons();
    initNetworkCanvas();
    initServices();
    initRevealObserver();
    updateCarousel();
    updateLogoReveal();
    updateServicesParallax();

    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
        }, 1200);
    }
});

window.addEventListener('scroll', () => {
    if (isLogoTicking) return;
    isLogoTicking = true;
    requestAnimationFrame(() => {
        updateLogoReveal();
        updateServicesParallax();
        isLogoTicking = false;
    });
}, { passive: true });

window.addEventListener('resize', () => {
    clearTimeout(resizeCarouselTimeout);
    resizeCarouselTimeout = setTimeout(() => {
        updateCarousel();
        updateLogoReveal();
        updateServicesParallax();
    }, 150);
});

// Tilt sutil en tarjetas de proyectos
(function initProjectTilt(){
    const cards = document.querySelectorAll('.pf-card');
    if (!cards.length) return;
    if (window.matchMedia('(pointer: fine)').matches === false) return;
    cards.forEach(card => {
        const media = card.querySelector('.pf-media');
        if (!media) return;
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const y = (e.clientY - r.top) / r.height;
            const rx = (0.5 - y) * 6;
            const ry = (x - 0.5) * 8;
            media.style.setProperty('--rx', rx + 'deg');
            media.style.setProperty('--ry', ry + 'deg');
        });
        card.addEventListener('mouseleave', () => {
            media.style.setProperty('--rx', '0deg');
            media.style.setProperty('--ry', '0deg');
        });
    });
})();
