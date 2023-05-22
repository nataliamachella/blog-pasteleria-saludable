import Layout from "../components/layout";
import Hero from "../components/hero";
import ListOfRecipes from "../components/listOfRecipes";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ListOfRecipes />
    </Layout>
  );
}
