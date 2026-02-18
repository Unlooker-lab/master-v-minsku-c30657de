import { CheckCircle2, Phone } from "lucide-react";

const PHONE = "+375291234567";

const pricingItems = [
  { service: "Диагностика компьютера / ноутбука", price: "от 20 BYN", note: "При заказе ремонта — бесплатно" },
  { service: "Установка Windows 10/11", price: "от 40 BYN", note: "С драйверами и базовым ПО" },
  { service: "Чистка и замена термопасты", price: "от 30 BYN", note: "Ноутбук / ПК" },
  { service: "Установка SSD / HDD", price: "от 20 BYN", note: "Без учёта стоимости накопителя" },
  { service: "Установка оперативной памяти", price: "от 15 BYN", note: "Без учёта стоимости RAM" },
  { service: "Замена экрана ноутбука", price: "от 50 BYN", note: "Без учёта стоимости матрицы" },
  { service: "Ремонт разъёма питания", price: "от 40 BYN", note: "" },
  { service: "Сборка ПК под заказ", price: "от 60 BYN", note: "Консультация, сборка, настройка" },
  { service: "Выезд в пределах Минска", price: "Бесплатно", note: "При заказе ремонта" },
];

const included = [
  "Честная диагностика без скрытых платежей",
  "Гарантия на все виды работ",
  "Объяснение что и зачем делалось",
  "Рекомендации по эксплуатации",
];

export default function Pricing() {
  return (
    <section className="section-alt py-20" id="pricing">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary-light text-secondary font-bold rounded-full px-4 py-1 text-sm mb-3">Прайс-лист</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            Цены на ремонт
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Точная стоимость — после диагностики. Никаких скрытых доплат.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Pricing table */}
          <div className="lg:col-span-2 bg-card rounded-2xl border border-border overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, hsl(213 85% 42%), hsl(165 60% 40%))" }}>
                    <th className="text-left p-4 text-white font-heading font-bold">Услуга</th>
                    <th className="text-right p-4 text-white font-heading font-bold whitespace-nowrap">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingItems.map((item, i) => (
                    <tr key={item.service} className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}>
                      <td className="p-4">
                        <div className="font-semibold text-foreground">{item.service}</div>
                        {item.note && <div className="text-xs text-muted-foreground mt-0.5">{item.note}</div>}
                      </td>
                      <td className="p-4 text-right whitespace-nowrap">
                        <span className="font-bold text-primary">{item.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side CTA */}
          <div className="flex flex-col gap-4">
            <div className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
              <h3 className="font-heading font-bold text-xl mb-4 text-foreground">В каждый заказ входит:</h3>
              <ul className="flex flex-col gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, hsl(213 85% 42%), hsl(165 60% 40%))" }}>
              <h3 className="font-heading font-bold text-xl mb-2">Не знаете сколько стоит?</h3>
              <p className="text-white/85 text-sm mb-4">Позвоните — опишите проблему, назову примерную стоимость сразу по телефону.</p>
              <a href={`tel:${PHONE}`} className="btn-outline-white w-full !justify-center">
                <Phone size={18} /> Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
