import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { tr } = useI18n();
  return (
    <footer className="pt-20 pb-10 px-6 md:px-8 border-t border-charcoal/5 bg-washi">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-mincho text-2xl mb-6 text-indigo tracking-[0.2em]">
            Shanti <span className="font-latin italic tracking-normal">/ 燦</span>
          </div>
          <p className="text-charcoal/55 text-sm leading-relaxed max-w-sm">{tr("footer.tag")}</p>
        </div>
        <div>
          <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] mb-5 text-charcoal">{tr("footer.contact")}</h4>
          <p className="text-sm text-charcoal/70 mb-2">info@shanti-india.jp</p>
          <p className="text-sm text-charcoal/70 mb-2">+91 987 654 3210</p>
          <p className="text-xs text-charcoal/45 mt-3 leading-relaxed">Vasant Vihar,<br />New Delhi 110057</p>
        </div>
        <div>
          <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] mb-5 text-charcoal">{tr("footer.social")}</h4>
          <div className="flex flex-col gap-3 text-sm text-charcoal/70">
            <a className="hover:text-gold transition-colors cursor-pointer" href="#">Instagram</a>
            <a className="hover:text-gold transition-colors cursor-pointer" href="#">Facebook</a>
            <a className="hover:text-gold transition-colors cursor-pointer" href="#">X (Twitter)</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-6 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-charcoal/35">
        <span>{tr("footer.rights")}</span>
        <span>Designed for Tranquility</span>
      </div>
    </footer>
  );
}
