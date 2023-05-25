import React from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

export default function article({ recipe }) {
  return (
    <div className="py-10">
      <h1 className="font-bold text-4xl text-center pb-5">
        {recipe.title || "No Title"}
      </h1>

      <p className="text-gray-500 text-xl text-center max-w-prose">
        {recipe.description || "No Title"}
      </p>

      <div className="py-10">
        <Image
          src={recipe.image || "/"}
          width={900}
          height={600}
          alt={recipe.title}
        ></Image>
      </div>

      <article className="text-center text-gray-600 text-lg flex flex-col gap-4 max-w-prose">
        <Markdown>{recipe.content}</Markdown>
      </article>
    </div>
  );
}
