"use client";

import SectionHeader from "@/components/shared/section-header";
import { MapPin, Calculator, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Enter Pickup & Drop",
    desc: "Tell us where to pick and where to deliver.",
  },
  {
    icon: Calculator,
    title: "Get Instant Price",
    desc: "See your estimated fare before you confirm.",
  },
  {
    icon: Truck,
    title: "Driver Picks Up",
    desc: "Our driver reaches on time & loads your goods carefully.",
  },
  {
    icon: CheckCircle2,
    title: "Safe Delivery",
    desc: "Track live & confirm delivery at your destination.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative border-b bg-white py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          title="How It Works"
          subtitle="Simple, transparent, and efficient — from booking to delivery."
        />

        {/* Timeline layout */}
        <div className="relative mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-0">
          {/* Connecting line */}
          <div className="absolute left-[24px] top-[40px] h-[calc(100%-60px)] w-[2px] bg-primary/30 md:left-0 md:top-1/2 md:h-[2px] md:w-full md:-translate-y-1/2" />

          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="relative z-10 flex flex-col items-start text-left md:w-1/4 md:items-center md:text-center"
            >
              {/* Icon circle */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md">
                <s.icon className="h-5 w-5" />
              </div>

              {/* Step Number */}
              <div className="mt-3 text-xs font-semibold text-primary">
                Step {idx + 1}
              </div>

              {/* Title */}
              <h3 className="mt-1 text-sm font-semibold text-gray-900">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-1 max-w-[240px] text-xs text-gray-600 md:mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
