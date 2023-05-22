import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";
import Tag from "../components/tag";

export default function recipe({ data }) {
  const { slug, title, categories, date, description, image } = data;

  return (
    <div>
      <div>
        <Link href={`/recetas/${slug}`}>
          <Image
            src={image || ""}
            className="rounded"
            width={500}
            height={350}
            alt={title}
          />
        </Link>
      </div>
      <div className=" flex justify-center flex-col py-4">
        <div className="flex flex-row flex-wrap items-center justify-evenly text-gray-500 mb-3">
          {categories.map((cat, i) => (
            <Tag cat={cat} key={i} />
          ))}
          {date || ""}
        </div>

        <div className="text-[#643E17] text-3xl font-bold text-center">
          <Link href={`/recetas/${slug}`}>{title || ""}</Link>
        </div>
        <p className="text-gray-500 py-3 text-center">{description || ""}</p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Button slug={slug} />
      </div>
    </div>
  );
}
