"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl bg-white shadow-sm p-5 cursor-pointer transition-all hover:shadow-md"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 transform text-primary transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {open && (
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}
