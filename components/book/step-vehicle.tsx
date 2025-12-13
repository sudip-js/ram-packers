"use client";

import { Button } from "@/components/ui/button";
import { Truck, Car, Bus } from "lucide-react";
import { useState } from "react";

const vehicles = [
  { id: "mini", icon: Car, label: "Mini Truck", price: 800 },
  { id: "tempo", icon: Truck, label: "Tata Ace", price: 1200 },
  { id: "truck", icon: Bus, label: "Large Truck", price: 2000 },
];

export default function StepVehicle({
  onNext,
  onBack,
}: {
  onNext: (data: any) => void;
  onBack: () => void;
}) {
  const [vehicleType, setVehicleType] = useState("");

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">
        Select Your Vehicle Type
      </h2>

      <div className="grid gap-3 md:grid-cols-3">
        {vehicles.map((v) => (
          <button
            key={v.id}
            onClick={() => setVehicleType(v.id)}
            className={`flex flex-col items-center rounded-xl border p-4 transition-all ${
              vehicleType === v.id
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary/50"
            }`}
          >
            <v.icon className="h-6 w-6 text-primary" />
            <span className="mt-2 text-sm font-medium">{v.label}</span>
            <span className="text-xs text-gray-600">₹{v.price} onwards</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          className="rounded-full"
          onClick={() => onNext({ vehicleType })}
          disabled={!vehicleType}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
