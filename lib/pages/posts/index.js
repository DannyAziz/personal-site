import Hero from "@/components/hero";

import Link from "next/link";

import * as Styled from "./styled";

const posts = [
  {
    id: 0,
    title: "Why I’m leaving the UK and cruising around the world",
    slug: "why-im-leaving-the-uk-and-cruising-around-the-world",
    subheading:
      "“I love a cup of tea and that but tea ain’t from Britain it’s from where my DNA is at”",
    link: "https://dannyaziz.notion.site/Why-I-m-leaving-the-UK-and-cruising-around-the-world-6a52ddeb43ea4a52b804a73585444763"
  }
];

const Posts = () => {
  return (
    <div>
      <Hero text={"I Write Things"}></Hero>
      <Styled.Ul>
        {posts.map((item, index) => {
          return (
            <Styled.A key={index} target="_blank" href={item.link}>
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
