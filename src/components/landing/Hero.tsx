import { Phone, MessageCircle, Send, Clock, Star, Shield, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const PHONE = "+375291234567";
const PHONE_DISPLAY = "+375 (29) 123-45-67";
const TELEGRAM = "https://t.me/masterpc_minsk";
const WHATSAPP = "https://wa.me/375291234567";

const trustBadges = [
  { icon: Clock, text: "Выезд в день обращения" },
  { icon: Star, text: "500+ довольных клиентов" },
  { icon: Shield, text: "Гарантия на работу" },
  { icon: Wrench, text: "Честная диагностика" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-start md:items-center" id="hero">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Мастер по ремонту компьютеров Минск"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(213 85% 28% / 0.93), hsl(165 60% 24% / 0.87))" }} />
      </div>

      <div className="container relative z-10 pt-6 pb-20 md:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-white text-sm font-semibold mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
            Принимаю заявки · Минск и пригород
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-3">
            Ремонт компьютеров <br />
            <span className="text-green-300">на выезде в Минске</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-white/85 font-body mb-5 leading-relaxed">
            Частный мастер приедет к вам домой или в офис. Диагностика, ремонт, настройка — быстро, честно, с гарантией.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 mb-5">
            <a href={`tel:${PHONE}`} className="btn-primary text-center !py-3">
              <Phone size={20} /> Позвонить сейчас
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-center !py-3">
              <MessageCircle size={20} /> WhatsApp
            </a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn-telegram text-center !py-3">
              <Send size={20} /> Telegram
            </a>
          </div>

          {/* Phone number large */}
          <a
            href={`tel:${PHONE}`}
            className="inline-block text-white font-heading font-black text-2xl md:text-4xl hover:text-green-300 transition-colors mb-5"
          >
            {PHONE_DISPLAY}
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="trust-badge !text-xs !px-3 !py-1.5">
                <badge.icon size={14} className="text-secondary" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="hsl(210 20% 98%)" />
        </svg>
      </div>
    </section>
  );
}
