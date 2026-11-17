import { OWNER, PROJECTS } from "@/data/site";
import { yearsOfExperience } from "@/lib/utils";
import { ArrowIcon } from "./Icons";
import BinaryField from "./BinaryField";
import HeroScene from "./HeroScene";

export default function Hero({ now = new Date() }: { now?: Date }) {
  const years = yearsOfExperience(OWNER.careerStartedYear, now);

  return (
    <section className="hero" aria-labelledby="hero-title" data-hero>
      <div className="hero__glow" aria-hidden="true" />
      <BinaryField />
      <div className="container hero__inner">
        <div className="hero__copy">
        <p className="eyebrow hero__rise" style={{ "--i": 0 } as React.CSSProperties}>
          <span className="pulse" aria-hidden="true" />
          Available for new projects
        </p>
        <h1 id="hero-title" className="hero__title hero__rise" style={{ "--i": 1 } as React.CSSProperties}>
          {OWNER.job} who turns ideas into{" "}
          <span className="gradient-text">fast, accessible products</span>
        </h1>
        <p className="hero__lead hero__rise" style={{ "--i": 2 } as React.CSSProperties}>
          {OWNER.tagline} {OWNER.intro}
        </p>
        <div className="hero__cta hero__rise" style={{ "--i": 3 } as React.CSSProperties}>
          <a href="#contact" className="btn btn--primary">
            Start a project <ArrowIcon width={18} height={18} />
          </a>
          <a href="#work" className="btn btn--ghost">
            See my work
          </a>
        </div>
        <dl className="stats hero__rise" style={{ "--i": 4 } as React.CSSProperties}>
          <div>
            <dt>Years building for the web</dt>
            <dd>{years}+</dd>
          </div>
          <div>
            <dt>Products launched</dt>
            <dd>{PROJECTS.length}</dd>
          </div>
          <div>
            <dt>U.S. HHS game challenge</dt>
            <dd>1st place</dd>
          </div>
        </dl>
        </div>
        <HeroScene />
      </div>
    </section>
  );
}
