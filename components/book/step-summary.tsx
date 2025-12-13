"use client";

import { Button } from "@/components/ui/button";

export default function StepSummary({
  data,
  onBack,
}: {
  data: any;
  onBack: () => void;
}) {
  const estimate =
    data.vehicleType === "mini"
      ? 800
      : data.vehicleType === "tempo"
      ? 1200
      : 2000;

  return (
    <div className="space-y-5">
      <h2 className="text-lg font-medium text-gray-900">
        Review & Confirm Your Booking
      </h2>

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
          <p className="font-medium">Pickup:</p>
          <p>{data.pickup}</p>

          <p className="font-medium">Drop:</p>
          <p>{data.drop}</p>

          <p className="font-medium">Date:</p>
          <p>{data.date}</p>

          <p className="font-medium">Service:</p>
          <p className="capitalize">{data.serviceType}</p>

          <p className="font-medium">Vehicle:</p>
          <p className="capitalize">{data.vehicleType}</p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-primary/10 px-4 py-3">
        <span className="text-sm font-medium text-gray-700">
          Estimated Fare
        </span>
        <span className="text-lg font-semibold text-primary">₹{estimate}</span>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button className="rounded-full">Confirm & Pay</Button>
      </div>
    </div>
  );
}
