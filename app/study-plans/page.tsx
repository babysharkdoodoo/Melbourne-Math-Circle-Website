import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell, PageHero } from "@/components/page-shell";

export const metadata: Metadata = { title: "Study plans | Melbourne Math Circle", description: "Three ordered study plans using MMC’s articles, topic guides, and printable activities." };

const plans = [
  { title: "Build confidence with patterns", image: "/images/math/combinatorics.svg", alt: "Pascal’s triangle with six rows of numbers", intro: "Start here if you are comfortable adding and multiplying and want practice explaining a pattern.", steps: [
    { title: "Read Patterns and Sequences", href: "/math-bites/patterns-and-sequences", task: "Write the next terms before checking the explanation. Describe the rule in a full sentence." },
    { title: "Complete the Pascal’s triangle worksheet", href: "/printable-activities/pascal-patterns", task: "Build the rows by hand. Find the row totals and explain why they double." },
    { title: "Read the combinatorics guide", href: "/topics/combinatorics", task: "Try its practice problems. Use a list or diagram to check that you counted each possibility once." },
  ] },
  { title: "Learn to analyze a game", image: "/images/math/game-theory.svg", alt: "Fifteen counters used in a strategy game", intro: "For students ready to move from examples to a strategy that works against every legal response.", steps: [
    { title: "Read Math and Games", href: "/math-bites/math-and-games", task: "Play a few rounds and record your moves. Identify a position you would prefer to give your opponent." },
    { title: "Complete the counter strategy worksheet", href: "/printable-activities/counter-strategy", task: "Work backward from four counters. Explain your first move from fifteen and each response after it." },
    { title: "Study the game theory guide", href: "/topics/game-theory", task: "Try the practice problems before opening the hints. Check whether changing a rule changes your strategy." },
  ] },
  { title: "Connect arithmetic to codes", image: "/images/math/cryptography.svg", alt: "Alphabet rows showing a shift cipher", intro: "For students who can work with remainders and want to see how modular arithmetic describes a cipher.", steps: [
    { title: "Review number theory", href: "/topics/number-theory", task: "Review divisibility and modular arithmetic. Check your understanding with the practice problems." },
    { title: "Complete the shift cipher worksheet", href: "/printable-activities/shift-ciphers", task: "Encode and decode by hand, then express the shift using letter numbers from 0 to 25." },
    { title: "Read the cryptography guide", href: "/topics/cryptography", task: "Explain why trying every shift defeats this cipher. Distinguish encoding a message from keeping it secure." },
  ] },
];

export default function StudyPlansPage() {
  return <PageShell className="study-plans-page"><PageHero title="Study plans"><p>Choose a plan based on what you already know. Work through the steps in order, write down your reasoning, and check answers after attempting each problem.</p></PageHero>
    {plans.map(plan => <section className="nav-section study-plan" key={plan.title}><div className="study-plan-intro"><Image src={plan.image} alt={plan.alt} width={800} height={500}/><h2>{plan.title}</h2><p>{plan.intro}</p></div><ol className="study-steps">{plan.steps.map(step => <li key={step.href}><h3><Link href={step.href}>{step.title}</Link></h3><p>{step.task}</p></li>)}</ol></section>)}
  </PageShell>;
}
