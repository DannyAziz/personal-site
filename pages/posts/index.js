import Page from "@/pages/posts";
import fs from "fs";
import path from "path";
export default Page;

export async function getServerSideProps() {
  const postsDirectory = path.join(process.cwd(), "lib/posts/");
  const files = fs.readdirSync(postsDirectory);
  return {
    props: {
      files
    }
  };
}
