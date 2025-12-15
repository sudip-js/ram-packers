"use client";

import { useParams } from "next/navigation";
import TrackActions from "@/components/track/track-actions";
import TrackHeader from "@/components/track/track-header";
import TrackMap from "@/components/track/track-map";
import TrackStatusTimeline from "@/components/track/track-status-timeline";
import { businessConfig } from "@/config/business";

export default function TrackPage() {
  const params = useParams();
  const bookingId = params?.bookingId || "RP-251215";

  // 🧭 Dynamic business details
  const { name, owner, contact, address } = businessConfig;

  const booking = {
    id: bookingId,
    pickup: `${address.line1}, ${address.city}`,
    drop: "Ghaziabad, Uttar Pradesh",
    vehicle: "Tata 407",
    driver: {
      name: owner,
      phone: contact.phone,
    },
    eta: "40 mins",
    status: "enroute",
    // Approx coordinates for Noida Sector 2
    location: { lat: 28.583, lng: 77.318 },
  };

  return (
    <section className="min-h-[80vh] bg-bgLight py-10">
      <div className="mx-auto max-w-5xl px-4">
        <TrackHeader booking={booking} />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1 space-y-6">
            <TrackStatusTimeline currentStatus={booking.status} />
            <TrackActions driver={booking.driver} />
          </div>
          <div className="md:col-span-2">
            <TrackMap booking={booking} />
          </div>
        </div>
      </div>
    </section>
  );
}
