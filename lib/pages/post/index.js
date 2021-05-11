import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/cjs/styles/prism";

const gfm = require("remark-gfm");

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={vs}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code components={components} className={className} {...props} />
    );
  }
};

const Post = ({ content, data }) => {
  return (
    <div>
      <ReactMarkdown
        components={components}
        remarkPlugins={[gfm]}
        children={content}
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  delete data.data.date;
  delete data.orig;

  return {
    props: { ...data }
  };
};

export default Post;
