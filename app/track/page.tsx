"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function TrackRedirectPage() {
  const router = useRouter();
  const [bookingId, setBookingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/track/${bookingId.trim()}`);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-bgLight px-4">
      <Card className="w-full max-w-md shadow-md border border-gray-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Track Your <span className="text-primary">Shipment</span>
          </CardTitle>
          <p className="mt-2 text-sm text-gray-600">
            Enter your Booking ID below to check live tracking details.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bookingId" className="text-gray-700">
                Booking ID
              </Label>
              <Input
                id="bookingId"
                placeholder="e.g. NM12345"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                className="focus-visible:ring-primary"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-primary text-white hover:bg-primary/90"
            >
              <Search className="mr-2 h-4 w-4" /> Track Shipment
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
