/* ===== TiM TeCH — Main Script ===== */

(function () {
    'use strict';

    /* ---------- Category definitions ---------- */
    var CATEGORIES = [
        { id: 'smartphones', name: 'Смартфоны', icon: '📱' },
        { id: 'accessories', name: 'Аксессуары', icon: '🎒' },
        { id: 'peripherals', name: 'Периферия', icon: '🖱️' },
        { id: 'audio', name: 'Аудио', icon: '🎧' },
        { id: 'charging', name: 'Зарядки', icon: '⚡' },
        { id: 'smart', name: 'Умные устройства', icon: '⌚' }
    ];

    /* ---------- Default products ---------- */
    var DEFAULT_PRODUCTS = [
        {
            id: 1, name: 'iPhone 15 Pro Max 256GB', category: 'smartphones',
            price: 15990000, oldPrice: 17500000, icon: '📱',
            stock: 'in', badge: 'hot',
            description: 'Флагманский смартфон Apple с чипом A17 Pro, титановым корпусом и продвинутой камерой 48 Мп.',
            specs: { 'Чип': 'A17 Pro', 'Дисплей': '6.7" Super Retina XDR', 'Камера': '48+12+12 Мп', 'Батарея': '4422 мАч', 'Память': '256 ГБ' }
        },
        {
            id: 2, name: 'Samsung Galaxy S24 Ultra 256GB', category: 'smartphones',
            price: 14500000, oldPrice: null, icon: '📱',
            stock: 'in', badge: 'new',
            description: 'Топовый смартфон Samsung с S Pen, камерой 200 Мп и искусственным интеллектом Galaxy AI.',
            specs: { 'Чип': 'Snapdragon 8 Gen 3', 'Дисплей': '6.8" QHD+ AMOLED', 'Камера': '200+12+50+10 Мп', 'Батарея': '5000 мАч', 'Память': '256 ГБ' }
        },
        {
            id: 3, name: 'Xiaomi 14 Ultra 512GB', category: 'smartphones',
            price: 12800000, oldPrice: null, icon: '📱',
            stock: 'in', badge: null,
            description: 'Камерафон с оптикой Leica и чипом Snapdragon 8 Gen 3.',
            specs: { 'Чип': 'Snapdragon 8 Gen 3', 'Дисплей': '6.73" LTPO AMOLED', 'Камера': '50+50+50 Мп Leica', 'Батарея': '5000 мАч', 'Память': '512 ГБ' }
        },
        {
            id: 4, name: 'iPhone 14 128GB', category: 'smartphones',
            price: 9200000, oldPrice: 10500000, icon: '📱',
            stock: 'in', badge: 'sale',
            description: 'Надёжный и быстрый iPhone 14 с чипом A15 Bionic.',
            specs: { 'Чип': 'A15 Bionic', 'Дисплей': '6.1" Super Retina XDR', 'Камера': '12+12 Мп', 'Батарея': '3279 мАч', 'Память': '128 ГБ' }
        },
        {
            id: 5, name: 'Redmi Note 13 Pro 8/256GB', category: 'smartphones',
            price: 3200000, oldPrice: null, icon: '📱',
            stock: 'in', badge: null,
            description: 'Бюджетный флагман Xiaomi с камерой 200 Мп и AMOLED экраном.',
            specs: { 'Чип': 'Snapdragon 7s Gen 2', 'Дисплей': '6.67" AMOLED 120Hz', 'Камера': '200+8+2 Мп', 'Батарея': '5100 мАч', 'Память': '256 ГБ' }
        },
        {
            id: 6, name: 'Кошелёк-кардхолдер Magssory Geotag Magnetic', category: 'accessories',
            price: 450000, oldPrice: null, icon: '💳',
            stock: 'in', badge: 'new',
            description: 'Магнитный кардхолдер с технологией Apple Find My. До 6 карт, беспроводная зарядка, подставка для телефона.',
            specs: { 'Совместимость': 'MagSafe / iPhone 12+', 'Карт': 'До 6', 'Трекер': 'Apple Find My', 'Зарядка': 'Беспроводная (5 мес.)', 'Материал': 'Эко-кожа' }
        },
        {
            id: 7, name: 'Чехол MagSafe Silicone Case iPhone 15 Pro', category: 'accessories',
            price: 180000, oldPrice: 220000, icon: '🛡️',
            stock: 'in', badge: 'sale',
            description: 'Оригинальный силиконовый чехол с MagSafe для iPhone 15 Pro.',
            specs: { 'Материал': 'Силикон', 'Совместимость': 'iPhone 15 Pro', 'MagSafe': 'Да', 'Цвета': '6 вариантов' }
        },
        {
            id: 8, name: 'Защитное стекло 9D для Samsung Galaxy S24', category: 'accessories',
            price: 55000, oldPrice: null, icon: '🔲',
            stock: 'in', badge: null,
            description: 'Закалённое защитное стекло 9D с полным покрытием экрана.',
            specs: { 'Тип': '9D закалённое', 'Твёрдость': '9H', 'Покрытие': 'Полное', 'Олеофобное': 'Да' }
        },
        {
            id: 9, name: 'Сумка для ноутбука 15.6" Oxford', category: 'accessories',
            price: 290000, oldPrice: null, icon: '💼',
            stock: 'in', badge: null,
            description: 'Водонепроницаемая сумка для ноутбука до 15.6 дюймов из ткани Oxford.',
            specs: { 'Размер': 'До 15.6"', 'Материал': 'Oxford 900D', 'Защита': 'Водонепроницаемая', 'Карманы': '5' }
        },
        {
            id: 10, name: 'Rapoo MT560 Wireless Mouse', category: 'peripherals',
            price: 360000, oldPrice: null, icon: '🖱️',
            stock: 'in', badge: 'new',
            description: 'Профессиональная беспроводная мышь с мультирежимом подключения до 4 устройств. USB-C зарядка.',
            specs: { 'DPI': '600–1600', 'Подключение': 'BT 5.0/3.0, 2.4 ГГц, USB-C', 'Устройства': 'До 4', 'Автономность': '30–90 дней', 'Зарядка': 'USB-C' }
        },
        {
            id: 11, name: 'Rapoo M500 Silent Wireless Mouse', category: 'peripherals',
            price: 219000, oldPrice: null, icon: '🖱️',
            stock: 'in', badge: null,
            description: 'Бесшумная беспроводная мышь с поддержкой 3 устройств. Bluetooth + 2.4 ГГц.',
            specs: { 'DPI': '600/1000/1300/1600', 'Подключение': 'BT 3.0/4.0/5.0, 2.4 ГГц', 'Устройства': 'До 3', 'Автономность': 'До 12 мес.', 'Питание': '2xAA' }
        },
        {
            id: 12, name: 'Механическая клавиатура Rapoo V500 Pro', category: 'peripherals',
            price: 520000, oldPrice: null, icon: '⌨️',
            stock: 'order', badge: null,
            description: 'Игровая механическая клавиатура с переключателями Rapoo и RGB-подсветкой.',
            specs: { 'Тип': 'Механическая', 'Свитчи': 'Rapoo Blue/Red', 'Подсветка': 'RGB', 'Подключение': 'USB', 'Формат': 'Full-size' }
        },
        {
            id: 13, name: 'Коврик для мыши RGB XL 800x300mm', category: 'peripherals',
            price: 145000, oldPrice: null, icon: '🖥️',
            stock: 'in', badge: null,
            description: 'Большой игровой коврик с RGB-подсветкой по периметру.',
            specs: { 'Размер': '800x300x4 мм', 'Подсветка': 'RGB (14 режимов)', 'Поверхность': 'Ткань', 'Основание': 'Нескользящая резина' }
        },
        {
            id: 14, name: 'Rapoo VH160S Gaming Headset 7.1', category: 'audio',
            price: 309000, oldPrice: null, icon: '🎧',
            stock: 'in', badge: 'new',
            description: 'Игровая гарнитура с виртуальным звуком 7.1, динамиками 50 мм и RGB-подсветкой.',
            specs: { 'Динамики': '50 мм', 'Частоты': '20 Гц – 20 кГц', 'Сопротивление': '32 Ом', 'Подключение': 'USB', 'Подсветка': 'RGB' }
        },
        {
            id: 15, name: 'TWS наушники Baseus Bowie MA10', category: 'audio',
            price: 380000, oldPrice: 450000, icon: '🎵',
            stock: 'in', badge: 'sale',
            description: 'Беспроводные TWS наушники с активным шумоподавлением и низкой задержкой.',
            specs: { 'Тип': 'TWS', 'ANC': 'Да (40 дБ)', 'Автономность': '6ч + 30ч (кейс)', 'Bluetooth': '5.3', 'Кодеки': 'AAC, SBC' }
        },
        {
            id: 16, name: 'Портативная колонка JBL Clip 4', category: 'audio',
            price: 590000, oldPrice: null, icon: '🔊',
            stock: 'out', badge: null,
            description: 'Компактная водонепроницаемая колонка с карабином.',
            specs: { 'Мощность': '5 Вт', 'Автономность': '10 часов', 'Защита': 'IP67', 'Bluetooth': '5.1', 'Вес': '239 г' }
        },
        {
            id: 17, name: 'Проводные наушники Samsung AKG Type-C', category: 'audio',
            price: 95000, oldPrice: null, icon: '🎶',
            stock: 'in', badge: null,
            description: 'Оригинальные наушники Samsung с настройкой от AKG. Разъём USB Type-C.',
            specs: { 'Тип': 'Вкладыши', 'Разъём': 'USB Type-C', 'Микрофон': 'Да', 'Длина кабеля': '1.2 м' }
        },
        {
            id: 18, name: 'Зарядное устройство Baseus GaN 65W', category: 'charging',
            price: 320000, oldPrice: null, icon: '🔌',
            stock: 'in', badge: 'hot',
            description: 'Мощное GaN зарядное устройство 65W с тремя портами (2x USB-C + USB-A).',
            specs: { 'Мощность': '65W', 'Порты': '2x USB-C + USB-A', 'Технология': 'GaN III', 'PD': 'Да', 'QC': '4.0+' }
        },
        {
            id: 19, name: 'Кабель USB-C to USB-C 100W 2m', category: 'charging',
            price: 75000, oldPrice: null, icon: '🔗',
            stock: 'in', badge: null,
            description: 'Кабель USB-C 100W для быстрой зарядки ноутбуков и телефонов.',
            specs: { 'Тип': 'USB-C – USB-C', 'Мощность': '100W', 'Длина': '2 метра', 'Передача данных': 'До 480 Мбит/с' }
        },
        {
            id: 20, name: 'Беспроводная зарядка MagSafe 15W', category: 'charging',
            price: 210000, oldPrice: 250000, icon: '🔋',
            stock: 'in', badge: 'sale',
            description: 'Магнитная беспроводная зарядка 15W для iPhone 12 и новее.',
            specs: { 'Мощность': '15W', 'Совместимость': 'iPhone 12+', 'Тип': 'MagSafe', 'Кабель': 'USB-C 1m' }
        },
        {
            id: 21, name: 'Power Bank Baseus 20000mAh 65W', category: 'charging',
            price: 580000, oldPrice: null, icon: '🔋',
            stock: 'in', badge: null,
            description: 'Портативный аккумулятор 20000 мАч с мощностью 65W — заряжает даже ноутбуки.',
            specs: { 'Ёмкость': '20000 мАч', 'Мощность': '65W', 'Порты': '2x USB-C + USB-A', 'Дисплей': 'LED', 'Вес': '420 г' }
        },
        {
            id: 22, name: 'Apple Watch SE 2 (2023) 40mm', category: 'smart',
            price: 3800000, oldPrice: null, icon: '⌚',
            stock: 'in', badge: null,
            description: 'Умные часы Apple с отслеживанием здоровья, фитнеса и уведомлений.',
            specs: { 'Дисплей': '40 мм OLED', 'Чип': 'S8', 'Защита': 'WR50', 'GPS': 'Да', 'Автономность': 'До 18 ч' }
        },
        {
            id: 23, name: 'Xiaomi Smart Band 8 Pro', category: 'smart',
            price: 480000, oldPrice: null, icon: '⌚',
            stock: 'in', badge: 'new',
            description: 'Фитнес-браслет с AMOLED экраном 1.74", GPS и 150+ режимами тренировок.',
            specs: { 'Дисплей': '1.74" AMOLED', 'GPS': 'Встроенный', 'Автономность': 'До 14 дней', 'Защита': '5ATM', 'Тренировки': '150+' }
        },
        {
            id: 24, name: 'Samsung Galaxy Buds FE', category: 'audio',
            price: 850000, oldPrice: 1000000, icon: '🎧',
            stock: 'out', badge: 'sale',
            description: 'TWS наушники Samsung с ANC и фирменным звуком AKG.',
            specs: { 'Тип': 'TWS', 'ANC': 'Да', 'Автономность': '6ч + 21ч', 'Bluetooth': '5.2', 'Защита': 'IPX2' }
        },
        {
            id: 25, name: 'AirTag Apple (1 шт.)', category: 'smart',
            price: 350000, oldPrice: null, icon: '📍',
            stock: 'in', badge: null,
            description: 'Трекер Apple для отслеживания вещей через сеть Find My.',
            specs: { 'Технология': 'UWB + Bluetooth', 'Батарея': 'CR2032 (1 год)', 'Защита': 'IP67', 'Звук': 'Встроенный динамик' }
        },
        {
            id: 26, name: 'Автодержатель MagSafe для iPhone', category: 'accessories',
            price: 165000, oldPrice: null, icon: '🚗',
            stock: 'in', badge: null,
            description: 'Магнитный автомобильный держатель с MagSafe для iPhone 12 и новее.',
            specs: { 'Крепление': 'Вентиляционная решётка', 'Совместимость': 'iPhone 12+', 'Тип': 'MagSafe магнитный', 'Поворот': '360°' }
        },
        {
            id: 27, name: 'USB-хаб Baseus 7-в-1 USB-C', category: 'peripherals',
            price: 430000, oldPrice: null, icon: '🔌',
            stock: 'order', badge: null,
            description: 'Компактный USB-C хаб с HDMI, USB 3.0, SD/TF, PD 100W.',
            specs: { 'Порты': 'HDMI 4K, 2x USB 3.0, USB-C PD, SD, TF, USB 2.0', 'HDMI': '4K@30Hz', 'PD': '100W Pass-through', 'Материал': 'Алюминий' }
        },
        {
            id: 28, name: 'Веб-камера Rapoo XW2K QHD 2K', category: 'peripherals',
            price: 410000, oldPrice: null, icon: '📷',
            stock: 'in', badge: null,
            description: 'QHD веб-камера 2K с автофокусом и шумоподавлением.',
            specs: { 'Разрешение': '2K QHD (2560x1440)', 'Фокус': 'Автофокус', 'Микрофон': 'Двойной с шумоподавлением', 'FOV': '80°' }
        },
        {
            id: 29, name: 'Настольная LED лампа с беспроводной зарядкой', category: 'smart',
            price: 275000, oldPrice: 320000, icon: '💡',
            stock: 'in', badge: 'sale',
            description: 'Умная настольная лампа с тремя режимами освещения и встроенной беспроводной зарядкой.',
            specs: { 'Режимы': '3 (тёплый, нейтральный, холодный)', 'Зарядка': 'Qi 10W', 'Яркость': '5 уровней', 'Питание': 'USB-C' }
        },
        {
            id: 30, name: 'Кабель Lightning to USB-C 1m', category: 'charging',
            price: 55000, oldPrice: null, icon: '🔗',
            stock: 'in', badge: null,
            description: 'Кабель для быстрой зарядки iPhone (до 20W).',
            specs: { 'Тип': 'Lightning – USB-C', 'Мощность': 'До 20W PD', 'Длина': '1 метр', 'Сертификация': 'MFi' }
        }
    ];

    /* ---------- State ---------- */
    var products = [];
    var cart = [];
    var activeCategory = 'all';
    var activeSort = 'default';
    var onlyInStock = false;
    var visibleCount = 12;
    var ITEMS_PER_PAGE = 12;

    /* ---------- Helpers ---------- */
    function $(sel) { return document.querySelector(sel); }
    function $$(sel) { return document.querySelectorAll(sel); }
    function formatPrice(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' сум'; }

    function loadProducts() {
        var stored = localStorage.getItem('timtech_products');
        if (stored) {
            try { products = JSON.parse(stored); } catch (e) { products = DEFAULT_PRODUCTS.slice(); }
        } else {
            products = DEFAULT_PRODUCTS.slice();
        }
    }

    function saveProducts() {
        localStorage.setItem('timtech_products', JSON.stringify(products));
    }

    function loadCart() {
        var stored = localStorage.getItem('timtech_cart');
        if (stored) { try { cart = JSON.parse(stored); } catch (e) { cart = []; } }
    }

    function saveCart() {
        localStorage.setItem('timtech_cart', JSON.stringify(cart));
    }

    /* ---------- Preloader ---------- */
    function initPreloader() {
        setTimeout(function () {
            var el = $('#preloader');
            if (el) el.classList.add('hidden');
        }, 1800);
    }

    /* ---------- Header ---------- */
    function initHeader() {
        var header = $('#header');
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        var burger = $('#burger');
        var nav = $('#nav');
        burger.addEventListener('click', function () {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        $$('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                burger.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        /* Active nav on scroll */
        var sections = $$('section[id]');
        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY + 200;
            sections.forEach(function (sec) {
                var top = sec.offsetTop;
                var h = sec.offsetHeight;
                var id = sec.getAttribute('id');
                var link = $('.nav-link[href="#' + id + '"]');
                if (link) {
                    link.classList.toggle('active', scrollY >= top && scrollY < top + h);
                }
            });
        });
    }

    /* ---------- Back to top ---------- */
    function initBackToTop() {
        var btn = $('#backToTop');
        window.addEventListener('scroll', function () {
            btn.classList.toggle('visible', window.scrollY > 600);
        });
        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- Counter animation ---------- */
    function initCounters() {
        var counters = $$('.stat-number');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                var target = parseInt(el.dataset.count, 10);
                var duration = 2000;
                var start = 0;
                var startTime = null;
                function step(ts) {
                    if (!startTime) startTime = ts;
                    var progress = Math.min((ts - startTime) / duration, 1);
                    var val = Math.floor(progress * target);
                    el.textContent = val.toLocaleString('ru-RU');
                    if (progress < 1) requestAnimationFrame(step);
                    else el.textContent = target.toLocaleString('ru-RU') + '+';
                }
                requestAnimationFrame(step);
                observer.unobserve(el);
            });
        }, { threshold: 0.5 });
        counters.forEach(function (c) { observer.observe(c); });
    }

    /* ---------- Fade-in animation ---------- */
    function initFadeIn() {
        var items = $$('.fade-in');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        items.forEach(function (el) { observer.observe(el); });
    }

    /* ---------- Categories ---------- */
    function renderCategories() {
        var grid = $('#categoriesGrid');
        if (!grid) return;
        grid.innerHTML = CATEGORIES.map(function (cat) {
            var count = products.filter(function (p) { return p.category === cat.id; }).length;
            return '<div class="category-card' + (activeCategory === cat.id ? ' active' : '') + '" data-cat="' + cat.id + '">' +
                '<div class="category-icon">' + cat.icon + '</div>' +
                '<div class="category-name">' + cat.name + '</div>' +
                '<div class="category-count">' + count + ' товар' + (count === 1 ? '' : 'ов') + '</div>' +
                '</div>';
        }).join('');

        grid.querySelectorAll('.category-card').forEach(function (card) {
            card.addEventListener('click', function () {
                var cat = this.dataset.cat;
                activeCategory = (activeCategory === cat) ? 'all' : cat;
                visibleCount = ITEMS_PER_PAGE;
                renderCategories();
                renderFilters();
                renderProducts();
                document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    /* ---------- Filters ---------- */
    function renderFilters() {
        var container = $('.catalog-filters');
        if (!container) return;
        var html = '<button class="filter-btn' + (activeCategory === 'all' ? ' active' : '') + '" data-filter="all">Все</button>';
        CATEGORIES.forEach(function (cat) {
            html += '<button class="filter-btn' + (activeCategory === cat.id ? ' active' : '') + '" data-filter="' + cat.id + '">' + cat.icon + ' ' + cat.name + '</button>';
        });
        container.innerHTML = html;
        container.querySelectorAll('.filter-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                activeCategory = this.dataset.filter;
                visibleCount = ITEMS_PER_PAGE;
                renderCategories();
                renderFilters();
                renderProducts();
            });
        });
    }

    /* ---------- Products ---------- */
    function getFilteredProducts() {
        var list = products.slice();
        if (activeCategory !== 'all') {
            list = list.filter(function (p) { return p.category === activeCategory; });
        }
        if (onlyInStock) {
            list = list.filter(function (p) { return p.stock === 'in'; });
        }
        switch (activeSort) {
            case 'price-asc': list.sort(function (a, b) { return a.price - b.price; }); break;
            case 'price-desc': list.sort(function (a, b) { return b.price - a.price; }); break;
            case 'name': list.sort(function (a, b) { return a.name.localeCompare(b.name); }); break;
        }
        return list;
    }

    function stockLabel(s) {
        switch (s) {
            case 'in': return { cls: 'stock-in', text: 'В наличии' };
            case 'out': return { cls: 'stock-out', text: 'Нет в наличии' };
            case 'order': return { cls: 'stock-order', text: 'Под заказ' };
            default: return { cls: 'stock-in', text: 'В наличии' };
        }
    }

    function badgeHTML(b) {
        switch (b) {
            case 'new': return '<span class="product-badge badge-new">NEW</span>';
            case 'hot': return '<span class="product-badge badge-hot">HIT</span>';
            case 'sale': return '<span class="product-badge badge-sale">SALE</span>';
            default: return '';
        }
    }

    function renderProducts() {
        var grid = $('#productsGrid');
        var loadMoreBtn = $('#loadMore');
        if (!grid) return;
        var filtered = getFilteredProducts();
        var visible = filtered.slice(0, visibleCount);

        grid.innerHTML = visible.map(function (p) {
            var sl = stockLabel(p.stock);
            var catName = CATEGORIES.find(function (c) { return c.id === p.category; });
            return '<div class="product-card" data-id="' + p.id + '">' +
                '<div class="product-image">' +
                badgeHTML(p.badge) +
                '<span class="product-stock-badge ' + sl.cls + '">' + sl.text + '</span>' +
                '<span>' + (p.icon || '📦') + '</span>' +
                '</div>' +
                '<div class="product-info">' +
                '<div class="product-category">' + (catName ? catName.name : '') + '</div>' +
                '<div class="product-name">' + p.name + '</div>' +
                '<div class="product-price-row">' +
                '<div><span class="product-price">' + formatPrice(p.price) + '</span>' +
                (p.oldPrice ? '<span class="product-old-price">' + formatPrice(p.oldPrice) + '</span>' : '') +
                '</div>' +
                (p.stock !== 'out' ? '<button class="product-add-cart" data-id="' + p.id + '" title="В корзину"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></button>' : '') +
                '</div></div></div>';
        }).join('');

        if (loadMoreBtn) {
            loadMoreBtn.style.display = filtered.length > visibleCount ? '' : 'none';
        }

        /* Card click */
        grid.querySelectorAll('.product-card').forEach(function (card) {
            card.addEventListener('click', function (e) {
                if (e.target.closest('.product-add-cart')) return;
                var id = parseInt(this.dataset.id, 10);
                openModal(id);
            });
        });

        /* Add to cart buttons */
        grid.querySelectorAll('.product-add-cart').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                addToCart(parseInt(this.dataset.id, 10));
            });
        });
    }

    /* ---------- Load More ---------- */
    function initLoadMore() {
        var btn = $('#loadMore');
        if (btn) {
            btn.addEventListener('click', function () {
                visibleCount += ITEMS_PER_PAGE;
                renderProducts();
            });
        }
    }

    /* ---------- Sort ---------- */
    function initSort() {
        var sel = $('#sortSelect');
        if (sel) {
            sel.addEventListener('change', function () {
                activeSort = this.value;
                renderProducts();
            });
        }
    }

    /* ---------- Stock filter ---------- */
    function initStockFilter() {
        var cb = $('#stockFilter');
        if (cb) {
            cb.addEventListener('change', function () {
                onlyInStock = this.checked;
                visibleCount = ITEMS_PER_PAGE;
                renderProducts();
            });
        }
    }

    /* ---------- Product Modal ---------- */
    function openModal(id) {
        var p = products.find(function (x) { return x.id === id; });
        if (!p) return;
        var sl = stockLabel(p.stock);
        var catName = CATEGORIES.find(function (c) { return c.id === p.category; });

        $('#modalImage').textContent = p.icon || '📦';
        $('#modalCategory').textContent = catName ? catName.name : '';
        $('#modalTitle').textContent = p.name;
        $('#modalPrice').textContent = formatPrice(p.price);
        var stockEl = $('#modalStock');
        stockEl.textContent = sl.text;
        stockEl.className = 'modal-stock ' + sl.cls;
        $('#modalDescription').textContent = p.description || '';

        var specsEl = $('#modalSpecs');
        if (p.specs) {
            specsEl.innerHTML = Object.keys(p.specs).map(function (k) {
                return '<div class="modal-spec"><span class="modal-spec-label">' + k + '</span><span class="modal-spec-value">' + p.specs[k] + '</span></div>';
            }).join('');
        } else {
            specsEl.innerHTML = '';
        }

        var addCartBtn = $('#modalAddCart');
        if (p.stock === 'out') {
            addCartBtn.disabled = true;
            addCartBtn.textContent = 'Нет в наличии';
            addCartBtn.style.opacity = '0.5';
        } else {
            addCartBtn.disabled = false;
            addCartBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> В корзину';
            addCartBtn.style.opacity = '1';
            addCartBtn.onclick = function () { addToCart(id); };
        }

        $('#modalOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        $('#modalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    function initModal() {
        $('#modalClose').addEventListener('click', closeModal);
        $('#modalOverlay').addEventListener('click', function (e) {
            if (e.target === this) closeModal();
        });
    }

    /* ---------- Cart ---------- */
    function addToCart(id) {
        var existing = cart.find(function (c) { return c.id === id; });
        if (existing) { existing.qty++; }
        else { cart.push({ id: id, qty: 1 }); }
        saveCart();
        updateCartUI();
        openCart();
    }

    function updateCartUI() {
        var countEl = $('#cartCount');
        var total = cart.reduce(function (s, c) { return s + c.qty; }, 0);
        countEl.textContent = total;

        var itemsEl = $('#cartItems');
        var totalEl = $('#cartTotal');
        if (cart.length === 0) {
            itemsEl.innerHTML = '<div class="cart-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><p>Корзина пуста</p></div>';
            totalEl.textContent = '0 сум';
            return;
        }

        var sum = 0;
        itemsEl.innerHTML = cart.map(function (c) {
            var p = products.find(function (x) { return x.id === c.id; });
            if (!p) return '';
            sum += p.price * c.qty;
            return '<div class="cart-item">' +
                '<div class="cart-item-icon">' + (p.icon || '📦') + '</div>' +
                '<div class="cart-item-info"><h4>' + p.name + '</h4>' +
                '<div class="cart-item-price">' + formatPrice(p.price) + '</div>' +
                '<div class="cart-item-controls">' +
                '<button data-action="dec" data-id="' + c.id + '">−</button>' +
                '<span class="cart-item-qty">' + c.qty + '</span>' +
                '<button data-action="inc" data-id="' + c.id + '">+</button>' +
                '</div></div>' +
                '<button class="cart-item-remove" data-action="remove" data-id="' + c.id + '">&times;</button>' +
                '</div>';
        }).join('');
        totalEl.textContent = formatPrice(sum);

        itemsEl.querySelectorAll('button[data-action]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var id = parseInt(this.dataset.id, 10);
                var action = this.dataset.action;
                var item = cart.find(function (c) { return c.id === id; });
                if (!item) return;
                if (action === 'inc') item.qty++;
                else if (action === 'dec') { item.qty--; if (item.qty <= 0) cart = cart.filter(function (c) { return c.id !== id; }); }
                else if (action === 'remove') { cart = cart.filter(function (c) { return c.id !== id; }); }
                saveCart();
                updateCartUI();
            });
        });
    }

    function openCart() {
        $('#cartSidebar').classList.add('active');
        $('#cartOverlay').classList.add('active');
    }

    function closeCart() {
        $('#cartSidebar').classList.remove('active');
        $('#cartOverlay').classList.remove('active');
    }

    function initCart() {
        $('#cartIcon').addEventListener('click', openCart);
        $('#cartClose').addEventListener('click', closeCart);
        $('#cartOverlay').addEventListener('click', closeCart);
    }

    /* ---------- Search ---------- */
    function initSearch() {
        var overlay = $('#searchOverlay');
        var input = $('#searchInputOverlay');
        var results = $('#searchResultsOverlay');

        $('#searchToggle').addEventListener('click', function () {
            overlay.classList.add('active');
            setTimeout(function () { input.focus(); }, 100);
        });

        $('#searchClose').addEventListener('click', function () {
            overlay.classList.remove('active');
            input.value = '';
            results.innerHTML = '';
        });

        input.addEventListener('input', function () {
            var q = this.value.toLowerCase().trim();
            if (q.length < 2) { results.innerHTML = ''; return; }
            var found = products.filter(function (p) {
                return p.name.toLowerCase().indexOf(q) !== -1 ||
                    (p.description && p.description.toLowerCase().indexOf(q) !== -1);
            }).slice(0, 10);
            results.innerHTML = found.map(function (p) {
                return '<div class="search-result-item" data-id="' + p.id + '">' +
                    '<div class="search-result-icon">' + (p.icon || '📦') + '</div>' +
                    '<div class="search-result-info"><h4>' + p.name + '</h4><p>' + formatPrice(p.price) + '</p></div></div>';
            }).join('') || '<div style="text-align:center;padding:2rem;color:var(--text-muted)">Ничего не найдено</div>';

            results.querySelectorAll('.search-result-item').forEach(function (item) {
                item.addEventListener('click', function () {
                    overlay.classList.remove('active');
                    input.value = '';
                    results.innerHTML = '';
                    openModal(parseInt(this.dataset.id, 10));
                });
            });
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                overlay.classList.remove('active');
                closeModal();
            }
        });
    }

    /* ---------- Footer category links ---------- */
    function initFooterLinks() {
        $$('.footer-links a[data-cat]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                activeCategory = this.dataset.cat;
                visibleCount = ITEMS_PER_PAGE;
                renderCategories();
                renderFilters();
                renderProducts();
                document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    /* ---------- Init ---------- */
    function init() {
        loadProducts();
        loadCart();
        initPreloader();
        initHeader();
        initBackToTop();
        initCounters();
        renderCategories();
        renderFilters();
        renderProducts();
        initLoadMore();
        initSort();
        initStockFilter();
        initModal();
        initCart();
        initSearch();
        initFooterLinks();
        updateCartUI();
        initFadeIn();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    /* ---------- Export for admin ---------- */
    window.TimTech = {
        getProducts: function () { return products; },
        setProducts: function (p) { products = p; saveProducts(); },
        CATEGORIES: CATEGORIES,
        DEFAULT_PRODUCTS: DEFAULT_PRODUCTS
    };
})();
