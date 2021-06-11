import Page from "@/pages/post";
export default Page;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const { getPage, getBlocks } = require("@/utils/notion");

  let page = await getPage(slug);
  let blocks = await getBlocks(slug);

  return {
    props: {
      page,
      blocks
    }
  };
}
