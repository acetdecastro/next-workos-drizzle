"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function DashboardBreadcrumb() {
  const pathname = usePathname();

  const getBreadcrumbItems = () => {
    const paths = pathname.split("/").filter((path) => path);

    if (paths.length >= 3) {
      let action = "";
      switch (paths[2]) {
        case "add":
          action = "Add";
          break;
        case "edit":
          action = "Edit";
          break;
        case "view":
          action = "View";
          break;
        default:
          break;
      }

      return (
        <>
          <BreadcrumbItem>
            <BreadcrumbLink href="/app/dashboard" className="font-medium">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{action}</BreadcrumbPage>
          </BreadcrumbItem> */}
        </>
      );
    }

    return (
      <BreadcrumbItem>
        <BreadcrumbLink
          href="/app/dashboard"
          className="text-primary font-medium"
        >
          Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem>
    );
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>{getBreadcrumbItems()}</BreadcrumbList>
    </Breadcrumb>
  );
}

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex items-center">
        <DashboardBreadcrumb />
      </div>
      <div
        className="p-4 flex flex-1 rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        {children}
      </div>
    </>
  );
}
