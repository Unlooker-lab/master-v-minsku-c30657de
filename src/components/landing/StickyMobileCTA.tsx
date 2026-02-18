import { MessageCircle, Send } from "lucide-react";

const WHATSAPP = "https://wa.me/375291234567";
const TELEGRAM = "https://t.me/masterpc_minsk";

export default function StickyMobileCTA() {
  return (
    <div className="sticky-cta-bar">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-base"
        style={{ background: "hsl(142 70% 42%)" }}
        aria-label="Написать в WhatsApp"
      >
        <MessageCircle size={22} />
        <span>WhatsApp</span>
      </a>
      <div className="w-px bg-white/20" />
      <a
        href={TELEGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-base"
        style={{ background: "hsl(200 85% 50%)" }}
        aria-label="Написать в Telegram"
      >
        <Send size={22} />
        <span>Telegram</span>
      </a>
    </div>
  );
}
