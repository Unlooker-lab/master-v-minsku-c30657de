const steps = [
  {
    num: "1",
    emoji: "📞",
    title: "Позвоните или напишите",
    desc: "Опишите проблему по телефону, в Telegram или WhatsApp. Я отвечу быстро и назначу удобное время.",
  },
  {
    num: "2",
    emoji: "🚗",
    title: "Мастер приедет к вам",
    desc: "Приеду домой или в офис. Со всем необходимым инструментом и запасными частями.",
  },
  {
    num: "3",
    emoji: "🔍",
    title: "Диагностика и честная оценка",
    desc: "Выявлю неисправность, объясню причину простым языком и назову точную стоимость до начала ремонта.",
  },
  {
    num: "4",
    emoji: "✅",
    title: "Ремонт и проверка",
    desc: "Устраняю проблему, тестирую результат. Даю гарантию и рекомендации по дальнейшей эксплуатации.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20" id="how-it-works">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-light text-primary font-bold rounded-full px-4 py-1 text-sm mb-3">Процесс работы</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            Как проходит ремонт
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Просто, прозрачно и без лишних слов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20 z-0" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="step-number relative">
                {step.num}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block lg:hidden absolute top-1/2 left-full w-8 h-0.5 bg-border -translate-y-1/2 ml-2" />
                )}
              </div>
              <div className="text-4xl">{step.emoji}</div>
              <h3 className="font-heading font-bold text-lg text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
