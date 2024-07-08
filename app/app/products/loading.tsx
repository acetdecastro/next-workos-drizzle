import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPageSkeleton() {
  return (
    <div className="flex pt-2 space-x-4">
      <div className="space-y-5">
        <Skeleton className="h-6 w-[350px]" />
        <Skeleton className="h-6 w-[350px]" />
        <Skeleton className="h-6 w-[350px]" />
        <Skeleton className="h-6 w-[350px]" />
      </div>
    </div>
  );
}
