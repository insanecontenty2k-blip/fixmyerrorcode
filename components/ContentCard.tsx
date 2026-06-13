interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div className={`rounded-lg bg-white shadow-card ${className}`.trim()}>
      {children}
    </div>
  );
}
