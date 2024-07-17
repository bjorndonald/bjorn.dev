import { unwrapFigure } from 'config/velite/rehype/figure';
import { blogs } from './config/velite/collections/blog';
import { projects } from './config/velite/collections/projects';
import { templates } from './config/velite/collections/templates';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import smartypants from 'remark-smartypants';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import remarkUnwrapImages from 'remark-unwrap-images';
import { defineConfig } from 'velite';
import imageBlurMetadata from 'config/velite/rehype/blur';
import { prettyCode } from 'config/velite/rehype/code';
import { toc } from 'config/velite/rehype/toc';

export default defineConfig({
    collections: { blogs, projects, templates },
    mdx: {
        copyLinkedFiles: false,
        remarkPlugins: [smartypants, remarkUnwrapImages, remarkSqueezeParagraphs],
        rehypePlugins: [
            unwrapFigure,
            imageBlurMetadata,
            rehypeSlug,
            rehypeAccessibleEmojis,
            // @ts-expect-error idk
            prettyCode,
            [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
            toc
        ]
    }
})