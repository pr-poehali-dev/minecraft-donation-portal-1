const donations = [
  {
    id: "donater",
    name: "DONATER",
    price: 45,
    color: "#5aac44",
    glowClass: "green-glow",
    borderColor: "#5aac44",
    emoji: "🌿",
    rank: "Начинающий",
    features: [
      "Цветной ник в чате",
      "Префикс [Donater]",
      "Доступ к /kit donater",
      "1 домашняя точка",
      "Приоритет входа",
    ],
  },
  {
    id: "helper",
    name: "HELPER",
    price: 220,
    color: "#4fc3f7",
    glowClass: "diamond-glow",
    borderColor: "#4fc3f7",
    emoji: "💎",
    rank: "Опытный",
    popular: true,
    features: [
      "Всё из DONATER",
      "Префикс [Helper]",
      "Доступ к /kit helper",
      "3 домашних точки",
      "Полёт в мирных зонах",
      "Защита от PvP",
    ],
  },
  {
    id: "akyla",
    name: "AKYLA",
    price: 110,
    color: "#ffd700",
    glowClass: "gold-glow",
    borderColor: "#ffd700",
    emoji: "⚡",
    rank: "Мастер",
    features: [
      "Всё из DONATER",
      "Префикс [Akyla]",
      "Доступ к /kit akyla",
      "5 домашних точек",
      "Ускоренный крафт",
      "Особый чат-цвет",
    ],
  },
];

interface DonateSectionProps {
  selectedDonate: string | null;
  setSelectedDonate: (id: string | null) => void;
  nickname: string;
  setNickname: (v: string) => void;
}

export default function DonateSection({ selectedDonate, setSelectedDonate, nickname, setNickname }: DonateSectionProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2
          className="font-pixel text-sm mb-4"
          style={{ color: "#5aac44", textShadow: "2px 2px 0 #1a3d0a" }}
        >
          🛒 ПРИВИЛЕГИИ
        </h2>
        <p className="font-rubik text-2xl font-bold mb-2" style={{ color: "#ffffff" }}>
          Выбери свой донат
        </p>
        <p className="font-rubik" style={{ color: "#888888" }}>
          Поддержи сервер и получи особые возможности
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {donations.map((don, i) => (
          <div
            key={don.id}
            className={`mc-card p-6 cursor-pointer transition-all duration-200 animate-fade-in-up relative ${
              selectedDonate === don.id ? don.glowClass : ""
            }`}
            style={{
              animationDelay: `${i * 0.15}s`,
              border: selectedDonate === don.id
                ? `3px solid ${don.borderColor}`
                : "3px solid #333",
              transform: selectedDonate === don.id ? "scale(1.02)" : "scale(1)",
            }}
            onClick={() => setSelectedDonate(don.id)}
          >
            {don.popular && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 font-pixel text-xs"
                style={{
                  background: don.borderColor,
                  color: "#000000",
                  whiteSpace: "nowrap",
                }}
              >
                ★ ПОПУЛЯРНЫЙ
              </div>
            )}

            <div className="text-center mb-6">
              <div
                className="text-5xl mb-3 animate-float"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {don.emoji}
              </div>
              <div
                className="font-pixel text-sm mb-1"
                style={{ color: don.color, textShadow: "2px 2px 0 rgba(0,0,0,0.8)" }}
              >
                {don.name}
              </div>
              <div className="font-rubik text-xs mb-4" style={{ color: "#888888" }}>
                {don.rank}
              </div>
              <div
                className="font-pixel text-2xl"
                style={{ color: "#ffffff", textShadow: "2px 2px 0 rgba(0,0,0,0.8)" }}
              >
                {don.price}₽
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {don.features.map((feat, fi) => (
                <div key={fi} className="flex items-center gap-2 font-rubik text-sm">
                  <span style={{ color: don.color }}>▸</span>
                  <span style={{ color: "#cccccc" }}>{feat}</span>
                </div>
              ))}
            </div>

            <button
              className="mc-button w-full py-3 font-pixel text-xs"
              style={{
                background: `linear-gradient(to bottom, ${don.color}, ${don.color}bb)`,
                color: don.id === "helper" ? "#000000" : "#ffffff",
              }}
            >
              ВЫБРАТЬ
            </button>
          </div>
        ))}
      </div>

      {selectedDonate && (
        <div
          className="mc-card p-8 max-w-xl mx-auto animate-scale-in"
          style={{ border: "3px solid #5aac44" }}
        >
          <h3
            className="font-pixel text-xs mb-6 text-center"
            style={{ color: "#5aac44" }}
          >
            📝 ОФОРМЛЕНИЕ ЗАКАЗА
          </h3>
          <div className="mb-4">
            <label className="block font-pixel text-xs mb-3" style={{ color: "#888888" }}>
              НИКНЕЙМ В MINECRAFT:
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Введи свой ник..."
              className="w-full px-4 py-3 font-rubik text-sm outline-none"
              style={{
                background: "#1a1a1a",
                border: "2px solid #444",
                color: "#ffffff",
                caretColor: "#5aac44",
              }}
            />
          </div>
          <div
            className="flex items-center justify-between p-4 mb-6"
            style={{ background: "#1a1a1a", border: "2px solid #333" }}
          >
            <div>
              <div className="font-pixel text-xs" style={{ color: "#888888" }}>
                Выбрано:
              </div>
              <div className="font-rubik font-bold text-lg mt-1" style={{ color: "#ffffff" }}>
                {donations.find((d) => d.id === selectedDonate)?.name}
              </div>
            </div>
            <div className="font-pixel text-xl" style={{ color: "#ffd700" }}>
              {donations.find((d) => d.id === selectedDonate)?.price}₽
            </div>
          </div>
          <button
            className="mc-button w-full py-4 font-pixel text-xs text-white"
            style={{ background: "linear-gradient(to bottom, #5aac44, #3d7a2e)" }}
          >
            💳 ОПЛАТИТЬ
          </button>
          <p className="text-center font-rubik text-xs mt-4" style={{ color: "#555" }}>
            Привилегия выдаётся в течение 5 минут после оплаты
          </p>
        </div>
      )}

      {/* Реквизиты */}
      <div className="max-w-xl mx-auto mt-6 space-y-4">
        {/* СБП */}
        <div
          className="mc-card p-6 animate-fade-in-up"
          style={{ border: "2px solid #5aac4455" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">⚡</div>
            <div>
              <div className="font-pixel text-xs" style={{ color: "#5aac44" }}>
                СБП — БЫСТРЫЕ ПЛАТЕЖИ
              </div>
              <div className="font-rubik text-xs mt-1" style={{ color: "#888888" }}>
                Мгновенный перевод из любого банка
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-between p-3 mb-4"
            style={{ background: "#1a1a1a", border: "2px solid #333" }}
          >
            <span className="font-rubik font-bold text-lg" style={{ color: "#ffffff", letterSpacing: "0.08em" }}>
              +7-920-875-39-27
            </span>
            <button
              onClick={() => navigator.clipboard.writeText("+79208753927")}
              className="mc-button px-3 py-1 font-rubik text-xs"
              style={{ background: "linear-gradient(to bottom, #444, #333)", color: "#5aac44" }}
            >
              Скопировать
            </button>
          </div>
          <div className="space-y-2">
            {[
              "1. Открой приложение своего банка",
              "2. Переводы → По номеру телефона (СБП)",
              "3. Введи номер и сумму доната",
              "4. Выбери банк получателя: Сбербанк",
              "5. Напиши в Discord свой ник после оплаты",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2 font-rubik text-xs" style={{ color: "#aaaaaa" }}>
                <span style={{ color: "#5aac44", flexShrink: 0 }}>▸</span>
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Сбербанк прямо */}
        <div
          className="mc-card p-5 animate-fade-in-up"
          style={{ border: "2px solid #33333388", animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl flex-shrink-0">💳</div>
            <div className="flex-1">
              <div className="font-pixel text-xs mb-1" style={{ color: "#5aac44" }}>
                СБЕРБАНК · НОМЕР ТЕЛЕФОНА
              </div>
              <div className="font-rubik font-bold text-lg" style={{ color: "#ffffff", letterSpacing: "0.08em" }}>
                +7-920-875-39-27
              </div>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText("+79208753927")}
              className="mc-button px-3 py-2 font-pixel flex-shrink-0"
              style={{ background: "linear-gradient(to bottom, #444, #333)", color: "#ffd700", fontSize: "9px" }}
            >
              📋
            </button>
          </div>
        </div>

        {/* Телеграм после покупки */}
        <a
          href="https://t.me/sasana154super"
          target="_blank"
          rel="noopener noreferrer"
          className="mc-card p-5 animate-fade-in-up flex items-center gap-4 no-underline"
          style={{ border: "2px solid #229ed955", display: "flex", animationDelay: "0.2s" }}
        >
          <div className="text-3xl flex-shrink-0">✈️</div>
          <div className="flex-1">
            <div className="font-pixel text-xs mb-1" style={{ color: "#229ed9" }}>
              ПОСЛЕ ПОКУПКИ — НАПИСАТЬ В TELEGRAM
            </div>
            <div className="font-rubik font-bold text-lg" style={{ color: "#ffffff" }}>
              @sasana154super
            </div>
            <div className="font-rubik text-xs mt-1" style={{ color: "#888888" }}>
              Пришли скриншот оплаты — получишь доступ
            </div>
          </div>
          <div className="font-pixel text-xs flex-shrink-0" style={{ color: "#229ed9" }}>
            ▸
          </div>
        </a>
      </div>
    </div>
  );
}
