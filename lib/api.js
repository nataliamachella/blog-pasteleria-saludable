import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getRecipes = () => {
  const root = process.cwd();

  const files = fs.readdirSync(path.join(root, "data/recetas/"));
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      path.join(root, `data/recetas/${fileName}`),
      "utf8"
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      categories: matterResult.data.categories,
      description: matterResult.data.description,
      image: matterResult.data.image,
      content: matterResult.content,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export const getRecipeContent = async (slug) => {
  const root = process.cwd();
  const folder = "data/recetas/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(path.join(root, file), "utf8");
  const matterResult = await matter(content);
  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    categories: matterResult.data.categories,
    description: matterResult.data.description,
    image: matterResult.data.image,
    content: matterResult.content,
  };
};
