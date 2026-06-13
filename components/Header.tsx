import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200/80 bg-white">
      <div className="mx-auto flex max-w-[860px] items-baseline justify-between px-5 py-4">
        <Link
          href="/"
          className="text-base font-semibold text-gray-900 no-underline hover:text-accent"
        >
          Fix My Error Code
        </Link>
        <span className="hidden text-sm text-gray-500 sm:inline">
          Appliance error code reference
        </span>
      </div>
    </header>
  );
}
