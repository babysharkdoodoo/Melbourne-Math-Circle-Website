import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
import type { Metadata } from "next";
export const metadata: Metadata = {title:"Resources | Melbourne Math Circle",description:"Books, handouts, videos, tools, and competition practice for independent math study."};
const FREE_PDFS = [
  {
    title: "OTIS Excerpts",
    author: "Evan Chen",
    topic: "All Topics",
    url: "https://web.evanchen.cc/excerpts.html",
    isDirect: false,
  },
  {
    title: "Olympiad Inequalities",
    author: "Evan Chen",
    topic: "Algebra",
    url: "https://web.evanchen.cc/handouts/Ineq/en.pdf",
    isDirect: true,
  },
  {
    title: "A Beautiful Journey Through Olympiad Geometry",
    author: "Stefan Lozanovski",
    topic: "Geometry",
    url: "https://www.olympiadgeometry.com/the-book.html",
    isDirect: false,
  },
  {
    title: "Modern Olympiad Number Theory",
    author: "Aditya Khurmi",
    topic: "Number Theory",
    url: "https://www.academia.edu/44512122/Modern_Olympiad_Number_Theory",
    isDirect: false,
  },
  {
    title: "Expected Uses of Probability",
    author: "Evan Chen",
    topic: "Combinatorics",
    url: "https://web.evanchen.cc/handouts/ProbabilisticMethod/PM.pdf",
    isDirect: true,
  },
  {
    title: "Olympiad NT Through Challenging Problems",
    author: "Justin Stevens",
    topic: "Number Theory",
    url: "https://s3.amazonaws.com/aops-cdn.artofproblemsolving.com/resources/articles/olympiad-number-theory.pdf",
    isDirect: true,
  },
  {
    title: "Yufei Zhao: Olympiad Handouts",
    author: "Yufei Zhao (MIT)",
    topic: "Multiple",
    url: "https://yufeizhao.com/olympiad/",
    isDirect: false,
  },
  {
    title: "AMC 8 (2024) Problems",
    author: "MAA",
    topic: "Competition",
    url: "https://www.isinj.com/mt-amc8/2024-AMC8-Problems.pdf",
    isDirect: true,
  },
  {
    title: "Proof-Writing Style Guide",
    author: "Evan Chen",
    topic: "Proof Writing",
    url: "https://web.evanchen.cc/handouts/english/en.pdf",
    isDirect: true,
  },
];

const BOOKS = [
  {
    title: "The Art and Craft of Problem Solving",
    author: "Paul Zeitz",
    level: "Intermediate",
    link: "https://www.amazon.com/Art-Craft-Problem-Solving/dp/0471789011",
  },
  {
    title: "The Joy of X",
    author: "Steven Strogatz",
    level: "Beginner",
    link: "https://www.amazon.com/Joy-x-Guided-Tour-Math/dp/0544105850",
  },
  {
    title: "Fermat's Enigma",
    author: "Simon Singh",
    level: "Beginner",
    link: "https://www.amazon.com/Fermats-Enigma-Greatest-Mathematical-Problem/dp/0385493622",
  },
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    level: "Advanced",
    link: "https://www.amazon.com/Gödel-Escher-Bach-Eternal-Golden/dp/0465026567",
  },
];

const CHANNELS = [
  {
    name: "3Blue1Brown",
    by: "Grant Sanderson",
    level: "All Levels",
    url: "https://www.youtube.com/@3blue1brown",
  },
  {
    name: "Numberphile",
    by: "Brady Haran",
    level: "All Levels",
    url: "https://www.youtube.com/@numberphile",
  },
  {
    name: "Stand-up Maths",
    by: "Matt Parker",
    level: "All Levels",
    url: "https://www.youtube.com/@standupmaths",
  },
  {
    name: "Mathologer",
    by: "Burkard Polster",
    level: "Intermediate",
    url: "https://www.youtube.com/@Mathologer",
  },
];

const TOOLS = [
  {
    name: "Alcumus (AoPS)",
    url: "https://artofproblemsolving.com/alcumus",
    tag: "Free · Problem Practice",
  },
  {
    name: "Desmos Graphing",
    url: "https://www.desmos.com/calculator",
    tag: "Free · Graphing",
  },
  {
    name: "GeoGebra",
    url: "https://www.geogebra.org/geometry",
    tag: "Free · Geometry",
  },
  {
    name: "Euclidea",
    url: "https://www.euclidea.xyz/",
    tag: "Free · Puzzles",
  },
  {
    name: "Project Euler",
    url: "https://projecteuler.net/",
    tag: "Free · Computational",
  },
  {
    name: "Brilliant.org",
    url: "https://brilliant.org/",
    tag: "Freemium · Courses",
  },
];

const WEBSITES = [
  {
    name: "Art of Problem Solving",
    url: "https://artofproblemsolving.com/",
  },
  {
    name: "Mathigon",
    url: "https://mathigon.org/",
  },
  {
    name: "NRICH (Cambridge)",
    url: "https://nrich.maths.org/",
  },
  {
    name: "Cut-the-Knot",
    url: "https://www.cut-the-knot.org/",
  },
  {
    name: "Wolfram MathWorld",
    url: "https://mathworld.wolfram.com/",
  },
];

const COMPETITION_RESOURCES = [
  {
    name: "AMC / AIME Past Problems",
    by: "Art of Problem Solving Wiki",
    url: "https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions",
  },
  {
    name: "MATHCOUNTS Past Competitions",
    by: "MATHCOUNTS Foundation",
    url: "https://www.mathcounts.org/resources/past-competitions",
  },
  {
    name: "Evan Chen's Olympiad Articles",
    by: "Evan Chen (IMO Gold, MIT)",
    url: "https://web.evanchen.cc/olympiad.html",
  },
  {
    name: "Po-Shen Loh LIVE Platform",
    by: "Po-Shen Loh",
    url: "https://live.poshenloh.com/past-contests",
  },
];


const pdfDescriptions = ["Introductions to olympiad algebra, combinatorics, geometry, and number theory.","Methods for proving inequalities, including sums of squares, Schur, and Muirhead.","An introduction to olympiad geometry with worked proofs.","Number theory concepts and solved olympiad problems.","Expected value and the probabilistic method in competition problems.","An introduction to proof-based number theory through problems.","Handouts on algebra, geometry, combinatorics, and number theory.","The 2024 AMC 8 problem paper.","Advice on organizing and writing mathematical proofs."];
const bookDescriptions = ["Problem-solving strategies in algebra, geometry, number theory, and combinatorics.","An introduction to mathematical ideas and their everyday applications.","The history of Fermat’s Last Theorem and the work that led to its proof.","An exploration of logic, self-reference, music, and art."];
const channelDescriptions = ["Visual explanations of calculus, linear algebra, probability, and other topics.","Conversations with mathematicians about numbers, problems, and theorems.","Mathematical investigations of practical questions and puzzles.","Video explanations and proofs of mathematical results."];
const toolDescriptions = ["Adaptive problem practice from Art of Problem Solving.","Plot functions, compare graphs, and adjust variables.","Construct and manipulate geometric figures.","Compass-and-straightedge construction puzzles.","Problems combining mathematics and programming.","Interactive courses in mathematics, science, and computing."];
const siteDescriptions = ["Competition problems, courses, and discussion forums.","Interactive textbooks and mathematical activities.","School-age math problems organized by topic and difficulty.","A collection of mathematical proofs, problems, and explanations.","A reference for mathematical definitions, formulas, and theorems."];
const competitionDescriptions = ["Past AMC and AIME problems with community-written solutions.","Past competition papers and practice materials.","Olympiad handouts covering proof writing and several areas of competition mathematics.","Past contest problems and solutions."];

const bookIsbns = ["0471789011","0544105850","0385493622","0465026567"];
const toolPreviews = [
 {index:1,image:"graphing",alt:"Graphs of sine and cosine"},
 {index:2,image:"geometry",alt:"An equilateral triangle inscribed in a circle"},
 {index:4,image:"number-theory",alt:"Prime numbers highlighted in a grid of integers"},
];
export default function ResourcesPage() {
 return <PageShell className="resources-directory resources-visual">
  <PageHero title="Resources"><p>Books, handouts, videos, and tools for studying math independently.</p></PageHero>
  <div className="nav-section resources-layout">
   <nav className="resource-contents" aria-label="Resource categories">{[["Books",2],["Handouts",0],["Competition practice",1],["Videos",3],["Tools",4],["Websites",5]].map(([title,index])=><a href={"#resource-"+index} key={index}>{title}</a>)}</nav>
   <div className="resource-sections">
    <section id="resource-2"><h2>Books</h2><div className="book-shelf">{BOOKS.map((item,i)=><article key={item.title}>
     <a className="book-cover-link" href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.title}><Image className="book-cover-image" src={"https://covers.openlibrary.org/b/isbn/"+bookIsbns[i]+"-L.jpg?default=false"} alt={item.title+" book cover"} width={300} height={440} sizes="(max-width:650px) 45vw, (max-width:1000px) 40vw, 22vw" priority={i<2}/></a>
     <div data-motion><h3><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title} <ArrowUpRight size={17}/></a></h3><p className="book-by">{item.author} · {item.level}</p><p>{bookDescriptions[i]}</p></div>
    </article>)}</div><p className="image-credit">Book covers from <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer">Open Library</a>.</p></section>
    <section id="resource-0"><h2>Handouts</h2><p data-motion>PDFs and reading material from authors and educational organizations.</p><div className="handout-grid">{FREE_PDFS.map((item,i)=><article className="handout-entry" key={item.title} data-motion><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title} <ArrowUpRight size={17}/></a></h3><p className="book-by">{item.author}</p><p>{pdfDescriptions[i]}</p><a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.isDirect?"Open PDF":"View material"}<ArrowUpRight size={16}/></a></article>)}</div></section>
    <section id="resource-1"><h2>Competition practice</h2><div className="competition-list">{COMPETITION_RESOURCES.map((item,i)=><article className="resource-entry" key={item.name} data-motion><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name} <ArrowUpRight size={17}/></a></h3><p>{competitionDescriptions[i]}</p></article>)}</div></section>
    <section id="resource-3"><h2>Videos</h2><div className="channel-directory">{CHANNELS.map((item,i)=><article key={item.name} data-motion><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name} <ArrowUpRight size={17}/></a></h3><p className="book-by">{item.by}</p><p>{channelDescriptions[i]}</p></article>)}</div></section>
    <section id="resource-4"><h2>Tools</h2><div className="tool-preview-grid">{toolPreviews.map(preview=>{const item=TOOLS[preview.index];return <article key={item.name}><a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}><Image src={"/images/math/"+preview.image+".svg"} alt={preview.alt} width={640} height={400} sizes="(max-width:650px) 100vw, 30vw"/></a><div data-motion><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name} <ArrowUpRight size={17}/></a></h3><p>{toolDescriptions[preview.index]}</p></div></article>;})}</div>{TOOLS.map((item,i)=>[1,2,4].includes(i)?null:<article className="resource-entry" key={item.name} data-motion><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name} <ArrowUpRight size={17}/></a></h3><p>{toolDescriptions[i]}</p></article>)}</section>
    <section id="resource-5"><h2>Websites</h2>{WEBSITES.map((item,i)=><article className="resource-entry" key={item.name} data-motion><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name} <ArrowUpRight size={17}/></a></h3><p>{siteDescriptions[i]}</p></article>)}</section>
   </div>
  </div>
 </PageShell>;
}
