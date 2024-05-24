import type { ComponentProps } from "react";

import { github } from "@/components/icons";
import cx from "@/utils/cx";

import { SocialLink } from "./social-link";

export const SocialLinks = (props: ComponentProps<"ul">) => {
  return (
    <ul className={cx("flex flex-row items-center gap-1.5", props.className)}>
      <li>
        <SocialLink
          title="Github"
          href={"https://github.com/bjorndonald"}
          iconPath={github}
          className={
            "hocus:bg-[#ebebeb] hocus:text-[#333] dark:hocus:bg-[#333] hocus:dark:text-[#ebebeb]"
          }
        />
      </li>
      <li>
        <SocialLink
          title={"LinkedIn"}
          href={"https://linkedin.com/in/jahirfiquitiva"}
          iconPath={
            "M21 21v-7.2c0-2.4-2-4.4-4.4-4.4-1.1 0-2.5.7-3.1 1.8V9.7H9.7V21h3.8v-6.7c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9V21H21M5.3 7.6c1.3 0 2.3-1 2.3-2.3C7.6 4 6.5 3 5.3 3 4 3 3 4 3 5.3c0 1.2 1 2.3 2.3 2.3M7.2 21V9.7H3.4V21h3.8z"
          }
          className={
            "hocus:bg-[#e7f0f9] hocus:text-[#0C66C2] dark:hocus:bg-[#031f3a] hocus:dark:text-[#5494d4]"
          }
        />
      </li>
      <li>
        <SocialLink
          title={"𝕏 (formerly Twitter)"}
          aria-label={"𝕏 (formerly Twitter)"}
          href={"https://twitter.com/jahirfiquitiva"}
          className={cx(
            "leading-none",
            "hocus:bg-[#e8f6fe] hocus:text-[#1471a9] dark:hocus:bg-[#093049] hocus:dark:text-[#1da1f2]",
          )}
        >
          <span
            className={cx(
              "font-manrope font-semibold",
              "size-5.5 select-none",
              "flex items-center justify-center",
              "text-center text-xl leading-none",
            )}
          >
            𝕏
          </span>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          title={"Instagram"}
          href={"https://instagram.com/jahirfiquitiva"}
          iconPath={
            "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
          }
          className={
            "hocus:bg-[#f9ebf3] hocus:text-[#ae3077] dark:hocus:bg-[#3a1028] hocus:dark:text-[#d472a9]"
          }
        />
      </li>
      <li>
        <SocialLink
          title={"Email"}
          href={"mailto:hola@jahir.dev?subject=Hi%20Jahir!"}
          iconPath={
            "m20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
          }
          className={
            "hocus:bg-[#ecf3fe] hocus:text-[#356AC4] dark:hocus:bg-[#142849] hocus:dark:text-[#5591f5]"
          }
        />
      </li>
    </ul>
  );
};
