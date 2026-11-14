import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Event gallery | Melbourne Math Circle",
  description: "Photos from Melbourne Math Circle library sessions, IndiaFest, and University Park Elementary.",
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
