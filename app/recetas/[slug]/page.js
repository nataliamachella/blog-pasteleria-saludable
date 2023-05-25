import React from "react";

import fs from "fs";
import matter from "gray-matter";
import Layout from "../../../components/layout";
import Ralated from "./ralated";
import Article from "./article";

const getRecipeContent = (slug) => {
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

export default function receta({ params }) {
  const { slug } = params;
  const recipe = getRecipeContent(slug);

  return (
    <Layout>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <Article recipe={recipe} />

        <Ralated></Ralated>
      </section>
      ;
    </Layout>
  );
}
