import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
