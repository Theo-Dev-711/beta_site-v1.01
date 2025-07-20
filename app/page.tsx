import ProductCart from "@/components/Product-cart";
import ProductFilter from "@/components/Product-filter";
import { getProduct} from "@/server/Product";
import { loadSearchParams } from "./Search-params";
import type { SearchParams } from 'nuqs/server'
import { revalidateTag } from "next/cache";
import ProductPagination from "@/components/Product-Pagination";

type PageProps = {
  searchParams: Promise<SearchParams>
}

export default async function Home({ searchParams }: PageProps) {
  const {search, perPage, offset} = await loadSearchParams(searchParams);
  const transformedoffset = (offset - 1) * perPage ;
  const products = await getProduct({search, perPage, offset: transformedoffset,});
  
  async function refetchProducts() {
    "use server"
    revalidateTag("products");
  }
  return (
    <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto ">
      <h1 className="">Awesome Products Exclusive</h1>
      <ProductFilter refetchProducts={refetchProducts}/>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product)=>(
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      <ProductPagination refetchProducts={refetchProducts} />
    </main>
  );
}
