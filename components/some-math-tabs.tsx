"use client";

import { useEffect, useState, type ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";

type Section = { id: string; title: string; content: ReactNode };

export default function SomeMathTabs({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState("topics");
  useEffect(() => {
    const followHash = () => {
      const hash = window.location.hash.slice(1);
      const next = hash.startsWith("resource-") ? "resources" : hash || "topics";
      if (sections.some(section => section.id === next)) setActive(next);
    };
    followHash();
    window.addEventListener("hashchange", followHash);
    window.addEventListener("popstate", followHash);
    return () => {
      window.removeEventListener("hashchange", followHash);
      window.removeEventListener("popstate", followHash);
    };
  }, [sections]);

  function select(value: string) {
    setActive(value);
    if (window.location.hash !== `#${value}`) {
      window.history.pushState(window.history.state, "", `#${value}`);
    }
  }

  return <Tabs.Root value={active} onValueChange={select} className="some-math-tabs">
    <Tabs.List className="math-tabs-list" aria-label="Some Math sections">
      {sections.map(section => <Tabs.Trigger key={section.id} value={section.id} className="math-tab">{section.title}</Tabs.Trigger>)}
    </Tabs.List>
    {sections.map(section => <Tabs.Content key={section.id} value={section.id} forceMount hidden={active !== section.id} className="math-tab-panel">
      <h2 className="math-panel-title">{section.title}</h2>
      {section.content}
    </Tabs.Content>)}
  </Tabs.Root>;
}
