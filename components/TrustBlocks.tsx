const TRUST_ITEMS = [
  { icon: "🔧", label: "Brand-specific fixes" },
  { icon: "📋", label: "Common causes explained" },
  { icon: "✓", label: "Step-by-step repair checks" },
] as const;

export function TrustBlocks() {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {TRUST_ITEMS.map((item) => (
        <li
          key={item.label}
          className="flex items-center gap-2.5 text-sm text-gray-500"
        >
          <span className="text-base" aria-hidden="true">
            {item.icon}
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}
