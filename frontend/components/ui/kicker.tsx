type KickerProps = {
  children: React.ReactNode;
  variant?: "accent" | "gold";
  className?: string;
};

export function Kicker({ children, variant = "accent", className = "" }: KickerProps) {
  const color = variant === "gold" ? "text-gold" : "text-accent";

  return (
    <p
      className={`inline-flex items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] ${color} ${className}`}
    >
      <span className="h-0.5 w-6 shrink-0 bg-gold" aria-hidden />
      {children}
    </p>
  );
}
