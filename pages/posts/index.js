import Page from "@/pages/posts";
export default Page;

export async function getServerSideProps() {
  const { getDatabase } = require("@/utils/notion");

  let results = await getDatabase("3313f3ba-1f5d-4a51-8ac9-0588f798ae71");

  return {
    props: {
      posts: results
    }
  };
}
