import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { AiOutlineHome } from "react-icons/ai";
export default function PostPage({ frontmatter, content }) {
  return (
    <div className="px-8 py-12 bg-dark min-h-screen">
        <div className="flex justify-center items-center gap-x-3 w-full">
          <p className="text-white text-md font-bold">GO BACK TO </p>
          <a href="https://ajaysharma.dev" className="">
          <AiOutlineHome
            className="text-yellow font-bold text-5xl cursor-pointer"
          /></a>
        </div>
      <div className="prose prose-zinc lg:prose-lg bg-white p-12 mx-auto my-12 shadow-xl rounded-xl">
        <h1>{frontmatter.title}</h1>
        <img src={`${frontmatter.socialImage}`} alt="post image"></img>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
