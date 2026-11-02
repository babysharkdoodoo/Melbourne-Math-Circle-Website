import RegistrationForm from "@/components/registration-form";
import Link from "next/link";
import { PageShell, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";
export const metadata: Metadata = {title:"Join us | Melbourne Math Circle",description:"Register for Melbourne Math Circle program updates. The monthly meeting series has concluded."};
export default function JoinUsPage() {
 return <PageShell className="registration-page">
  <PageHero title="Join us"><p>The monthly meeting series has concluded. Registration remains available for general program updates.</p></PageHero>
  <section className="nav-section registration-layout" id="register">
   <aside className="registration-notes"><h2>Registration</h2><p data-motion>The form collects student, parent, and emergency contact information, followed by participation agreements.</p><p data-motion>Complete each section before submitting. Registration records your details with the chapter; it does not reserve an event place.</p><p data-motion>To ask about helping with activities, use the email contacts on the <Link href="/volunteers">volunteer page</Link>.</p></aside>
   <div className="registration-surface"><RegistrationForm/></div>
  </section>
 </PageShell>;
}
