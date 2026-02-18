lucide.createIcons();

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.toggle('active');
    const isOpen = menu.classList.contains('active');
    icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
}

// --- Lógica Carrusel (Centrado) ---
let currentSlide = 0;
const totalSlides = 3;
const viewport = document.getElementById('viewport');
const cards = document.querySelectorAll('.project-card');
const labels = document.querySelectorAll('.nav-label');

function updateCarousel() {
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

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);

// --- Logo Reveal ---
window.addEventListener('scroll', () => {
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
    glow.style.opacity = progress;
    glow.style.transform = `scale(${0.5 + progress})`;

    let textProgress = Math.max(0, (progress - 0.25) / 0.75);
    aboutText.style.opacity = textProgress;
    aboutText.style.transform = `translateY(${30 - (textProgress * 30)}px)`;
});

// --- Tabs ---
const options = { root: null, threshold: 0.6 };
const callback = (entries) => {
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
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll('.tab-trigger').forEach(trigger => observer.observe(trigger));
