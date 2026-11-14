import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell, PageHero } from "@/components/page-shell";

export const metadata: Metadata = { title: "For schools | Melbourne Math Circle", description: "Ask Melbourne Math Circle about math activities for your school or student group." };

export default function ForSchoolsPage() {
  return <PageShell className="schools-page">
    <PageHero title="For schools"><p>Bring a math activity to your classroom or club. We’ve worked on logic puzzles with students at University Park Elementary, and we’d be happy to talk about ideas for your school.</p></PageHero>
    <section className="nav-section school-feature">
      <figure><Image src="/optimized/Photos/university_park/2.webp" alt="MMC volunteers leading a classroom logic puzzle at University Park Elementary; pupils’ faces are covered in the original photo" width={1600} height={1200}/><figcaption>University Park Elementary: volunteers leading a logic puzzle.</figcaption></figure>
      <div><h2>What could we try?</h2><p>Tell us what your students are learning. Here are a few ideas:</p><ul className="purpose-list"><li><strong>Logic puzzles.</strong> Work through clues together and explain how you got your answer.</li><li><strong>Strategy games.</strong> Play a few rounds, then look for a winning move.</li><li><strong>Number patterns.</strong> Make a prediction and see whether it holds up.</li></ul><Link className="text-link" href="/some-math#worksheets">Browse example worksheets</Link></div>
    </section>
    <section className="nav-section school-inquiry"><div><h2>Ask about a visit</h2><p>Email Faizan with your school, grade levels, group size, and a few dates that could work. If there’s a topic you have in mind or anything your students need, let him know.</p><a className="nav-button" href="mailto:faizan@orlandomathcircle.org?subject=School%20visit">Email Faizan</a></div><aside><h3>We’ll work out the details</h3><p>Faizan will check who’s available and talk through the activity and timing with you.</p><p>You’re welcome to use our worksheets in class, too.</p></aside></section>
  </PageShell>;
}
