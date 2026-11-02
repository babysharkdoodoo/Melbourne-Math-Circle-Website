import type { ReactNode } from "react";
import HomeMotion from "@/components/home-motion";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <HomeMotion className={`nav-page ${className}`}>{children}</HomeMotion>;
}

export function PageHero({ title, children }: { title: string; children: ReactNode }) {
  return <section className="nav-hero"><h1>{title}</h1><div className="nav-intro" data-motion>{children}</div></section>;
}
