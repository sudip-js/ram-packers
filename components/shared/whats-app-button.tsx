import { Button } from "@/components/ui/button";
import { businessConfig } from "@/config/business";

export function WhatsAppButton() {
  const { whatsapp } = businessConfig.contact;
  const message = encodeURIComponent(businessConfig.messages.defaultWhatsApp);
  const link = `https://wa.me/${whatsapp}?text=${message}`;

  return (
    <Button
      type="button"
      onClick={() => window.open(link, "_blank")}
      variant="outline"
      className="w-full rounded-full border-primary/30 text-primary hover:bg-primary/5"
    >
      Chat on WhatsApp
    </Button>
  );
}
