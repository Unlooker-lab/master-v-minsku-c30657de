import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ольга Семёнова",
    role: "Пенсионерка, Советский р-н",
    text: "Мастер приехал в тот же день! Не только починил компьютер, но и объяснил как не допустить проблем в будущем. Очень вежливый и терпеливый. Буду рекомендовать всем знакомым.",
    stars: 5,
    initials: "ОС",
  },
  {
    name: "Александр Петров",
    role: "Менеджер, Центральный р-н",
    text: "Ноутбук перестал включаться. Мастер приехал за 2 часа, заменил разъём питания прямо у меня дома. Быстро, качественно, цена была озвучена заранее. Рекомендую!",
    stars: 5,
    initials: "АП",
  },
  {
    name: "Татьяна Ковалёва",
    role: "Бухгалтер, Заводской р-н",
    text: "Поставил SSD и добавил оперативную память — компьютер теперь летает! Всё объяснил, показал разницу в скорости. Честный мастер, без навязывания лишнего.",
    stars: 5,
    initials: "ТК",
  },
  {
    name: "Виктор Романов",
    role: "ИП, Московский р-н",
    text: "Обращался по поводу рабочего компьютера. Мастер оперативно диагностировал неисправность, заменил блок питания. Минимальный простой бизнеса. Отличная работа!",
    stars: 5,
    initials: "ВР",
  },
  {
    name: "Наталья Иванова",
    role: "Домохозяйка, Фрунзенский р-н",
    text: "Переустановил Windows, настроил всё необходимое. Объяснил как пользоваться безопасно. Пришёл вовремя, убрал за собой. Очень довольна, поставила в телефон его номер навсегда.",
    stars: 5,
    initials: "НИ",
  },
  {
    name: "Дмитрий Сидоров",
    role: "Студент, Октябрьский р-н",
    text: "Попросил собрать компьютер под игры и работу в рамках бюджета. Мастер грамотно подобрал комплектующие, собрал, всё протестировал. Компьютер работает отлично уже полгода.",
    stars: 5,
    initials: "ДС",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-light text-primary font-bold rounded-full px-4 py-1 text-sm mb-3">Отзывы</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            Что говорят клиенты
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            500+ выполненных заказов в Минске
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-6 border border-border flex flex-col gap-4 card-hover" style={{ boxShadow: "var(--card-shadow)" }}>
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(213 85% 42%), hsl(165 60% 40%))" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
