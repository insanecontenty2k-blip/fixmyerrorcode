import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200/80 bg-white">
      <div className="mx-auto max-w-[860px] px-5 py-8 text-sm text-gray-500">
        <p className="text-gray-600">
          fixmyerrorcode.com is an independent reference site not affiliated with
          any appliance manufacturer.
        </p>
        <p className="mt-2">
          Unplug the appliance before attempting repairs. Error codes vary by
          model year — verify against your owner&apos;s manual.
        </p>
        <nav className="mt-4" aria-label="Footer">
          <Link href="/" className="text-accent hover:underline">
            Home
          </Link>
        </nav>
      </div>
    </footer>
  );
}
