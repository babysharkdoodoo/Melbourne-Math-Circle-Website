import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <aside className="announcement-banner" aria-label="Announcement">
      <p>Interested in volunteering? Email Faizan or Eshan.</p>
      <Link href="/volunteers">Volunteer details <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </aside>
  );
}
