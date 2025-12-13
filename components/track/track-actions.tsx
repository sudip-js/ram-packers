import { Button } from "@/components/ui/button";
import { Phone, FileText, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TrackActions({ driver }: { driver: any }) {
  const router = useRouter();

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-800 mb-3">Driver Info</h2>
      <p className="text-sm font-medium text-gray-900">{driver.name}</p>
      <p className="text-xs text-gray-500">{driver.phone}</p>

      <div className="mt-4 flex flex-col gap-2">
        <Button
          variant="outline"
          className="rounded-full hover:border-primary hover:text-primary"
          onClick={() => (window.location.href = `tel:${driver.phone}`)}
        >
          <Phone className="mr-2 h-4 w-4" /> Call Driver
        </Button>
        <Button
          variant="outline"
          className="rounded-full hover:border-primary hover:text-primary"
          onClick={() => router.push("/invoice")}
        >
          <FileText className="mr-2 h-4 w-4" /> View Invoice
        </Button>
        <Button
          className="rounded-full bg-primary text-white hover:bg-primary/90"
          onClick={() => router.push("/")}
        >
          <Home className="mr-2 h-4 w-4" /> Back Home
        </Button>
      </div>
    </div>
  );
}
