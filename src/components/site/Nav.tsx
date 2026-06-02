import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { lang, setLang, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-5 flex justify-between items-center transition-all duration-500 ${
        scrolled ? "bg-washi/85 backdrop-blur-md border-b border-charcoal/5" : ""
      }`}
    >
      <a href="#top" className={`font-mincho text-xl tracking-[0.25em] uppercase ${scrolled ? "text-indigo" : "text-washi"}`}>
        Shanti <span className="font-latin italic tracking-normal">/ 燦</span>
      </a>

      <div className="flex items-center gap-6">
        <div className={`hidden md:flex gap-7 text-xs tracking-[0.15em] uppercase ${scrolled ? "text-charcoal/70" : "text-washi/90"}`}>
          <a href="#about" className="hover:opacity-60 transition-opacity">{tr("nav.about")}</a>
          <a href="#rooms" className="hover:opacity-60 transition-opacity">{tr("nav.rooms")}</a>
          <a href="#facilities" className="hover:opacity-60 transition-opacity">{tr("nav.facilities")}</a>
          <a href="#gallery" className="hover:opacity-60 transition-opacity">{tr("nav.gallery")}</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">{tr("nav.contact")}</a>
        </div>

        <div className={`flex border rounded-full px-3 py-1 items-center gap-2 backdrop-blur-md transition-colors ${
          scrolled ? "border-charcoal/15 bg-washi/40" : "border-washi/25 bg-washi/10"
        }`}>
          <button
            onClick={() => setLang("ja")}
            className={`text-[10px] font-medium tracking-wider transition-colors ${
              lang === "ja" ? (scrolled ? "text-indigo" : "text-washi") : (scrolled ? "text-charcoal/35" : "text-washi/50")
            }`}
          >日本語</button>
          <span className={scrolled ? "w-px h-3 bg-charcoal/15" : "w-px h-3 bg-washi/25"} />
          <button
            onClick={() => setLang("en")}
            className={`text-[10px] font-medium tracking-wider transition-colors ${
              lang === "en" ? (scrolled ? "text-indigo" : "text-washi") : (scrolled ? "text-charcoal/35" : "text-washi/50")
            }`}
          >EN</button>
        </div>
      </div>
    </motion.nav>
  );
}
