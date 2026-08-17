import { Kicker } from "@/components/ui/kicker";
import { heading } from "@/components/ui/styles";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
  /** "gold" dùng cho section nền tối */
  variant?: "accent" | "gold";
  /** Ghi đè khoảng cách dưới mặc định */
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  action,
  variant = "accent",
  className = "mb-10 sm:mb-12",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}
      data-reveal
    >
      <div className="max-w-2xl">
        <Kicker variant={variant}>{kicker}</Kicker>
        <h2 className={heading}>{title}</h2>
        {description ? (
          <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>

      {action ? (
        <a
          href={action.href}
          className="group/link inline-flex shrink-0 items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-fg transition hover:text-gold"
        >
          {action.label}
          <span aria-hidden className="transition group-hover/link:translate-x-1">
            →
          </span>
        </a>
      ) : null}
    </div>
  );
}
