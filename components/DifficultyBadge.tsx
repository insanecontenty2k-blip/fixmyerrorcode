import type { ErrorCodeEntry } from "@/lib/types";

const DIFFICULTY_STYLES: Record<
  ErrorCodeEntry["difficulty"],
  string
> = {
  easy: "bg-green-50 text-green-700 ring-green-600/20",
  medium: "bg-amber-50 text-amber-700 ring-amber-600/20",
  hard: "bg-red-50 text-red-700 ring-red-600/20",
};

export function DifficultyBadge({
  difficulty,
}: {
  difficulty: ErrorCodeEntry["difficulty"];
}) {
  const safe = difficulty in DIFFICULTY_STYLES ? difficulty : "medium";
  const label = safe.charAt(0).toUpperCase() + safe.slice(1);
  return (
    <span
      className={`inline-flex shrink-0 rounded px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${DIFFICULTY_STYLES[safe]}`}
    >
      {label}
    </span>
  );
}

export function TimeBadge({ time }: { time: string }) {
  return (
    <span className="shrink-0 text-xs text-gray-500">{time}</span>
  );
}
