import Image from "next/image";
import { OWNER, SKILL_GROUPS } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section section--alt" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__photo reveal">
          <Image
            src={OWNER.picture}
            width={OWNER.pictureSize.width}
            height={OWNER.pictureSize.height}
            alt={`Portrait of ${OWNER.fullName}`}
            sizes="(min-width: 900px) 360px, 70vw"
          />
        </div>
        <div className="about__text">
          <p className="eyebrow">About me</p>
          <h2 id="about-title" className="section__title reveal">
            An engineer who thinks like a founder
          </h2>
          {OWNER.about.map((p) => (
            <p key={p.slice(0, 24)} className="muted reveal">
              {p}
            </p>
          ))}
          <div className="skills">
            {SKILL_GROUPS.map((g) => (
              <section key={g.title} aria-labelledby={`skills-${g.title}`} className="reveal">
                <h3 id={`skills-${g.title}`} className="skills__title">
                  {g.title}
                </h3>
                <ul className="chips">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
