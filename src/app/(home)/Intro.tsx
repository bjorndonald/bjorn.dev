import { Img } from "@/components/atoms/img";
import { Section } from "@/components/atoms/section";
import photo from "@/assets/images/photo.jpg";
import cx from "@/utils/cx";
import { Name, SubHeader, WavingSpan } from "./intro.styles";
import WavingHello from "./WavingHello";
import Verified from "./Verified";
import { Link } from "@/components/atoms/link";
import { Icon } from "@/components/atoms/icon";
import { SocialLinks } from "@/components/molecules/social-links";
import { LinkButton } from "@/components/atoms/link-button";

const Intro = () => {
  return (
    <Section id="intro" className={"gap-6"}>
      <div className="flex flex-col gap-5 tablet-sm:block tablet-sm:space-y-4">
        <Img
          src={photo}
          alt="Photo of Bjorn-Donald"
          width={160}
          height={160}
          priority
          className={cx(
            "rounded-full tablet-sm:float-right",
            "max-w-28 mobile-lg:max-w-30 tablet-sm:max-w-36 tablet-md:max-w-40",
          )}
        />
        <h1 className="flex flex-col gap-1 tablet-sm:!-mt-2">
          <p className="text-shadow dark:text-shadow-none flex min-h-8 flex-row items-center gap-1 shadow-yellow-300">
            <WavingSpan role="img" aria-label="waving hand">
              👋
            </WavingSpan>
            <WavingHello />
          </p>
          <SubHeader>
            <span>
              I am <Name>Bjorn-Donald</Name>
            </span>
            <Verified />
          </SubHeader>
        </h1>
        <p className="flex max-w-[28rem] flex-col gap-2 text-pretty">
          <span>
            Passionate and creative full-stack software engineer from{" "}
            <Link
              title="Nigeria"
              href={"https://www.google.com/maps/place/Nigeria/@4,-72z/"}
              data-umami-event={"Link to Nigeria map"}
            >
              Nigeria{" "}
              <span role="img" aria-label="Nigeria flag">
                🇳🇬
              </span>
            </Link>
          </span>
          <span>
            Detail-driven, I strive to build great-looking, user-friendly
            software while enhancing my skills along the way
          </span>
        </p>
      </div>
      <div
        className={cx(
          "flex flex-col items-center gap-3",
          "mobile-lg:flex-row mobile-lg:flex-wrap",
        )}
      >
        <LinkButton
          title={"More about me"}
          href={"/about"}
          className={cx(
            "pr-3.5",
            "justify-center max-mobile-lg:w-full",
            "mobile-lg:justify-start mobile-lg:self-start",
          )}
          data-umami-event={"More about me"}
        >
          <Icon
            className={"size-5"}
            path={
              "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
            }
          />
          <span>More about me</span>
        </LinkButton>
        <SocialLinks />
      </div>
    </Section>
  );
};

export default Intro;
