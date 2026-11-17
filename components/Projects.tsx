import { PROJECTS } from "@/data/site";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="section section--alt" aria-labelledby="work-title">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-title" className="section__title reveal">
          Real products, real users, real results
        </h2>
        <p className="section__lead muted reveal">
          From a local business that needs the phone to ring, to real-time apps
          handling payments — here’s what I’ve built and shipped.
        </p>
        <div className="projects">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
