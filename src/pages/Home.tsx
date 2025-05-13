import { Banner } from "../components/layout/Banner.tsx";
import { ProductList } from "../components/layout/ProductList.tsx";

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductList />
    </main>
  );
}
