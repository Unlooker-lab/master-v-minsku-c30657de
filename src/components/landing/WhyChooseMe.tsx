import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    emoji: "🏠",
    title: "Приеду к вам",
    desc: "Работаю на выезде по всему Минску и ближайшим пригородам. Никаких очередей и сервисных центров.",
  },
  {
    emoji: "⚡",
    title: "Выезд в тот же день",
    desc: "Стараюсь выехать в течение нескольких часов после обращения. Срочные заявки — в приоритете.",
  },
  {
    emoji: "💬",
    title: "Честная диагностика",
    desc: "Объясню что сломано простым языком. Не навязываю лишних услуг — говорю только то, что нужно реально.",
  },
  {
    emoji: "🛡️",
    title: "Гарантия на работу",
    desc: "Даю письменную гарантию на все выполненные работы. Если что-то не так — устраню бесплатно.",
  },
  {
    emoji: "💰",
    title: "Прозрачные цены",
    desc: "Называю стоимость до начала работ. Никаких скрытых доплат и 'а это ещё дополнительно'.",
  },
  {
    emoji: "👴",
    title: "Работаю с пожилыми",
    desc: "Объясню терпеливо и понятно. Помогу настроить всё что нужно — пошагово, без спешки.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="section-alt py-20" id="why">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary-light text-secondary font-bold rounded-full px-4 py-1 text-sm mb-3">Почему выбирают меня</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            Мастер рядом — надёжно и по-честному
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Частный мастер — это личная ответственность за каждый заказ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-2xl p-6 border border-border flex gap-4 card-hover" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="text-4xl flex-shrink-0 leading-none mt-1">{b.emoji}</div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "500+", label: "отремонтировано устройств" },
            { num: "8+", label: "лет опыта в IT" },
            { num: "95%", label: "клиентов возвращаются снова" },
            { num: "1–2 ч", label: "среднее время ремонта на выезде" },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-5 text-center border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="text-3xl font-heading font-black gradient-text mb-1">{s.num}</div>
              <div className="text-sm text-muted-foreground font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
