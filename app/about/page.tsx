import { Check } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-[80vh] bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            About <span className="text-primary">Noida Movers</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm max-w-2xl mx-auto">
            A trusted Packers & Movers company helping individuals and
            businesses move seamlessly across Noida and all over India.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Our Journey
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-700">
              Founded in 2023, <strong>Noida Movers</strong> started with a
              single vision — to make shifting easy, safe, and stress-free for
              everyone. What began as a small one-truck operation has now grown
              into one of Noida’s most trusted logistics and moving partners.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
              With our commitment to professionalism, punctuality, and customer
              satisfaction, we have helped thousands of families and businesses
              relocate without hassle. Our goal is not just to move goods, but
              to move lives forward — securely and smoothly.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[280px] md:h-[350px]">
              <Image
                src="/images/our-journey.png"
                alt="Noida Movers Team"
                fill
                priority
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md h-[280px] md:h-[350px]">
              <Image
                src="/images/our-mission.png"
                alt="Mission"
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
              At <strong>Noida Movers</strong>, our mission is to simplify the
              moving process for every customer — whether it’s a home, office,
              or industrial shift. We focus on delivering a transparent,
              efficient, and technology-driven experience for all logistics
              needs.
            </p>
            <ul className="mt-4 space-y-3 text-[15px] text-gray-700">
              {[
                "Ensuring safe and timely delivery of goods.",
                "Providing affordable and transparent pricing.",
                "Leveraging modern tools for live tracking & updates.",
                "Building long-term trust with our customers.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-[2px] h-5 w-5 text-primary shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Why Choose Noida Movers
          </h2>
          <p className="text-[15px] text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We’re not just another moving company — we’re your trusted logistics
            partner. From the moment you book your move until the final box is
            placed, our dedicated team ensures every detail is handled with
            care.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Professional Staff",
                desc: "Trained and experienced movers who handle your belongings with utmost care.",
              },
              {
                title: "Affordable Pricing",
                desc: "Clear and competitive rates with no hidden charges.",
              },
              {
                title: "Real-Time Tracking",
                desc: "Track your shipment live from pickup to delivery.",
              },
              {
                title: "Pan-India Service",
                desc: "Covering both local and interstate moving operations.",
              },
              {
                title: "Secure Packaging",
                desc: "We use the best quality materials to keep your items safe.",
              },
              {
                title: "24/7 Support",
                desc: "Our customer support team is always here to help.",
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Ready to plan your move?
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Contact us today for a free quote and enjoy a hassle-free
            experience.
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
