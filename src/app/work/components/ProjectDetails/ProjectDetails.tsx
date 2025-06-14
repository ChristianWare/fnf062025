/* eslint-disable @next/next/no-img-element */
// src/components/ProjectDetails/ProjectDetails.tsx

import styles from "./ProjectDetails.module.css";
import { StaticImageData } from "next/image";
import VideoSection from "../VideoSection/VideoSection";
// import Challenge from "../Challenge/Challenge";      /* ← original, left commented */
// import Results from "../Results/Results";            /* ← original, left commented */
import { ComponentType, SVGProps } from "react";

/* ──────────── data sub-types ──────────── */
interface TagItem {
  id: number;
  tag: string;
}

interface ChallengeItem {
  id: number;
  challengeDetail: string;
}

interface ResultItem {
  id: number;
  resultDetail: string;
}

interface GalleryItem {
  id: number;
  src: StaticImageData;
}

interface StatItem {
  id: number;
  title: string;
  desc: string;
}

/* ──────────── props ──────────── */
type SVGComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface Props {
  project: {
    title: string;
    slug: string;
    src: StaticImageData;
    /** can be a React SVG component *or* a literal string like "Bee" */
    icon: SVGComponent | string;
    video?: string;
    description?: string;
    tags?: readonly TagItem[];
    h1: string;
    year: number;
    platform: string;
    tech: string;
    href: string;
    challenge: readonly ChallengeItem[];
    results: readonly ResultItem[];
    gallery?: readonly GalleryItem[];
    stats?: readonly StatItem[];
  };
}

/* ──────────── component ──────────── */
export default function ProjectDetails({ project }: Props) {
  /* if `icon` is a string, skip rendering it */
  const IconComponent =
    typeof project.icon === "string" ? null : (project.icon as SVGComponent);

  return (
    <section className={styles.container}>
      {/* ─── header section ─── */}
      <div className={styles.top}>
        {IconComponent && <IconComponent className={styles.icon} />}
        <h2 className={styles.h1}>{project.h1}</h2>
        <p className={styles.meta}>
          {project.platform} &nbsp;•&nbsp; {project.year}
        </p>
      </div>

      {/* ─── description & tags ─── */}
      <div className={styles.content}>
        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}

        {project.tags && (
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag.id}>{tag.tag}</li>
            ))}
          </ul>
        )}
      </div>

      {/* ─── video (optional) ─── */}
      {project.video && <VideoSection video={project.video} />}

      {/* ─── challenge / results (commented out in original) ─── */}
      {/* <Challenge project={project} /> */}
      {/* <Results project={project} /> */}

      {/* ─── gallery (optional) ─── */}
      {project.gallery && (
        <div className={styles.gallery}>
          {project.gallery.map((g) => (
            <img key={g.id} src={g.src.src} alt='' />
          ))}
        </div>
      )}

      {/* ─── stats (optional) ─── */}
      {project.stats && (
        <ul className={styles.stats}>
          {project.stats.map((s) => (
            <li key={s.id}>
              <strong>{s.title}</strong> – {s.desc}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
