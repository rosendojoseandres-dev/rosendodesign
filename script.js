lucide.createIcons();

// MENU MOVIL CORREGIDO
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

// LOGO REVEAL ON SCROLL
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
    glow.style.opacity = progress;
    glow.style.transform = `scale(${0.5 + progress})`;

    let textProgress = Math.max(0, (progress - 0.25) / 0.75);
    aboutText.style.opacity = textProgress;
    aboutText.style.transform = `translateY(${30 - (textProgress * 30)}px)`;
}

// PRELOADER & SCROLL
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => loader.classList.add('loader-hidden'), 1200);
    }
    updateLogoReveal();
});

window.addEventListener('scroll', () => {
    requestAnimationFrame(updateLogoReveal);
});

// OBSERVER PARA TABS (ESCRITORIO)
const observer = new IntersectionObserver((entries) => {
    if (window.innerWidth > 1024) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('data-tab');
                document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
                entry.target.classList.add('active');
                document.querySelectorAll('.visual-content').forEach(v => v.classList.remove('active'));
                document.getElementById(id).classList.add('active');
            }
        });
    }
}, { threshold: 0.6 });

document.querySelectorAll('.tab-trigger').forEach(t => observer.observe(t));
