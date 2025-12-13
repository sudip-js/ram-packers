import { Truck, Package, Building2, Repeat } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/section-header";

const services = [
  {
    icon: Truck,
    title: "Local Shifting",
    desc: "Same-day moves within Noida & nearby areas.",
  },
  {
    icon: Repeat,
    title: "Intercity Moving",
    desc: "Safe transport between cities across India.",
  },
  {
    icon: Building2,
    title: "Office Relocation",
    desc: "Planned office moves with minimal downtime.",
  },
  {
    icon: Package,
    title: "Goods Transport",
    desc: "Single item to full-load commercial deliveries.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="border-b bg-bgLight py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          title="Our Services"
          subtitle="Choose the right service for your move. We handle everything from small items to full house shifting."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group h-full border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader className="p-5 pb-0">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-3 text-base font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {service.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-5 pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-primary/30 text-xs text-primary hover:bg-primary hover:text-white"
                >
                  Book {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
