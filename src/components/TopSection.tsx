const topDonators = [
  { place: 1, name: "Steve_Pro", amount: 1500, medal: "🥇", color: "#ffd700" },
  { place: 2, name: "CreeperSlayer", amount: 890, medal: "🥈", color: "#c0c0c0" },
  { place: 3, name: "DiamondKing", amount: 660, medal: "🥉", color: "#cd7f32" },
  { place: 4, name: "NightWalker", amount: 440, medal: "4", color: "#8bc34a" },
  { place: 5, name: "BlockMaster", amount: 330, medal: "5", color: "#8bc34a" },
];

type Section = "home" | "donate" | "top" | "contacts";

interface TopSectionProps {
  setActiveSection: (s: Section) => void;
}

export default function TopSection({ setActiveSection }: TopSectionProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2
          className="font-pixel text-sm mb-4"
          style={{ color: "#ffd700", textShadow: "2px 2px 0 #8b6914" }}
        >
          🏆 ТОП ДОНАТОРОВ
        </h2>
        <p className="font-rubik text-lg" style={{ color: "#888888" }}>
          Герои, которые поддержали наш сервер
        </p>
      </div>

      <div className="space-y-4">
        {topDonators.map((player, i) => (
          <div
            key={player.place}
            className="mc-card p-5 flex items-center gap-4 animate-slide-in"
            style={{
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
              animationFillMode: "forwards",
              border:
                player.place <= 3 ? `2px solid ${player.color}44` : "2px solid #333",
            }}
          >
            <div
              className="font-pixel text-xl w-12 text-center flex-shrink-0"
              style={{ color: player.color }}
            >
              {player.medal}
            </div>
            <div className="flex-1">
              <div className="font-rubik font-bold text-base" style={{ color: "#ffffff" }}>
                {player.name}
              </div>
              <div className="font-rubik text-xs" style={{ color: "#666666" }}>
                Игрок сервера
              </div>
            </div>
            <div>
              <div className="font-pixel text-sm" style={{ color: player.color }}>
                {player.amount}₽
              </div>
              <div className="font-rubik text-xs text-right" style={{ color: "#555" }}>
                задонатил
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 mc-card p-6 text-center" style={{ border: "2px solid #333" }}>
        <div className="text-3xl mb-3">⭐</div>
        <p className="font-rubik font-semibold mb-2" style={{ color: "#ffffff" }}>
          Хочешь попасть в топ?
        </p>
        <p className="font-rubik text-sm mb-5" style={{ color: "#888888" }}>
          Задонать и стань частью истории сервера
        </p>
        <button
          onClick={() => setActiveSection("donate")}
          className="mc-button px-8 py-3 font-pixel text-xs text-white"
          style={{ background: "linear-gradient(to bottom, #5aac44, #3d7a2e)" }}
        >
          🎁 СДЕЛАТЬ ДОНАТ
        </button>
      </div>
    </div>
  );
}
