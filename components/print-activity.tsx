"use client";

import { useState } from "react";
import { Printer } from "lucide-react";

export default function PrintActivity({ answers }: { answers: string[] }) {
  const [showAnswers, setShowAnswers] = useState(false);
  return <>
    <div className="worksheet-controls">
      <button type="button" className="nav-button" onClick={() => window.print()}><Printer size={18} aria-hidden="true" />Print {showAnswers ? "worksheet and answers" : "worksheet"}</button>
      <button type="button" className="text-link" aria-expanded={showAnswers} aria-controls="worksheet-answers" onClick={() => setShowAnswers(!showAnswers)}>{showAnswers ? "Hide answer key" : "Show answer key"}</button>
      <p>Print this sheet or save it as a PDF. Want the answers too? Show the answer key before printing.</p>
    </div>
    {showAnswers && <section id="worksheet-answers" className="worksheet-answers"><h2>Answer key</h2><ol>{answers.map(answer => <li key={answer}>{answer}</li>)}</ol></section>}
  </>;
}
