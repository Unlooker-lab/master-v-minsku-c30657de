import { useState } from "react";
import { Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const PHONE = "+375291234567";
const PHONE_DISPLAY = "+375 (29) 123-45-67";
const TELEGRAM = "https://t.me/masterpc_minsk";
const WHATSAPP = "https://wa.me/375291234567";
const VIBER = "viber://chat?number=%2B375291234567";

const ViberIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4 0C5.6.3 1.2 4.8.9 10.6c-.2 3.1.6 6 2.4 8.3L2 24l5.3-1.4c1.9 1 4 1.6 6.2 1.6h.1c6.2 0 11.4-5 11.4-11.2C25 6.8 19.8 1.6 13.6.3 12.9.1 12.1 0 11.4 0zm.1 2.2c5 0 9.1 4.1 9.1 9.1 0 5-4.1 9.1-9.1 9.1-1.9 0-3.7-.6-5.2-1.6l-.4-.2-3.1.8.8-3-.3-.4C2.3 14.6 1.7 13 1.7 11.3c0-5 4.1-9.1 9.1-9.1h.7zm-2 3.3c-.2 0-.5.1-.7.4-.5.5-1.5 1.4-1.5 3.4s1.6 4 1.8 4.2c.2.3 3 4.7 7.3 6.4 1 .4 1.8.6 2.4.8.9.3 1.8.3 2.4.1.7-.2 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4-.4-.2-2.1-1-2.4-1.1-.3-.1-.6-.2-.8.2-.2.4-.9 1.1-1.1 1.3-.2.2-.4.3-.8.1s-1.6-.6-3-1.9c-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.3.1-.5 0-.7-.1-.2-.8-1.9-1.1-2.6-.3-.6-.5-.5-.7-.5h-.6z"/>
  </svg>
);

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", problem: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Введите ваше имя";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) e.phone = "Введите корректный номер телефона";
    if (!form.problem.trim() || form.problem.trim().length < 5) e.problem = "Опишите проблему подробнее";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="section-alt py-20" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-light text-primary font-bold rounded-full px-4 py-1 text-sm mb-3">Связаться</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            Оставьте заявку
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Перезвоню в течение 15 минут и согласую удобное время выезда
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--secondary-light))" }}>
                  <CheckCircle2 size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">Заявка получена!</h3>
                <p className="text-muted-foreground">Перезвоню вам в ближайшее время. Спасибо, {form.name}!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Ваше имя *</label>
                  <input
                    type="text"
                    placeholder="Иван"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className={`w-full rounded-xl border px-4 py-3 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base ${errors.name ? "border-destructive" : "border-border"}`}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Номер телефона *</label>
                  <input
                    type="tel"
                    placeholder="+375 (29) 000-00-00"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    maxLength={20}
                    className={`w-full rounded-xl border px-4 py-3 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base ${errors.phone ? "border-destructive" : "border-border"}`}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Опишите проблему *</label>
                  <textarea
                    placeholder="Например: ноутбук не включается, компьютер тормозит, нужно переустановить Windows..."
                    value={form.problem}
                    onChange={e => setForm({ ...form, problem: e.target.value })}
                    rows={4}
                    maxLength={1000}
                    className={`w-full rounded-xl border px-4 py-3 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base resize-none ${errors.problem ? "border-destructive" : "border-border"}`}
                  />
                  {errors.problem && <p className="text-destructive text-xs mt-1">{errors.problem}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary justify-center w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Отправляю..." : "Оставить заявку"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <div className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">Или свяжитесь напрямую</h3>
              <div className="flex flex-col gap-3">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">Телефон</div>
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors">{PHONE_DISPLAY}</div>
                  </div>
                </a>

                <a href={VIBER} className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted transition-colors group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(270 60% 92%)" }}>
                    <span style={{ color: "hsl(270 60% 44%)" }}><ViberIcon size={20} /></span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">Viber</div>
                    <div className="font-bold text-foreground">Написать в Viber</div>
                  </div>
                </a>

                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted transition-colors group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(142 70% 92%)" }}>
                    <MessageCircle size={20} style={{ color: "hsl(142 70% 38%)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">WhatsApp</div>
                    <div className="font-bold text-foreground">Написать в WhatsApp</div>
                  </div>
                </a>

                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted transition-colors group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(200 85% 92%)" }}>
                    <Send size={20} style={{ color: "hsl(200 85% 44%)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">Telegram</div>
                    <div className="font-bold text-foreground">@masterpc_minsk</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, hsl(213 85% 42%), hsl(165 60% 40%))" }}>
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="font-heading font-bold text-xl mb-1">Режим работы</h3>
              <p className="text-white/85 text-sm">Ежедневно с 8:00 до 21:00</p>
              <p className="text-white/85 text-sm">Включая выходные и праздники</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-soft" />
                  <span className="text-sm font-semibold">Сейчас принимаю заявки</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
