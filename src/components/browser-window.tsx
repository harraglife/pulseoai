import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * BrowserWindow — chrome wrapper for ChatGPT/Gemini/Google AI Overview mockups.
 * Light glass chrome with the three traffic-light dots and an optional URL pill.
 * Purely presentational, safe in RSC.
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
              <div className="flex-1 max-w-[360px] truncate rounded-full border border-[rgba(15,23,42,0.08)] bg-white px-3 py-1 font-mono text-[11px] text-[rgba(11,15,30,0.52)]">
                {url}
              </div>
            )}
            {(label || labelIcon) && (
              <div className="ml-auto flex items-center gap-1.5 text-[11px] font-medium text-[rgba(11,15,30,0.60)]">
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
