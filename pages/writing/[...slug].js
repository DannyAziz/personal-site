import Page from "@/pages/post";
export default Page;

import { getPage, getBlocks } from "@/utils/notion";

import posts from "@/posts";

export const getServerSideProps = async (ctx) => {
  let { slug } = ctx.params;
  let post = posts.find((item) => item.slug === slug[0]);
  // Get the dynamic id
  let page_result = await getPage(post.id);
  // Fetch the post
  let { results } = await getBlocks(post.id);
  // Get the children
  return {
    props: {
      id: post.id,
      title: post.title,
      post: page_result,
      blocks: results
    }
  };
};
