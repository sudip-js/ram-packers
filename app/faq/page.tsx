import FaqList from "@/components/faq/faq-list";

export default function FaqPage() {
  return (
    <section className="min-h-[80vh] bg-bgLight py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="mt-2 text-gray-600">
            Find quick answers to common questions about our Packers & Movers
            services.
          </p>
        </div>

        <FaqList />
      </div>
    </section>
  );
}
