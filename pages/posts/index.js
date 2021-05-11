import Page from "@/pages/posts";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
export default Page;

export async function getServerSideProps() {
  const postsDirectory = path.join(process.cwd(), "lib/posts/");
  const files = fs.readdirSync(postsDirectory);
  const parsedFiles = [];

  for (let fileKey in files) {
    let file = files[fileKey];
    if (file !== ".DS_STORE") {
      let content = await import(`../../lib/posts/${file}`);
      let data = matter(content.default);
      delete data.orig;
      parsedFiles.push({ ...data, slug: file.replace(".md", "") });
    }
  }

  return {
    props: {
      files: parsedFiles
    }
  };
}
