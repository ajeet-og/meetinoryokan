import { MapPin, Plane } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Location() {
  const { tr } = useI18n();
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="mb-12">
          <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">{tr("loc.kicker")}</span>
          <h2 className="font-mincho text-3xl md:text-4xl text-indigo">{tr("loc.title")}</h2>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-6">
        <Reveal className="lg:col-span-2">
          <div className="aspect-[16/10] w-full overflow-hidden border border-charcoal/10">
            <iframe
              title="Map — D-40, Preet Vihar, New Delhi"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.2820%2C28.6280%2C77.3060%2C28.6440&amp;layer=mapnik&amp;marker=28.6360%2C77.2940"
              className="w-full h-full grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-secondary/40 p-8 h-full flex flex-col gap-8">
            <div className="flex gap-4">
              <MapPin className="size-5 text-gold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal/45 mb-2">Address</div>
                <p className="text-sm text-charcoal leading-relaxed">{tr("loc.addr")}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Plane className="size-5 text-gold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal/45 mb-2">Airport</div>
                <p className="text-sm text-charcoal leading-relaxed">{tr("loc.airport")}</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=D-40+Preet+Vihar+New+Delhi+110092"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex justify-center bg-indigo text-washi px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-gold transition-colors duration-500"
            >
              Google Maps →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
