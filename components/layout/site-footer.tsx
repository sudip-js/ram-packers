import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary font-bold">
                NM
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Noida Movers
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Fast & secure packers and movers service in Noida & across India.
              We deliver your trust with every move — safe, on-time, and
              stress-free.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-[15px] text-white/90">
              {[
                { label: "About Us", href: "/about" },
                { label: "FAQs", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      relative inline-block 
                      transition-all duration-300 
                      hover:text-white
                      after:absolute after:left-0 after:-bottom-[2px]
                      after:h-[1.5px] after:w-0 
                      after:bg-white after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-[15px] text-white/90">
              {[
                "Local Shifting",
                "Intercity Moving",
                "Office Relocation",
                "Goods Transport",
              ].map((item) => (
                <li
                  key={item}
                  className="relative transition-all duration-300 hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-[15px] text-white/90">
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/25 transition-all duration-300">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="max-w-[220px] leading-snug">
                  Office 23, Sector 62, Noida, Uttar Pradesh, India
                </span>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/25 transition-all duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white font-medium transition-all duration-300 hover:translate-x-[2px]"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/25 transition-all duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a
                  href="mailto:info@noidamovers.in"
                  className="hover:text-white font-medium transition-all duration-300 hover:translate-x-[2px]"
                >
                  info@noidamovers.in
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-5 flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
              ].map(({ icon: Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="
                    flex h-9 w-9 items-center justify-center rounded-full 
                    bg-white text-primary shadow-md 
                    transition-all duration-300 
                    hover:scale-110 hover:shadow-lg hover:bg-gray-100
                  "
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/25"></div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-sm text-white/90 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Noida Movers</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
