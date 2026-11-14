import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <aside className="announcement-banner" aria-label="Announcement">
      <p>Want to volunteer? Get in touch with Faizan.</p>
      <Link href="/volunteers">How to help <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </aside>
  );
}
