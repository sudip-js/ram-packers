import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <section className="min-h-[80vh] bg-bgLight py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Contact <span className="text-primary">Noida Movers</span>
          </h1>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
            Have questions about your move? Need a quick quote? Get in touch
            with our friendly team — we’re here to help 24/7.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Form */}
          <ContactForm />

          {/* Right: Info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
