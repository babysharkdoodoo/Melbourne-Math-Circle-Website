import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Image from "next/image";
import { PageShell, PageHero } from "@/components/page-shell";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Volunteer | Melbourne Math Circle",
  description: "Contact Faizan Ahmed or Eshan Vipuil about volunteering with Melbourne Math Circle.",
};

const contacts = ["Faizan Ahmed", "Eshan Vipuil"].map(name => teamMembers.find(member => member.name === name)!);

export default function VolunteersPage() {
  return <PageShell className="volunteers-page">
    <PageHero title="Volunteer with MMC"><p>Email Faizan Ahmed or Eshan Vipuil to ask about helping with math activities and school outreach.</p></PageHero>
    <figure className="volunteer-photo"><Image src="/Photos/monthly_meetings/11.png" alt="A volunteer discussing a worksheet with a student at a past library session" width={1080} height={1080}/><figcaption>Working through a problem at a past library session.</figcaption></figure>
    <section className="nav-section volunteer-overview">
      <div><h2>Ways to help</h2><p data-motion>Let the team know whether you’re interested in explaining problems, helping prepare activities, or supporting a school visit. Your email starts a conversation about what help is needed and what fits your availability.</p></div>
      <div className="volunteer-email-notes"><h3 data-motion>Include in your email</h3><ul><li>Your name and school or organization.</li><li>The math topics or activities you would like to help with.</li><li>Your general availability and whether you can attend in person.</li><li>Any tutoring, teaching, or event experience you would like to share.</li></ul></div>
    </section>
    <section className="nav-section volunteer-contacts"><h2>Email either contact</h2><p data-motion>You only need to contact one person. Faizan or Eshan can discuss suitable opportunities and next steps.</p><div className="volunteer-contact-list">{contacts.map(person=><article key={person.name} data-motion><h3>{person.name}</h3><p>{person.role}</p><a className="text-link" href={`mailto:${person.social.email}?subject=MMC%20volunteer%20inquiry`}><Mail size={18} aria-hidden="true"/>{person.social.email}</a></article>)}</div></section>
  </PageShell>;
}
