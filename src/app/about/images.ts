import { unstable_cache as cache } from "next/cache";

const imagesAlts: Array<string> = [
  "At My Sister's Call to Bar - Oct 2022",
  "At a Night Out with Friends - Apr 2023",
  "Out to Lunch with Friends – Jul '23",
  "At an Employee meetup – Nov '23",
];

export const getAboutImage = cache(
  async () => {
    const index = Math.floor(Math.random() * imagesAlts.length);
    const src = await import(`../../assets/images/about/${index}.jpg`);
    return {
      src: JSON.parse(JSON.stringify(src)),
      alt: imagesAlts[index],
    };
  },
  ["about-image"],
  { revalidate: 86400 },
);
