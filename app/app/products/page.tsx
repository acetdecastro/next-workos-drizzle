import { getProducts } from "@/actions/product-actions";
import { getUser } from "@workos-inc/authkit-nextjs";
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
