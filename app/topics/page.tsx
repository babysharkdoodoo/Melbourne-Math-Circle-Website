import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getAllTopics } from "@/lib/topics";
import { PageShell, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Topics & problems | Melbourne Math Circle", description: "Math topic guides with explanations, practice problems, and hints." };
const summaries: Record<string,string> = {
 "number-theory":"Prime numbers, divisibility, and remainders.", "graph-theory":"Vertices, edges, paths, and networks.", topology:"Surfaces, connectedness, and shapes under continuous deformation.",
 "game-theory":"Strategies, choices, and mathematical games.", fractals:"Repeated rules, self-similarity, and the Mandelbrot set.", combinatorics:"Counting arrangements and combinations.", cryptography:"Codes, encryption, and the mathematics behind them.", probability:"Chance, possible outcomes, and expected value."
};
const diagramDescriptions: Record<string,string> = {
 "number-theory":"Prime numbers highlighted among the integers from 1 to 48",
 "graph-theory":"A graph with six labeled vertices and nine edges",
 topology:"A projected Möbius strip with a single half twist",
 "game-theory":"Fifteen counters arranged in three rows of five",
 fractals:"A Sierpinski triangle formed by repeated subdivision",
 combinatorics:"The first six rows of Pascal’s triangle",
 cryptography:"A Caesar cipher shifting each letter forward by three places",
 probability:"Probabilities for the number of heads in six fair coin flips"
};
export default function TopicsPage() {
 const topics = getAllTopics();
 return <PageShell className="topics-page">
  <PageHero title="Topics & problems"><p>Choose a topic for an introduction, worked explanations, and problems with hints. The guides are available for independent study.</p></PageHero>
  <section className="nav-section topic-visual-grid" aria-label="Topic guides">
   {topics.map((topic,i) => <article key={topic.id} className={i===0 ? "topic-guide topic-guide-featured" : "topic-guide"}>
    <Link href={"/topics/"+topic.id} className="topic-guide-image" aria-label={topic.title+" guide"}><Image src={"/images/math/"+topic.id+".svg"} alt={diagramDescriptions[topic.id]} width={640} height={400} sizes={i===0?"(max-width:750px) 100vw, 45vw":"(max-width:750px) 100vw, 25vw"} priority={i===0}/></Link>
    <div data-motion><h2><Link href={"/topics/"+topic.id}>{topic.title}</Link></h2><p>{summaries[topic.id] || topic.tags.join(", ")}</p><p className="reading-meta">Difficulty: {topic.level}</p><Link href={"/topics/"+topic.id} className="text-link">Read guide <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
   </article>)}
  </section>
  <section className="nav-section nav-dark topic-note"><h2>Working through a guide</h2><div><p data-motion>Read the explanation, then try a problem before opening its hint. Write out your reasoning and compare it with another approach.</p><Link href="/fun-math-problems" className="text-link" data-motion>Practice problems <ArrowUpRight size={20}/></Link></div></section>
 </PageShell>;
}
