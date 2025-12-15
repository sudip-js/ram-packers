"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Truck } from "lucide-react"; // 🚛 Added Truck icon
import { useState } from "react";
import { usePathname } from "next/navigation";
import { businessConfig } from "@/config/business";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
    { label: "Track Booking", href: "/track" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // 🔹 Extract config data
  const { name, tagline } = businessConfig;

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* 🔸 Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
            <Truck className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold">{name}</span>
            <span className="text-xs text-gray-500">{tagline}</span>
          </div>
        </Link>

        {/* 🔸 Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book">
            <Button className="rounded-full px-5 bg-primary text-white hover:bg-primary/90">
              Book Now
            </Button>
          </Link>
        </nav>

        {/* 🔸 Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md border px-2 py-1 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* 🔸 Mobile Navigation */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book" onClick={() => setOpen(false)}>
              <Button className="mt-1 w-full rounded-full bg-primary text-white hover:bg-primary/90">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
