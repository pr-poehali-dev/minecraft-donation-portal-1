import Icon from "@/components/ui/icon";

type Section = "home" | "donate" | "top" | "contacts";

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}

const navItems: { id: Section; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "donate", label: "Донаты", icon: "ShoppingCart" },
  { id: "top", label: "Топ-донаторы", icon: "Trophy" },
  { id: "contacts", label: "Контакты", icon: "Mail" },
];

export default function Navbar({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  return (
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
  );
}
