"use client";

import { businessConfig } from "@/config/business";
import { Check } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const { name, owner, address } = businessConfig;

  return (
    <section className="min-h-[80vh] bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* 🔹 Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            About <span className="text-primary">{name}</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm max-w-2xl mx-auto">
            {name} is a trusted Packers & Movers company based in {address.city}
            , {address.state}. We help individuals and businesses relocate
            safely and seamlessly across India with complete care and
            professionalism.
          </p>
        </div>

        {/* 🔹 Company Story */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Our Journey
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-700">
              Founded by <strong>{owner}</strong> in 2023,{" "}
              <strong>{name}</strong> began with a simple vision — to make
              shifting homes and offices an effortless and stress-free process
              for everyone. Starting from a small operation in {address.city},{" "}
              we have grown into one of the most reliable and customer-focused
              moving service providers in {address.state}.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
              With our commitment to punctuality, safety, and transparency,{" "}
              {name} has helped hundreds of families and businesses relocate
              without hassle. Our goal isn’t just to move goods — it’s to move
              lives forward, one safe journey at a time.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[280px] md:h-[350px]">
              <Image
                src="/images/our-journey.png"
                alt={`${name} Team`}
                fill
                priority
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* 🔹 Mission Section */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md h-[280px] md:h-[350px]">
              <Image
                src="/images/our-mission.png"
                alt="Our Mission"
                fill
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Our Mission
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-700">
              At <strong>{name}</strong>, our mission is to make every move
              smooth, secure, and stress-free — whether you’re shifting your
              home, office, or warehouse. We believe in delivering an honest,
              efficient, and tech-driven logistics experience for every
              customer.
            </p>
            <ul className="mt-4 space-y-3 text-[15px] text-gray-700">
              {[
                "Ensuring safe and timely delivery of goods.",
                "Providing affordable and transparent pricing.",
                "Offering high-quality packaging and professional handling.",
                "Leveraging modern tools for live tracking & updates.",
                "Building long-term trust with every customer.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-[2px] h-5 w-5 text-primary shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔹 Why Choose Us */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Why Choose {name}
          </h2>
          <p className="text-[15px] text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choosing {name} means choosing reliability, care, and transparency.
            From packing to transport and delivery, our trained professionals
            ensure your belongings are moved safely and efficiently.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Professional Staff",
                desc: "Our trained and experienced movers handle every item with utmost care and precision.",
              },
              {
                title: "Affordable Pricing",
                desc: "Transparent and competitive pricing with no hidden costs.",
              },
              {
                title: "Real-Time Tracking",
                desc: "Monitor your shipment live from pickup to delivery.",
              },
              {
                title: "Pan-India Coverage",
                desc: "From Noida to any city across India, we’ve got you covered.",
              },
              {
                title: "Secure Packaging",
                desc: "Premium packing materials ensure your items stay safe in transit.",
              },
              {
                title: "24/7 Support",
                desc: "Our support team is always available for updates or assistance.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-50 p-6 text-left shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-base font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Ready to plan your move?
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Contact <strong>{name}</strong> today for a free quote and enjoy a
            hassle-free relocation experience.
          </p>
          <a
            href="/book"
            className="inline-block mt-4 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
