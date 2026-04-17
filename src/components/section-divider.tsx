import { cn } from "@/lib/utils";

/**
 * SectionDivider — 1px gradient line (cyan at center, transparent at edges).
 * Replaces the legacy alternating-block pattern.
 * `variant="subtle"` uses plain white for a quieter separator (e.g. inside a
 * card or between sub-sections of the same page region).
 */
export function SectionDivider({
  variant = "accent",
  className,
}: {
  variant?: "accent" | "subtle";
  className?: string;
}) {
  return (
    <hr
      role="presentation"
      aria-hidden="true"
      className={cn(
        variant === "accent" ? "section-divider" : "section-divider-subtle",
        className,
      )}
    />
  );
}
