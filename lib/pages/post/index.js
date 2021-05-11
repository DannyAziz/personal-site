import ReactMarkdown from "react-markdown";
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
  console.log(data);
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
export default Post;
