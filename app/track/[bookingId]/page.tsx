"use client";

import { useParams } from "next/navigation";
import TrackActions from "@/components/track/track-actions";
import TrackHeader from "@/components/track/track-header";
import TrackMap from "@/components/track/track-map";
import TrackStatusTimeline from "@/components/track/track-status-timeline";

export default function TrackPage() {
  const params = useParams(); // ✅ client hook
  const bookingId = params?.bookingId || "NM-230912";

  const booking = {
    id: bookingId,
    pickup: "Sector 62, Noida",
    drop: "Gurugram, Haryana",
    vehicle: "Tata Ace",
    driver: {
      name: "Kamlesh Kumar",
      phone: "+91-98xxxxxx00",
    },
    eta: "35 mins",
    status: "enroute",
    // 👇 Add coordinates (Noida example)
    location: { lat: 28.628, lng: 77.364 },
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
