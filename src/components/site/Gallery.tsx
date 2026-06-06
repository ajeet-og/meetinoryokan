import { useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-drawing.webp.asset.json";
import g2 from "@/assets/gallery-dining.webp.asset.json";
import g3 from "@/assets/gallery-living.webp.asset.json";
import g4 from "@/assets/gallery-2girls.webp.asset.json";
import g5 from "@/assets/gallery-heena.webp.asset.json";
import g6 from "@/assets/guest-rooftop.jpg.asset.json";
import g7 from "@/assets/guest-saree.jpg.asset.json";
import g8 from "@/assets/guest-host.jpg.asset.json";

const images = [g1.url, g2.url, g3.url, g4.url, g5.url, g6.url, g7.url, g8.url];

export function Gallery() {
  const { tr } = useI18n();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-14">
          <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">{tr("gallery.kicker")}</span>
          <h2 className="font-mincho text-3xl md:text-4xl text-indigo">{tr("gallery.title")}</h2>
        </div>
      </Reveal>

      <div className="columns-2 md:columns-3 gap-4 space-y-4 [&>*]:mb-4">
        {images.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 0.08}>
            <button
              onClick={() => setOpen(src)}
              className="block w-full overflow-hidden group cursor-zoom-in"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-indigo/95 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setOpen(null)}
        >
          <button className="absolute top-6 right-6 text-washi/80 hover:text-washi" onClick={() => setOpen(null)}>
            <X className="size-7" />
          </button>
          <img src={open} alt="" className="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl" />
        </div>
      )}
    </section>
  );
}
