import Image from "next/image";
import type { Project } from "@/data/site";
import { ExternalIcon, GitHubIcon, PlayIcon } from "./Icons";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const { image } = project;
  return (
    <article
      className={`project reveal${project.featured ? " project--featured" : ""}`}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className="project__media">
        {image ? (
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            priority={priority}
          />
        ) : (
          <div className="project__art" aria-hidden="true">
            <span>{project.title}</span>
          </div>
        )}
      </div>
      <div className="project__body">
        <p className="eyebrow">{project.kind}</p>
        <h3 id={`${project.slug}-title`} className="project__title">
          {project.title}
          {project.featured && <span className="badge">Latest</span>}
        </h3>
        <p className="muted">{project.description}</p>
        <p className="project__outcome">{project.outcome}</p>
        <ul className="chips" aria-label={`${project.title} tech stack`}>
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="project__links">
          {project.websiteURL && (
            <a
              className="btn btn--primary btn--sm"
              href={project.websiteURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site <ExternalIcon width={16} height={16} />
              <span className="sr-only"> {project.title} (opens in a new tab)</span>
            </a>
          )}
          {project.videoURL && (
            <a
              className="btn btn--ghost btn--sm"
              href={project.videoURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon width={16} height={16} /> Watch demo
              <span className="sr-only"> of {project.title} (opens in a new tab)</span>
            </a>
          )}
          {project.repositoryURL && (
            <a
              className="btn btn--ghost btn--sm"
              href={project.repositoryURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon width={16} height={16} /> Code
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
