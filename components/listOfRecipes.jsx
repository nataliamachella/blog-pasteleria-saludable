import React from "react";
import Recipe from "./recipe";
import { getRecipes } from "../lib/api";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

export default async function listOfRecipes() {
  const recipes = getRecipes();

  if (!recipes || recipes.length === 0) return PageNotFoundError;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h2 className="font-bold  text-3xl md:text-4xl py-12 text-center text-[#643E17]">
        🍪 Recetas
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {recipes.slice(0, 6).map((value, index) => (
          <Recipe data={value} key={index}></Recipe>
        ))}
      </div>
    </section>
  );
}
