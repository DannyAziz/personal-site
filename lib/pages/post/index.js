import { Fragment } from "react";
import Hero from "@/components/hero";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vs } from "react-syntax-highlighter/dist/cjs/styles/prism";

// const gfm = require("remark-gfm");

// const components = {
//   code({ node, inline, className, children, ...props }) {
//     const match = /language-(\w+)/.exec(className || "");
//     return !inline && match ? (
//       <SyntaxHighlighter
//         style={vs}
//         language={match[1]}
//         PreTag="div"
//         children={String(children).replace(/\n$/, "")}
//         {...props}
//       />
//     ) : (
//       <code components={components} className={className} {...props} />
//     );
//   }
// };

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value;
    return (
      <span
        // className={[
        //   bold ? styles.bold : "",
        //   code ? styles.code : "",
        //   italic ? styles.italic : "",
        //   strikethrough ? styles.strikethrough : "",
        //   underline ? styles.underline : ""
        // ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

const Post = ({ page, blocks }) => {
  console.log(page, blocks);
  return (
    <div>
      <Hero text={page.properties.Name.title[0].plain_text} />
      {blocks.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}
    </div>
  );
};
export default Post;
