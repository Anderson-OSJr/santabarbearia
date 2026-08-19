import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlaceholderTile({
  icon: Icon,
  caption,
  className,
}: {
  icon: LucideIcon;
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex aspect-4/3 flex-col items-center justify-center overflow-hidden rounded-lg border border-border bg-gradient-to-br from-secondary via-card to-background",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)] transition-opacity duration-500 group-hover:opacity-80" />
      <Icon className="relative size-10 text-primary/70 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.25} />
      <span className="relative mt-4 text-sm font-medium tracking-wide text-muted-foreground">
        {caption}
      </span>
    </div>
  );
}
