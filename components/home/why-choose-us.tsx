"use client";

import SectionHeader from "@/components/shared/section-header";
import { ShieldCheck, Timer, IndianRupee, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Timer,
    title: "On-Time Every Time",
    desc: "We value your time — all pickups and deliveries are precisely scheduled.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Insured",
    desc: "Every move is fully insured and handled by trained professionals.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Instant quotes, no hidden charges, and complete price transparency.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Call or WhatsApp us anytime — we’re always available to help.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/50 to-white" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left Text Content */}
          <div className="text-center mx-auto max-w-2xl">
            <SectionHeader
              title="Why Choose Noida Movers?"
              subtitle="We go beyond moving your goods — we move your trust with care and precision."
            />
            <p className="mt-4 text-sm text-gray-600">
              Our experienced drivers and moving experts ensure a seamless
              experience from start to finish. Whether it’s within the city or
              across states, we deliver reliability and peace of mind.
            </p>

            <Button className="mt-6 rounded-full bg-primary text-white hover:bg-primary/90">
              Get a Free Estimate
            </Button>
          </div>

          {/* Right Features List */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-[2px]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
