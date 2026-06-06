import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Attractions() {
  const { tr, lang } = useI18n();
  const items = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Delhi_Red_fort.jpg/1280px-Delhi_Red_fort.jpg",
      t: lang === "ja" ? "レッド・フォート(赤い城)" : "Red Fort",
      d:
        lang === "ja"
          ? "ムガル帝国の壮大な赤砂岩の城塞。世界遺産。"
          : "Mughal-era red sandstone fort, a UNESCO World Heritage site.",
      km: "9 km",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Humayun%27s_Tomb_-_The_Main_Tomb.jpg/1280px-Humayun%27s_Tomb_-_The_Main_Tomb.jpg",
      t: lang === "ja" ? "フマーユーン廟" : "Humayun's Tomb",
      d:
        lang === "ja"
          ? "タージ・マハルの原型と言われる優美なムガル建築。"
          : "Elegant Mughal mausoleum — the architectural precursor to the Taj Mahal.",
      km: "8 km",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Qutab_Minar_mausoleum.jpg/800px-Qutab_Minar_mausoleum.jpg",
      t: lang === "ja" ? "クトゥブ・ミナール" : "Qutub Minar",
      d:
        lang === "ja"
          ? "高さ73mを誇る世界最古級の煉瓦造ミナレット。世界遺産。"
          : "73-metre Indo-Islamic minaret, one of the world's tallest brick towers.",
      km: "22 km",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lotus_Temple_in_New_Delhi_03-2016.jpg/1280px-Lotus_Temple_in_New_Delhi_03-2016.jpg",
      t: lang === "ja" ? "ロータス寺院" : "Lotus Temple",
      d:
        lang === "ja"
          ? "蓮の花を象った白大理石のバハーイー教礼拝堂。"
          : "White marble Bahá'í House of Worship shaped like a lotus flower.",
      km: "13 km",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/New_Delhi_government_block_03-2016_img01.jpg/1280px-New_Delhi_government_block_03-2016_img01.jpg",
      t: lang === "ja" ? "インド門" : "India Gate",
      d:
        lang === "ja"
          ? "第一次大戦の戦没者を悼む42mの凱旋門。夕暮れが美しい。"
          : "42-metre war memorial arch — beautiful at dusk along Rajpath.",
      km: "10 km",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Akshardham_Temple_Delhi_05-2016.jpg/1280px-Akshardham_Temple_Delhi_05-2016.jpg",
      t: lang === "ja" ? "アクシャルダム寺院" : "Akshardham Temple",
      d:
        lang === "ja"
          ? "精緻な彫刻と噴水ショーで知られる現代ヒンドゥー寺院。"
          : "Modern Hindu temple complex famed for intricate carvings and fountain shows.",
      km: "5 km",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-gold font-medium text-[10px] tracking-[0.3em] uppercase mb-4 block">{tr("attr.kicker")}</span>
            <h2 className="font-mincho text-3xl md:text-4xl text-indigo">{tr("attr.title")}</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/5] mb-4">
                  <img src={it.img} alt={it.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-mincho text-lg text-indigo">{it.t}</h3>
                  <span className="text-[10px] text-gold tracking-[0.2em]">{it.km}</span>
                </div>
                <p className="text-xs text-charcoal/60 leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
