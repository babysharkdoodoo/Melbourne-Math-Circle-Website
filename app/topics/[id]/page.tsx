import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getTopicById, getRelatedTopics, generateTopicStaticParams } from "@/lib/topics";
import { PageShell } from "@/components/page-shell";

type Props = { params: Promise<{id:string}> };
export async function generateStaticParams() { return generateTopicStaticParams(); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
 const {id}=await params;const topic=getTopicById(id);
 return topic?{title:topic.title+" | Melbourne Math Circle",description:topic.description}:{title:"Topic | Melbourne Math Circle"};
}
const references:Record<string,{heading:string;name:string;url:string}>={
 topology:{heading:"The Möbius strip",name:"Wolfram MathWorld: Möbius Strip",url:"https://mathworld.wolfram.com/MoebiusStrip.html"},
 "game-theory":{heading:"Other players’ choices",name:"Wolfram MathWorld: Nash Equilibrium",url:"https://mathworld.wolfram.com/NashEquilibrium.html"},
 fractals:{heading:"Repeat a construction",name:"Wolfram MathWorld: Sierpiński Triangle",url:"https://mathworld.wolfram.com/SierpinskiTriangle.html"}
};
export default async function TopicDetailPage({params}:Props) {
 const {id}=await params;const topic=getTopicById(id);if(!topic)notFound();const related=getRelatedTopics(id);
 return <PageShell className="reading-page topic-reading">
  <section className="nav-hero reading-hero"><Link href="/some-math#topics" className="reading-back"><ArrowLeft size={17}/>Topic guides</Link><h1>{topic.title}</h1><p data-motion>{topic.description}</p><p className="reading-meta">Difficulty: {topic.level}</p></section>
  <article className="nav-section reading-article"><figure className="reading-illustration"><Image src={topic.image} alt={topic.title+" diagram"} width={640} height={400} sizes="(max-width:650px) 100vw, 480px" priority/></figure>
   {topic.sections.map(section=><section className="reading-section" key={section.heading}><h2>{section.heading}</h2><p data-motion>{section.body}</p>{references[id]?.heading===section.heading&&<a className="reading-source" href={references[id].url} target="_blank" rel="noopener noreferrer">{references[id].name}</a>}</section>)}
   <section className="reading-section reading-problems"><h2>Practice problems</h2><ol>{topic.problems.map(problem=><li key={problem.question}><p>{problem.question}</p><details><summary>Show hint</summary><p>{problem.hint}</p></details></li>)}</ol></section>
   <Link href="/fun-math-problems" className="text-link">More practice problems <ArrowUpRight size={18}/></Link>
  </article>
  <section className="nav-section reading-related"><h2>Related guides</h2><nav aria-label="Related topic guides">{related.map(item=><Link href={"/topics/"+item.id} key={item.id}>{item.title}<ArrowUpRight size={20}/></Link>)}</nav></section>
 </PageShell>;
}
