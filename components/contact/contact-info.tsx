import { businessConfig } from "@/config/business";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  const { name, contact, address } = businessConfig;

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Get in Touch
        </h2>

        <div className="space-y-4 text-sm text-gray-700">
          {/* Address */}
          <p className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <span>
              {address.line1}, {address.city},
              <br />
              {address.state}, {address.country} – {address.postalCode}
            </span>
          </p>

          {/* Phone */}
          <p className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <a
              href={`tel:${contact.phone}`}
              className="hover:text-primary transition-colors"
            >
              {contact.phone}
            </a>
          </p>

          {/* Email */}
          <p className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-primary transition-colors"
            >
              {contact.email}
            </a>
          </p>
        </div>
      </div>

      {/* Map preview */}
      <div className="mt-8 h-[220px] overflow-hidden rounded-xl">
        <iframe
          title={`${name} Location`}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=77.31,28.57,77.37,28.63&layer=mapnik&marker=28.60,77.34`}
          className="h-full w-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
