"use client";

import dynamic from "next/dynamic";

const TrackMapClient = dynamic(() => import("./track-map-client"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[350px] items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-500">
      Loading map...
    </div>
  ),
});

export default function TrackMap({ booking }: { booking: any }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-800 mb-3">
        Live Location
      </h2>
      <TrackMapClient booking={booking} />
    </div>
  );
}
