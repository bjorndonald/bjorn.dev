import type { ImageProps } from "next/image";
import { type CSSProperties } from "react";

import { Img } from "@/components/atoms/img";
import { hexToRgb } from "@/utils/color";
import cx from "@/utils/cx";

import { ExperienceItem, ExperienceItemWithLine } from "./exp.styles";

export interface ExperienceItemProps {
  company: string;
  position: string;
  from: string;
  until?: string;
  link: string;
  color: string;
  image: ImageProps["src"];
  last?: boolean;
}

export const ExpItem = (props: ExperienceItemProps) => {
  const color = hexToRgb(props.color, 1, true);
  const Component = props.last ? ExperienceItem : ExperienceItemWithLine;
  return (
    <Component
      title={`${props.position} at ${props.company}`}
      href={props.link}
      target={"_blank"}
      style={{ "--tint": color } as CSSProperties}
      data-umami-event={"Experience"}
      data-umami-event-company={props.company}
    >
      <Img
        src={props.image}
        alt={props.company}
        className={cx(
          "size-12 rounded-1.5",
          "select-none border border-divider",
        )}
      />
      <div className={"flex flex-1 flex-col"}>
        <p className={"line-clamp-1 text-3xs tabular-nums text-tertiary-txt"}>
          <span>{props.from}</span> – <span>{props.until || "Present"}</span>
        </p>
        <p
          className={cx(
            "line-clamp-1 font-medium text-primary-txt",
            "group-hocus/exp:underline group-hocus/exp:decoration-primary-txt",
          )}
        >
          {props.company}
        </p>
        <p className={"line-clamp-1 flex-1 text-2xs text-secondary-txt"}>
          {props.position}
        </p>
      </div>
    </Component>
  );
};
