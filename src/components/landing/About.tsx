import { CheckCircle2, MapPin, Clock } from "lucide-react";
import masterPhoto from "@/assets/master-photo.jpg";

const skills = [
  "Ремонт ПК и ноутбуков любой сложности",
  "Работа с техникой всех марок",
  "Сертифицированный IT-специалист",
  "Опыт работы 8+ лет",
  "Обслуживание частных клиентов и малого бизнеса",
  "Всегда на связи — отвечаю быстро",
];

export default function About() {
  return (
    <section className="section-alt py-20" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={masterPhoto}
                  alt="Мастер по ремонту компьютеров в Минске"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border">
                <div className="text-3xl font-heading font-black gradient-text">8+</div>
                <div className="text-sm text-muted-foreground font-semibold">лет опыта</div>
              </div>
              <div className="absolute -top-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-soft" />
                <span className="text-sm font-bold text-foreground">Принимаю заявки</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-primary-light text-primary font-bold rounded-full px-4 py-1 text-sm mb-4">О мастере</span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Привет, меня зовут Андрей
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Я — частный мастер по ремонту компьютеров и ноутбуков в Минске. Занимаюсь этим уже более 8 лет. За это время отремонтировал сотни устройств и помог сотням клиентов.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Работаю честно и открыто: всегда объясняю что сломалось, почему и что нужно сделать. Не навязываю лишнего — только то, что реально нужно вашему устройству. Для меня важна репутация, поэтому каждый заказ выполняю как для себя.
            </p>

            <ul className="flex flex-col gap-3 mb-6">
              {skills.map((s) => (
                <li key={s} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                  <span className="font-semibold">{s}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary" />
                Работаю по всему Минску и пригороду
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock size={18} className="text-primary" />
                Пн–Вс, 8:00 – 21:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
