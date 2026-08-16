"use client";

import { useState } from "react";
import Modal from "@/playground/Modal";
import Tabs from "@/playground/Tabs";
import Disclosure from "@/playground/Disclosure";

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      id: "account",
      label: "Account",
      content: <p>This is the account content.</p>,
    },
    {
      id: "security",
      label: "Security",
      content: <p>This is the security content.</p>,
    },
    {
      id: "notifications",
      label: "Notifications",
      content: <p>This is the notifications content.</p>,
    },
  ];

  return (
    <main className="space-y-12 p-8">
      <h1 className="text-3xl font-bold">
        Accessibility Playground
      </h1>

      {/* Modal */}
      <section>
        <h2 className="mb-4 text-xl font-bold">
          Modal
        </h2>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-black px-4 py-2 text-white"
        >
          Open Modal
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
        >
          <p className="mb-4">
            This modal was built from scratch.
          </p>

          <label className="block">
            Your name
            <input
              type="text"
              className="mt-1 block w-full rounded border p-2"
            />
          </label>

          <button
            type="button"
            className="mt-4 rounded-md bg-black px-4 py-2 text-white"
          >
            Submit
          </button>
        </Modal>
      </section>

      {/* Tabs */}
      <section>
        <h2 className="mb-4 text-xl font-bold">
          Tabs
        </h2>

        <Tabs tabs={tabs} />
      </section>

      {/* Disclosure */}
      <section>
        <h2 className="mb-4 text-xl font-bold">
          Disclosure
        </h2>

        <Disclosure title="What is Next.js?">
          <p>
            Next.js is a React framework for building
            web applications.
          </p>
        </Disclosure>
      </section>
    </main>
  );
}