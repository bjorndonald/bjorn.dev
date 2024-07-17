import { Section } from "@/components/atoms/section";
import { getColoredTextClasses } from "@/utils/colored-text";
import { createMetadata } from "@/utils/metadata";
import Link from "next/link";
import React from "react";
import Photo from "./photo";
import { SocialLinks } from "@/components/molecules/social-links";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: new Date("1997-04-24T18:30:00-05:00").toISOString(),
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@id": "#main-author",
    "@type": "Person",
    name: "Bjorn-Donald Bassey",
    alternateName: ["bjorndonaldbassey", "bjorncodeinfo"],
    description:
      "Passionate and creative full-stack software engineer from Nigeria 🇳🇬",
    image: "https://jahir.dev/media/bjorn/bjorn-hd.jpg",
    sameAs: [
      "https://github.com/bjorndonald",
      "https://linkedin.com/in/bjorn-donaldbassey",
      "https://twitter.com/6lackbjorn",
    ],
  },
});

const AboutPage = () => {
  return (
    <>
      <Section id={"about"}>
        <h1 className={getColoredTextClasses("green")}>About</h1>
        <p className={"max-w-nice"}>
          <span role={"img"} aria-label={"waving hand"}>
            👋
          </span>{" "}
          Hey there! I&apos;m Bjorn-Donald Bassey, a full-stack software
          engineer from{" "}
          <Link
            title={"Nigeria"}
            href={"https://www.google.com/maps/place/Nigeria/@4,-72z/"}
            data-umami-event={"Link to Nigeria map"}
          >
            Nigeria{" "}
            <span role={"img"} aria-label={"Nigeria flag"}>
              🇳🇬
            </span>
          </Link>{" "}
          with over five (6) years of professional experience.
        </p>
        <p className={"max-w-nice"}>
          I focus on details and I&apos;m passionate about crafting software
          products that look great and are both accessible and easy to maintain.
        </p>
        <Photo />
        <p className={"max-w-nice"}>
          I&apos;m a huge advocate for open source and collaborating with the
          community. You can find my stash of websites, libraries, and apps on{" "}
          <Link title={"GitHub"} href={"https://github.com/bjorndonald"}>
            GitHub
          </Link>{" "}
          which have earned over 2K stars.
        </p>
        <p className={"max-w-nice"}>
          I&apos;m all about diving into challenges improving and expanding my
          skillset and I thrive in globally-remote teams that value people and
          embrace trust, kindness, and inclusion.
        </p>
        <p className={"max-w-nice"}>
          If you&apos;re curious about the hardware and software tools I use
          every day, feel free to check out the{" "}
          <Link title={"Uses page"} href={"/uses"}>
            uses
          </Link>{" "}
          page.
        </p>
      </Section>
      <Section id={"contact"} className={"-mt-5 gap-2.5"}>
        <h2 className={"mb-1"} style={{ fontSize: "1rem" }}>
          Let&apos;s connect!
        </h2>
        <p>
          Feel free to reach out to me at{" "}
          <Link
            title={"Email"}
            href={"mailto:bjorndonaldb@gmail.com?subject=Hi%Bjorn!"}
          >
            bjorndonaldb@gmail.com
          </Link>
          , or find me on social media:
        </p>
        <SocialLinks />
      </Section>
      <script type={"application/ld+json"} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
};

export const metadata = createMetadata({
  title: "About – Bjorn-Donald Bassey",
  description: "Learn more about me (Bjorn-Donald Bassey), my career and more",
  exactUrl: "https://bjorncode.dev/about",
  keywords: ["bio", "biography", "information", "about", "career"],
});

export default AboutPage;
