"use client";

import FaqItem from "./faq-item";

const faqData = [
  {
    question: "How can I book a move with Noida Movers?",
    answer:
      "You can easily book a move through our website. Enter your pickup and drop location, select vehicle type, and confirm your booking in just a few clicks.",
  },
  {
    question: "Do you provide interstate moving services?",
    answer:
      "Yes! We handle both within-city and interstate goods transportation safely and efficiently across India.",
  },
  {
    question: "How are moving charges calculated?",
    answer:
      "Our charges depend on the distance, type of goods, and vehicle selected. You’ll get an instant cost estimate before confirming the booking.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes, our team offers high-quality packing materials and can assist with packing and unpacking services as needed.",
  },
  {
    question: "Is my shipment insured?",
    answer:
      "Yes, all our moves are insured. We ensure the safety of your goods during transit with proper coverage options.",
  },
  {
    question: "Can I track my shipment live?",
    answer:
      "Absolutely! Once your booking is confirmed, you can track your shipment live through our website’s tracking page.",
  },
];

export default function FaqList() {
  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <FaqItem key={index} {...item} />
      ))}
    </div>
  );
}
