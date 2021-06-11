import Hero from "@/components/hero";

import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <Hero text={"I Wrote Things"}></Hero>
      <ul>
        {posts.map((item, index) => {
          return (
            <Link key={index} href={`/posts/${item.id}`} passHref>
              <li>{item.properties.Name.title[0].plain_text}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
