import { useI18n } from "@/lib/i18n";
import aboutAsset from "@/assets/about-gurudwara.webp.asset.json";
import { Reveal } from "./Reveal";

export function About() {
  const { tr } = useI18n();
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal className="relative">
          <img src={aboutAsset.url} alt="Guests visiting Gurudwara Bangla Sahib with our family" loading="lazy" className="w-full aspect-[4/5] object-cover shadow-2xl shadow-indigo/10" />
          <div className="absolute -bottom-8 -right-4 md:-right-8 w-56 md:w-64 h-56 md:h-64 bg-gold p-7 md:p-8 hidden sm:flex items-center">
            <p className="font-mincho text-washi text-base md:text-lg leading-relaxed">{tr("about.q")}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">
            {tr("about.kicker")}
          </span>
          <h2 className="font-mincho text-3xl md:text-4xl mb-10 text-indigo leading-tight">{tr("about.title")}</h2>
          <div className="space-y-10">
            {[
              { n: "01", t: tr("about.r1.t"), d: tr("about.r1.d") },
              { n: "02", t: tr("about.r2.t"), d: tr("about.r2.d") },
              { n: "03", t: tr("about.r3.t"), d: tr("about.r3.d") },
              { n: "04", t: tr("about.r4.t"), d: tr("about.r4.d") },
            ].map((r) => (
              <div key={r.n} className="flex gap-6">
                <div className="text-indigo font-mincho text-2xl italic shrink-0">{r.n}</div>
                <div>
                  <h3 className="text-base font-bold mb-2 text-charcoal">{r.t}</h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
