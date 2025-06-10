import styles from "./ProjectDetails.module.css";
import { StaticImageData } from "next/image";
import VideoSection from "../VideoSection/VideoSection";
import { ComponentType, SVGProps } from "react";

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

interface Props {
  project: {
    title: string;
    slug: string;
    src: StaticImageData;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
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

export default function ProjectDetails({ project }: Props) {
  // const Icon = project.icon;

  return (
    <section className={styles.container}>
      <div className={styles.top}>{/* <Icon className={styles.icon} /> */}</div>
      <div className={styles.content}>
        {/* <div className={styles.introSection}>
          <div className={styles.isLeft}>
            <div className={styles.isLeftTop}>
              <div className={styles.isl1}>
                <div>
                  <span className={styles.sectionTitle}>Client</span>
                  <p className={styles.copy}>{project.title}</p>
                </div>
                <div>
                  <span className={styles.sectionTitle}>Year</span>
                  <p className={styles.copy}>{project.year}</p>
                </div>
              </div>
              <div className={styles.isl2}>
                <div>
                  <span className={styles.sectionTitle}>CMS/Platform</span>
                  <p className={styles.copy}>{project.platform}</p>
                </div>
                <div>
                  <span className={styles.sectionTitle}>Tech</span>
                  <p className={styles.copy}>{project.tech}</p>
                </div>
              </div>
            </div>
            <div className={styles.isLeftBottom}>
              <div className={styles.btnContainer}>
                <Button
                  href={project.href}
                  btnType='secondary'
                  text='Visit Website'
                  target='_blank'
                />
              </div>
            </div>
          </div>
          <div className={styles.isRight}>
            <h3 className={styles.heading}>{project.h1}</h3>
            <div className={styles.tagContainer}>
              {project.tags?.map((x) => (
                <span className={styles.tag} key={x.id}>
                  {x.tag}
                </span>
              ))}
            </div>
          </div>
        </div> */}
      </div>
      {/* {project.stats && project.stats.length > 0 && (
        <Stats stats={project.stats} />
      )} */}
      {/* <Description project={project} /> */}
      {project.video && <VideoSection video={project.video} />}
      <h2 className={styles.title}>{project.title}</h2>

      {/* <Challenge project={project} /> */}
      {/* <Results project={project} /> */}
    </section>
  );
}
