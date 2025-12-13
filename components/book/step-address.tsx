"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils"; // ✅ helper for conditional classes

const addressSchema = z.object({
  pickup: z.string().min(3, "Pickup location is required"),
  drop: z.string().min(3, "Drop location is required"),
  date: z.string().min(1, "Please select a pickup date"),
});

type AddressFormValues = z.infer<typeof addressSchema>;

export default function StepAddress({
  onNext,
}: {
  onNext: (data: any) => void;
}) {
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      pickup: "",
      drop: "",
      date: "",
    },
  });

  const handleSubmit = (data: AddressFormValues) => {
    onNext(data);
  };

  // ✅ Common style for error states
  const errorClass =
    "border-destructive focus-visible:ring-destructive bg-red-50/30 placeholder:text-red-400";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {/* Pickup Location */}
        <FormField
          control={form.control}
          name="pickup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pickup Location</FormLabel>
              <FormControl>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Ex: Sector 62, Noida"
                    className={cn(
                      "pl-8 transition-all",
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

        {/* Drop Location */}
        <FormField
          control={form.control}
          name="drop"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Drop Location</FormLabel>
              <FormControl>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Ex: Gurgaon, Haryana"
                    className={cn(
                      "pl-8 transition-all",
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

        {/* Date */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pickup Date</FormLabel>
              <FormControl>
                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    className={cn(
                      "pl-8 transition-all",
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

        <div className="pt-4 text-right">
          <Button type="submit" className="rounded-full">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
}
