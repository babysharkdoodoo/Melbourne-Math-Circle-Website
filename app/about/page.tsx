import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
export const metadata: Metadata = {title:"Our story | Melbourne Math Circle",description:"How Melbourne Math Circle began in 2023, its volunteer-led sessions, and community outreach."};
export default function AboutPage() {
 return <PageShell className="about-story">
  <section className="nav-hero about-opening">
   <h1>Our story</h1><p className="nav-deck" data-motion>Student-led math education in Melbourne, Florida.</p>
   <div className="about-story-intro"><div><p data-motion>Eshan Vipuil founded Melbourne Math Circle in 2023 after participating in Orlando Math Circle. He wanted to bring that experience to students in Melbourne. MMC became a local chapter of Orlando Math Circle, with high school volunteers leading its sessions.</p><p data-motion>The chapter’s early work centered on free library sessions. Students could try unfamiliar problems with help from high school volunteers. Outreach later included IndiaFest and University Park Elementary.</p></div><figure className="circle-hero-photo"><Image src="/about_1.jpg" alt="Three student volunteers presenting to students seated at tables during a math session" width={1600} height={900} sizes="(max-width:750px) 100vw, 360px" priority/><figcaption>Student volunteers introducing a session.</figcaption></figure></div>
  </section>
  <section className="nav-section about-account"><div className="about-account-inner">
   <h2>The work we do</h2><figure className="about-inset-photo"><Image src="/about_2.jpg" alt="A volunteer helping two students with a math activity at a table" width={400} height={400} sizes="(max-width:650px) 260px, 280px"/><figcaption>Individual help during a session.</figcaption></figure>
   <p data-motion>At the library, volunteers taught topics such as number theory and helped students work through problems. The format combined a group explanation with individual help at the table.</p>
   <p data-motion>IndiaFest brought those activities to a community setting. The visit to University Park Elementary gave volunteers experience explaining puzzles to a school group. Photographs from both events document that work.</p>
   <h3 data-motion>How a session worked</h3><p data-motion>After an introduction, students tried a problem and wrote down their reasoning. Volunteers answered questions and compared solutions with the group, including approaches that reached the same answer in different ways.</p><p data-motion>Sessions were free and open to all experience levels, including students who had never joined a math team. Students could work at their own pace, with volunteers available to help at the table.</p>
  </div></section>
  <section className="nav-section about-chapter about-chapter-light"><h2>The people behind it</h2><div><p data-motion>Eshan serves as Founder and President. Faizan Ahmed, the President-Elect, helps the chapter reach local schools. Aanya Patel leads curriculum planning, and Kavish Patel serves as Secretary. Student volunteers support the chapter’s teaching and outreach work.</p><div className="about-current"><h3 data-motion>The chapter today</h3><p data-motion>The monthly meeting series has concluded, and no further monthly meetings are scheduled. This site records the chapter’s sessions and outreach and keeps its math resources available for independent study.</p><p data-motion>For questions about the chapter’s work or a proposed school activity, contact the team.</p><Link href="/contact" className="text-link" data-motion>Contact the team <ArrowRight size={20}/></Link></div></div></section>
 </PageShell>;
}
