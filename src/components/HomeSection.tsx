const HERO_IMAGE = "https://cdn.poehali.dev/projects/e2baef62-f371-44e1-950d-1d6f18bf3ca4/files/8e3670de-f997-40df-bb37-5edbbef8dad5.jpg";

type Section = "home" | "donate" | "top" | "contacts";

interface HomeSectionProps {
  setActiveSection: (s: Section) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  const serverInfo = [
    { icon: "🌍", title: "ВЕРСИЯ", value: "1.20.4", sub: "Java Edition" },
    { icon: "👥", title: "ОНЛАЙН", value: "24/7", sub: "Без вайпов" },
    { icon: "🏆", title: "РЕЖИМ", value: "Выживание", sub: "Хозяйство" },
    { icon: "💎", title: "ЗАЩИТА", value: "Регионы", sub: "Сейфы & Замки" },
  ];

  return (
    <div>
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <img
          src={HERO_IMAGE}
          alt="Minecraft Server"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #111111 100%)",
          }}
        />

        <div className="absolute top-8 left-8 text-4xl animate-float delay-100 torch-glow">🔥</div>
        <div className="absolute top-12 right-12 text-3xl animate-float delay-300">⛏️</div>
        <div className="absolute bottom-20 left-16 text-2xl animate-float delay-200">🌿</div>
        <div className="absolute top-20 right-1/4 text-2xl animate-float delay-400">💎</div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in-up">
            <div
              className="inline-block px-4 py-2 mb-6 font-pixel text-xs"
              style={{
                background: "rgba(90,172,68,0.2)",
                border: "2px solid #5aac44",
                color: "#8bc34a",
              }}
            >
              🟢 СЕРВЕР ОНЛАЙН
            </div>
            <h1
              className="font-pixel mb-6 leading-relaxed"
              style={{
                fontSize: "clamp(16px, 4vw, 32px)",
                color: "#ffffff",
                textShadow: "3px 3px 0px #3d7a2e, 6px 6px 0px rgba(0,0,0,0.5)",
              }}
            >
              One<span style={{ color: "#5aac44" }}>Grief</span>
            </h1>
            <p
              className="text-xl mb-4 font-rubik font-semibold"
              style={{ color: "#cccccc" }}
            >
              Сервер выживания с кооперативным геймплеем
            </p>
            <p className="text-base mb-10 font-rubik" style={{ color: "#888888" }}>
              Поддержи проект и получи уникальные хозяйственные привилегии
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setActiveSection("donate")}
                className="mc-button px-8 py-4 text-white font-pixel text-xs"
                style={{
                  background: "linear-gradient(to bottom, #5aac44, #3d7a2e)",
                }}
              >
                ⚔️ ПОЛУЧИТЬ ДОНАТ
              </button>
              <button
                onClick={() => setActiveSection("top")}
                className="mc-button px-8 py-4 font-pixel text-xs"
                style={{
                  background: "linear-gradient(to bottom, #444, #333)",
                  color: "#ffd700",
                }}
              >
                🏆 ТОП ДОНАТОРОВ
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {serverInfo.map((info, i) => (
            <div
              key={i}
              className="mc-card p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-4xl mb-3">{info.icon}</div>
              <div className="font-pixel text-xs mb-2" style={{ color: "#888888" }}>
                {info.title}
              </div>
              <div className="font-rubik font-bold text-lg mb-1" style={{ color: "#ffffff" }}>
                {info.value}
              </div>
              <div className="font-rubik text-sm" style={{ color: "#5aac44" }}>
                {info.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2
            className="font-pixel text-sm mb-4"
            style={{ color: "#5aac44", textShadow: "2px 2px 0 #1a3d0a" }}
          >
            ЧТО ВАС ЖДЁТ
          </h2>
          <p className="font-rubik text-lg" style={{ color: "#888888" }}>
            Особенности нашего сервера
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🏡", title: "Хозяйство", desc: "Стройте фермы и дома" },
            { icon: "🤝", title: "Кооператив", desc: "Играйте с друзьями" },
            { icon: "🗺️", title: "Большой мир", desc: "Карта 10 000×10 000" },
            { icon: "🛡️", title: "Защита", desc: "Регионы и сейфы" },
          ].map((feat, i) => (
            <div
              key={i}
              className="mc-card p-5 text-center animate-pixel-pop"
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <div className="text-3xl mb-3">{feat.icon}</div>
              <div className="font-rubik font-bold text-sm mb-2" style={{ color: "#ffffff" }}>
                {feat.title}
              </div>
              <div className="font-rubik text-xs" style={{ color: "#888888" }}>
                {feat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
