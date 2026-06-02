import { useI18n } from "@/lib/i18n";
import deluxe from "@/assets/room-deluxe.jpg";
import twin from "@/assets/room-twin.jpg";
import single from "@/assets/room-single.jpg";
import { Reveal } from "./Reveal";

export function Rooms() {
  const { tr } = useI18n();
  const rooms = [
    { img: deluxe, t: tr("room.deluxe.t"), d: tr("room.deluxe.d"), label: "Premium Suite", price: "₹4,500" },
    { img: twin, t: tr("room.twin.t"), d: tr("room.twin.d"), label: "Superior Twin", price: "₹2,800" },
    { img: single, t: tr("room.single.t"), d: tr("room.single.d"), label: "Solo Traveler", price: "₹1,500" },
  ];

  return (
    <section id="rooms" className="py-24 md:py-32 bg-indigo">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-gold/70 font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">
                {tr("rooms.kicker")}
              </span>
              <h2 className="font-mincho text-3xl md:text-4xl text-washi">{tr("rooms.title")}</h2>
            </div>
            <div className="text-washi/45 text-sm italic">{tr("rooms.note")}</div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img
                    src={r.img}
                    alt={r.t}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                </div>
                <div className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-2">{r.label}</div>
                <h3 className="font-mincho text-xl text-washi mb-2">{r.t}</h3>
                <p className="text-washi/55 text-sm mb-5 leading-relaxed">{r.d}</p>
                <div className="flex justify-between items-center border-t border-washi/10 pt-4">
                  <span className="text-gold font-latin text-xl">{r.price} <span className="text-washi/40 text-xs tracking-wider uppercase ml-1">{tr("rooms.night")}</span></span>
                  <span className="text-washi text-[10px] uppercase tracking-[0.2em] group-hover:text-gold transition-colors">
                    {tr("rooms.cta")} →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
