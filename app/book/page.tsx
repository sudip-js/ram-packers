// app/book/page.tsx
"use client";

import { useState } from "react";
import ProgressBar from "@/components/book/progress-bar";
import StepAddress from "@/components/book/step-address";
import StepService from "@/components/book/step-service";
import StepSummary from "@/components/book/step-summary";
import StepVehicle from "@/components/book/step-vehicle";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    serviceType: "",
    vehicleType: "",
    helpers: false,
  });

  function nextStep(data?: any) {
    setFormData({ ...formData, ...data });
    setStep((s) => Math.min(s + 1, 4));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
  }

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl text-center">
          Book Your Move
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Complete these quick steps to confirm your booking.
        </p>

        <ProgressBar step={step} />

        <div className="mt-8 rounded-2xl border bg-bgLight p-5 shadow-sm">
          {step === 1 && <StepAddress onNext={nextStep} />}
          {step === 2 && <StepService onNext={nextStep} onBack={prevStep} />}
          {step === 3 && <StepVehicle onNext={nextStep} onBack={prevStep} />}
          {step === 4 && <StepSummary data={formData} onBack={prevStep} />}
        </div>
      </div>
    </section>
  );
}
