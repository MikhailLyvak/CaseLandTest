"use client";

import type { CtaLocation } from "@/lib/analytics";
import { trackCtaClick } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  className?: string;
  ctaLocation: CtaLocation;
  children: React.ReactNode;
};

export function TrackedLink({
  href,
  className,
  ctaLocation,
  children,
}: TrackedLinkProps) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => trackCtaClick(ctaLocation)}
    >
      {children}
    </a>
  );
}
