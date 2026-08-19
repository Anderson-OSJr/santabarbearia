"use client";

import { useInView } from "@/lib/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: 0 | 100 | 200 | 300;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const delayClass = {
    0: "delay-0",
    100: "delay-100",
    200: "delay-200",
    300: "delay-300",
  }[delay];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        delayClass,
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
