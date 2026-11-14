import RegistrationForm from "@/components/registration-form";
import Link from "next/link";
import { PageShell, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";
export const metadata: Metadata = {title:"Join us | Melbourne Math Circle",description:"Register for Melbourne Math Circle program updates. The monthly meeting series has concluded."};
export default function JoinUsPage() {
 return <PageShell className="registration-page">
  <PageHero title="Join us"><p>Our monthly library sessions have finished. You can still sign up to hear about future activities.</p></PageHero>
  <section className="nav-section registration-layout" id="register">
   <aside className="registration-notes"><h2>Stay in the loop</h2><p data-motion>Fill out the form so we can keep in touch. We’ll ask for a parent’s contact details and the information we need for student activities.</p><p data-motion>There aren’t any monthly sessions to book right now. We’ll share details when there’s something new to join.</p><p data-motion>Want to volunteer? <Link href="/volunteers">Get in touch with Faizan</Link>.</p></aside>
   <div className="registration-surface"><RegistrationForm/></div>
  </section>
 </PageShell>;
}
