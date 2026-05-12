// ===== Preloader =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.getElementById('navbar').classList.add('visible');
    }, 2200);
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

// ===== Contact Form (Telegram Bot API) =====
const TG_BOT = 'ODYwNjA3NzE1OTpBQUdPVktnOUgwWTZ5Q2xpYThVMUdGekE1dXhMZkRONzZTcw==';
const TG_CHAT = '8576708552';

const SERVICE_LABELS = {
    design: 'Дизайн-проект',
    turnkey: 'Ремонт под ключ',
    capital: 'Капитальный ремонт',
    cosmetic: 'Косметический ремонт',
    construction: 'Строительство',
    other: 'Другое'
};

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const origText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const serviceLabel = SERVICE_LABELS[service] || service || 'Не указана';
        const text =
            `📋 <b>Новая заявка с сайта HOME STROY</b>\n\n` +
            `👤 <b>Имя:</b> ${name}\n` +
            `📞 <b>Телефон:</b> ${phone}\n` +
            `🔧 <b>Услуга:</b> ${serviceLabel}\n` +
            `💬 <b>Сообщение:</b> ${message || 'Не указано'}`;

        try {
            const token = atob(TG_BOT);
            const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: TG_CHAT, text: text, parse_mode: 'HTML' })
            });
            const data = await resp.json();

            if (data.ok) {
                const formWrap = document.querySelector('.contact-form-wrap');
                formWrap.innerHTML = `
                    <div class="form-success">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        <h3>Заявка отправлена!</h3>
                        <p>Мы перезвоним вам в ближайшее время.</p>
                    </div>
                `;
            } else {
                throw new Error('Telegram API error');
            }
        } catch (err) {
            submitBtn.textContent = origText;
            submitBtn.disabled = false;
            alert('Ошибка отправки. Попробуйте позже или напишите нам в Telegram: @homestroyuz');
        }
    });
}
