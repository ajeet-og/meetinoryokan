import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFloat() {
  const { tr } = useI18n();
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-gold text-washi pl-4 pr-5 py-3 rounded-full shadow-xl shadow-gold/30 hover:-translate-y-1 hover:bg-indigo transition-all duration-500"
      aria-label={tr("wa")}
    >
      <MessageCircle className="size-5" strokeWidth={1.75} />
      <span className="text-xs font-medium tracking-wider">{tr("wa")}</span>
    </a>
  );
}
