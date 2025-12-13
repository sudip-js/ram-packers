"use client";

import { CheckCircle2, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusIcon from "./status-icon";

interface Props {
  status: string;
  bookingId: string;
  amount: string;
  onTrack: () => void;
  onHome: () => void;
}

export default function ConfirmationCard({
  status,
  bookingId,
  amount,
  onTrack,
  onHome,
}: Props) {
  let title = "";
  let desc = "";
  let color = "";
  let icon: any = CheckCircle2;

  switch (status) {
    case "success":
      title = "Booking Confirmed!";
      desc =
        "Your booking has been successfully confirmed. Our driver will contact you shortly.";
      color = "text-green-600";
      icon = CheckCircle2;
      break;
    case "pending":
      title = "Booking Pending";
      desc =
        "Your payment is being processed. You’ll receive a confirmation shortly.";
      color = "text-yellow-500";
      icon = Clock;
      break;
    default:
      title = "Booking Failed";
      desc =
        "Something went wrong while confirming your booking. Please try again or contact support.";
      color = "text-red-600";
      icon = XCircle;
      break;
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg text-center">
      <div className="flex flex-col items-center">
        <StatusIcon Icon={icon} color={color} />

        <h1 className={`mt-4 text-2xl font-semibold ${color}`}>{title}</h1>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>

        <div className="mt-6 w-full rounded-xl bg-bgLight p-4 text-left text-sm text-gray-700">
          <p>
            <span className="font-medium">Booking ID:</span> {bookingId}
          </p>
          <p>
            <span className="font-medium">Total Amount:</span> ₹{amount}
          </p>
          <p>
            <span className="font-medium">Payment Method:</span> Razorpay / UPI
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {status === "success" && (
            <Button
              className="rounded-full bg-primary text-white hover:bg-primary/90"
              onClick={onTrack}
            >
              Track My Booking
            </Button>
          )}
          <Button
            variant="outline"
            onClick={onHome}
            className="rounded-full hover:border-primary hover:text-primary"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
