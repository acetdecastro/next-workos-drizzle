import {
  addProduct,
  getProductById,
  getProducts,
} from "@/actions/product-actions";
import AddProductForm from "@/components/forms/add-product-form";
import AddProduct from "@/components/product/add-product";
import { Button } from "@/components/ui/button";
import { getUser } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";
import { ProductDataTable } from "@/components/tables/product-data-table";

interface ProductsDetailsPageProps {
  params: {
    id: number;
  };
}

export default async function ProductsDetailsPage({
  params,
}: ProductsDetailsPageProps) {
  const { user } = await getUser({ ensureSignedIn: true });
  const id = params.id;

  const res = await getProductById(id);

  if (!res.data) {
    return <>No product with id {id}</>;
  }

  return <>{res.data.name}</>;
}
