import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/e2baef62-f371-44e1-950d-1d6f18bf3ca4/files/8e3670de-f997-40df-bb37-5edbbef8dad5.jpg";

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

const topDonators = [
  { place: 1, name: "Steve_Pro", amount: 1500, medal: "🥇", color: "#ffd700" },
  { place: 2, name: "CreeperSlayer", amount: 890, medal: "🥈", color: "#c0c0c0" },
  { place: 3, name: "DiamondKing", amount: 660, medal: "🥉", color: "#cd7f32" },
  { place: 4, name: "NightWalker", amount: 440, medal: "4", color: "#8bc34a" },
  { place: 5, name: "BlockMaster", amount: 330, medal: "5", color: "#8bc34a" },
];

type Section = "home" | "donate" | "top" | "contacts";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedDonate, setSelectedDonate] = useState<string | null>(null);
  const [nickname, setNickname] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "donate", label: "Донаты", icon: "ShoppingCart" },
    { id: "top", label: "Топ-донаторы", icon: "Trophy" },
    { id: "contacts", label: "Контакты", icon: "Mail" },
  ];

  return (
    <div className="min-h-screen font-rubik" style={{ background: "#111111" }}>
      {/* NAVBAR */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "linear-gradient(to bottom, #3a3a3a, #2a2a2a)",
          borderBottom: "3px solid #1a1a1a",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl animate-float">⛏️</span>
            <span
              className="font-pixel text-xs hidden sm:block"
              style={{ color: "#5aac44", textShadow: "2px 2px 0 #1a5c0a" }}
            >
              One<span style={{ color: "#ffd700" }}>Grief</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="flex items-center gap-2 px-4 py-2 font-rubik font-semibold text-sm transition-all"
                style={{
                  background:
                    activeSection === item.id
                      ? "linear-gradient(to bottom, #5aac44, #3d7a2e)"
                      : "transparent",
                  color: activeSection === item.id ? "#ffffff" : "#aaaaaa",
                  border:
                    activeSection === item.id
                      ? "2px solid #2a5c1e"
                      : "2px solid transparent",
                  textShadow:
                    activeSection === item.id
                      ? "1px 1px 0 rgba(0,0,0,0.8)"
                      : "none",
                }}
              >
                <Icon name={item.icon} size={14} />
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            style={{ color: "#aaaaaa" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden border-t"
            style={{ borderColor: "#1a1a1a", background: "#2a2a2a" }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-6 py-3 font-rubik font-semibold text-sm"
                style={{
                  background:
                    activeSection === item.id ? "#5aac44" : "transparent",
                  color: activeSection === item.id ? "#ffffff" : "#aaaaaa",
                }}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HOME */}
      {activeSection === "home" && (
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
                    🏆 ТОП ИГРОКОВ
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: "🌍", title: "IP Сервера", value: "onegr.rustix.su", sub: "Java Edition 1.20" },
                { icon: "👥", title: "Игроки онлайн", value: "47 / 200", sub: "Прямо сейчас" },
                { icon: "⚡", title: "Режим игры", value: "Выживание", sub: "Кооперативный" },
              ].map((info, i) => (
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
      )}

      {/* DONATE */}
      {activeSection === "donate" && (
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
        </div>
      )}

      {/* TOP */}
      {activeSection === "top" && (
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
      )}

      {/* CONTACTS */}
      {activeSection === "contacts" && (
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2
              className="font-pixel text-sm mb-4"
              style={{ color: "#5aac44", textShadow: "2px 2px 0 #1a3d0a" }}
            >
              📬 КОНТАКТЫ
            </h2>
            <p className="font-rubik text-lg" style={{ color: "#888888" }}>
              Свяжись с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: "💬", title: "Discord", value: "discord.gg/mcserver", desc: "Официальный сервер", color: "#5865F2" },
              { icon: "📱", title: "Telegram", value: "@mcserver_official", desc: "Канал новостей", color: "#229ED9" },
              { icon: "📧", title: "Email", value: "admin@mcserver.ru", desc: "Для обращений", color: "#5aac44" },
              { icon: "🌐", title: "VK Группа", value: "vk.com/mcserver", desc: "Сообщество игроков", color: "#0077FF" },
            ].map((contact, i) => (
              <div
                key={i}
                className="mc-card p-6 flex items-center gap-4 cursor-pointer animate-fade-in-up"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  border: "2px solid #333",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = contact.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#333";
                }}
              >
                <div className="text-4xl flex-shrink-0">{contact.icon}</div>
                <div>
                  <div className="font-pixel text-xs mb-1" style={{ color: contact.color }}>
                    {contact.title}
                  </div>
                  <div className="font-rubik font-bold text-base mb-1" style={{ color: "#ffffff" }}>
                    {contact.value}
                  </div>
                  <div className="font-rubik text-xs" style={{ color: "#666666" }}>
                    {contact.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mc-card p-8" style={{ border: "2px solid #333" }}>
            <h3 className="font-pixel text-xs mb-6" style={{ color: "#5aac44" }}>
              ✉️ НАПИСАТЬ НАМ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-pixel text-xs mb-2" style={{ color: "#666666" }}>
                  НИКНЕЙМ:
                </label>
                <input
                  type="text"
                  placeholder="Твой никнейм..."
                  className="w-full px-4 py-3 font-rubik text-sm outline-none"
                  style={{ background: "#1a1a1a", border: "2px solid #333", color: "#ffffff" }}
                />
              </div>
              <div>
                <label className="block font-pixel text-xs mb-2" style={{ color: "#666666" }}>
                  EMAIL:
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 font-rubik text-sm outline-none"
                  style={{ background: "#1a1a1a", border: "2px solid #333", color: "#ffffff" }}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-pixel text-xs mb-2" style={{ color: "#666666" }}>
                СООБЩЕНИЕ:
              </label>
              <textarea
                rows={4}
                placeholder="Опишите ваш вопрос или проблему..."
                className="w-full px-4 py-3 font-rubik text-sm outline-none resize-none"
                style={{ background: "#1a1a1a", border: "2px solid #333", color: "#ffffff" }}
              />
            </div>
            <button
              className="mc-button px-8 py-3 font-pixel text-xs text-white"
              style={{ background: "linear-gradient(to bottom, #5aac44, #3d7a2e)" }}
            >
              📤 ОТПРАВИТЬ
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer
        className="mt-16 py-8 text-center"
        style={{ background: "#0a0a0a", borderTop: "3px solid #1a1a1a" }}
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-xl">⛏️</span>
          <span className="font-pixel text-xs" style={{ color: "#5aac44" }}>
            One<span style={{ color: "#ffd700" }}>Grief</span>
          </span>
        </div>
        <p className="font-rubik text-xs" style={{ color: "#444444" }}>
          © 2024 OneGrief — Сервер выживания. Все права защищены.
        </p>
        <p className="font-rubik text-xs mt-1" style={{ color: "#333333" }}>
          Не является официальным продуктом Mojang Studios
        </p>
      </footer>
    </div>
  );
}