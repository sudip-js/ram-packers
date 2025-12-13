"use client";

import { Button } from "@/components/ui/button";
import { Truck, Building2, Package, Repeat } from "lucide-react";
import { useState } from "react";

const options = [
  { id: "local", icon: Truck, label: "Local Move" },
  { id: "intercity", icon: Repeat, label: "Intercity Move" },
  { id: "office", icon: Building2, label: "Office Relocation" },
  { id: "goods", icon: Package, label: "Goods Transport" },
];

export default function StepService({
  onNext,
  onBack,
}: {
  onNext: (data: any) => void;
  onBack: () => void;
}) {
  const [serviceType, setServiceType] = useState("");

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">
        Choose Your Service Type
      </h2>

      <div className="grid gap-3 md:grid-cols-2">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => setServiceType(o.id)}
            className={`flex items-center gap-3 rounded-xl border p-3 transition-all ${
              serviceType === o.id
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary/50"
            }`}
          >
            <o.icon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{o.label}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          className="rounded-full"
          onClick={() => onNext({ serviceType })}
          disabled={!serviceType}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
