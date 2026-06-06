import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ja" | "en";

type Dict = Record<string, { ja: string; en: string }>;

export const t: Dict = {
  "nav.rooms": { ja: "客室", en: "Rooms" },
  "nav.about": { ja: "私たちについて", en: "Our Story" },
  "nav.facilities": { ja: "施設", en: "Hospitality" },
  "nav.gallery": { ja: "ギャラリー", en: "Gallery" },
  "nav.location": { ja: "アクセス", en: "Location" },
  "nav.contact": { ja: "お問い合わせ", en: "Contact" },

  "hero.title1": { ja: "インドで安心して滞在できる、", en: "A safe sanctuary in India," },
  "hero.title2": { ja: "第二の我が家", en: "your second home" },
  "hero.sub": {
    ja: "日本人旅行者のための快適で安全なゲストハウス。本物のインドを、安心と共に。",
    en: "A comfortable, safe guest house for Japanese travelers. Experience authentic India with peace of mind.",
  },
  "hero.cta1": { ja: "予約する", en: "Book Now" },
  "hero.cta2": { ja: "お問い合わせ", en: "Contact Us" },
  "hero.vertical": { ja: "MEETI NO RYOKAN · DELHI", en: "MEETI NO RYOKAN · DELHI" },

  "about.kicker": { ja: "OMOTENASHI", en: "OMOTENASHI" },
  "about.title": { ja: "私たちが選ばれる理由", en: "Why guests choose us" },
  "about.q": { ja: "「日本のおもてなしを、インドの熱気の中で。」", en: '"Japanese hospitality, in the warmth of India."' },
  "about.r1.t": { ja: "日本語対応の安心感", en: "Full Japanese support" },
  "about.r1.d": {
    ja: "常駐の日本人スタッフ、または日本語堪能なスタッフが24時間体制であなたの滞在をサポートします。",
    en: "Japanese or Japanese-speaking staff are on hand 24 hours a day to support your stay.",
  },
  "about.r2.t": { ja: "厳選された食の安全", en: "Carefully prepared meals" },
  "about.r2.d": {
    ja: "胃腸の弱い方でも安心してお召し上がりいただける、徹底した衛生管理のもとでの食事提供。",
    en: "Meals prepared with strict hygiene, gentle even on sensitive stomachs.",
  },
  "about.r3.t": { ja: "聖地へのアクセス", en: "Access to sacred sites" },
  "about.r3.d": {
    ja: "寺院、ガート、地元の隠れた名所へのプライベートツアーを手配いたします。",
    en: "We arrange private tours to temples, ghats and hidden local spots.",
  },
  "about.r4.t": { ja: "無料の文化体験", en: "Free cultural experiences" },
  "about.r4.d": {
    ja: "サリーやクルタ・パジャマ、ターバンなどの伝統衣装の着付け体験、ヘナタトゥー(メヘンディ)など、インドの文化を無料で体験していただけます。",
    en: "Free cultural exchange activities — try traditional Indian dress (saree, kurta-pajama, turban) and enjoy henna (mehndi) tattoo sessions with our family.",
  },

  "rooms.kicker": { ja: "YOUR SANCTUARY", en: "YOUR SANCTUARY" },
  "rooms.title": { ja: "客室のご案内", en: "Accommodation" },
  "rooms.note": { ja: "全室エアコン・高速Wi-Fi完備", en: "All rooms feature AC and high-speed Wi-Fi" },

  "room.deluxe.t": { ja: "デラックスルーム", en: "Deluxe Room" },
  "room.deluxe.d": { ja: "明るく広々とした客室。ゆったりとくつろげる、心地よい滞在を。", en: "Bright and spacious — a warm, relaxing room for your stay." },
  "room.twin.t": { ja: "スタンダードツイン", en: "Standard Twin" },
  "room.twin.d": { ja: "長期滞在にも最適な、機能的で温かみのある広々とした客室。", en: "Spacious and warm, ideal for long stays." },
  "room.single.t": { ja: "ダブルルーム", en: "Double Room" },
  "room.single.d": { ja: "落ち着いた雰囲気のダブルベッドルーム。一人旅やカップルにも。", en: "A calm double room — perfect for solo travelers or couples." },

  "fac.kicker": { ja: "HOSPITALITY", en: "HOSPITALITY" },
  "fac.title": { ja: "安心のための充実した設備", en: "Facilities for peace of mind" },
  "fac.wifi": { ja: "高速Wi-Fi", en: "High-speed Wi-Fi" },
  "fac.ac": { ja: "全室エアコン", en: "Air Conditioning" },
  "fac.jp": { ja: "日本語サポート", en: "Japanese Support" },
  "fac.laundry": { ja: "ランドリー", en: "Laundry Service" },
  "fac.pickup": { ja: "空港送迎", en: "Airport Pickup" },
  "fac.hot": { ja: "24時間お湯", en: "24h Hot Water" },
  "fac.sec": { ja: "セキュリティ", en: "Security" },
  "fac.clean": { ja: "毎日清掃", en: "Daily Cleaning" },

  "stats.kicker": { ja: "HAPPY GUESTS", en: "HAPPY GUESTS" },
  "stats.title": { ja: "幸せなゲストの数", en: "Happy guest's count" },
  "stats.s1": { ja: "年の運営実績", en: "Years of hosting" },
  "stats.s2": { ja: "日本人ゲスト", en: "Japanese guests" },
  "stats.s3": { ja: "満足度", en: "Guest satisfaction" },

  "gallery.kicker": { ja: "FAMILY", en: "FAMILY" },
  "gallery.title": { ja: "私たちの大切な家族", en: "Our beautiful family" },

  "attr.kicker": { ja: "NEARBY", en: "NEARBY" },
  "attr.title": { ja: "周辺の見どころ", en: "Local attractions" },
  "attr.km": { ja: "より", en: "from us" },

  "test.kicker": { ja: "GUEST VOICES", en: "GUEST VOICES" },
  "test.title": { ja: "ゲストの声", en: "What guests say" },

  "loc.kicker": { ja: "FIND US", en: "FIND US" },
  "loc.title": { ja: "アクセス", en: "Find us" },
  "loc.addr": { ja: "D-40, Preet Vihar, New Delhi 110092, India", en: "D-40, Preet Vihar, New Delhi 110092, India" },
  "loc.airport": { ja: "インディラ・ガンディー国際空港より車で約45分", en: "About 45 min by car from Indira Gandhi Intl. Airport" },

  "contact.kicker": { ja: "GET IN TOUCH", en: "GET IN TOUCH" },
  "contact.title": { ja: "お問い合わせ・ご予約", en: "Reservations & inquiries" },
  "contact.name": { ja: "お名前", en: "Name" },
  "contact.email": { ja: "メールアドレス", en: "Email" },
  "contact.phone": { ja: "電話番号", en: "Phone" },
  "contact.country": { ja: "国", en: "Country" },
  "contact.arrival": { ja: "到着日", en: "Arrival" },
  "contact.departure": { ja: "出発日", en: "Departure" },
  "contact.message": { ja: "メッセージ", en: "Message" },
  "contact.submit": { ja: "送信する", en: "Send message" },
  "contact.success": { ja: "送信ありがとうございます。折り返しご連絡いたします。", en: "Thank you. We will get back to you shortly." },

  "wa": { ja: "WhatsAppで予約する", en: "Book via WhatsApp" },

  "footer.tag": {
    ja: "私たちは単なる宿ではありません。異国の地インドで、あなたが心から安らげる居場所でありたいと願っています。",
    en: "More than a guest house — a place where you can truly feel at home in India.",
  },
  "footer.contact": { ja: "CONTACT", en: "CONTACT" },
  "footer.social": { ja: "SOCIAL", en: "SOCIAL" },
  "footer.rights": { ja: "© 2026 MEETI NO RYOKAN. ALL RIGHTS RESERVED.", en: "© 2026 MEETI NO RYOKAN. ALL RIGHTS RESERVED." },
};

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; tr: (k: keyof typeof t) => string }>({
  lang: "ja",
  setLang: () => {},
  tr: (k) => t[k]?.ja ?? k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "ja";
    setLangState(saved);
    if (typeof document !== "undefined") document.documentElement.lang = saved;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };

  const tr = (k: keyof typeof t) => t[k]?.[lang] ?? String(k);

  return <Ctx.Provider value={{ lang, setLang, tr }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
