import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SearchBar } from "@/components/SearchBar";

export default function NotFound() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Page not found" },
        ]}
      />
      <h1 className="mb-2 text-2xl font-semibold text-gray-900">Page not found</h1>
      <p className="mb-8 text-gray-600">
        That error code or page does not exist. Search below or browse from the{" "}
        <Link href="/" className="text-accent hover:underline">
          homepage
        </Link>
        .
      </p>
      <SearchBar placeholder="Try searching for a code…" autoFocus />
    </>
  );
}
