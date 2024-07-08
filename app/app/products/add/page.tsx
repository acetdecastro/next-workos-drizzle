import AddProductForm from "@/components/forms/add-product-form";
import { getUser } from "@workos-inc/authkit-nextjs";

export default async function AddProductPage() {
  const { user } = await getUser({ ensureSignedIn: true });
  return (
    <div className="w-full flex flex-col space-y-4">
      <AddProductForm userId={user.id} />
    </div>
  );
}
