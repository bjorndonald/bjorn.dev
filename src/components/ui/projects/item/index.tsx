import { type CSSProperties } from "react";

import type { Project } from "@/content";
import { hexToRgb } from "@/utils/color";
import cx from "@/utils/cx";

import { ProjectIcon, ProjectLink } from "./item.styles";
import { StarsCounter } from "./stars-count";

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const color =
    hexToRgb(project.darkColor || project.color, 1, true) ||
    "var(--color-accent-dark)";
  return (
    <ProjectLink
      title={project.name}
      href={project.url}
      style={{ "--tint": color } as CSSProperties}
      data-umami-event={"View project"}
      data-umami-event-project={project.name}
    >
      <ProjectIcon
        src={`/media/projects/${project.icon || ""}`}
        alt={`Icon for project "${project.name}"`}
        width={56}
        height={56}
        blurDataURL={project.iconMeta?.blurDataURL}
        placeholder={project.iconMeta?.placeholder}
      />
      <div className={"flex flex-col gap-0.5"}>
        <div className={"flex flex-row items-center gap-3"}>
          <p
            className={cx(
              "font-medium",
              "line-clamp-2 text-pretty text-xs text-primary-txt",
              "group-hocus/project:underline group-hocus/project:decoration-primary-txt",
            )}
          >
            {project.name}
          </p>
          <StarsCounter repo={project.repo || ""} owner={project.owner} />
        </div>
        <p className={"line-clamp-2 text-pretty text-2xs text-secondary-txt"}>
          {project.description}
        </p>
      </div>
    </ProjectLink>
  );
};
