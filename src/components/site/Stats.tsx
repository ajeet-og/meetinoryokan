import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Stats() {
  const { tr } = useI18n();
  const stats = [
    { n: "15+", l: tr("stats.s1") },
    { n: "12,000+", l: tr("stats.s2") },
    { n: "98%", l: tr("stats.s3") },
    { n: "6", l: tr("stats.s4") },
  ];
  return (
    <section className="py-24 md:py-28 px-6 md:px-8 bg-washi border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">{tr("stats.kicker")}</span>
            <h2 className="font-mincho text-3xl md:text-4xl text-indigo">{tr("stats.title")}</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-latin text-5xl md:text-6xl text-gold mb-2">{s.n}</div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-charcoal/55">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
