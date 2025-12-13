import { Truck } from "lucide-react";

export default function TrackHeader({ booking }: { booking: any }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            Tracking Booking ID:{" "}
            <span className="text-primary">{booking.id}</span>
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            {booking.pickup} → {booking.drop}
          </p>
        </div>
        <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Truck className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
