import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CounterGame from "@/components/counter-game";
import HomeMotion from "@/components/home-motion";
import { teamMembers } from "@/lib/team";

export default function HomePage() {
  const seniors = teamMembers.filter(member => member.grade === "Senior");
  const otherMembers = teamMembers.filter(member => member.grade !== "Senior");

  return (
    <HomeMotion>
      <section className="chapter chapter-red home-opening">
        <div className="opening-title"><h1><span>Melbourne</span><span>Math Circle</span></h1></div>
        <div className="opening-bottom">
          <div className="opening-copy">
            <p>Student-led math education and school outreach in Melbourne, Florida.</p>
            <Link href="/about" className="mmc-button button-paper">Our story <ArrowUpRight size={22} /></Link>
            <p className="opening-note">A chapter of Orlando Math Circle.</p>
          </div>
          <figure className="opening-photo">
            <Image src="/home-screen-photo.jpg" alt="Melbourne Math Circle students and volunteers gathered in front of a whiteboard" width={1345} height={690} priority sizes="(max-width: 750px) 100vw, 65vw" />
            <figcaption>Students and volunteers after a library session.</figcaption>
          </figure>
        </div>
      </section>

      <section className="chapter chapter-paper circle-intro">
        <div className="chapter-heading"><h2>Library sessions</h2><p>The completed library series paired group instruction with help at the table.</p></div>
        <div className="intro-bottom">
          <figure><Image src="/Photos/monthly_meetings/13.png" alt="Melbourne Math Circle participants standing together in front of a whiteboard" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>A group photo from one of our monthly meetings.</figcaption></figure>
          <div className="intro-text"><p>Students tried problems, wrote down their reasoning, and compared solutions. Volunteers introduced each topic and answered questions as students worked.</p></div>
        </div>
        <div className="session-photo-pair">
          <figure><Image src="/Photos/monthly_meetings/1.png" alt="A volunteer working through a number theory problem on the board during a library session" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>Number theory instruction during a library session.</figcaption></figure>
          <figure><Image src="/Photos/monthly_meetings/5.png" alt="A volunteer helping students with written math problems during a library session" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>Volunteer assistance during a library session.</figcaption></figure>
        </div>
      </section>

      <section className="chapter chapter-mustard game-chapter" id="try-a-problem">
        <div className="game-intro"><h2>Try a game</h2><p className="large-copy">Fifteen counters.<br />Take one, two, or three.<br />Whoever takes the last one wins.</p><p>You move first. After playing a round, try to explain which positions give you a winning move.</p><p className="game-context">Open the hint to see how groups of four determine the strategy.</p></div>
        <CounterGame />
      </section>

      <section className="chapter chapter-paper explore-chapter home-dark">
        <div className="chapter-heading"><h2>Study materials</h2><p>Choose a guide, reference, or short article based on what you want to work on.</p></div>
        <nav className="big-index" aria-label="Math materials">
          <Link href="/topics"><span>Topics &amp; problems</span><span>Explanations and practice with hints</span><ArrowUpRight /></Link>
          <Link href="/resources"><span>Resources</span><span>Books, handouts, videos, and tools</span><ArrowUpRight /></Link>
          <Link href="/math-bites"><span>Math Bites</span><span>Short introductions for younger readers</span><ArrowUpRight /></Link>
        </nav>
      </section>

      <section className="chapter chapter-slate community-chapter">
        <div className="chapter-heading"><h2>Community outreach</h2><div><p>Volunteers led math activities at IndiaFest and University Park Elementary. These photographs show students working on puzzles and paper activities.</p><Link href="/gallery" className="text-link">More event photos <ArrowRight size={20} /></Link></div></div>
        <div className="documentary-pair">
          <figure><Image src="/Photos/IndiaFest/1.png" alt="Students and families working on math activities around a table at IndiaFest" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>IndiaFest activity table.</figcaption></figure>
          <figure><Image src="/Photos/university_park/1.png" alt="Student volunteers discussing a logic puzzle at University Park Elementary, with pupils’ faces covered in the original photo" width={1600} height={900} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>A logic puzzle at University Park Elementary.</figcaption></figure>
          <figure><Image src="/Photos/IndiaFest/2.png" alt="Volunteers explaining a paper activity to children at the IndiaFest table" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>A paper activity at IndiaFest.</figcaption></figure>
          <figure><Image src="/Photos/IndiaFest/3.png" alt="A student working on a worksheet with a volunteer at IndiaFest" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>Problem-solving activities at IndiaFest.</figcaption></figure>
        </div>
      </section>

      <section className="chapter chapter-maroon people-chapter">
        <div className="chapter-heading">
          <h2>The team</h2>
          <div className="people-copy">
            <p>Student officers coordinate curriculum planning and school outreach. Volunteers help prepare and explain math activities.</p>
            <Link href="/team" className="text-link">Meet the whole team <ArrowRight size={20} /></Link>
            <a href="https://www.orlandomathcircle.org/pages/about-us" target="_blank" rel="noopener noreferrer" className="parent-link">Part of Orlando Math Circle <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="senior-portraits">
          {seniors.map(member => (
            <figure key={member.name}>
              <Image src={member.image} alt={member.name} width={800} height={800} sizes="(max-width: 750px) 40vw, 33vw" />
              <figcaption>
                <h3><Link href={`/team#${member.name.toLowerCase().replace(/\s+/g, "-")}`}>{member.name}</Link></h3>
                <p className="senior-role">{member.role}</p>
                <p className="senior-grade">{member.grade}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <nav className="home-team-list" aria-label="More team members">
          {otherMembers.map(member => (
            <Link key={member.name} href={`/team#${member.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <span>{member.name}</span><span>{member.role}</span><ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </section>

      <section className="chapter chapter-paper interview-chapter home-dark">
        <div className="interview-copy">
          <h2>Professor Kev Show</h2>
          <p>An interview about Melbourne Math Circle’s program and work in Melbourne.</p>
          <a href="https://www.youtube.com/watch?v=bwqcqY0FlEE" target="_blank" rel="noopener noreferrer" className="text-link">Watch on YouTube <ArrowUpRight size={20} /></a>
        </div>
        <div className="interview-preview">
          <iframe
            src="https://www.youtube.com/embed/bwqcqY0FlEE?rel=0"
            title="Melbourne Math Circle on the Professor Kev Show"
            width="560"
            height="315"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="chapter home-volunteering">
        <h2>Volunteer with MMC</h2>
        <div>
          <p>Volunteer inquiries go directly to Faizan Ahmed or Eshan Vipuil. The volunteer page explains what to include in your first email.</p>
          <Link href="/volunteers" className="text-link">Volunteer details <ArrowRight size={20} /></Link>
        </div>
      </section>

      <section className="chapter chapter-paper home-questions">
        <h2>Using the website</h2>
        <div className="home-faq-list">
          <details><summary>How do I choose between Topics and Math Bites?</summary><p><Link href="/topics">Topics</Link> includes explanations and practice problems with hints. <Link href="/math-bites">Math Bites</Link> offers shorter introductions for younger readers.</p></details>
          <details><summary>What should I do if I get stuck on a problem?</summary><p>Write down what you know and test a small example. Open the hint when you need a starting point, then try the problem again before reading a solution.</p></details>
          <details><summary>How can I report a math error or broken link?</summary><p><Link href="/contact">Send a correction</Link> with the page address and the problem or link that needs attention.</p></details>
        </div>
      </section>


    </HomeMotion>
  );
}
