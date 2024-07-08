"use client";

import Link from "next/link";
import { Home, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AppSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="/app/dashboard"
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          pathname === "/app/dashboard" && "bg-muted text-primary"
        )}
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      {/* <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <ShoppingCart className="h-4 w-4" />
        Orders
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link> */}
      <Link
        href="/app/products"
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          pathname.startsWith("/app/products") && "bg-muted text-primary"
        )}
      >
        <Package className="h-4 w-4" />
        Products
      </Link>
    </nav>
  );
}
