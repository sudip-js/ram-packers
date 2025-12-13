import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Get in Touch
        </h2>

        <div className="space-y-4 text-sm text-gray-700">
          <p className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <span>
              Office 23, Sector 62, Noida,
              <br />
              Uttar Pradesh, India
            </span>
          </p>

          <p className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <a
              href="tel:+919876543210"
              className="hover:text-primary transition-colors"
            >
              +91 98765 43210
            </a>
          </p>

          <p className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <a
              href="mailto:info@noidamovers.in"
              className="hover:text-primary transition-colors"
            >
              info@noidamovers.in
            </a>
          </p>
        </div>
      </div>

      {/* Map preview */}
      <div className="mt-8 h-[220px] overflow-hidden rounded-xl">
        <iframe
          title="Company Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.35,28.58,77.38,28.62&layer=mapnik"
          className="h-full w-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
