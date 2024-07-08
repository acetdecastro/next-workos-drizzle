import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getUser } from "@workos-inc/authkit-nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AppPage() {
  const { user } = await getUser({ ensureSignedIn: true });

  redirect("/app/dashboard");

  return <></>;
}
