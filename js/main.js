(() => {
  'use strict';

  const T = {
    ru: {
      'nav.about': 'Обо мне', 'nav.works': 'Работы', 'nav.stack': 'Стек', 'nav.telemetry': 'Телеметрия', 'nav.path': 'Путь', 'nav.ach': 'Достижения', 'nav.console': 'Консоль', 'nav.contact': 'Связь',
      'path.t': 'Путь', 'path.sub': 'Как я пришёл к безопасности',
      'path.1y': '2022', 'path.1t': 'Первые шаги', 'path.1': 'Разобрал сеть дома: Wireshark, ping, первые пакеты.',
      'path.2y': '2023', 'path.2t': 'CTF и веб', 'path.2': 'Первые CTF, OWASP Top 10, разбор чужих райтапов по вечерам.',
      'path.3y': '2024', 'path.3t': 'Инструменты', 'path.3': 'Свои сканеры и автоматизация разведки на Python.',
      'path.4y': '2026', 'path.4t': 'Red team', 'path.4': 'Пентесты в лабораториях, разбор CVE и отчёты, понятные не только технарям.',
      'ach.t': 'Достижения', 'ach.sub': 'Цифры за время практики',
      'ach.1': 'CTF-задач решено', 'ach.2': 'райтапов опубликовано', 'ach.3': 'уязвимостей найдено', 'ach.4': 'часов практики',
      'con.t': 'Консоль', 'con.sub': 'Попробуйте команду help',
      'hero.eyebrow': 'открыт к red team · 2026', 'hero.hi': 'Привет, я', 'hero.btn1': 'Смотреть работы', 'hero.btn2': 'Написать',
      'hero.lead': 'Пентесты, исследование уязвимостей и red team. Ломаю системы, чтобы их починили, и пишу инструменты, которыми это делается.',
      'mini.nmap': 'Nmap-сканов', 'mini.sqli': 'SQLi найдено', 'mini.cve': 'CVE разобрано', 'hud.pps': 'пакетов/сек',
      'about.t': 'Обо мне', 'about.sub': 'Люблю понимать, как всё устроено изнутри',
      'about.p1': 'Энтузиаст кибербезопасности. Больше всего интересуют веб-уязвимости, сетевые атаки и эксплуатация.',
      'about.p2': 'Участвую в CTF, пишу райтапы и инструменты разведки. Верю, что безопасность строится на понимании атаки.',
      'about.l1t': 'Этика прежде всего.', 'about.l1': 'Тестирую только то, на что есть разрешение.',
      'about.l2t': 'Автоматизация.', 'about.l2': 'Скрипты там, где руками долго.',
      'about.l3t': 'Понятные отчёты.', 'about.l3': 'Находка без воспроизведения ничего не стоит.',
      'works.t': 'Работы', 'works.sub': 'Инструменты и проекты, которые реально запускаются',
      'flt.all': 'Все', 'flt.net': 'Сеть', 'more': 'подробнее →', 'open': 'Смотреть проект',
      'stack.t': 'Стек', 'stack.sub': 'Инструменты, с которыми работаю каждый день',
      'stack.c1': '// Пентест', 'stack.c2': '// Сети', 'stack.c3': '// Программирование', 'stack.c4': '// Эксплойты и RE',
      'tel.t': 'Телеметрия', 'tel.sub': 'Моя активность в киберпространстве',
      'tel.tools': 'Инструменты', 'tel.tool': 'Инструмент', 'tel.runs': 'Запусков', 'tel.lvl': 'Уровень',
      'tel.cats': 'Категории', 'tel.cat': 'Категория', 'tel.count': 'Кол-во', 'tel.rate': 'Успех', 'tel.feed': 'Live threat feed',
      'cn.t': 'Связь', 'cn.sub': 'Давай поговорим о безопасности', 'cn.name': 'Имя', 'cn.msg': 'Сообщение', 'cn.send': 'Отправить',
      'cn.sent': 'Сообщение готово к отправке (подключите обработчик формы).',
      'ft': '© 2026 NetPacketNode · Stay curious, stay ethical',
      'roles': ['Энтузиаст кибербезопасности', 'Пентестер', 'Red Team оператор', 'Охотник за багами', 'Разработчик эксплойтов', 'CTF игрок'],
      'ticker': ['Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'Python', 'Ghidra', 'Scapy', 'OWASP Top 10', 'CTF', 'Active Directory']
    },
    en: {
      'nav.about': 'About', 'nav.works': 'Works', 'nav.stack': 'Stack', 'nav.telemetry': 'Telemetry', 'nav.path': 'Path', 'nav.ach': 'Achievements', 'nav.console': 'Console', 'nav.contact': 'Contact',
      'path.t': 'Path', 'path.sub': 'How I got into security',
      'path.1y': '2022', 'path.1t': 'First steps', 'path.1': 'Poked around my home network: Wireshark, ping, first packets.',
      'path.2y': '2023', 'path.2t': 'CTFs and web', 'path.2': 'First CTFs, OWASP Top 10, reading other people\'s writeups every evening.',
      'path.3y': '2024', 'path.3t': 'Tooling', 'path.3': 'Own scanners and recon automation in Python.',
      'path.4y': '2026', 'path.4t': 'Red team', 'path.4': 'Lab pentests, CVE research and reports that make sense to non-engineers too.',
      'ach.t': 'Achievements', 'ach.sub': 'Numbers from my practice',
      'ach.1': 'CTF challenges solved', 'ach.2': 'writeups published', 'ach.3': 'vulnerabilities found', 'ach.4': 'practice hours',
      'con.t': 'Console', 'con.sub': 'Try the help command',
      'hero.eyebrow': 'open for red team · 2026', 'hero.hi': "Hello, I'm", 'hero.btn1': 'See works', 'hero.btn2': 'Write to me',
      'hero.lead': 'Pentesting, vulnerability research and red team. I break systems so they can be fixed, and build the tools that do it.',
      'mini.nmap': 'Nmap scans', 'mini.sqli': 'SQLi found', 'mini.cve': 'CVEs reviewed', 'hud.pps': 'packets/sec',
      'about.t': 'About Me', 'about.sub': 'I like understanding how things work from the inside',
      'about.p1': 'Cybersecurity enthusiast. Most interested in web vulnerabilities, network attacks and exploitation.',
      'about.p2': 'I play CTFs, write writeups and recon tools. I believe security is built on understanding attacks.',
      'about.l1t': 'Ethics first.', 'about.l1': 'I only test what I am authorized to test.',
      'about.l2t': 'Automation.', 'about.l2': 'Scripts wherever doing it by hand takes too long.',
      'about.l3t': 'Clear reports.', 'about.l3': 'A finding that cannot be reproduced is worth nothing.',
      'works.t': 'Works', 'works.sub': 'Tools and projects that actually run',
      'flt.all': 'All', 'flt.net': 'Network', 'more': 'details →', 'open': 'View project',
      'stack.t': 'Stack', 'stack.sub': 'Tools I use every day',
      'stack.c1': '// Pentesting', 'stack.c2': '// Network', 'stack.c3': '// Programming', 'stack.c4': '// Exploits & RE',
      'tel.t': 'Telemetry', 'tel.sub': 'My activity in cyberspace',
      'tel.tools': 'Tools', 'tel.tool': 'Tool', 'tel.runs': 'Runs', 'tel.lvl': 'Level',
      'tel.cats': 'Categories', 'tel.cat': 'Category', 'tel.count': 'Count', 'tel.rate': 'Success', 'tel.feed': 'Live threat feed',
      'cn.t': 'Contact', 'cn.sub': "Let's talk about security", 'cn.name': 'Name', 'cn.msg': 'Message', 'cn.send': 'Send',
      'cn.sent': 'Message is ready to send (connect a form handler).',
      'ft': '© 2026 NetPacketNode · Stay curious, stay ethical',
      'roles': ['Cybersecurity Enthusiast', 'Penetration Tester', 'Red Team Operator', 'Bug Hunter', 'Exploit Developer', 'CTF Player'],
      'ticker': ['Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'Python', 'Ghidra', 'Scapy', 'OWASP Top 10', 'CTF', 'Active Directory']
    }
  };

  const WORKS = [
    { id: 'cyberscope', cat: 'python net', c: '#ff3b3b', year: '2026',
      title: 'CyberScope', tag: { ru: 'Recon-сканер', en: 'Recon scanner' },
      desc: { ru: 'Nmap + dnsrecon в одном конвейере, HTML-отчёты с дашбордом.', en: 'Nmap + dnsrecon in one pipeline, HTML reports with a dashboard.' },
      long: { ru: ['Разведка подсети за минуты.', 'Объединяет Nmap, Sublist3r и dnsrecon.', 'Живой дашборд и PDF-отчёт.'], en: ['Full subnet recon in minutes.', 'Combines Nmap, Sublist3r and dnsrecon.', 'Live dashboard and PDF report.'] },
      stack: ['Python', 'Nmap', 'AsyncIO'], icon: 'radar' },
    { id: 'vulnhunter', cat: 'python web', c: '#ff6b6b', year: '2026',
      title: 'VulnHunter', tag: { ru: 'CVE-краулер', en: 'CVE crawler' },
      desc: { ru: 'Собирает данные из NVD и Exploit-DB, приоритизирует по CVSS.', en: 'Collects data from NVD and Exploit-DB, prioritizes by CVSS.' },
      long: { ru: ['Сбор из NVD, CVE Details и Exploit-DB.', 'Сопоставление стека через YAML.', 'Приоритизация по CVSS.'], en: ['Data from NVD, CVE Details and Exploit-DB.', 'Stack matching via YAML.', 'CVSS-based prioritization.'] },
      stack: ['Python', 'CVE API', 'CLI'], icon: 'shield' },
    { id: 'shadowpass', cat: 'web', c: '#ff8a65', year: '2026',
      title: 'ShadowPass', tag: { ru: 'Анализ паролей', en: 'Password analysis' },
      desc: { ru: 'Оценка энтропии, проверка утечек через HIBP API.', en: 'Entropy scoring and breach checks via HIBP API.' },
      long: { ru: ['Оценка энтропии и визуальный индикатор.', 'Проверка через HaveIBeenPwned API v3.', 'Генератор парольных фраз.'], en: ['Entropy scoring with a visual meter.', 'HaveIBeenPwned API v3 check.', 'Passphrase generator.'] },
      stack: ['JavaScript', 'Node.js', 'Crypto'], icon: 'key' },
    { id: 'adlab', cat: 'net', c: '#e11d48', year: '2026',
      title: 'ADLab', tag: { ru: 'AD-стенд', en: 'AD lab' },
      desc: { ru: 'Docker-стенд Active Directory с типовыми misconfig.', en: 'Docker-compose Active Directory lab with typical misconfigs.' },
      long: { ru: ['Windows Server DC и клиенты в Compose.', 'Типовые ошибки конфигурации.', 'Playbooks для атак и защиты.'], en: ['Windows Server DCs and clients in Compose.', 'Common misconfigurations.', 'Attack and defense playbooks.'] },
      stack: ['Docker', 'Active Directory', 'Kali'], icon: 'nodes' },
    { id: 'phishtrap', cat: 'web', c: '#ff4d6d', year: '2026',
      title: 'PhishTrap', tag: { ru: 'Фишинг-тренинг', en: 'Phishing training' },
      desc: { ru: 'Симуляции фишинга для обучения сотрудников.', en: 'Phishing simulations for staff training.' },
      long: { ru: ['Реалистичные лендинги.', 'Трекинг открытий и кликов.', 'Только с письменного разрешения!'], en: ['Realistic landing pages.', 'Open and click tracking.', 'Authorized use only!'] },
      stack: ['Go', 'Templates', 'SMTP'], icon: 'hook' },
    { id: 'packetweaver', cat: 'python net', c: '#fca5a5', year: '2026',
      title: 'PacketWeaver', tag: { ru: 'Сырые пакеты', en: 'Raw packets' },
      desc: { ru: 'Конструктор пакетов на Scapy, экспорт в PCAP.', en: 'Packet crafting on Scapy, export to PCAP.' },
      long: { ru: ['Формирование и отправка сырых пакетов.', 'Экспорт трафика в PCAP.', 'Только в лабораторных сетях!'], en: ['Craft and send raw packets.', 'Export traffic as PCAP.', 'Lab networks only!'] },
      stack: ['Python', 'Scapy', 'PCAP'], icon: 'wave' }
  ];

  const LINKS = {
    cyberscope: [{ ru: 'Инструкция', en: 'Guide', href: 'cyberscope.html' }, { ru: 'Код', en: 'Code', href: 'https://github.com/NetPacketNode/CyberScope' }],
    vulnhunter: [{ ru: 'Код', en: 'Code' }, { ru: 'Райтап', en: 'Writeup' }],
    shadowpass: [{ ru: 'Код', en: 'Code' }, { ru: 'Демо', en: 'Demo' }],
    adlab: [{ ru: 'Райтап', en: 'Writeup' }],
    phishtrap: [{ ru: 'Райтап', en: 'Writeup' }],
    packetweaver: [{ ru: 'Код', en: 'Code' }]
  };

  const ICONS = {
    radar: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 12L19 7" stroke="currentColor" stroke-width="1.8"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    key: '<circle cx="8" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11.5 12H21M17 12v3M20 12v2" stroke="currentColor" stroke-width="1.5"/>',
    nodes: '<circle cx="6" cy="6" r="2.5" fill="currentColor"/><circle cx="18" cy="6" r="2.5" fill="currentColor"/><circle cx="12" cy="18" r="2.5" fill="currentColor"/><path d="M6 6L18 6M6 6L12 18M18 6L12 18" stroke="currentColor" stroke-width="1.3"/>',
    hook: '<path d="M4 12h10a4 4 0 110 8h-2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="16" cy="6" r="2.5" fill="currentColor"/>',
    wave: '<path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0 2 0 2 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
  };

  let lang = 'ru';
  let filter = 'all';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  $$('.hero__title > span:not(.grad)').forEach(s => {
    s.innerHTML = s.textContent.split(' ').map((w, i) => `<span class="word" style="--i:${i}">${w}</span>`).join(' ');
  });
  $$('.hero__title > .grad').forEach(s => s.classList.add('word'));
  $$('.hero__title .word').forEach((w, i) => w.style.setProperty('--i', i));
  const fmt = n => Math.round(n).toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyLang() {
    const t = T[lang];
    $$('[data-i18n]').forEach(el => { const v = t[el.dataset.i18n]; if (typeof v === 'string') el.textContent = v; });
    $('#langBtn').textContent = lang === 'ru' ? 'EN' : 'RU';
    document.documentElement.lang = lang;
    buildMarquee();
    renderWorks();
    $$('.head h2').forEach(splitChars);
    typeIdx = 0; typeChr = 0; typeDel = false;
  }

  function splitChars(el) {
    const text = el.textContent;
    el.setAttribute('aria-label', text);
    el.textContent = '';
    [...text].forEach((c, i) => {
      const s = document.createElement('span');
      s.className = 'ch';
      s.setAttribute('aria-hidden', 'true');
      s.style.setProperty('--i', i);
      s.textContent = c === ' ' ? ' ' : c;
      el.appendChild(s);
    });
  }

  $('#langBtn').addEventListener('click', () => { lang = lang === 'ru' ? 'en' : 'ru'; applyLang(); });

  function setTheme(light) {
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
    try { localStorage.setItem('npn-theme', light ? 'light' : 'dark'); } catch (e) {}
  }
  $('#themeBtn').addEventListener('click', () => setTheme(document.documentElement.dataset.theme !== 'light'));
  try { setTheme(localStorage.getItem('npn-theme') === 'light'); } catch (e) {}

  const burger = $('#burger'), links = $('#navLinks');
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); burger.classList.remove('open');
  }));

  let typeIdx = 0, typeChr = 0, typeDel = false;
  function typeLoop() {
    const roles = T[lang].roles;
    const word = roles[typeIdx % roles.length];
    typeChr += typeDel ? -1 : 1;
    $('#typed').textContent = word.slice(0, typeChr);
    let delay = typeDel ? 35 : 80;
    if (!typeDel && typeChr === word.length) { delay = 1800; typeDel = true; }
    else if (typeDel && typeChr <= 0) { typeDel = false; typeIdx = (typeIdx + 1) % roles.length; delay = 300; }
    setTimeout(typeLoop, delay);
  }
  typeLoop();

  function buildMarquee() {
    const items = T[lang].ticker.map(s => `<span>${s}</span><span>◆</span>`).join('');
    $('#marquee').innerHTML = items + items;
  }

  function iconSvg(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
  }

  function renderWorks() {
    const grid = $('#worksGrid');
    grid.innerHTML = '';
    WORKS.forEach((w, i) => {
      const el = document.createElement('article');
      el.className = 'card work reveal';
      el.dataset.cat = w.cat;
      el.style.setProperty('--c', w.c);
      el.innerHTML = `
        <div class="work__cover">
          <div class="work__ph" style="color:${w.c}">${iconSvg(w.icon)}</div>
        </div>
        <div class="work__body">
          <div class="work__meta"><span>${String(i + 1).padStart(2, '0')}</span><span>${w.year}</span></div>
          <h3>${w.title}</h3>
          <p>${w.desc[lang]}</p>
          <div class="tags">${w.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div>
          <div class="work__actions">
            <button class="work__btn work__btn--primary" type="button">${T[lang].open} →</button>
            ${(LINKS[w.id] || []).map(l => `<a class="work__btn" href="${l.href || '#'}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${l[lang]} ↗</a>`).join('')}
          </div>
        </div>`;
      el.style.transitionDelay = (i % 3) * 110 + 'ms';
      splitChars(el.querySelector('h3'));
      el.addEventListener('click', e => { if (!e.target.closest('a')) openModal(w); });
      el.addEventListener('mousemove', e => tilt(el, e));
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
      grid.appendChild(el);
    });
    applyFilter();
    observeReveal($$('.work', grid));
  }

  function applyFilter() {
    $$('.work').forEach(el => {
      const show = filter === 'all' || el.dataset.cat.split(' ').includes(filter);
      el.classList.toggle('is-hidden', !show);
    });
  }

  $('#filters').addEventListener('click', e => {
    const b = e.target.closest('.filter');
    if (!b) return;
    filter = b.dataset.filter;
    $$('.filter').forEach(x => x.classList.toggle('is-active', x === b));
    applyFilter();
  });

  function tilt(el, e) {
    if (reduced) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 9}deg) rotateY(${(x - 0.5) * 11}deg) translateY(-6px)`;
    el.style.setProperty('--mx', x * 100 + '%');
    el.style.setProperty('--my', y * 100 + '%');
  }

  $$('.card').forEach(c => c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  const modal = $('#modal');
  function openModal(w) {
    $('#mTitle').textContent = w.title;
    splitChars($('#mTitle'));
    $('#mMedia').innerHTML = `<div class="work__ph" style="color:${w.c};width:100%;height:100%">${iconSvg(w.icon)}</div>`;
    const body = $('#mBody');
    body.innerHTML = '';
    w.long[lang].forEach(line => { const p = document.createElement('p'); p.textContent = line; body.appendChild(p); });
    const tags = document.createElement('div');
    tags.className = 'tags';
    w.stack.forEach(s => { const t = document.createElement('span'); t.className = 'tag'; t.textContent = s; tags.appendChild(t); });
    body.appendChild(tags);
    const actions = document.createElement('div');
    actions.className = 'work__actions';
    (LINKS[w.id] || []).forEach(l => {
      const a = document.createElement('a');
      a.className = 'work__btn';
      a.href = l.href || '#';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = l[lang] + ' ↗';
      actions.appendChild(a);
    });
    body.appendChild(actions);
    modal.classList.add('show');
    document.body.classList.add('is-locked');
    $('#modalX').focus();
  }
  function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('is-locked');
  }
  $('#modalX').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  $('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button[type="submit"]');
    const prev = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => { btn.textContent = prev; e.currentTarget.reset(); }, 1600);
  });

  const TERM = [
    ['ok', '[+] ARP reply 10.0.0.1 → aa:bb:cc:dd:ee:01'],
    ['info', '[*] nmap -sS -p- 10.0.0.0/24 started'],
    ['warn', '[!] Port 22/tcp open · OpenSSH 8.9'],
    ['ok', '[+] Credential spray: 0 valid (rate limit ok)'],
    ['dim', '[.] Sublist3r: 214 subdomains resolved'],
    ['info', '[*] NVD sync: 38 new CVEs ingested'],
    ['warn', '[!] SQLi candidate on /search?q= (confirmed in lab)'],
    ['ok', '[+] Report generated → out/cyberscope.html'],
    ['dim', '[.] Scapy: pcap written 2.3 MB'],
    ['ok', '[+] Shell dropped in lab VM (authorized)']
  ];
  const termLog = $('#termLog');
  let ti = 0;
  function pushTerm() {
    const [cls, txt] = TERM[ti++ % TERM.length];
    const d = document.createElement('div');
    d.className = cls;
    d.textContent = `${new Date().toTimeString().slice(0, 8)}  ${txt}`;
    termLog.appendChild(d);
    while (termLog.children.length > 12) termLog.firstChild.remove();
  }
  for (let k = 0; k < 4; k++) pushTerm();
  setInterval(pushTerm, 1400);

  const FEED = [
    'SYN flood blocked · 185.23.11.4',
    'Brute force detected · ssh://lab-02',
    'Phish URL flagged · trap.example',
    'Exploit signature matched · CVE-2024-3094',
    'Port scan dropped · 10.0.0.77',
    'Malformed TLS hello quarantined'
  ];
  const feed = $('#feed');
  function pushFeed() {
    const d = document.createElement('div');
    d.innerHTML = `<span class="dim">${new Date().toTimeString().slice(0, 8)}</span> <span class="warn">▲</span> ${FEED[Math.floor(Math.random() * FEED.length)]}`;
    feed.appendChild(d);
    while (feed.children.length > 7) feed.firstChild.remove();
  }
  for (let k = 0; k < 4; k++) pushFeed();
  setInterval(pushFeed, 1900);

  let pps = 1240;
  setInterval(() => {
    pps = Math.max(800, pps + Math.round((Math.random() - 0.45) * 180));
    $('#pps').textContent = fmt(pps);
  }, 800);

  function countUp(el) {
    const target = +el.dataset.count, t0 = performance.now(), dur = 1800;
    (function step(now) {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = fmt(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step); else el.textContent = fmt(target);
    })(t0);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add('in');
      if (el.style.transitionDelay) setTimeout(() => { el.style.transitionDelay = ''; }, 1500);
      $$('.skill__track i', el).forEach(i => { i.style.width = i.dataset.w + '%'; });
      $$('[data-count]', el).forEach(c => { if (!c.dataset.done) { c.dataset.done = 1; countUp(c); } });
      io.unobserve(el);
    });
  }, { threshold: 0.15 });

  function observeReveal(list) { list.forEach(el => io.observe(el)); }

  observeReveal($$('.reveal'));
  $$('.stack .card, .hero__mini, .telemetry .card').forEach(el => io.observe(el));
  $$('.hero__mini').forEach(h => { h.querySelectorAll('[data-count]').forEach(c => { if (!c.dataset.done) { c.dataset.done = 1; countUp(c); } }); });

  const bar = $('#progress'), totop = $('#totop');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
    totop.classList.toggle('show', scrollY > 600);
  }, { passive: true });
  totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const dot = $('#cursorDot'), ring = $('#cursorRing');
  let mx = -100, my = -100, rx = -100, ry = -100;
  if (matchMedia('(pointer:fine)').matches) {
    document.documentElement.classList.add('has-cursor');
    addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    document.addEventListener('mouseover', e => ring.classList.toggle('hot', !!e.target.closest('a,button,.card,.work')));
    (function loop() {
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
  }

  const av = $('#avatar');
  if (av && matchMedia('(pointer:fine)').matches && !reduced) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', e => {
      const r = av.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const near = Math.hypot(dx, dy) < 560;
      tx = near ? Math.max(-1, Math.min(1, dx / (r.width / 2))) : 0;
      ty = near ? Math.max(-1, Math.min(1, dy / (r.height / 2))) : 0;
    });
    (function tiltLoop() {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      av.style.transform = `rotateX(${-cy * 14}deg) rotateY(${cx * 18}deg)`;
      requestAnimationFrame(tiltLoop);
    })();
  }

  document.addEventListener('pointerdown', e => {
    const t = e.target.closest('.btn,.work__btn,.chip,.filter,.totop');
    if (!t || reduced) return;
    const r = t.getBoundingClientRect(), s = Math.max(r.width, r.height);
    const d = document.createElement('span');
    d.className = 'ripple';
    d.style.width = d.style.height = s * 2 + 'px';
    d.style.left = e.clientX - r.left - s + 'px';
    d.style.top = e.clientY - r.top - s + 'px';
    t.appendChild(d);
    d.addEventListener('animationend', () => d.remove());
  });

  $$('.works, .ach, .stack, .telemetry, .about__list, .timeline, .contact__links').forEach(g => {
    Array.from(g.children).forEach((c, i) => {
      if (c.classList.contains('reveal')) c.style.transitionDelay = (i % 4) * 100 + 'ms';
    });
  });

  $$('.magnetic, .btn').forEach(b => {
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      b.style.transform = `translate(${x * 0.12}px,${y * 0.2}px)`;
    });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
  });

  const canvas = $('#bg'), ctx = canvas.getContext('2d');
  let W = 0, H = 0, nodes = [];
  const mouse = { x: -9999, y: -9999 };
  function resize() {
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
    const n = Math.min(70, Math.floor(W * H / 22000));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3
    }));
  }
  addEventListener('resize', resize);
  addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  resize();

  (function frame() {
    const rgb = document.documentElement.dataset.theme === 'light' ? '200,30,30' : '255,59,59';
    ctx.clearRect(0, 0, W, H);
    for (const p of nodes) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    const max = 150 * 150;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
        if (d < max) {
          ctx.strokeStyle = `rgba(${rgb},${(1 - d / max) * 0.22})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const mx2 = a.x - mouse.x, my2 = a.y - mouse.y;
      if (mx2 * mx2 + my2 * my2 < 22500) {
        ctx.strokeStyle = 'rgba(255,92,92,.35)';
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = `rgba(${rgb},.7)`;
      ctx.fillRect(a.x - 1, a.y - 1, 2, 2);
    }
    requestAnimationFrame(frame);
  })();

  const avImg = $('.avatar img');
  const hideFallback = () => { const f = $('.avatar__fallback'); if (f) f.style.display = 'none'; };
  if (avImg) {
    if (avImg.complete && avImg.naturalWidth > 0) hideFallback();
    avImg.addEventListener('load', hideFallback);
  }

  const conOut = $('#conOut'), conIn = $('#conIn'), conForm = $('#conForm');
  const CON_CMDS = {
    help: {
      ru: ['help — список команд', 'whoami — кто я', 'skills — стек', 'projects — проекты', 'contact — связь', 'clear — очистить экран'],
      en: ['help — list commands', 'whoami — who I am', 'skills — stack', 'projects — projects', 'contact — contact', 'clear — clear screen']
    },
    whoami: {
      ru: ['NetPacketNode — пентестер, red team, CTF-игрок.'],
      en: ['NetPacketNode — pentester, red team, CTF player.']
    },
    skills: {
      ru: ['Python · Nmap · Burp Suite · Wireshark · Ghidra · Scapy'],
      en: ['Python · Nmap · Burp Suite · Wireshark · Ghidra · Scapy']
    },
    contact: {
      ru: ['email: netpacketnode@example.com'],
      en: ['email: netpacketnode@example.com']
    }
  };
  function conLine(text, cls) {
    const d = document.createElement('div');
    d.className = cls || '';
    d.textContent = text;
    conOut.appendChild(d);
    conOut.scrollTop = conOut.scrollHeight;
  }
  conForm.addEventListener('submit', e => {
    e.preventDefault();
    const cmd = conIn.value.trim().toLowerCase();
    conIn.value = '';
    if (!cmd) return;
    conLine('$ ' + cmd, 'info');
    if (cmd === 'clear') { conOut.innerHTML = ''; return; }
    if (cmd === 'projects') { conLine(WORKS.map(w => w.title).join(' · '), 'ok'); return; }
    if (Object.prototype.hasOwnProperty.call(CON_CMDS, cmd)) {
      CON_CMDS[cmd][lang].forEach(l => conLine(l, 'ok'));
      return;
    }
    conLine(lang === 'ru' ? 'команда не найдена: ' + cmd + ' (help — список)' : 'command not found: ' + cmd + ' (try help)', 'warn');
  });
  conLine(lang === 'ru' ? 'NetPacketNode console v1.0 — введите help' : 'NetPacketNode console v1.0 — type help', 'dim');

  const pre = $('#preloader');
  let p = 0;
  const preTimer = setInterval(() => {
    p = Math.min(100, p + 4 + Math.random() * 10);
    $('#preloaderBar').style.width = p + '%';
    $('#preloaderNum').textContent = Math.round(p) + '%';
    if (p >= 100) {
      clearInterval(preTimer);
      setTimeout(() => { pre.classList.add('done'); document.documentElement.classList.add('ready'); }, 250);
    }
  }, 90);

  $$('.btn, .chip, .filter, .theme-toggle, .burger, .nav__links a, .logo, .eyebrow').forEach((el, i) => {
    el.style.setProperty('--bd', (i % 8) * 80 + 300 + 'ms');
  });
  $$('.work__btn').forEach((el, i) => el.style.setProperty('--bd', (i % 3) * 90 + 'ms'));

  applyLang();
})();
