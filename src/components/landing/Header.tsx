import { Phone, MessageCircle, Send, Menu, X } from "lucide-react";

const ViberIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4 0C5.6.3 1.2 4.8.9 10.6c-.2 3.1.6 6 2.4 8.3L2 24l5.3-1.4c1.9 1 4 1.6 6.2 1.6h.1c6.2 0 11.4-5 11.4-11.2C25 6.8 19.8 1.6 13.6.3 12.9.1 12.1 0 11.4 0zm.1 2.2c5 0 9.1 4.1 9.1 9.1 0 5-4.1 9.1-9.1 9.1-1.9 0-3.7-.6-5.2-1.6l-.4-.2-3.1.8.8-3-.3-.4C2.3 14.6 1.7 13 1.7 11.3c0-5 4.1-9.1 9.1-9.1h.7zm-2 3.3c-.2 0-.5.1-.7.4-.5.5-1.5 1.4-1.5 3.4s1.6 4 1.8 4.2c.2.3 3 4.7 7.3 6.4 1 .4 1.8.6 2.4.8.9.3 1.8.3 2.4.1.7-.2 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4-.4-.2-2.1-1-2.4-1.1-.3-.1-.6-.2-.8.2-.2.4-.9 1.1-1.1 1.3-.2.2-.4.3-.8.1s-1.6-.6-3-1.9c-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.3.1-.5 0-.7-.1-.2-.8-1.9-1.1-2.6-.3-.6-.5-.5-.7-.5h-.6z"/>
  </svg>
);
import { useState } from "react";

const PHONE = "+375291234567";
const PHONE_DISPLAY = "+375 (29) 123-45-67";
const TELEGRAM = "https://t.me/masterpc_minsk";
const WHATSAPP = "https://wa.me/375291234567";
const VIBER = "viber://chat?number=%2B375291234567";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#how-it-works", label: "Как работаю" },
    { href: "#pricing", label: "Цены" },
    { href: "#about", label: "Обо мне" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-3 gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "linear-gradient(135deg, hsl(213 85% 42%), hsl(165 60% 40%))" }}>
            💻
          </div>
          <div>
            <div className="font-heading font-black text-foreground leading-tight text-base">МастерПК</div>
            <div className="text-xs text-muted-foreground leading-tight">Ремонт компьютеров Минск</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-primary font-semibold transition-colors text-sm">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors text-sm">
            <Phone size={16} className="text-primary" />
            {PHONE_DISPLAY}
          </a>
          <a href={VIBER} className="btn-viber !py-2 !px-4 !text-sm">
            <ViberIcon /> Viber
          </a>
          <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn-telegram !py-2 !px-4 !text-sm">
            <Send size={16} /> Telegram
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-card px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 px-3 rounded-xl font-semibold text-foreground hover:bg-muted transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 font-bold text-foreground py-2 px-3">
              <Phone size={18} className="text-primary" /> {PHONE_DISPLAY}
            </a>
            <div className="flex gap-2">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1 !py-2 !px-3 !text-sm">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn-telegram flex-1 !py-2 !px-3 !text-sm">
                <Send size={16} /> Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
