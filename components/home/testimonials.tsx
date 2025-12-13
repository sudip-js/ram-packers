import SectionHeader from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    location: "Noida → Ghaziabad",
    text: "Super smooth experience. Driver was on time and handled all items carefully.",
  },
  {
    name: "Priya Singh",
    location: "Noida Local Shift",
    text: "Booked in 2 minutes and got constant updates. Very professional and polite staff.",
  },
  {
    name: "Ankit Sharma",
    location: "Noida → Gurgaon",
    text: "Transparent pricing and no hidden charges. Highly recommended for quick moves!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative border-b bg-bgLight py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Real stories from people who trusted us with their move."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="group h-full border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <CardContent className="space-y-4 p-6">
                {/* Stars */}
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm leading-relaxed text-gray-600">
                  “{t.text}”
                </p>

                {/* Author */}
                <div className="pt-2">
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer rating */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            ⭐ Rated <span className="font-semibold text-primary">4.8/5</span>{" "}
            by{" "}
            <span className="font-medium text-gray-900">
              300+ happy customers
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
