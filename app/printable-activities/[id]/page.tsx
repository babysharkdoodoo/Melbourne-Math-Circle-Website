import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities } from "@/lib/activities";
import PrintActivity from "@/components/print-activity";

export function generateStaticParams() { return activities.map(({ id }) => ({ id })); }
export async function generateMetadata({ params }: { params: Promise<{id: string}> }): Promise<Metadata> {
  const { id } = await params;
  const activity = activities.find(item => item.id === id);
  return { title: `${activity?.title ?? "Worksheet"} | Melbourne Math Circle` };
}
export default async function WorksheetPage({ params }: { params: Promise<{id: string}> }) {
  const { id } = await params;
  const activity = activities.find(item => item.id === id);
  if (!activity) notFound();
  return <div className="nav-page worksheet-page">
    <article className="worksheet-sheet">
      <Link className="reading-back worksheet-back" href="/some-math#worksheets">Back to printable activities</Link>
      <header className="worksheet-heading"><div><p>Melbourne Math Circle</p><h1>{activity.title}</h1><p>Materials: {activity.materials}</p></div><Image src={activity.image} alt={activity.alt} width={320} height={200}/></header>
      <p className="worksheet-name">Name: __________________________ Date: ______________</p>
      <p>{activity.introduction}</p>
      <ol className="worksheet-questions">{activity.questions.map(question => <li key={question}>{question}<div className="worksheet-workspace" aria-hidden="true"/></li>)}</ol>
      <PrintActivity answers={activity.answers}/>
      <p className="worksheet-back">Related lesson: <Link className="text-link" href={activity.guide}>{activity.guideTitle}</Link></p>
    </article>
  </div>;
}
