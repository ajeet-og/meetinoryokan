import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().max(60).optional().or(z.literal("")),
  arrival: z.string().max(20).optional().or(z.literal("")),
  departure: z.string().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

export function Contact() {
  const { tr } = useI18n();
  const [sent, setSent] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path.join(".")] = issue.message;
      }
      setErrs(fieldErrors);
      return;
    }
    setErrs({});
    setSent(true);
  };

  const field = "w-full bg-transparent border-b border-charcoal/15 py-3 focus:border-gold outline-none transition-colors text-charcoal placeholder:text-charcoal/30";
  const label = "text-[10px] uppercase tracking-[0.25em] text-charcoal/50 font-medium";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">{tr("contact.kicker")}</span>
            <h2 className="font-mincho text-3xl md:text-4xl text-indigo">{tr("contact.title")}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-washi p-16 text-center"
            >
              <div className="size-12 mx-auto mb-6 rounded-full bg-gold/15 flex items-center justify-center text-gold text-xl">✓</div>
              <p className="font-mincho text-xl text-indigo">{tr("contact.success")}</p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="bg-washi p-8 md:p-14 grid md:grid-cols-2 gap-x-10 gap-y-7 shadow-xl shadow-indigo/5">
              <div className="space-y-2">
                <label className={label}>{tr("contact.name")} *</label>
                <input name="name" type="text" required className={field} placeholder="山田 太郎" />
                {errs.name && <p className="text-xs text-destructive">{errs.name}</p>}
              </div>
              <div className="space-y-2">
                <label className={label}>{tr("contact.email")} *</label>
                <input name="email" type="email" required className={field} placeholder="you@example.com" />
                {errs.email && <p className="text-xs text-destructive">{errs.email}</p>}
              </div>
              <div className="space-y-2">
                <label className={label}>{tr("contact.phone")}</label>
                <input name="phone" type="tel" className={field} placeholder="+81 ..." />
              </div>
              <div className="space-y-2">
                <label className={label}>{tr("contact.country")}</label>
                <input name="country" type="text" className={field} placeholder="Japan" />
              </div>
              <div className="space-y-2">
                <label className={label}>{tr("contact.arrival")}</label>
                <input name="arrival" type="date" className={field} />
              </div>
              <div className="space-y-2">
                <label className={label}>{tr("contact.departure")}</label>
                <input name="departure" type="date" className={field} />
              </div>
              <div className="space-y-2 md:col-span-2 pt-2">
                <label className={label}>{tr("contact.message")} *</label>
                <textarea name="message" required rows={4} className={`${field} resize-none`} />
                {errs.message && <p className="text-xs text-destructive">{errs.message}</p>}
              </div>
              <button
                type="submit"
                className="md:col-span-2 w-full bg-indigo text-washi py-5 text-xs font-medium tracking-[0.3em] uppercase mt-4 hover:bg-gold transition-colors duration-500"
              >
                {tr("contact.submit")}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
