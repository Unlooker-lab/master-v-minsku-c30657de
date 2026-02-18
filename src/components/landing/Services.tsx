import { Monitor, Laptop, Cpu, HardDrive, MemoryStick, PcCase, Settings, Zap } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Срочный ремонт на выезде",
    desc: "Выезжаю в тот же день. Диагностирую и чаще всего устраняю неисправность прямо у вас дома или в офисе.",
    accent: true,
  },
  {
    icon: Monitor,
    title: "Ремонт компьютеров",
    desc: "Замена и ремонт комплектующих, устранение неисправностей, восстановление работоспособности ПК.",
    accent: false,
  },
  {
    icon: Laptop,
    title: "Ремонт ноутбуков",
    desc: "Замена экрана, клавиатуры, разъёмов, системы охлаждения. Ремонт материнских плат.",
    accent: false,
  },
  {
    icon: Cpu,
    title: "Диагностика железа",
    desc: "Полная диагностика всех компонентов. Честное заключение — без навязывания лишних замен.",
    accent: false,
  },
  {
    icon: HardDrive,
    title: "Замена компонентов",
    desc: "Замена жёстких дисков, блоков питания, видеокарт, матриц и других комплектующих.",
    accent: false,
  },
  {
    icon: MemoryStick,
    title: "Апгрейд: RAM и SSD",
    desc: "Установка оперативной памяти и SSD-дисков для ускорения вашего компьютера или ноутбука.",
    accent: false,
  },
  {
    icon: PcCase,
    title: "Сборка ПК под заказ",
    desc: "Помогу выбрать комплектующие под бюджет и задачи, соберу, настрою и протестирую компьютер.",
    accent: false,
  },
  {
    icon: Settings,
    title: "Установка Windows",
    desc: "Чистая установка Windows 10/11, все драйверы, базовое ПО и правильные настройки под ваши нужды.",
    accent: false,
  },
];

export default function Services() {
  return (
    <section className="py-20" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-light text-primary font-bold rounded-full px-4 py-1 text-sm mb-3">Что я делаю</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            Услуги мастера
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Ремонт компьютеров и ноутбуков в Минске — качественно и с гарантией
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`service-card flex flex-col gap-3 ${s.accent ? "border-primary" : ""}`}
              style={s.accent ? { background: "linear-gradient(135deg, hsl(213 85% 42%), hsl(165 60% 40%))", color: "white", border: "none" } : {}}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={s.accent
                  ? { background: "rgba(255,255,255,0.2)" }
                  : { background: "hsl(var(--primary-light))" }
                }
              >
                <s.icon size={24} style={s.accent ? { color: "white" } : { color: "hsl(var(--primary))" }} />
              </div>
              <h3 className="text-lg font-heading font-bold leading-snug" style={s.accent ? { color: "white" } : {}}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={s.accent ? { color: "rgba(255,255,255,0.85)" } : { color: "hsl(var(--muted-foreground))" }}>
                {s.desc}
              </p>
              {s.accent && (
                <span className="inline-block mt-auto bg-white/20 text-white text-xs font-bold rounded-full px-3 py-1 w-fit">
                  ⚡ Срочный выезд
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
