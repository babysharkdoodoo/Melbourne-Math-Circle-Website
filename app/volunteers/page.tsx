import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Image from "next/image";
import { PageShell, PageHero } from "@/components/page-shell";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Volunteer | Melbourne Math Circle",
  description: "Help with math activities and school visits. Email Faizan Ahmed to get involved.",
};

const contacts = ["Faizan Ahmed"].map(name => teamMembers.find(member => member.name === name)!);

export default function VolunteersPage() {
  return <PageShell className="volunteers-page">
    <PageHero title="Volunteer with MMC"><p>Like explaining a tricky problem or coming up with a good puzzle? We’d love to hear from you.</p></PageHero>
    <figure className="volunteer-photo"><Image src="/optimized/Photos/monthly_meetings/11.webp" alt="A volunteer discussing a worksheet with a student at a past library session" width={1080} height={1080}/><figcaption>Working through a problem at a past library session.</figcaption></figure>
    <section className="nav-section volunteer-overview">
      <div><h2>Give us a hand</h2><p data-motion>You can help students work through problems, put together activities, or join a school visit. Email Faizan and tell him a little about yourself and when you’re free.</p></div>
      <div className="volunteer-email-notes"><h3 data-motion>A few things to include</h3><ul><li>Your name and school.</li><li>What you’d enjoy helping with.</li><li>When you’re usually available.</li><li>Any teaching or tutoring experience, if you have it.</li></ul></div>
    </section>
    <section className="nav-section volunteer-contacts"><h2>Say hello to Faizan</h2><p data-motion>No long application needed. A short email is a good place to start.</p><div className="volunteer-contact-list">{contacts.map(person=><article key={person.name} data-motion><h3>{person.name}</h3><p>{person.role}</p><a className="text-link" href={`mailto:${person.social.email}?subject=MMC%20volunteer%20inquiry`}><Mail size={18} aria-hidden="true"/>{person.social.email}</a></article>)}</div></section>
  </PageShell>;
}
