import { Suspense } from "react";

import { getStars } from "@/actions/stars";
import { Icon } from "@/components/atoms/icon";
import cx from "@/utils/cx";

interface StarsCountProps {
  repo: string;
  owner?: string;
}

const StarsCount = async (props: StarsCountProps) => {
  const stars = await getStars(props.repo, props.owner);
  return (
    <>
      {stars ? (
        <span
          title={`${stars} on GitHub`}
          aria-label={`${stars} on GitHub`}
          className={cx(
            "flex flex-row items-center gap-1",
            "text-tertiary-txt",
            "rounded-1.5 px-1 transition-colors",
            "border border-transparent",
            "bg-tint-bg",
            "group-hocus/project:text-secondary-txt",
            "group-hocus/project:border-tint-border",
          )}
          style={{ fontSize: "0.75rem" }}
        >
          <Icon
            className={"size-3"}
            path={
              // eslint-disable-next-line max-len
              "M17.6 21.5c-.1 0-.3 0-.4-.1L12 18.7l-5.2 2.7c-.3.2-.7.1-1-.1-.3-.2-.4-.5-.4-.9l1-5.8-4.2-4.1c-.2-.1-.3-.5-.2-.8.2-.4.4-.6.8-.7l5.8-.8 2.6-5.3c.3-.6 1.3-.6 1.6 0l2.6 5.3 5.8.8c.3 0 .6.3.7.6.1.3 0 .7-.2.9l-4.2 4.1 1 5.8c.1.3-.1.7-.4.9-.1.2-.3.2-.5.2z"
            }
          />
          <span className={"font-medium"}>{stars}</span>
        </span>
      ) : null}
    </>
  );
};

export const StarsCounter = (props: StarsCountProps) => (
  <Suspense fallback={<span className={"min-h-6 min-w-9"} />}>
    <StarsCount {...props} />
  </Suspense>
);
