"use client";

import { businessConfig } from "@/config/business";
import FaqItem from "./faq-item";

export default function FaqList() {
  const { name, address } = businessConfig;

  const faqData = [
    {
      question: `How can I book a move with ${name}?`,
      answer: `You can easily book your move through our website or by contacting us on WhatsApp. Just enter your pickup and drop location, choose the vehicle type, and confirm your booking in a few simple steps. Our team in ${address.city} will take care of the rest.`,
    },
    {
      question: "Do you provide interstate moving services?",
      answer: `${name} handles both local and interstate relocations safely and efficiently across India. Whether you’re shifting within ${address.city} or to another state, we ensure a hassle-free experience.`,
    },
    {
      question: "How are moving charges calculated?",
      answer:
        "Our charges depend on multiple factors — the distance between locations, the type and volume of goods, and the vehicle size. You’ll receive a transparent cost estimate before confirming your booking.",
    },
    {
      question: "Do you provide packing materials?",
      answer:
        "Yes, our professional team provides high-quality packing materials and can assist with complete packing and unpacking services to ensure maximum safety of your belongings.",
    },
    {
      question: "Is my shipment insured?",
      answer:
        "Absolutely. Every move is covered under transit insurance options, so your goods remain protected against any accidental damage or loss during transportation.",
    },
    {
      question: "Can I track my shipment live?",
      answer:
        "Yes! Once your booking is confirmed, you’ll receive a tracking ID that lets you monitor your shipment status live through our website’s tracking page or via customer support.",
    },
    {
      question: "Do you offer doorstep service in Noida?",
      answer: `${name} provides complete doorstep pickup and delivery services across Noida, ${address.state}, and nearby areas. Our team reaches your location on time and handles everything from loading to unloading.`,
    },
  ];

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <FaqItem key={index} {...item} />
      ))}
    </div>
  );
}
