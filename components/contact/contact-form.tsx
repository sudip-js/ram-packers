"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { businessConfig } from "@/config/business";

// ✅ Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number seems too long"),
  message: z.string().min(5, "Message should be at least 5 characters long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { name: businessName, contact } = businessConfig;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      // In a real setup, you’d POST to your backend or EmailJS service
      console.log("Form Submitted:", values);

      // Example: send to your backend
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });

      setSubmitted(true);
    } catch (error) {
      console.error("Contact form submission error:", error);
    }
  };

  if (submitted) {
    const waMessage = encodeURIComponent(
      `Hello ${businessName}, I just submitted a message on your website and would like to discuss further.`
    );

    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold text-primary">Thank You!</h3>
        <p className="mt-2 text-gray-600">
          Your message has been sent successfully. Our team at {businessName}{" "}
          will get back to you soon.
        </p>

        {/* WhatsApp follow-up CTA */}
        <a
          href={`https://wa.me/${contact.whatsapp}?text=${waMessage}`}
          target="_blank"
          className="mt-5 inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-2xl bg-white p-8 shadow-sm space-y-5"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Send us a message
        </h2>

        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+91 8826xxxxxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`Write your message for ${businessName}...`}
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full rounded-full bg-primary text-white hover:bg-primary/90"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
