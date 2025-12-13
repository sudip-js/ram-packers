// components/layout/site-header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 🔍 get current route

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

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-semibold">
            RP
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold">Ram Packers</span>
            <span className="text-xs text-gray-500">Packers & Movers</span>
          </div>
        </Link>

        {/* Desktop Nav */}
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
            <Button className="rounded-full px-5">Book Now</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md border px-2 py-1 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Nav */}
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
              <Button className="mt-1 w-full rounded-full">Book Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
