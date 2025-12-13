// app/page.tsx

import BottomCTASection from "@/components/home/bottom-cta";
import HeroSection from "@/components/home/hero";
import HowItWorksSection from "@/components/home/how-it-works";
import ServicesSection from "@/components/home/services";
import TestimonialsSection from "@/components/home/testimonials";
import WhyChooseUsSection from "@/components/home/why-choose-us";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <BottomCTASection />
      <TestimonialsSection />
      <HowItWorksSection />
    </>
  );
}
