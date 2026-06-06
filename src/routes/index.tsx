import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Rooms } from "@/components/site/Rooms";
import { Facilities } from "@/components/site/Facilities";
import { Stats } from "@/components/site/Stats";
import { Gallery } from "@/components/site/Gallery";
import { Attractions } from "@/components/site/Attractions";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsApp";
import { MusicPlayer } from "@/components/site/MusicPlayer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meeti No Ryokan 燦 — インドの日本人ゲストハウス | Japanese Guest House Delhi" },
      {
        name: "description",
        content:
          "日本人旅行者のためのアットホームなゲストハウス。安心の日本語サポート、清潔な客室、家庭料理、空港送迎。デリー・Preet Viharを拠点にインド旅行をサポートします。",
      },
      { property: "og:title", content: "Meeti No Ryokan 燦 — インドの日本人ゲストハウス" },
      { property: "og:description", content: "日本人旅行者のための安心・快適なゲストハウス。インド・デリー Preet Vihar。" },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Meeti No Ryokan",
          description: "Japanese-style guest house in Preet Vihar, New Delhi, India.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "D-40, Preet Vihar",
            addressLocality: "New Delhi",
            postalCode: "110092",
            addressCountry: "IN",
          },
          telephone: "+91-98680-17189",
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-washi text-charcoal">
        <Nav />
        <main>
          <Hero />
          <About />
          <Rooms />
          <Facilities />
          <Stats />
          <Gallery />
          <Attractions />
          <Testimonials />
          <Location />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
        <MusicPlayer />
      </div>
    </I18nProvider>
  );
}
