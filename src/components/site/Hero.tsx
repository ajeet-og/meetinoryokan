import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import hero1 from "@/assets/guest-rooftop.jpg.asset.json";
import hero2 from "@/assets/guest-saree.jpg.asset.json";
import hero3 from "@/assets/guest-lounge.jpg.asset.json";

const slides = [hero1.url, hero2.url, hero3.url];

export function Hero() {
  const { tr } = useI18n();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-screen overflow-hidden bg-indigo">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={src}
            alt=""
            width={1920}
            height={1080}
            fetchPriority={i === 0 ? "high" : "low"}
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-indigo/30 via-indigo/40 to-indigo/80" />

      <div className="absolute left-6 md:left-16 lg:left-24 bottom-20 md:bottom-28 right-6 md:right-auto max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="block text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6"
        >
          Shanti · Premium Japanese Guest House India
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="font-mincho text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-washi mb-6"
        >
          {tr("hero.title1")}<br />
          <span className="italic text-gold">{tr("hero.title2")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base md:text-lg font-light mb-10 text-washi/85 max-w-lg leading-relaxed"
        >
          {tr("hero.sub")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex justify-center bg-indigo text-washi px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold transition-colors duration-500"
          >
            {tr("hero.cta1")}
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center border border-washi/40 text-washi px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-washi/10 transition-colors duration-500 backdrop-blur-sm"
          >
            {tr("hero.cta2")}
          </a>
        </motion.div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="vertical-text font-mincho text-washi/70 tracking-[0.5em] text-xs uppercase">
          {tr("hero.vertical")}
        </span>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-px transition-all duration-500 ${i === idx ? "w-12 bg-washi" : "w-6 bg-washi/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
