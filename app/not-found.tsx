import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex content-center justify-center">
      <h2>Not Found</h2>
      <Link href="/app">Return Home</Link>
      <p>Could not find requested resource</p>
    </div>
  );
}
