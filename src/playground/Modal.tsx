"use client";

import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Remember the element that opened the modal
    previousFocus.current = document.activeElement as HTMLElement;

    const modal = modalRef.current;

    if (!modal) return;

    // Find all keyboard-focusable elements inside the modal
    const focusableElements =
      modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

    // Put focus on the first focusable element
    focusableElements[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape closes the modal
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      // Focus trap
      if (event.key === "Tab") {
        const elements =
          modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

        if (elements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        // Shift + Tab
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }

        // Tab
        if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // When the modal closes, return focus to the trigger
  useEffect(() => {
    if (!isOpen) {
      previousFocus.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
      >
        <h2
          id="modal-title"
          className="text-xl font-bold"
        >
          {title}
        </h2>

        <div className="mt-4">
          {children}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 rounded-md border px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}