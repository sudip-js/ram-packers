import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function BottomCTASection() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 text-center text-primary-foreground md:flex-row md:text-left">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-bold md:text-3xl tracking-tight">
              Ready to move with{" "}
              <span className="text-white/95">Ram Packers?</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
              Book trusted packers & movers in just a few clicks — no hidden
              charges, no stress, only smooth shifting.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col gap-3 md:flex-row">
            {/* Primary CTA */}
            <Button
              asChild
              variant="secondary"
              className="rounded-full bg-white text-primary hover:bg-white/90 font-semibold shadow-md"
            >
              <a href="/book">Book Now</a>
            </Button>

            {/* WhatsApp CTA */}
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white text-white hover:bg-white/20 hover:text-white focus-visible:ring-white/40 font-medium"
            >
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
