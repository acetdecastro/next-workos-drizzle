import { getProductById } from "@/actions/product-actions";
import EditProductForm from "@/components/forms/edit-product-form";
import { getUser } from "@workos-inc/authkit-nextjs";

interface EditProductPageProps {
  params: {
    id: number;
  };
}

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { user } = await getUser({ ensureSignedIn: true });
  const id = params.id;

  const res = await getProductById(id);

  if (!res.data) {
    return <>No product with id {id}</>;
  }

  return (
    <div className="w-full flex flex-col space-y-4">
      <EditProductForm userId={user.id} product={res.data} />
    </div>
  );
}
