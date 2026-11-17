import { SITE, SOCIALS } from "@/data/site";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <h2 id="contact-title" className="section__title reveal">
          Have a project in mind? <span className="gradient-text">Let’s build it.</span>
        </h2>
        <p className="section__lead muted reveal">
          Tell me about your idea, your timeline and your goals. I’ll reply
          with clear next steps — no jargon, no pressure.
        </p>
        <div className="hero__cta reveal">
          <a
            className="btn btn--primary"
            href={SITE.contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon width={18} height={18} /> Open form in new tab
            <ArrowIcon width={18} height={18} />
            <span className="sr-only"> (opens a form in a new tab)</span>
          </a>
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              className="btn btn--ghost"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name === "GitHub" ? (
                <GitHubIcon width={18} height={18} />
              ) : (
                <LinkedInIcon width={18} height={18} />
              )}
              {s.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
        <div className="form-frame reveal">
          <iframe
            title="Contact form: tell me about your project"
            src={SITE.contactFormEmbedUrl}
            loading="lazy"
            width="100%"
            height="900"
          >
            Loading form…
          </iframe>
          <p className="muted form-frame__fallback">
            Form not loading?{" "}
            <a
              className="link"
              href={SITE.contactFormUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open it in a new tab
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
