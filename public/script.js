/* ============== i18n ============== */
const dict = {
  "nav.rooms": ["客室","Rooms"],
  "nav.about": ["私たちについて","Our Story"],
  "nav.facilities": ["施設","Hospitality"],
  "nav.gallery": ["ギャラリー","Gallery"],
  "nav.location": ["アクセス","Location"],
  "nav.contact": ["お問い合わせ","Contact"],
  "hero.title1": ["インドで安心して滞在できる、","A safe sanctuary in India,"],
  "hero.title2": ["第二の我が家","your second home"],
  "hero.sub": ["日本人旅行者のための快適で安全なゲストハウス。本物のインドを、安心と共に。","A comfortable, safe guest house for Japanese travelers. Experience authentic India with peace of mind."],
  "hero.cta1": ["予約する","Book Now"],
  "hero.cta2": ["お問い合わせ","Contact Us"],
  "hero.vertical": ["MEETI NO RYOKAN · DELHI","MEETI NO RYOKAN · DELHI"],
  "about.kicker": ["OMOTENASHI","OMOTENASHI"],
  "about.title": ["私たちが選ばれる理由","Why guests choose us"],
  "about.q": ["「日本のおもてなしを、インドの熱気の中で。」",'"Japanese hospitality, in the warmth of India."'],
  "about.r1.t": ["日本語対応の安心感","Full Japanese support"],
  "about.r1.d": ["常駐の日本人スタッフ、または日本語堪能なスタッフが24時間体制であなたの滞在をサポートします。","Japanese or Japanese-speaking staff are on hand 24 hours a day to support your stay."],
  "about.r2.t": ["厳選された食の安全","Carefully prepared meals"],
  "about.r2.d": ["胃腸の弱い方でも安心してお召し上がりいただける、徹底した衛生管理のもとでの食事提供。","Meals prepared with strict hygiene, gentle even on sensitive stomachs."],
  "about.r3.t": ["聖地へのアクセス","Access to sacred sites"],
  "about.r3.d": ["寺院、ガート、地元の隠れた名所へのプライベートツアーを手配いたします。","We arrange private tours to temples, ghats and hidden local spots."],
  "about.r4.t": ["無料の文化体験","Free cultural experiences"],
  "about.r4.d": ["伝統衣装(サリー、クルタ・パジャマ、ターバン)の着付け体験をお楽しみいただけます。また、ヘナタトゥー(メヘンディ)も無料でご体験いただけます。","Try traditional Indian dress — saree, kurta-pajama and turban — and we also do henna (mehndi) tattoos."],
  "rooms.kicker": ["YOUR SANCTUARY","YOUR SANCTUARY"],
  "rooms.title": ["客室のご案内","Accommodation"],
  "rooms.note": ["全室エアコン・高速Wi-Fi完備","All rooms feature AC and high-speed Wi-Fi"],
  "room.deluxe.t": ["デラックスルーム","Deluxe Room"],
  "room.deluxe.d": ["明るく広々とした客室。ゆったりとくつろげる、心地よい滞在を。","Bright and spacious — a warm, relaxing room for your stay."],
  "room.twin.t": ["スタンダードツイン","Standard Twin"],
  "room.twin.d": ["長期滞在にも最適な、機能的で温かみのある広々とした客室。","Spacious and warm, ideal for long stays."],
  "room.single.t": ["ダブルルーム","Double Room"],
  "room.single.d": ["落ち着いた雰囲気のダブルベッドルーム。一人旅やカップルにも。","A calm double room — perfect for solo travelers or couples."],
  "fac.kicker": ["HOSPITALITY","HOSPITALITY"],
  "fac.title": ["安心のための充実した設備","Facilities for peace of mind"],
  "fac.wifi": ["高速Wi-Fi","High-speed Wi-Fi"],
  "fac.ac": ["全室エアコン","Air Conditioning"],
  "fac.jp": ["日本語サポート","Japanese Support"],
  "fac.laundry": ["ランドリー","Laundry Service"],
  "fac.pickup": ["空港送迎","Airport Pickup"],
  "fac.hot": ["24時間お湯","24h Hot Water"],
  "fac.sec": ["セキュリティ","Security"],
  "fac.clean": ["毎日清掃","Daily Cleaning"],
  "stats.kicker": ["HAPPY GUESTS","HAPPY GUESTS"],
  "stats.title": ["幸せなゲストの数","Happy guest's count"],
  "stats.s1": ["年の運営実績","Years of hosting"],
  "stats.s2": ["日本人ゲスト","Japanese guests"],
  "stats.s3": ["満足度","Guest satisfaction"],
  "gallery.kicker": ["FAMILY","FAMILY"],
  "gallery.title": ["私たちの大切な家族","Our beautiful japanese family"],
  "test.kicker": ["GUEST VOICES","GUEST VOICES"],
  "test.title": ["ゲストの声","What guests say"],
  "loc.kicker": ["FIND US","FIND US"],
  "loc.title": ["アクセス","Find us"],
  "loc.addr": ["D-40, Preet Vihar, New Delhi 110092, India","D-40, Preet Vihar, New Delhi 110092, India"],
  "loc.airport": ["インディラ・ガンディー国際空港より車で約45分","About 45 min by car from Indira Gandhi Intl. Airport"],
  "contact.kicker": ["GET IN TOUCH","GET IN TOUCH"],
  "contact.title": ["お問い合わせ・ご予約","Reservations & inquiries"],
  "contact.name": ["お名前","Name"],
  "contact.email": ["メールアドレス","Email"],
  "contact.phone": ["電話番号","Phone"],
  "contact.country": ["国","Country"],
  "contact.arrival": ["到着日","Arrival"],
  "contact.departure": ["出発日","Departure"],
  "contact.message": ["メッセージ","Message"],
  "contact.submit": ["送信する","Send message"],
  "contact.success": ["送信ありがとうございます。折り返しご連絡いたします。","Thank you. We will get back to you shortly."],
  "wa": ["WhatsAppで予約する","Book via WhatsApp"],
  "footer.tag": ["私たちは単なる宿ではありません。異国の地インドで、あなたが心から安らげる居場所でありたいと願っています。","More than a guest house — a place where you can truly feel at home in India."],
  "footer.contact": ["CONTACT","CONTACT"],
  "footer.social": ["SOCIAL","SOCIAL"],
  "footer.rights": ["© 2026 MEETI NO RYOKAN. ALL RIGHTS RESERVED.","© 2026 MEETI NO RYOKAN. ALL RIGHTS RESERVED."]
};

const reviewImages = [
  "/assets/review-1.jpg","/assets/review-2.jpg","/assets/review-3.jpg","/assets/review-4.jpg",
  "/assets/review-5.jpg","/assets/review-6.jpg","/assets/review-7.jpg","/assets/review-8.jpg",
  "/assets/review-9.jpg","/assets/review-10.jpg"
];

let lang = (new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang') || 'ja');
if (lang !== 'ja' && lang !== 'en') lang = 'ja';

function applyLang() {
  const i = lang === 'ja' ? 0 : 1;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[k]) el.textContent = dict[k][i];
  });
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}
document.querySelectorAll('.lang-toggle button').forEach(b => {
  b.addEventListener('click', () => {
    lang = b.dataset.lang;
    localStorage.setItem('lang', lang);
    applyLang();
  });
});

/* ============== NAV scroll ============== */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ============== HERO slider ============== */
const slides = document.querySelectorAll('.hero .slide');
const dots = document.querySelectorAll('.hero-dots .dot');
let heroIdx = 0;
function goHero(i) {
  heroIdx = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle('active', k === heroIdx));
  dots.forEach((d, k) => d.classList.toggle('active', k === heroIdx));
}
dots.forEach(d => d.addEventListener('click', () => goHero(+d.dataset.idx)));
setInterval(() => goHero(heroIdx + 1), 6500);

/* ============== REVEAL on scroll ============== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('section').forEach(s => s.querySelectorAll(':scope > *, .container > *, .container > * > *').forEach(()=>{}));
// Mark relevant elements as reveal targets
document.querySelectorAll('.section .container > *, .about-grid > *, .rooms-grid > *, .stats-grid > *, .loc-grid > *').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ============== GALLERY lightbox ============== */
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
document.querySelectorAll('.g-item').forEach(b => {
  b.addEventListener('click', () => {
    lbImg.src = b.querySelector('img').src;
    lb.hidden = false;
  });
});
lb.addEventListener('click', () => { lb.hidden = true; lbImg.src = ''; });

/* ============== TESTIMONIALS ============== */
const tWrap = document.getElementById('testimonials');
const tDots = document.getElementById('t-dots');
let tIdx = 0, tInterval;
function renderTestimonials() {
  const items = testimonialsData[lang];
  tWrap.innerHTML = items.map((it, k) => `
    <div class="t-item ${k===0?'active':''}">
      <div class="t-stars">★★★★★</div>
      <p class="t-text font-mincho">「${it.text}」</p>
      <div class="t-name">${it.name}</div>
      <div class="t-from">${it.from}</div>
    </div>
  `).join('');
  tDots.innerHTML = items.map((_, k) => `<button class="t-dot ${k===0?'active':''}" data-i="${k}" aria-label="Testimonial ${k+1}"></button>`).join('');
  tIdx = 0;
  tDots.querySelectorAll('.t-dot').forEach(d => d.addEventListener('click', () => goT(+d.dataset.i)));
  clearInterval(tInterval);
  tInterval = setInterval(() => goT(tIdx + 1), 6500);
}
function goT(i) {
  const items = tWrap.querySelectorAll('.t-item');
  const dts = tDots.querySelectorAll('.t-dot');
  tIdx = (i + items.length) % items.length;
  items.forEach((el, k) => el.classList.toggle('active', k === tIdx));
  dts.forEach((el, k) => el.classList.toggle('active', k === tIdx));
}

/* ============== CONTACT (basic UX; submission via Netlify Forms) ============== */
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  // Let Netlify Forms handle submission natively. Show inline success after fetch.
  if (form.dataset.handled) return;
  e.preventDefault();
  const data = new FormData(form);
  fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() })
    .then(() => { form.hidden = true; document.getElementById('contact-success').hidden = false; })
    .catch(() => { form.dataset.handled = '1'; form.submit(); });
});

/* ============== MUSIC ============== */
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
audio.volume = 0.12;
let musicOn = false;
function updateMusicIcon() {
  musicBtn.innerHTML = musicOn
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>';
}
updateMusicIcon();
function tryPlay() { audio.play().then(() => { musicOn = true; updateMusicIcon(); }).catch(() => {}); }
tryPlay();
const onGesture = () => { if (audio.paused) tryPlay(); window.removeEventListener('pointerdown', onGesture); window.removeEventListener('keydown', onGesture); };
window.addEventListener('pointerdown', onGesture, { once: true });
window.addEventListener('keydown', onGesture, { once: true });
musicBtn.addEventListener('click', () => {
  if (audio.paused) tryPlay();
  else { audio.pause(); musicOn = false; updateMusicIcon(); }
});

/* ============== INIT ============== */
applyLang();
