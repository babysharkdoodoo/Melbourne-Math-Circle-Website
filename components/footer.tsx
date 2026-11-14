import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mmc-footer">
      <div className="footer-columns">
        <div><Link href="/" className="footer-brand">Melbourne<br />Math Circle</Link><p>A chapter of <a href="https://www.orlandomathcircle.org/pages/about-us" target="_blank" rel="noopener noreferrer">Orlando Math Circle</a>.</p></div>
        <nav aria-label="About the circle"><span>The circle</span><Link href="/about">Our story</Link><Link href="/team">Team</Link><Link href="/gallery">Event gallery</Link><Link href="/volunteers">Volunteer</Link><Link href="/for-schools">For schools</Link></nav>
        <nav aria-label="Learning links"><span>Keep exploring</span><Link href="/some-math">Some Math</Link><Link href="/join-us">Join us</Link></nav>
        <div className="footer-contact"><span>Contact</span><a href="mailto:eshan.mmc@orlandomathcircle.org"><strong>Eshan</strong><span>eshan.mmc@<wbr />orlandomathcircle.org</span></a><a href="mailto:faizan@orlandomathcircle.org"><strong>Faizan</strong><span>faizan@<wbr />orlandomathcircle.org</span></a><a href="https://www.instagram.com/melbournemathcircle_omc/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Instagram <ArrowUpRight size={16} /></a><Link href="/contact">Contact form <ArrowUpRight size={16} /></Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Melbourne Math Circle</span></div>
    </footer>
  );
}
