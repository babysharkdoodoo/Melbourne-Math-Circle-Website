"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
import { mathBites } from "@/lib/math-bites-data";

export default function MathBitesPage() {
 const [searchTerm,setSearchTerm] = useState("");
 const [selectedTag,setSelectedTag] = useState<string|null>(null);
 const filtered = mathBites.filter(b=>(b.title+" "+b.excerpt).toLowerCase().includes(searchTerm.toLowerCase()) && (!selectedTag || b.tags.includes(selectedTag)));
 const tags = ["counting","patterns","shapes","geometry","fractions","games","puzzles"];
 return <PageShell className="bites-journal">
  <PageHero title="Math Bites"><p>Short explanations of counting, shapes, patterns, and other everyday math topics for younger readers.</p></PageHero>
  <section className="nav-section bites-controls" aria-label="Find articles"><label htmlFor="article-search">Search articles</label><input id="article-search" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Search articles…"/><div className="article-tags">{tags.map(tag=><button key={tag} aria-pressed={selectedTag===tag} onClick={()=>setSelectedTag(selectedTag===tag?null:tag)}>{tag}</button>)}{(searchTerm||selectedTag)&&<button onClick={()=>{setSearchTerm("");setSelectedTag(null);}}>Clear filters</button>}</div></section>
  <section className="nav-section journal-articles" aria-label="Articles">
   <p className="quiet-meta" aria-live="polite">{filtered.length} {filtered.length===1?"article":"articles"}</p>
   {filtered[0]&&<article className="journal-lead"><Image src={filtered[0].image} alt="" width={640} height={400} sizes="(max-width:750px) 100vw, 45vw"/><div data-motion><h2><Link href={"/math-bites/"+filtered[0].id}>{filtered[0].title}</Link></h2><p>{filtered[0].excerpt}</p><Link href={"/math-bites/"+filtered[0].id} className="text-link">Read article <ArrowUpRight size={18}/></Link></div></article>}
   <div className="journal-grid">{filtered.slice(1).map(bite=><article key={bite.id} className="journal-card"><Link href={"/math-bites/"+bite.id} aria-label={bite.title}><Image src={bite.image} alt="" width={640} height={400} sizes="(max-width:650px) 100vw, (max-width:1000px) 45vw, 30vw"/></Link><div data-motion><h2><Link href={"/math-bites/"+bite.id}>{bite.title}</Link></h2><p>{bite.excerpt}</p><Link href={"/math-bites/"+bite.id} className="text-link">Read article <ArrowUpRight size={18}/></Link></div></article>)}</div>
   {filtered.length===0&&<p>No articles match these filters. Try another search or clear the filters.</p>}
  </section>
  <section className="nav-section journal-submissions"><h2>Suggest a topic</h2><p data-motion>Send a math question or an idea for a future article to <a href="mailto:eshan@orlandomathcircle.org">eshan@orlandomathcircle.org</a>.</p></section>
 </PageShell>;
}
