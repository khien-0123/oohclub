type DateBadgeProps = {
  date: string;
  size?: "sm" | "lg";
  className?: string;
};

export function DateBadge({ date, size = "sm", className = "" }: DateBadgeProps) {
  const full = date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!full) return null;

  const large = size === "lg";

  return (
    <time
      dateTime={`${full[3]}-${full[2]}-${full[1]}`}
      className={`z-10 flex flex-col text-center ${large ? "w-[4.5rem]" : "absolute left-0 top-0 w-[3.15rem]"} ${className}`}
    >
      <span
        className={`bg-gold font-bold uppercase tracking-[0.12em] text-ink ${
          large ? "py-1.5 text-[0.58rem]" : "py-1 text-[0.5rem]"
        }`}
      >
        Thg {Number(full[2])}
      </span>
      <span
        className={`bg-ink font-semibold leading-none text-white ${
          large ? "py-2.5 text-[1.75rem]" : "py-1.5 text-[1.15rem]"
        }`}
      >
        {Number(full[1])}
      </span>
    </time>
  );
}
