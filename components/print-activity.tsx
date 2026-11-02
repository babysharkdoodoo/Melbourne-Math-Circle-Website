"use client";

import { useState } from "react";
import { Printer } from "lucide-react";

export default function PrintActivity({ answers }: { answers: string[] }) {
  const [showAnswers, setShowAnswers] = useState(false);
  return <>
    <div className="worksheet-controls">
      <button className="nav-button" onClick={() => window.print()}><Printer size={18} aria-hidden="true" />Print {showAnswers ? "worksheet and answers" : "worksheet"}</button>
      <button className="text-link" aria-expanded={showAnswers} aria-controls="worksheet-answers" onClick={() => setShowAnswers(!showAnswers)}>{showAnswers ? "Hide answer key" : "Show answer key"}</button>
      <p>Use your browser’s print dialog to print or save as a PDF. Show the answer key first to include it.</p>
    </div>
    {showAnswers && <section id="worksheet-answers" className="worksheet-answers"><h2>Answer key</h2><ol>{answers.map(answer => <li key={answer}>{answer}</li>)}</ol></section>}
  </>;
}
