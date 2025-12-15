"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarDays, MapPin, Phone, Truck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, addMonths } from "date-fns";
import { WhatsAppButton } from "../shared/whats-app-button";

const quoteSchema = z.object({
  pickup: z.string().min(3, "Pickup location is required"),
  drop: z.string().min(3, "Drop location is required"),
  date: z.date({ required_error: "Please select a moving date" }),
  vehicle: z.string().min(1, "Please choose a vehicle"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function HeroSection() {
  const [estimate, setEstimate] = useState<{
    distance: number;
    price: number;
    vehicle: string;
  } | null>(null);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { pickup: "", drop: "", date: new Date(), vehicle: "" },
  });

  const handleQuoteSubmit = (data: QuoteFormValues) => {
    // 🔹 Fake static logic
    const distance = Math.floor(Math.random() * 40) + 10; // 10–50 km
    const price = distance * 45; // ₹45/km for demo

    setEstimate({ distance, price, vehicle: data.vehicle });
  };

  const errorClass =
    "border-destructive focus-visible:ring-destructive bg-red-50/30 placeholder:text-red-400";

  return (
    <section className="border-b bg-bgLight">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:py-16">
        {/* Left Section */}
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

          {/* Quote Form */}
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

                  {/* Moving Date */}
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-xs font-medium text-muted-foreground">
                          Moving Date
                        </FormLabel>

                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start rounded-md text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                  form.formState.errors.date && errorClass
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>

                          <PopoverContent
                            className="w-auto p-0 z-[9999]"
                            align="start"
                            sideOffset={4}
                          >
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => {
                                const today = new Date();
                                const maxDate = addMonths(today, 2);
                                return date < today || date > maxDate;
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* 🚚 Choose Vehicle (ShadCN Select) */}
                  <FormField
                    control={form.control}
                    name="vehicle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-muted-foreground">
                          Choose Vehicle
                        </FormLabel>
                        <FormControl>
                          <div className="relative z-[50]">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger
                                className={cn(
                                  "w-full rounded-md border border-input bg-white text-sm focus:ring-2 focus:ring-primary focus:border-primary",
                                  form.formState.errors.vehicle && errorClass
                                )}
                              >
                                <SelectValue placeholder="Select Vehicle" />
                              </SelectTrigger>

                              <SelectContent
                                position="popper"
                                modal={false}
                                sideOffset={5}
                                className="z-[9999] rounded-lg border border-border bg-white shadow-lg"
                              >
                                <SelectItem
                                  value="Mini Truck (Tata Ace)"
                                  className="data-[state=checked]:bg-primary data-[state=checked]:text-white hover:bg-primary/10 focus:bg-primary/10 cursor-pointer transition-colors"
                                >
                                  🚚 Mini Truck (Tata Ace)
                                </SelectItem>

                                <SelectItem
                                  value="Pickup Van (Bolero)"
                                  className="data-[state=checked]:bg-primary data-[state=checked]:text-white hover:bg-primary/10 focus:bg-primary/10 cursor-pointer transition-colors"
                                >
                                  🚐 Pickup Van (Bolero)
                                </SelectItem>

                                <SelectItem
                                  value="Tempo (Eicher 14ft)"
                                  className="data-[state=checked]:bg-primary data-[state=checked]:text-white hover:bg-primary/10 focus:bg-primary/10 cursor-pointer transition-colors"
                                >
                                  🚛 Tempo (Eicher 14ft)
                                </SelectItem>

                                <SelectItem
                                  value="Truck (17ft/19ft)"
                                  className="data-[state=checked]:bg-primary data-[state=checked]:text-white hover:bg-primary/10 focus:bg-primary/10 cursor-pointer transition-colors"
                                >
                                  🏗️ Truck (17ft/19ft)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Buttons */}
                  <div className="mt-3 flex gap-2 md:mt-0">
                    <Button
                      type="submit"
                      className="w-full rounded-full font-semibold"
                    >
                      Get Estimate
                    </Button>
                    <WhatsAppButton />
                  </div>
                </div>
              </form>
            </Form>
          </motion.div>

          {/* 🔹 Static Estimate Card (Shown After Submit) */}
          {estimate && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-b from-white to-orange-50 shadow-lg ring-1 ring-orange-100"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-orange-100 bg-gradient-to-r from-primary/90 to-orange-500 px-5 py-3 text-white">
                <Truck className="h-6 w-6" />
                <h3 className="text-lg font-semibold tracking-wide">
                  Estimated Price
                </h3>
              </div>

              {/* Details */}
              <div className="space-y-4 px-5 py-4 text-sm">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">Estimated Distance</p>
                  <p className="font-medium text-foreground">
                    {estimate.distance} km
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">Selected Vehicle</p>
                  <p className="font-medium text-foreground">
                    {estimate.vehicle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-base font-semibold text-foreground">
                    Total Estimate
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    ₹{estimate.price}
                  </p>
                </div>
              </div>

              {/* Confirm Button */}
              <div className="border-t border-orange-100 bg-white/60 px-5 py-3">
                <Button className="w-full rounded-full bg-primary font-semibold text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:bg-orange-500">
                  Confirm Booking
                </Button>
              </div>
            </motion.div>
          )}

          {/* Call Info */}
          <motion.div
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            <Phone className="h-4 w-4 text-primary" />
            Need help? Call us at{" "}
            <span className="font-semibold text-primary">+91-98xxxxxx00</span>
          </motion.div>
        </div>

        {/* Right Section (unchanged) */}
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
