"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
const questions = [
 {q:"What should I include in a school outreach request?",a:"Include the school’s name, the students’ age group, and the activity or topic you have in mind. If you have a preferred date or format, include that too."},
 {q:"Can I report a problem with the website?",a:"Send the page address and describe what happened. For a math correction, include the problem statement and the step that needs attention."},
 {q:"Can I suggest a Math Bites topic?",a:"Yes. Describe the question you would like an article to answer and the age group it would be written for."}
];
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", hidden: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (form.hidden.trim() !== "") { setErrorMsg("Spam detected."); return; }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await res.json();
      if (result.success) { setStatus("success"); setForm({ name: "", email: "", subject: "", message: "", hidden: "" }); }
      else { setStatus("error"); setErrorMsg(result.error || "Submission failed."); }
    } catch { setStatus("error"); setErrorMsg("Network error. Try again later."); }
  };

 return <PageShell className="contact-page">
  <PageHero title="Contact us"><p>Send school outreach requests, questions about the chapter, or website corrections.</p></PageHero>
  <section className="nav-section contact-layout">
   <div><h2>Send a message</h2>{status === "success" ? <div role="status"><h3>Message sent</h3><p>Thank you. The team will reply by email.</p></div> : <form onSubmit={handleSubmit} className="contact-form">
    <input type="text" name="hidden" value={form.hidden} onChange={handleChange} style={{display:"none"}} autoComplete="off" tabIndex={-1}/>
    <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name"/></div>
    <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@domain.com"/></div>
    <div className="field"><label htmlFor="subject">Subject</label><input id="subject" name="subject" required value={form.subject} onChange={handleChange} placeholder="Subject"/></div>
    <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Your message"/></div>
    {errorMsg && <p role="alert">{errorMsg}</p>}<button type="submit" className="nav-button" disabled={status === "submitting"}><Send size={17}/>{status === "submitting" ? "Sending…" : "Send Message"}</button>
   </form>}</div>
   <aside className="contact-address" data-motion><h2>Email</h2><a href="mailto:eshan.mmc@orlandomathcircle.org">eshan.mmc@orlandomathcircle.org</a><p>Melbourne, Florida<br/>A chapter of Orlando Math Circle.</p></aside>
  </section>
  <section className="nav-section contact-questions"><h2>Common questions</h2>{questions.map(item=><details key={item.q} data-motion><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
 </PageShell>;
}
