interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
}

export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="mb-4 text-xs font-medium uppercase tracking-widest text-gray-500"
    >
      {children}
    </h2>
  );
}
