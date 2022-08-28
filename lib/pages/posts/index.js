import Hero from "@/components/hero";

import Link from "next/link";

import * as Styled from "./styled";

import posts from "@/posts";

const Posts = () => {
  return (
    <div>
      <Hero text={"I Write Things"}></Hero>
      <Styled.Ul>
        {posts.map((item, index) => {
          return (
            <Styled.A key={index} href={`/writing/${item.slug}`}>
              <Styled.Card>
                <Styled.Title>{item.title}</Styled.Title>
                <Styled.Subtitle>{item.subheading}</Styled.Subtitle>
              </Styled.Card>
            </Styled.A>
          );
        })}
      </Styled.Ul>
    </div>
  );
};

export default Posts;
