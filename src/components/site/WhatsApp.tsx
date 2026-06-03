import { MessageCircle, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFloat() {
  const { tr } = useI18n();
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href="https://www.instagram.com/meeti_no_ryokan/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-indigo text-washi pl-4 pr-5 py-3 rounded-full shadow-xl shadow-indigo/30 hover:-translate-y-1 hover:bg-gold transition-all duration-500"
        aria-label="Instagram"
      >
        <Instagram className="size-5" strokeWidth={1.75} />
        <span className="text-xs font-medium tracking-wider">Instagram</span>
      </a>
      <a
        href="https://wa.me/919868017189"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-gold text-washi pl-4 pr-5 py-3 rounded-full shadow-xl shadow-gold/30 hover:-translate-y-1 hover:bg-indigo transition-all duration-500"
        aria-label={tr("wa")}
      >
        <MessageCircle className="size-5" strokeWidth={1.75} />
        <span className="text-xs font-medium tracking-wider">{tr("wa")}</span>
      </a>
    </div>
  );
}
