"use client";

import { useId, useState } from "react";

type DisclosureProps = {
  title: string;
  children: React.ReactNode;
};

export default function Disclosure({
  title,
  children,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  const contentId = `${id}-content`;

  return (
    <div className="w-full max-w-lg">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between rounded-md border p-4 text-left"
      >
        <span>{title}</span>

        <span aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div
          id={contentId}
          className="border-x border-b p-4"
        >
          {children}
        </div>
      )}
    </div>
  );
}