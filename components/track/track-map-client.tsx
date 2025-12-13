"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const truckIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048313.png", // 🟧 Truck icon
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -35],
});

export default function TrackMapClient({ booking }: { booking: any }) {
  if (typeof window === "undefined") return null; // 🛡️ safeguard

  const center = booking.location || { lat: 28.6139, lng: 77.209 };
  const driverName = booking.driver?.name || "Unknown";

  return (
    <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gray-100">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        <Marker position={center} icon={truckIcon}>
          <Tooltip
            permanent
            direction="top"
            offset={[0, -20]}
            className="!bg-transparent !border-none !shadow-none text-[11px] font-semibold text-primary"
          >
            {driverName}
          </Tooltip>
          <Popup>
            <div className="text-sm">
              <p className="font-medium text-gray-800">{driverName}</p>
              <p>ETA: {booking.eta}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <div className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-3 py-2 text-xs shadow-md">
        ETA: <span className="font-semibold text-primary">{booking.eta}</span>
      </div>
    </div>
  );
}
