import { addProduct, getProducts } from "@/actions/product-actions";
import AddProductForm from "@/components/forms/add-product-form";
import AddProduct from "@/components/product/add-product";
import { Button } from "@/components/ui/button";
import { getUser } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";
import AddProductPage from "./add/page";
import { ProductDataTable } from "@/components/tables/product-data-table";

export default async function ProductsPage() {
  const { user } = await getUser({ ensureSignedIn: true });

  const res = await getProducts();

  // if (res.data?.length === 0) {
  //   redirect("/app/products/add");
  // }

  return (
    <>
      <ProductDataTable products={res.data} />
    </>
  );
}
