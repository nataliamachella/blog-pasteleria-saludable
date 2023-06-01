import React from "react";

import fs from "fs";
import matter from "gray-matter";
import Layout from "../../../components/layout";
import Ralated from "./ralated";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

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

export default async function receta({ params }) {
  const { slug } = params;
  const recipe = await getRecipeContent(slug);
  if (!recipe) return "Contenido No Encontrado";

  return (
    <Layout>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="py-10">
          <h2 className="font-bold text-4xl text-center pb-5">
            {recipe.title || "No Title"}
          </h2>

          <p className="text-gray-500 text-xl text-center max-w-prose">
            {recipe.description || "No Title"}
          </p>

          <div className="py-10">
            <Image
              src={recipe.image || "/"}
              width={900}
              height={600}
              alt={recipe.title}
            />
          </div>

          <article className="text-center text-gray-600 text-lg flex flex-col gap-4 max-w-prose">
            <Markdown>{recipe.content}</Markdown>
          </article>
        </div>

        <Ralated></Ralated>
      </section>
      ;
    </Layout>
  );
}
