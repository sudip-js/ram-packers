"use client";

import { useRouter, useSearchParams, useParams } from "next/navigation";
import ConfirmationCard from "@/components/confirmation/confirmation-card";

export default function ConfirmationPage() {
  const router = useRouter();
  const query = useSearchParams();
  const params = useParams(); // ✅ hook for client components

  const bookingId = query.get("bookingId");
  const amount = query.get("amount");

  const status = params?.status?.toLowerCase() || "success";

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-bgLight px-4 py-10">
      <div className="mx-auto max-w-md w-full">
        <ConfirmationCard
          status={status}
          bookingId={bookingId || "NM-230912"}
          amount={amount || "1200"}
          onTrack={() => router.push(`/track/${bookingId || "NM-230912"}`)}
          onHome={() => router.push("/")}
        />
      </div>
    </section>
  );
}
