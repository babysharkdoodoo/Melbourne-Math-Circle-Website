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
            <Image src="/optimized/home-screen-photo.webp" alt="Melbourne Math Circle students and volunteers gathered in front of a whiteboard" width={1345} height={690} priority sizes="(max-width: 750px) 100vw, 65vw" />
            <figcaption>Students and volunteers after a library session.</figcaption>
          </figure>
        </div>
      </section>

      <section className="chapter chapter-paper circle-intro">
        <div className="chapter-heading"><h2>Library sessions</h2><p>Our library sessions brought students and volunteers together to try problems and talk through the ideas behind them.</p></div>
        <div className="intro-bottom">
          <figure><Image src="/optimized/Photos/monthly_meetings/13.webp" alt="Melbourne Math Circle participants standing together in front of a whiteboard" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>A group photo from one of our monthly meetings.</figcaption></figure>
          <div className="intro-text"><p>We’d introduce a topic, then work through problems together. Students tried their own approaches, and volunteers stopped by to help when someone got stuck.</p></div>
        </div>
        <div className="session-photo-pair">
          <figure><Image src="/optimized/Photos/monthly_meetings/1.webp" alt="A volunteer working through a number theory problem on the board during a library session" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>Number theory instruction during a library session.</figcaption></figure>
          <figure><Image src="/optimized/Photos/monthly_meetings/5.webp" alt="A volunteer helping students with written math problems during a library session" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>Volunteer assistance during a library session.</figcaption></figure>
        </div>
      </section>

      <section className="chapter chapter-mustard game-chapter" id="try-a-problem">
        <div className="game-intro"><h2>Try a game</h2><p className="large-copy">Fifteen counters.<br />Take one, two, or three.<br />Whoever takes the last one wins.</p><p>You move first. After playing a round, try to explain which positions give you a winning move.</p><p className="game-context">Open the hint to see how groups of four determine the strategy.</p></div>
        <CounterGame />
      </section>

      <section className="chapter chapter-paper explore-chapter home-dark">
        <div className="chapter-heading"><h2>Some Math</h2><p>A problem to try, a short read, or a worksheet for later. It’s all in one place.</p></div>
        <nav className="big-index" aria-label="Math materials">
          <Link href="/some-math#topics"><span>Topics &amp; problems</span><span>Explanations and practice with hints</span><ArrowUpRight /></Link>
          <Link href="/some-math#resources"><span>Resources</span><span>Books, handouts, videos, and tools</span><ArrowUpRight /></Link>
          <Link href="/some-math#math-bites"><span>Math Bites</span><span>Short introductions for younger readers</span><ArrowUpRight /></Link>
        </nav>
      </section>

      <section className="chapter chapter-slate community-chapter">
        <div className="chapter-heading"><h2>Community outreach</h2><div><p>We’ve taken puzzles and paper activities to IndiaFest and University Park Elementary. Here are a few photos from those visits.</p><Link href="/gallery" className="text-link">More event photos <ArrowRight size={20} /></Link></div></div>
        <div className="documentary-pair">
          <figure><Image src="/optimized/Photos/IndiaFest/1.webp" alt="Students and families working on math activities around a table at IndiaFest" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>IndiaFest activity table.</figcaption></figure>
          <figure><Image src="/optimized/Photos/university_park/1.webp" alt="Student volunteers discussing a logic puzzle at University Park Elementary, with pupils’ faces covered in the original photo" width={1600} height={900} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>A logic puzzle at University Park Elementary.</figcaption></figure>
          <figure><Image src="/optimized/Photos/IndiaFest/2.webp" alt="Volunteers explaining a paper activity to children at the IndiaFest table" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>A paper activity at IndiaFest.</figcaption></figure>
          <figure><Image src="/optimized/Photos/IndiaFest/3.webp" alt="A student working on a worksheet with a volunteer at IndiaFest" width={1080} height={1080} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>Problem-solving activities at IndiaFest.</figcaption></figure>
        </div>
      </section>

      <section className="chapter chapter-maroon people-chapter">
        <div className="chapter-heading">
          <h2>The team</h2>
          <div className="people-copy">
            <p>We’re students who enjoy math and like sharing it. Between us, we plan activities, visit schools, and help other students work through problems.</p>
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
          <p>Want to help with an activity or school visit? Email Faizan and tell him what you’d like to do.</p>
          <Link href="/volunteers" className="text-link">How to help <ArrowRight size={20} /></Link>
        </div>
      </section>

      <section className="chapter chapter-paper home-questions">
        <h2>Using the website</h2>
        <div className="home-faq-list">
          <details><summary>Where should I start with Some Math?</summary><p><Link href="/some-math#topics">Topics</Link> has guides and problems with hints. <Link href="/some-math#math-bites">Math Bites</Link> has shorter reads for younger students.</p></details>
          <details><summary>What should I do if I get stuck on a problem?</summary><p>Write down what you know and test a small example. Open the hint when you need a starting point, then try the problem again before reading a solution.</p></details>
          <details><summary>How can I report a math error or broken link?</summary><p><Link href="/contact">Send a correction</Link> with the page address and the problem or link that needs attention.</p></details>
        </div>
      </section>


    </HomeMotion>
  );
}
