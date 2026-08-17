type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
};

export function SectionHeading({
  kicker,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
      data-reveal
    >
      <div className="max-w-xl">
        <p className="kicker">{kicker}</p>
        <h2 className="heading">{title}</h2>
        {description ? (
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>
      {action ? (
        <a
          href={action.href}
          className="shrink-0 text-sm font-medium text-fg underline underline-offset-4 decoration-line hover:decoration-fg"
        >
          {action.label}
        </a>
      ) : null}
    </div>
  );
}
