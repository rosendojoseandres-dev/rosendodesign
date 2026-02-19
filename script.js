lucide.createIcons();

// ============================================
//  MENÚ MÓVIL (Sincronizado con CSS)
// ============================================
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu || !icon) return;

    // Usamos el método de clases para que el CSS transicione correctamente
    const isHidden = window.getComputedStyle(menu).display === 'none';
    
    if (isHidden) {
        menu.style.display = 'flex';
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.style.display = 'none';
        icon.setAttribute('data-lucide', 'menu');
    }
    
    lucide.createIcons();
}

// ============================================
//  CAROUSEL (PROYECTOS) - Tu lógica original
// ============================================
let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
    const viewport = document.getElementById('viewport');
    const cards = document.querySelectorAll('.project-card');
    const labels = document.querySelectorAll('.nav-label');

    if (!viewport || !cards.length) return;

    const gap = 32;
    const cardWidth = cards[0].offsetWidth;
    const containerWidth = document.body.clientWidth;

    // Exact centering math (Respetado línea por línea)
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

// ============================================
//  LOGO REVEAL (PARALLAX) - Tu lógica original
// ============================================
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

    container.style.transform = `scale(${0.4 + (progress * 0.75)})`;
    container.style.opacity = progress * 1.8;
    container.style.filter = `blur(${20 - (progress * 20)}px)`;
    
    if (glow) {
        glow.style.opacity = progress;
        glow.style.transform = `scale(${0.5 + progress})`;
    }

    if (aboutText) {
        let textProgress = Math.max(0, (progress - 0.25) / 0.75);
        aboutText.style.opacity = textProgress;
        aboutText.style.transform = `translateY(${30 - (textProgress * 30)}px)`;
    }
}

// ============================================
//  SERVICES (TABS + OBSERVER) - Tu lógica original
// ============================================
const observerOptions = { root: null, threshold: 0.6 };
const observerCallback = (entries) => {
    if (window.innerWidth > 1024) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tabId = entry.target.getAttribute('data-tab');
                document.querySelectorAll('.tab-trigger').forEach(t => t.classList.remove('active'));
                entry.target.classList.add('active');

                document.querySelectorAll('.visual-content').forEach(v => v.classList.remove('active'));
                const visual = document.getElementById(tabId);
                if (visual) visual.classList.add('active');
            }
        });
    }
};

const servicesObserver = new IntersectionObserver(observerCallback, observerOptions);
document.querySelectorAll('.tab-trigger').forEach(trigger => servicesObserver.observe(trigger));

// ============================================
//  LOAD & SCROLL HANDLERS
// ============================================
window.addEventListener('load', () => {
    updateCarousel();
    updateLogoReveal();

    // Hide Preloader con el delay de branding original
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
        }, 1200);
    }
});

window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        updateLogoReveal();
    });
}, { passive: true });

window.addEventListener('resize', () => {
    updateCarousel();
});
