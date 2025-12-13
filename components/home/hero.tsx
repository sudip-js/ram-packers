"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  pickup: z.string().min(3, "Pickup location is required"),
  drop: z.string().min(3, "Drop location is required"),
  date: z.string().min(1, "Please select a moving date"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function HeroSection() {
  const router = useRouter();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      pickup: "",
      drop: "",
      date: "",
    },
  });

  const handleQuoteSubmit = (data: QuoteFormValues) => {
    const params = new URLSearchParams(data);
    router.push(`/book?${params.toString()}`);
  };

  // 🔴 consistent red border style if validation fails
  const errorClass =
    "border-destructive focus-visible:ring-destructive bg-red-50/30 placeholder:text-red-400";

  return (
    <section className="border-b bg-bgLight">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:py-16">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <motion.h1
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shift Anything, Anywhere.
            <span className="block text-primary">
              Book Your Move Instantly.
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Fast, reliable packers & movers in Noida and across India. Get
            instant pricing, live tracking, and a dedicated driver for your
            move.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-3 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Same-day local moves available
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-foreground shadow-sm">
              ⭐ 4.8/5 rated by 300+ customers
            </span>
          </motion.div>

          {/* ✅ Quote form with validation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleQuoteSubmit)}
                className="mt-4 space-y-3 rounded-2xl bg-white p-4 shadow-lg md:p-5"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  {/* Pickup */}
                  <FormField
                    control={form.control}
                    name="pickup"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-muted-foreground">
                          Pickup Location
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Ex: Sector 62, Noida"
                              className={cn(
                                "pl-8",
                                form.formState.errors.pickup && errorClass
                              )}
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Drop */}
                  <FormField
                    control={form.control}
                    name="drop"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-muted-foreground">
                          Drop Location
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Ex: Gurugram, Haryana"
                              className={cn(
                                "pl-8",
                                form.formState.errors.drop && errorClass
                              )}
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Date + CTA */}
                  <div className="space-y-1 md:col-span-2 md:flex md:items-end md:gap-3">
                    <div className="flex-1">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-medium text-muted-foreground">
                              Moving Date
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <CalendarDays className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  type="date"
                                  className={cn(
                                    "pl-8",
                                    form.formState.errors.date && errorClass
                                  )}
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="mt-3 flex flex-col gap-2 md:mt-0 md:w-44">
                      <Button
                        type="submit"
                        className="w-full rounded-full font-semibold"
                      >
                        Get Estimate
                      </Button>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-primary/30 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/5"
                      >
                        Or Chat on WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </motion.div>

          {/* Call */}
          <motion.div
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            <Phone className="h-4 w-4 text-primary" />
            Need help? Call us at
            <span className="font-semibold text-primary">+91-98xxxxxx00</span>
          </motion.div>
        </div>

        {/* Right Card (unchanged) */}
        <motion.div
          className="mt-8 flex flex-1 items-center justify-center md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <div className="relative h-64 w-full max-w-sm md:h-80">
            <div className="absolute inset-0 rounded-3xl bg-primary shadow-xl" />

            <div className="absolute inset-4 flex flex-col justify-between rounded-3xl bg-white p-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Live Trip Snapshot
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Noida ➝ Delhi
                </p>
                <p className="text-xs text-muted-foreground">ETA: 35 mins</p>
              </div>

              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-2/3 rounded-full bg-primary" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Real-time tracking & status updates.
                </p>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-bgLight px-3 py-2">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Today&apos;s Trips
                  </p>
                  <p className="text-sm font-semibold text-foreground">12</p>
                </div>
                <p className="text-xs font-medium text-green-600">
                  100% on-time
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
