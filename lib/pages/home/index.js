import { useEffect } from "react";

import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ItemList from "@/components/itemList";

const Home = () => {
  return (
    <Layout>
      <Hero text={"I Make Things"} />
      <ItemList title={"Recent Things"} items={[]} />
    </Layout>
  );
};
export default Home;
