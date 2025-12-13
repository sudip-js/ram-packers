"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, MapPin, Truck, Package, Home } from "lucide-react";

const statuses = [
  {
    id: "booked",
    label: "Booked",
    icon: CheckCircle2,
    time: "2025-12-13T09:15:00Z",
  },
  {
    id: "assigned",
    label: "Driver Assigned",
    icon: Truck,
    time: "2025-12-13T09:30:00Z",
  },
  {
    id: "pickup",
    label: "Picked Up",
    icon: Package,
    time: "2025-12-13T10:00:00Z",
  },
  {
    id: "enroute",
    label: "En Route",
    icon: MapPin,
    time: "2025-12-13T10:20:00Z",
  },
  {
    id: "delivered",
    label: "Delivered",
    icon: Home,
    time: "",
  },
];

export default function TrackStatusTimeline({
  currentStatus,
}: {
  currentStatus: string;
}) {
  const currentIndex = statuses.findIndex((s) => s.id === currentStatus);
  const [formattedTimes, setFormattedTimes] = useState<{
    [key: string]: string;
  }>({});

  // 🧩 Format times only in client (no SSR mismatch)
  useEffect(() => {
    const newTimes: { [key: string]: string } = {};
    statuses.forEach((s) => {
      if (!s.time) return;
      const date = new Date(s.time);
      const now = new Date();
      const isToday = date.toDateString() === now.toDateString();

      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = ((hours + 11) % 12) + 1; // 12h format

      const dayLabel = isToday
        ? "Today"
        : date.toLocaleDateString(undefined, {
            day: "numeric",
            month: "short",
          });

      newTimes[s.id] = `${dayLabel}, ${displayHours}:${minutes} ${ampm}`;
    });
    setFormattedTimes(newTimes);
  }, []);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-800 mb-3">
        Delivery Status
      </h2>
      <div className="relative border-l-2 border-gray-200 ml-3">
        {statuses.map((s, i) => {
          const isDone = i <= currentIndex;
          const Icon = s.icon;

          return (
            <div key={s.id} className="relative pl-6 pb-6 last:pb-0">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[11px] top-0 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  isDone
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                <Icon className="h-3 w-3" />
              </div>

              {/* Label + time */}
              <div>
                <p
                  className={`text-sm font-medium ${
                    isDone ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {s.label}
                </p>
                <p
                  className={`text-xs ${
                    isDone ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {isDone ? formattedTimes[s.id] || "—" : "Pending"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
