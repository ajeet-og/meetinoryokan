import { Wifi, Snowflake, Languages, Shirt, Plane, Droplet, ShieldCheck, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Facilities() {
  const { tr } = useI18n();
  const items = [
    { Icon: Wifi, label: tr("fac.wifi") },
    { Icon: Snowflake, label: tr("fac.ac") },
    { Icon: Languages, label: tr("fac.jp") },
    { Icon: Shirt, label: tr("fac.laundry") },
    { Icon: Plane, label: tr("fac.pickup") },
    { Icon: Droplet, label: tr("fac.hot") },
    { Icon: ShieldCheck, label: tr("fac.sec") },
    { Icon: Sparkles, label: tr("fac.clean") },
  ];

  return (
    <section id="facilities" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">{tr("fac.kicker")}</span>
          <h2 className="font-mincho text-3xl md:text-4xl text-indigo">{tr("fac.title")}</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
        {items.map(({ Icon, label }, i) => (
          <Reveal key={label} delay={i * 0.05}>
            <div className="bg-washi p-8 md:p-10 flex flex-col items-center text-center gap-4 group hover:bg-gold/5 transition-colors duration-500 h-full">
              <Icon className="size-7 text-gold group-hover:scale-110 transition-transform duration-500" strokeWidth={1.25} />
              <span className="text-sm font-medium text-charcoal">{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
