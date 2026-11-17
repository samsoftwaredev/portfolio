import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/site";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** Six-faced CSS 3D box. `front` is rendered on the front face. */
function Box({
  className,
  front,
}: {
  className: string;
  front?: ReactNode;
}) {
  return (
    <div className={`box ${className}`}>
      <div className="face face--front">{front}</div>
      <div className="face face--back" />
      <div className="face face--left" />
      <div className="face face--right" />
      <div className="face face--top" />
      <div className="face face--bottom" />
    </div>
  );
}

const LIGHTS = Array.from({ length: 18 }, (_, i) => i);
const SWITCHES = Array.from({ length: 8 }, (_, i) => i);

function Computer() {
  return (
    <>
      <Box
        className="cab"
        front={
          <div className="panel">
            <div className="plate">SR-1960</div>
            <div className="reels">
              <b className="reel" />
              <b className="reel reel--rev" />
            </div>
            <div className="lights">
              {LIGHTS.map((i) => (
                <i
                  key={i}
                  className={i % 3 === 0 ? "on" : undefined}
                  style={{ "--d": ((i * 37) % 100) / 50 } as Vars}
                />
              ))}
            </div>
            <div className="switches">
              {SWITCHES.map((i) => (
                <u key={i} className={i % 2 ? "up" : undefined} />
              ))}
            </div>
          </div>
        }
      />
      <Box
        className="mon"
        front={
          <div className="screen">
            <div className="term">
              <p style={{ "--n": 16, "--l": 0 } as Vars}>&gt; BOOT SR-OS 1.0</p>
              <p style={{ "--n": 19, "--l": 1 } as Vars}>&gt; LOADING PROJECTS</p>
              <p style={{ "--n": 11, "--l": 2 } as Vars}>
                &gt; {PROJECTS.length} FOUND<span className="cursor">_</span>
              </p>
            </div>
          </div>
        }
      />
    </>
  );
}

/**
 * Decorative hero stage: a spinning 1960s mainframe, a boot-up terminal, and
 * floating, glitching windows for each project. Purely visual — the real,
 * accessible project content lives in the Projects section.
 */
export default function HeroScene() {
  return (
    <div className="scene" data-scene aria-hidden="true">
      <div className="scene__floor" />
      <div className="scene__scan" />
      <div className="stage">
        <div className="ring">
          <div className="ring__spin" />
        </div>
        <div className="rigwrap">
          <div className="rig">
            <div className="idle">
              <Computer />
            </div>
          </div>
        </div>
        {PROJECTS.map((p, i) => (
          <div className="win" key={p.slug} data-i={i} style={{ "--i": i } as Vars}>
            <div className="win__fly">
              <div className="win__float">
                <div className="win__card">
                  <div className="win__bar">
                    <span />
                    <span />
                    <span />
                    <em data-text={p.title}>{p.title}</em>
                  </div>
                  <div className="win__body">
                    {p.image ? (
                      <Image
                        src={p.image.src}
                        width={320}
                        height={Math.round((320 * p.image.height) / p.image.width)}
                        alt=""
                        sizes="(min-width: 56rem) 160px, 100px"
                      />
                    ) : (
                      <div className="win__art">{p.title}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
