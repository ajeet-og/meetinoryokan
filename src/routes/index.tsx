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
      { title: "Shanti 燦 — インドの日本人ゲストハウス | Premium Japanese Guest House India" },
      {
        name: "description",
        content:
          "日本人旅行者のためのプレミアム・ゲストハウス。安心の日本語サポート、清潔な客室、和食朝食、空港送迎。デリーを拠点にインド旅行をサポートします。",
      },
      { property: "og:title", content: "Shanti 燦 — インドの日本人ゲストハウス" },
      { property: "og:description", content: "日本人旅行者のための安心・快適なゲストハウス。インド・デリー。" },
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
          name: "Shanti Guest House India",
          description: "Premium Japanese guest house in New Delhi, India.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "A-24, Vasant Vihar",
            addressLocality: "New Delhi",
            postalCode: "110057",
            addressCountry: "IN",
          },
          telephone: "+91-987-654-3210",
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
