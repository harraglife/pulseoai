"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

/**
 * AnimatedCounter — scroll-triggered spring counter.
 *
 * Keeps the exact `value` string the user wrote (e.g. "+527 %", "2,8 Mds")
 * as the visible text on the first render and for users with reduced motion,
 * so the SEO/SSR payload is byte-identical to the static version.
 *
 * When JS is available and motion is allowed, it extracts the leading
 * numeric token, animates it from 0 to the target over `duration` seconds,
 * then swaps back to the original string at the end of the tween to
 * guarantee pixel-perfect final rendering (including commas, percent signs,
 * abbreviations, etc.).
 */
export interface AnimatedCounterProps {
  /** The full display string (e.g. "+527 %", "2,8 Mds", "80 %"). */
  value: string;
  /** Tween duration in seconds. */
  duration?: number;
  /** Optional className on the wrapping span. */
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1.2,
  className,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  // Extract the numeric portion. If we can't parse one, or the user
  // prefers reduced motion, we just render the static string.
  const numericMatch = value.match(/-?\d+(?:[.,]\d+)?/);
  const canAnimate = !prefersReducedMotion && !!numericMatch;

  const target = canAnimate
    ? parseFloat(numericMatch![0].replace(",", "."))
    : 0;
  const mv = useMotionValue(0);

  const decimals = React.useMemo(() => {
    if (!numericMatch) return 0;
    const raw = numericMatch[0];
    const sep = raw.includes(",") ? "," : raw.includes(".") ? "." : null;
    if (!sep) return 0;
    return raw.split(sep)[1]?.length ?? 0;
  }, [numericMatch]);

  // Derived interpolation: we reconstruct the display string by swapping
  // the numeric token with the current animated value (formatted to the
  // same locale shape the user typed).
  const display = useTransform(mv, (current) => {
    if (!numericMatch) return value;
    const formatted = current.toLocaleString("fr-FR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return value.replace(numericMatch[0], formatted);
  });

  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!inView || !canAnimate || done) return;
    const controls = animate(mv, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => setDone(true),
    });
    return controls.stop;
  }, [inView, canAnimate, target, duration, mv, done]);

  // Once the animation completes, render the pristine user-provided string
  // so every character (spaces, %, non-breaking spaces, abbreviations) is
  // identical to what the designer/copywriter wrote.
  if (!canAnimate || done) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className} aria-label={value}>
      {display}
    </motion.span>
  );
}
