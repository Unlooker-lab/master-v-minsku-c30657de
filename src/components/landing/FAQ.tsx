import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Сколько стоит выезд мастера?",
    a: "Выезд по Минску при заказе ремонта — бесплатно. Стоимость диагностики включается в цену ремонта. Звоните — уточню детали по вашей ситуации.",
  },
  {
    q: "Как быстро вы можете приехать?",
    a: "Стараюсь выехать в тот же день. В большинстве случаев — в течение 2–4 часов после вашего звонка. Срочные заявки рассматриваются в первую очередь.",
  },
  {
    q: "Что делать если сломался ноутбук и он не включается?",
    a: "Позвоните или напишите мне. Опишите ситуацию — когда перестал включаться, что было до этого. Я смогу предварительно оценить возможные причины и приехать с нужными запчастями.",
  },
  {
    q: "Даёте ли вы гарантию на ремонт?",
    a: "Да, даю гарантию на все выполненные работы. Срок гарантии зависит от вида ремонта и составляет от 1 до 6 месяцев. Если проблема повторится — устраню бесплатно.",
  },
  {
    q: "Работаете ли вы в выходные и по вечерам?",
    a: "Да, работаю ежедневно с 8:00 до 21:00 включая субботу и воскресенье. Понимаю, что техника ломается не по расписанию.",
  },
  {
    q: "Можно ли принести устройство самому?",
    a: "Я специализируюсь на выездном ремонте и работаю у вас дома или в офисе. Это удобнее для вас и позволяет сэкономить время. Обсудите ситуацию по телефону — найдём удобное решение.",
  },
  {
    q: "Какие районы Минска вы обслуживаете?",
    a: "Работаю по всем районам Минска: Центральный, Советский, Первомайский, Партизанский, Заводской, Ленинский, Октябрьский, Фрунзенский, Московский. Также выезжаю в Минский район.",
  },
  {
    q: "Нужно ли мне разбираться в компьютерах?",
    a: "Совершенно не нужно. Объясню всё доступным языком без технического жаргона. Расскажу что случилось, что я сделал и как это предотвратить в будущем.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20" id="faq">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary-light text-secondary font-bold rounded-full px-4 py-1 text-sm mb-3">Вопрос–Ответ</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            Частые вопросы
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Не нашли ответа? Позвоните — отвечу на любой вопрос
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-heading font-bold text-foreground hover:bg-muted/40 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-base">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-primary transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
