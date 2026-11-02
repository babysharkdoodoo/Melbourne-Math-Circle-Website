import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
import { activities } from "@/lib/activities";

export const metadata: Metadata = { title: "Printable activities | Melbourne Math Circle", description: "Three math worksheets with answer keys: counter games, Pascal’s triangle, and shift ciphers." };

export default function PrintableActivitiesPage() {
  return <PageShell className="activities-page">
    <PageHero title="Printable activities"><p>Three worksheets for independent practice, a classroom, or a math club. Each includes questions and an answer key.</p></PageHero>
    <section className="nav-section activity-library" aria-label="Worksheets">
      {activities.map(activity => <article className="activity-preview" key={activity.id}>
        <Link href={`/printable-activities/${activity.id}`} aria-label={`Open ${activity.title}`}><Image src={activity.image} alt={activity.alt} width={800} height={500}/></Link>
        <div><h2>{activity.title}</h2><p>{activity.introduction}</p><p className="reading-meta">{activity.level}<br/>Materials: {activity.materials}</p><Link className="text-link" href={`/printable-activities/${activity.id}`}>Open worksheet <ArrowUpRight size={18}/></Link></div>
      </article>)}
    </section>
  </PageShell>;
}
