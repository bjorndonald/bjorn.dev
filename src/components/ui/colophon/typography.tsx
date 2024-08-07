import { Section } from "@/components/atoms/section";
import cx, { twc } from "@/utils/cx";
import Link from "next/link";

const TypographyPreview = twc.div`
    border
    border-divider
    border-dashed
    p-4
    w-full
    text-center
`;

export const Typography = () => (
  <Section id="typography">
    <h2 className={"text-lg"}>Typography</h2>
    <p className={"max-w-nice"}>
      For the website typography, I am using{" "}
      <Link title={"Inter font"} href={"https://rsms.me/inter/"}>
        Inter
      </Link>{" "}
      for most of the content and{" "}
      <Link title={"Manrope font"} href={"https://gent.media/manrope"}>
        Manrope
      </Link>{" "}
      for headings, buttons and a few other elements. Both have some{" "}
      <Link
        title={"CSS font features"}
        href={
          "https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings"
        }
      >
        font features
      </Link>{" "}
      enabled to make them stand out from the default.
    </p>
    <div
      className={cx(
        "grid grid-cols-1 place-items-center items-center tablet-sm:grid-cols-2",
        "border-collapse border border-dashed border-divider",
      )}
    >
      <TypographyPreview className={" font-sans font-normal"}>
        Inter Regular
      </TypographyPreview>
      <TypographyPreview className={"font-sans font-medium"}>
        Inter Medium
      </TypographyPreview>
      <TypographyPreview className={"font-manrope font-semibold"}>
        Manrope Semibold
      </TypographyPreview>
      <TypographyPreview className={"font-manrope font-bold"}>
        Manrope Bold
      </TypographyPreview>
    </div>
  </Section>
);
