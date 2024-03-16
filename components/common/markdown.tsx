import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function Markdown(props: { children: string }) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(props.children || "");

  return (
    <div
      className="prose dark:prose-invert font-sans leading-relaxed xl:text-left"
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    />
  );
}
