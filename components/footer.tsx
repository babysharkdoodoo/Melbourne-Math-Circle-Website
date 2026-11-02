import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mmc-footer">
      <div className="footer-columns">
        <div><Link href="/" className="footer-brand">Melbourne<br />Math Circle</Link><p>A chapter of <a href="https://www.orlandomathcircle.org/pages/about-us" target="_blank" rel="noopener noreferrer">Orlando Math Circle</a>.</p></div>
        <nav aria-label="About the circle"><span>The circle</span><Link href="/about">Our story</Link><Link href="/team">The people</Link><Link href="/gallery">In pictures</Link><Link href="/volunteers">Volunteer</Link><Link href="/for-schools">For schools</Link></nav>
        <nav aria-label="Learning links"><span>The math</span><Link href="/topics">Topics &amp; problems</Link><Link href="/resources">Resources</Link><Link href="/math-bites">Math Bites</Link><Link href="/printable-activities">Printable activities</Link><Link href="/study-plans">Study plans</Link><Link href="/join-us">Join us</Link></nav>
        <div className="footer-contact"><span>Contact</span><a href="mailto:eshan.mmc@orlandomathcircle.org">eshan.mmc@<wbr />orlandomathcircle.org</a><a href="https://www.instagram.com/melbournemathcircle_omc/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Instagram <ArrowUpRight size={16} /></a><Link href="/contact">Contact form <ArrowUpRight size={16} /></Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Melbourne Math Circle</span></div>
    </footer>
  );
}
