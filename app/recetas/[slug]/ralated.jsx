import getRecipes from "../../../lib/api";
import Link from "next/link";
import Image from "next/image";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

export default function Ralated() {
  const data = getRecipes();

  if (!data || data.length === 0) return PageNotFoundError;

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10 text-[#643E17]">Relacionado</h1>

      <div className="flex flex-col gap-10">
        {data.map((value, index) => (
          <div className="flex flex-row" key={index}>
            <Post data={value}></Post>
          </div>
        ))}
      </div>
    </section>
  );
}
function Post({ data }) {
  const { slug, title, image, description } = data;

  return (
    <div className="flex gap-5">
      <div className=" flex flex-col justify-start">
        <Link href={`/recetas/${slug}`}>
          <Image
            src={image || ""}
            className="rounded"
            width={300}
            height={200}
            alt={title}
          />
        </Link>
      </div>

      <div className="flex flex-col">
        <Link
          href={`/recetas/${slug}`}
          className="text-xl font-bold text-[#643E17]"
        >
          {title || "No Title"}
        </Link>
        {description}
      </div>
    </div>
  );
}
