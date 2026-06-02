import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { tr, lang } = useI18n();
  const items = lang === "ja"
    ? [
        { name: "山田 美咲", from: "東京", text: "初めてのインド旅行で不安でしたが、日本語サポートが本当に心強かったです。食事も優しい味で、毎朝の和食に救われました。" },
        { name: "佐藤 健太", from: "大阪", text: "一ヶ月の長期滞在で利用しました。スタッフの温かさと清潔感のあるお部屋で、まるで第二の我が家のように過ごせました。" },
        { name: "田中 沙織", from: "京都", text: "ヨガリトリートでお世話になりました。リシケシへの手配も全て日本語で完璧。安心してインドを楽しめました。" },
      ]
    : [
        { name: "Misaki Yamada", from: "Tokyo", text: "My first trip to India felt safe thanks to the Japanese support. The gentle meals saved me — Japanese breakfast every morning was a blessing." },
        { name: "Kenta Sato", from: "Osaka", text: "Stayed for a month. Warm staff, spotless rooms — it really did feel like my second home." },
        { name: "Saori Tanaka", from: "Kyoto", text: "Came for a yoga retreat. They arranged everything to Rishikesh in Japanese. I could truly enjoy India with peace of mind." },
      ];

  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section className="py-24 md:py-32 bg-indigo text-washi px-6 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">{tr("test.kicker")}</span>
          <h2 className="font-mincho text-3xl md:text-4xl mb-14">{tr("test.title")}</h2>
        </Reveal>

        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-mincho text-xl md:text-2xl leading-relaxed text-washi/95 italic mb-8 text-balance">
                「{items[i].text}」
              </p>
              <div className="text-sm text-washi/60">
                <div className="font-medium text-washi">{items[i].name}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase mt-1">{items[i].from}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`}
              className={`h-px transition-all duration-500 ${k === i ? "w-10 bg-gold" : "w-5 bg-washi/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
