import { Banner } from "../components/layout/Banner.tsx";
import { ProductList } from "../components/layout/ProductList.tsx";
import { useAppContext } from "../providers/app-context.ts";

export default function Home() {
  const { listCoffees } = useAppContext();
  console.log("que porra é essa?", listCoffees);
  return (
    <main>
      <Banner />
      <ProductList />
    </main>
  );
}
