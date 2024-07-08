import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware();

// Match against pages that require authentication
// Include /dashboard and any sub-paths of /dashboard
export const config = { matcher: ["/", "/app", "/app/:path*"] };
