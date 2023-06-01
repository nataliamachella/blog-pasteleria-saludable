import fs from "fs";
import matter from "gray-matter";

export const getRecipes = () => {
  const folder = "data/recetas/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`data/recetas/${fileName}`, "utf8");
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

export const getRecipeContent = (slug) => {
  const folder = "data/recetas/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    categories: matterResult.data.categories,
    description: matterResult.data.description,
    image: matterResult.data.image,
    content: matterResult.content,
  };
};
