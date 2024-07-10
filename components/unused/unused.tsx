import { Skeleton } from "@/components/ui/skeleton";

export function FormSkeleton() {
  return (
    <div className="flex pt-2 space-x-4">
      <div className="space-y-4">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-6 w-[70px]" />
      </div>
    </div>
  );
}

export function ViewProductPageSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-[100px] rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

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
