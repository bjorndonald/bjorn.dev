import { Section } from "@/components/atoms/section";
import { BlogPostItem } from "@/components/ui/blog/item";
import { allReadableBlogs, sortBlogPostsByDate } from "@/utils/blog";
import { getDate } from "@/utils/date";
import { groupBy } from "@/utils/group-by";

const blogPostsByYear = groupBy(allReadableBlogs, post =>
  (getDate(post.date) || new Date()).getFullYear(),
);

export const GroupedBlogPosts = () => (
  <ol className="flex flex-col gap-6">
    {Object.entries(blogPostsByYear)
      .sort(([yearA], [yearB]) => Number(yearA) - Number(yearB))
      .map(([year, posts]) => (
        <li className="block" key={year}>
          <Section
            id={`posts-from-${year}`}
            title={`Posts from ${year}`}
            aria-label={`Posts from ${year}`}
          >
            <div className="mt-3 flex w-full items-end gap-3">
              <h2 className="font-manrope text-lg font-bold leading-none">
                {year}
              </h2>
              <hr
                className={
                  "m-0 -mt-0.5 h-px w-full flex-1 border-none bg-divider"
                }
              />
            </div>
            <ol className="flex flex-col gap-1.5">
              {posts.sort(sortBlogPostsByDate).map((post, i) => (
                <li key={i}>
                  <BlogPostItem post={post} />
                </li>
              ))}
            </ol>
          </Section>
        </li>
      ))}
  </ol>
);
