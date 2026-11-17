import { AWARDS } from "@/data/site";
import { ExternalIcon } from "./Icons";

export default function Awards() {
  return (
    <section id="recognition" className="section" aria-labelledby="recognition-title">
      <div className="container">
        <p className="eyebrow">Recognition</p>
        <h2 id="recognition-title" className="section__title reveal">
          Awards, press &amp; writing
        </h2>
        <ul className="grid grid--3">
          {AWARDS.map((a) => (
            <li key={a.href} className="card reveal">
              <p className="eyebrow">{a.kind}</p>
              <h3 className="card__title">{a.title}</h3>
              <p className="muted">{a.text}</p>
              <a
                className="link"
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {a.cta} <ExternalIcon width={16} height={16} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
