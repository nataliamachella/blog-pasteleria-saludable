import Layout from "../../../components/layout";
import Ralated from "./ralated";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

import { getRecipeContent } from "../../../lib/api";
import { getRecipes } from "../../../lib/api";

export default async function Page({ params }) {
  const { slug } = params;
  const recipe = await getRecipeContent(slug);

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

export async function getStatisPaths() {
  const recipes = await getRecipes();
  const paths = recipes.map((recipe) => ({
    params: { slug: recipe.slug },
  }));

  return { paths, fallback: false };
}
