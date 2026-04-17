import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * BrowserWindow — chrome wrapper for ChatGPT/Gemini/Google AI Overview mockups.
 * Renders a dark navy window with the three traffic-light dots and an optional
 * URL pill, then yields its children into the content area.
 *
 * Children receive no extra padding — pass your own mockup with its own spacing.
 * The wrapper is purely presentational (no interactivity) and safe in RSC.
 */
export interface BrowserWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fake URL shown in the chrome's address bar. Omit to hide the URL pill. */
  url?: string;
  /** Optional label rendered to the right of the URL (e.g. "ChatGPT"). */
  label?: React.ReactNode;
  /** Optional icon rendered before the label (e.g. bot logo). */
  labelIcon?: React.ReactNode;
  /** Extra classes applied to the outer window. */
  className?: string;
  /** Extra classes applied to the content region. */
  contentClassName?: string;
}

export function BrowserWindow({
  url,
  label,
  labelIcon,
  className,
  contentClassName,
  children,
  ...props
}: BrowserWindowProps) {
  return (
    <div className={cn("browser-window", className)} {...props}>
      <div className="browser-window-chrome">
        <span className="browser-window-dot bg-[#FF5F57]" aria-hidden />
        <span className="browser-window-dot bg-[#FEBC2E]" aria-hidden />
        <span className="browser-window-dot bg-[#28C840]" aria-hidden />
        {(url || label) && (
          <div className="ml-3 flex flex-1 items-center gap-2">
            {url && (
              <div className="flex-1 max-w-[360px] truncate rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/45">
                {url}
              </div>
            )}
            {(label || labelIcon) && (
              <div className="ml-auto flex items-center gap-1.5 text-[11px] font-medium text-white/60">
                {labelIcon}
                {label}
              </div>
            )}
          </div>
        )}
      </div>
      <div className={cn("relative", contentClassName)}>{children}</div>
    </div>
  );
}
