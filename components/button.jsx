import Link from "next/link";
import React from "react";

export default function button({ slug }) {
  return (
    <div className="inline-flex border-2 border-pink-300 rounded justify-center items-center p-2">
      <Link
        href={`/recetas/${slug}`}
        className="flex text-pink-400 font-semibold"
      >
        Ver Receta ↪
      </Link>
    </div>
  );
}
