import type { Metadata } from "next";
import { PageHero, PageShell } from "@/components/page-shell";
import SomeMathTabs from "@/components/some-math-tabs";
import MathTopics from "@/components/topics-content";
import MathBites from "@/components/math-bites-content";
import MathWorksheets from "@/components/printable-activities-content";
import MathStudyPlans from "@/components/study-plans-content";
import MathResources from "@/components/resources-content";

export const metadata: Metadata = {
  title: "Some Math | Melbourne Math Circle",
  description: "Math guides, short reads, printable worksheets, study plans, and our favorite resources, all in one place.",
};

export default function SomeMathPage() {
  return <PageShell className="some-math-page">
    <PageHero title="Some Math"><p>Pick a topic, try a problem, or print something to work on. Take your time, and don’t worry if you get stuck.</p></PageHero>
    <SomeMathTabs sections={[
      { id: "topics", title: "Topics & problems", content: <MathTopics /> },
      { id: "math-bites", title: "Math Bites", content: <MathBites /> },
      { id: "worksheets", title: "Worksheets", content: <MathWorksheets /> },
      { id: "study-plans", title: "Study plans", content: <MathStudyPlans /> },
      { id: "resources", title: "Resources", content: <MathResources /> },
    ]} />
  </PageShell>;
}
