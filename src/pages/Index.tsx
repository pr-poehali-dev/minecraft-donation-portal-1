import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import DonateSection from "@/components/DonateSection";
import TopSection from "@/components/TopSection";
import ContactsSection from "@/components/ContactsSection";

type Section = "home" | "donate" | "top" | "contacts";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedDonate, setSelectedDonate] = useState<string | null>(null);
  const [nickname, setNickname] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-rubik" style={{ background: "#111111" }}>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {activeSection === "home" && (
        <HomeSection setActiveSection={setActiveSection} />
      )}

      {activeSection === "donate" && (
        <DonateSection
          selectedDonate={selectedDonate}
          setSelectedDonate={setSelectedDonate}
          nickname={nickname}
          setNickname={setNickname}
        />
      )}

      {activeSection === "top" && (
        <TopSection setActiveSection={setActiveSection} />
      )}

      {activeSection === "contacts" && (
        <ContactsSection />
      )}

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
