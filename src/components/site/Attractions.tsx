import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import taj from "@/assets/attr-taj.jpg";
import varanasi from "@/assets/attr-varanasi.jpg";
import rishikesh from "@/assets/attr-rishikesh.jpg";
import lotus from "@/assets/attr-lotus.jpg";

export function Attractions() {
  const { tr, lang } = useI18n();
  const items = [
    { img: lotus, t: lang === "ja" ? "ロータス寺院" : "Lotus Temple", d: lang === "ja" ? "デリーを代表する蓮の花の寺院。" : "Delhi's iconic lotus-shaped temple.", km: "12 km" },
    { img: taj, t: lang === "ja" ? "タージ・マハル" : "Taj Mahal", d: lang === "ja" ? "永遠の愛の象徴、世界遺産。" : "UNESCO heritage, symbol of love.", km: "220 km" },
    { img: rishikesh, t: lang === "ja" ? "リシケシ" : "Rishikesh", d: lang === "ja" ? "ヨガと瞑想の聖地、ヒマラヤの麓。" : "Yoga capital at the foothills of the Himalayas.", km: "240 km" },
    { img: varanasi, t: lang === "ja" ? "ヴァラナシ" : "Varanasi", d: lang === "ja" ? "ガンジス河畔の最も古い聖地のひとつ。" : "Ancient spiritual city on the Ganges.", km: "820 km" },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">{tr("attr.kicker")}</span>
            <h2 className="font-mincho text-3xl md:text-4xl text-indigo">{tr("attr.title")}</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/5] mb-4">
                  <img src={it.img} alt={it.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-mincho text-lg text-indigo">{it.t}</h3>
                  <span className="text-[10px] text-gold tracking-[0.2em]">{it.km}</span>
                </div>
                <p className="text-xs text-charcoal/60 leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
