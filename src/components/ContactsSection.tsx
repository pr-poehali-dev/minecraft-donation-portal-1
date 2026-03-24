export default function ContactsSection() {
  const contacts = [
    { icon: "💬", title: "Discord", value: "discord.gg/mcserver", desc: "Официальный сервер", color: "#5865F2" },
    { icon: "📱", title: "Telegram", value: "@mcserver_official", desc: "Канал новостей", color: "#229ED9" },
    { icon: "📧", title: "Email", value: "admin@mcserver.ru", desc: "Для обращений", color: "#5aac44" },
    { icon: "🌐", title: "VK Группа", value: "vk.com/mcserver", desc: "Сообщество игроков", color: "#0077FF" },
  ];

  return (
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
        {contacts.map((contact, i) => (
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
  );
}
