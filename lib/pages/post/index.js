import { Fragment } from "react";

import styled from "styled-components";

import Image from "next/image";

const A = styled.a`
  color: ${(p) => p.theme.textColor};
`;

const UnderLine = styled.span`
  text-decoration: underline;
  text-underline-offset: 5px;
`;

const UL = styled.ul`
  list-style-type: disc;
  padding-left: 40px;
`;

const LI = styled.li`
  margin-bottom: 1em;
`;

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
      <p
        className="text-base my-2"
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
      </p>
    );
  });
};

const renderBlock = (block) => {
  switch (block.type) {
    case "heading_1":
      // For a heading
      return (
        <h1 className="text-2xl font-bold my-4">
          {block["heading_1"].rich_text[0].plain_text}
        </h1>
      );
    case "heading_2":
      // For a heading
      return (
        <h2 className="text-xl font-bold my-4">
          {block["heading_2"].rich_text[0].plain_text}
        </h2>
      );
    case "heading_3":
      // For a heading
      return (
        <h3 className="text-lg font-bold my-4">
          {block["heading_3"].rich_text[0].plain_text}
        </h3>
      );
    case "quote":
      // For a quote
      return <blockquote>{block.quote.rich_text[0].plain_text}</blockquote>;
    case "image":
      // For an image
      console.log(block);
      return (
        <Image
          src={block["image"].file.url}
          width={"300px"}
          height="60px"
          layout="responsive"
        />
      );
    case "bulleted_list_item":
      // For an unordered list
      return (
        <UL>
          <LI>
            <Text text={block["bulleted_list_item"].rich_text} />
          </LI>
        </UL>
      );
    case "paragraph":
      // For a paragraph
      return <Text text={block["paragraph"].rich_text} />;
    default:
      // For an extra type
      return <p>Undefined type {block.type}</p>;
  }
};
const Post = ({ id, title, post, blocks }) => {
  console.log(blocks);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center my-4">{title}</h1>
      {blocks.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}
    </div>
  );
};
export default Post;
