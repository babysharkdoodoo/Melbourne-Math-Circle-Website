import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell, PageHero } from "@/components/page-shell";

export const metadata: Metadata = { title: "For schools | Melbourne Math Circle", description: "Ask Melbourne Math Circle about math activities for your school or student group." };

export default function ForSchoolsPage() {
  return <PageShell className="schools-page">
    <PageHero title="For schools"><p>Contact the team to discuss math activities for your classroom or student group. MMC’s school outreach has included logic puzzles at University Park Elementary.</p></PageHero>
    <section className="nav-section school-feature">
      <figure><Image src="/Photos/university_park/2.png" alt="MMC volunteers leading a classroom logic puzzle at University Park Elementary; pupils’ faces are covered in the original photo" width={1600} height={1200}/><figcaption>University Park Elementary: volunteers leading a logic puzzle.</figcaption></figure>
      <div><h2>Choose an activity</h2><p>Tell us what your students are learning and what you would like them to practice. Possible starting points include:</p><ul className="purpose-list"><li><strong>Logic puzzles.</strong> Compare clues, rule out possibilities, and explain a conclusion.</li><li><strong>Strategy games.</strong> Test moves with a partner, then look for a rule that predicts the result.</li><li><strong>Number patterns.</strong> Use diagrams and arithmetic to make and check a prediction.</li></ul><Link className="text-link" href="/printable-activities">Browse example worksheets</Link></div>
    </section>
    <section className="nav-section school-inquiry"><div><h2>Ask about a visit</h2><p>Email Eshan with your school’s name, the students’ grade levels, approximate group size, preferred dates, and available time. Include any learning goals or access needs the team should consider.</p><a className="nav-button" href="mailto:eshan.mmc@orlandomathcircle.org?subject=School%20outreach%20inquiry">Email Eshan</a></div><aside><h3>Before making plans</h3><p>The team will need to confirm volunteer availability and agree on the activity, timing, and school requirements with you.</p><p>You can also use the printable activities independently.</p></aside></section>
  </PageShell>;
}
