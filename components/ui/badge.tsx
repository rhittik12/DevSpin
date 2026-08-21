interface BadgeProps {
  label: string;
  kind: "technology" | "concept" | "domain";
}

export function Badge({ label, kind }: BadgeProps) {
  const styles = {
    technology: "bg-copper-soft text-copper border-copper/30",
    concept: "bg-thread-soft text-thread border-thread/30",
    domain: "bg-transparent text-muted border-line",
  };

  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide ${styles[kind]}`}
    >
      {label}
    </span>
  );
}
