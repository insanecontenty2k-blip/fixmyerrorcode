import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200/80 bg-white">
      <div className="mx-auto flex max-w-[860px] items-center justify-between px-5 py-4">
        <Link href="/" className="no-underline">
          <Image
            src="/logo.png"
            alt="Fix My Error Code"
            width={391}
            height={358}
            className="h-14 w-auto"
            priority
            unoptimized
          />
        </Link>
        <span className="hidden text-sm text-gray-500 sm:inline">
          Appliance error code reference
        </span>
      </div>
    </header>
  );
}
