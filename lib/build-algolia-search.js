const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const algoliasearch = require("algoliasearch/lite");

try {
  dotenv.config();

  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
    throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
  }
  if (!process.env.ALGOLIA_ADMIN_API_KEY) {
    throw new Error("NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY is not defined");
  }
} catch (error) {
  console.error(error);
}

const CONTENT_PATH = path.join(process.cwd(), "data/recetas");

const contentFilePaths = fs
  .readdirSync(CONTENT_PATH)
  .filter((path) => /\.mdx?$/.test(path));

async function getAllPosts() {
  const articles = contentFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(CONTENT_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  return articles;
}

function transformPostToSearchObjects(articles) {
  const transformed = articles.map((article) => {
    return {
      objectID: article.data.title,
      title: article.data.title,
      description: article.data.description,
      slug: article.filePath.replace(".md", ""),
      categories: article.data.categories,
      date: article.data.date,
      image: article.data.image,
    };
  });
  return transformed;
}

(async function () {
  dotenv.config();
  try {
    const articles = await getAllPosts();
    const transformed = transformPostToSearchObjects(articles);

    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_ADMIN_API_KEY
    );

    const index = client.initIndex("recetas-de-pasteleria-saludable");

    const algoliaResponse = await index.saveObjects(transformed);

    console.log(
      `Agregados exitosamente ${algoliaResponse.objectIDs.length} archivos a Algolia Search`
    );
  } catch (error) {
    console.error(error);
  }
})();
