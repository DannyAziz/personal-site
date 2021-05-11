import Page from "@/pages/post";
import matter from "gray-matter";
export default Page;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  let content = await import(`../../../lib/posts/${slug}.md`);
  let data = matter(content.default);
  delete data.orig;

  return {
    props: { ...data }
  };
}
