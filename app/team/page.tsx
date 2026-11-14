import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { teamMembers } from "@/lib/team";
import { PageShell, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";
export const metadata: Metadata = {title:"Team | Melbourne Math Circle",description:"The student volunteers, officers, and alumni behind Melbourne Math Circle."};
export default function TeamPage() {
 return <PageShell className="team-directory-page">
  <PageHero title="Team"><p>The students who run the circle, plan activities, and help at the table.</p></PageHero>
  <div className="nav-section team-directory" data-no-motion>
   {teamMembers.map((member,i) => <section key={member.name} id={member.name.toLowerCase().replace(/\s+/g,"-")} className="directory-member">
    {member.image === "/placeholder-user.jpg" ? <div className="directory-initials" aria-hidden="true">{member.name.split(" ").map(n=>n[0]).join("")}</div> : <figure><Image src={member.image} alt={member.name} width={300} height={360} sizes="(max-width:650px) 140px, 220px" priority={i===0}/></figure>}
    <div><h2>{member.name}</h2><p className="directory-role">{member.role}</p>{(member.grade || member.school) && <p className="quiet-meta">{[member.grade,member.school].filter(Boolean).join(" · ")}</p>}{member.bio !== "Biography coming soon." && <p>{member.bio}</p>}<div className="member-links">{member.social.email && <a href={"mailto:"+member.social.email}><Mail size={17}/>Email {member.name.split(" ")[0]}</a>}{member.social.linkedin && <a href={"https://www.linkedin.com/in/"+member.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17}/></a>}</div></div>
   </section>)}
  </div>
  <section className="nav-section directory-contact"><Link href="/volunteers" className="text-link" data-motion>How to volunteer <ArrowUpRight size={20}/></Link></section>
 </PageShell>;
}
