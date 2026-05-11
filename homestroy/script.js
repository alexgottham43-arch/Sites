// ===== Preloader =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1800);
});

// ===== Navbar Scroll =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// ===== Mobile Menu =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const position = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
    });
});

// ===== Counter Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        if (counter.dataset.animated) return;
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            counter.dataset.animated = 'true';
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const update = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            };
            update();
        }
    });
}

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', () => setTimeout(animateCounters, 2000));

// ===== Reveal on Scroll =====
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

// Add reveal class to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll(
        '.about, .services, .portfolio, .process, .stats, .styles, .contact'
    );
    sections.forEach(section => {
        const children = section.querySelectorAll(
            '.section-header, .about-grid, .services-grid > *, .portfolio-card, ' +
            '.process-step, .stat-item, .style-card, .contact-wrapper, .portfolio-cta'
        );
        children.forEach((child, i) => {
            child.classList.add('reveal');
            child.style.transitionDelay = `${i * 0.1}s`;
        });
    });

    revealElements();
});

window.addEventListener('scroll', revealElements);

// ===== Active Nav Link =====
const navSections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 200;
    navSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (navLink) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLink.style.color = '#c8a45c';
                navLink.style.fontWeight = '600';
            } else {
                navLink.style.color = '';
                navLink.style.fontWeight = '';
            }
        }
    });
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const text = `Новая заявка с сайта HOME STROY:%0A` +
            `Имя: ${name}%0A` +
            `Телефон: ${phone}%0A` +
            `Услуга: ${service || 'Не указана'}%0A` +
            `Сообщение: ${message || 'Не указано'}`;

        window.open(`https://t.me/homestroyuz?text=${text}`, '_blank');

        const formWrap = document.querySelector('.contact-form-wrap');
        formWrap.innerHTML = `
            <div class="form-success">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Заявка отправлена!</h3>
                <p>Мы перезвоним вам в ближайшее время для обсуждения деталей вашего проекта.</p>
            </div>
        `;
    });
}

// ===== Parallax Effect on Hero =====
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
        }
    }
});
