"use client";

import { useId, useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const id = useId();

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    }

    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (event.key === "Home") {
      nextIndex = 0;
    }

    if (event.key === "End") {
      nextIndex = tabs.length - 1;
    }

    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowLeft" ||
      event.key === "Home" ||
      event.key === "End"
    ) {
      event.preventDefault();

      setActiveTab(nextIndex);

      const nextTab = document.getElementById(
        `${id}-tab-${nextIndex}`
      );

      nextTab?.focus();
    }
  };

  const activePanel = `${id}-panel-${activeTab}`;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Example tabs"
        className="flex border-b"
      >
        {tabs.map((tab, index) => {
          const tabId = `${id}-tab-${index}`;
          const panelId = `${id}-panel-${index}`;

          return (
            <button
              key={tab.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={panelId}
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => setActiveTab(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="px-4 py-2"
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={activePanel}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${activeTab}`}
        tabIndex={0}
        className="p-4"
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}