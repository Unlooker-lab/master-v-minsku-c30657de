import { Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";

const PHONE = "+375291234567";
const PHONE_DISPLAY = "+375 (29) 123-45-67";
const TELEGRAM = "https://t.me/masterpc_minsk";
const WHATSAPP = "https://wa.me/375291234567";

export default function Footer() {
  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#why", label: "Преимущества" },
    { href: "#how-it-works", label: "Как работаю" },
    { href: "#pricing", label: "Цены" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#about", label: "О мастере" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "linear-gradient(135deg, hsl(213 85% 55%), hsl(165 60% 50%))" }}>
                💻
              </div>
              <div>
                <div className="font-heading font-black text-white text-lg">МастерПК</div>
                <div className="text-xs text-white/60">Ремонт компьютеров Минск</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Частный мастер по ремонту компьютеров и ноутбуков в Минске. Выезд на дом и в офис. Честно, быстро, с гарантией.
            </p>
            <div className="flex gap-3 mt-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-opacity hover:opacity-80" style={{ background: "hsl(142 70% 42%)" }}>
                <MessageCircle size={20} />
              </a>
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-opacity hover:opacity-80" style={{ background: "hsl(200 85% 50%)" }}>
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Навигация</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Phone size={16} className="text-primary-glow flex-shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={16} className="text-primary-glow flex-shrink-0" />
                Минск и Минский район
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock size={16} className="text-primary-glow flex-shrink-0" />
                Ежедневно 8:00 – 21:00
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center">
            © 2025 МастерПК — Ремонт компьютеров на выезде в Минске. Все права защищены.
          </p>
          <p className="text-white/40 text-xs text-center">
            Ремонт компьютеров Минск · Мастер по ремонту ноутбуков Минск · Срочный ремонт ПК на выезде
          </p>
        </div>
      </div>
    </footer>
  );
}
