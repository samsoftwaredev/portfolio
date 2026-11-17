import { SERVICES } from "@/data/site";
import { SERVICE_ICONS } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <p className="eyebrow">How I can help</p>
        <h2 id="services-title" className="section__title reveal">
          Everything between “I have an idea” and “it’s live and ranking”
        </h2>
        <ul className="grid grid--4 services">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <li key={s.title} className="card reveal">
                <span className="card__icon">
                  <Icon />
                </span>
                <h3 className="card__title">{s.title}</h3>
                <p className="muted">{s.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
