import { Section } from "@/components/atoms/section";
import RSSFeedButton from "@/components/ui/blog/RSSFeedButton";
import { getColoredTextClasses } from "@/utils/colored-text";
import { createMetadata } from "@/utils/metadata";
import { GroupedBlogPosts } from "./grouped-blog-posts";

export default function BlogPage() {
  return (
    <Section id="blog" className="gap-6">
      <div className={"flex flex-row items-center justify-between gap-4"}>
        <h1 className={getColoredTextClasses("orange")}>Blog</h1>
        <RSSFeedButton />
      </div>
      <GroupedBlogPosts />
    </Section>
  );
}

export const metadata = createMetadata({
  title: "Blog – Bjorn-Donald Bassey",
  description:
    // eslint-disable-next-line max-len
    "Blog posts by Bjorn-Donald Bassey. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life",
  exactUrl: "https://bjorncode.dev/blog",
  keywords: [
    "tech",
    "software",
    "development",
    "thoughts",
    "opinions",
    "blog",
    "content",
    "story",
    "storytelling",
    "news",
  ],
});
