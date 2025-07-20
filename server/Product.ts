"use server"

import { Product } from "@/components/shared/types";
import { unstable_cache } from "next/cache";
interface GetProductsParams{
  search: string;
  perPage: number;
  offset: number;
}



export const getProduct= unstable_cache(async (params:GetProductsParams):Promise<Product[]> => {
  const { search, perPage, offset } = params;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${search}&offset=${offset}&limit=${perPage}`)
  const data = await res.json()
  return data;

},["products",], {
  tags: ["products"],
});