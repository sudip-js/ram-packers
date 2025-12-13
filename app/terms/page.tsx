export default function TermsPage() {
  return (
    <section className="min-h-[80vh] bg-white py-12">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-700 text-[15px] leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Noida Movers</strong>. By accessing or using
              our services, you agree to be bound by these Terms and Conditions.
              If you do not agree with any part of the terms, please do not use
              our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              2. Service Overview
            </h2>
            <p>
              Noida Movers provides transportation, packing, and moving services
              within the city and across India. We strive to deliver your goods
              safely and on time. All bookings are subject to vehicle
              availability and confirmation.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              3. Booking & Payment
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                All bookings must be made through our official website or
                customer support team.
              </li>
              <li>
                Payments can be made online or in cash after service completion,
                as per mutual agreement.
              </li>
              <li>
                We reserve the right to cancel or reschedule a booking in case
                of unforeseen circumstances.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              4. Liability
            </h2>
            <p>
              While we take every precaution to handle your belongings safely,
              <strong> Noida Movers</strong> shall not be held responsible for
              damages caused by incorrect packing, natural calamities, or
              third-party delays. Insurance coverage is available upon request.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              5. Cancellation & Refund Policy
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Cancellations made 24 hours before the scheduled pickup will be
                eligible for a full refund.
              </li>
              <li>
                No refunds will be issued for cancellations made less than 24
                hours before service time.
              </li>
              <li>
                Refunds (if applicable) will be processed within 5–7 business
                days.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              6. User Responsibilities
            </h2>
            <p>
              Customers are responsible for declaring the correct value of goods
              and ensuring that all items comply with applicable transportation
              laws. Hazardous, illegal, or perishable items are not permitted.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              7. Privacy Policy
            </h2>
            <p>
              We value your privacy. Your personal data is collected only to
              provide and improve our services. For more details, please refer
              to our{" "}
              <a
                href="/privacy"
                className="text-primary font-medium hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              8. Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of India. Any disputes arising shall be
              subject to the exclusive jurisdiction of the courts in Noida,
              Uttar Pradesh.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              9. Updates to Terms
            </h2>
            <p>
              <strong>Noida Movers</strong> reserves the right to modify or
              update these Terms & Conditions at any time. Users are encouraged
              to review this page periodically for changes.
            </p>
          </section>

          {/* Contact Info */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              10. Contact Us
            </h2>
            <p>
              For questions or clarifications about our Terms, please contact us
              at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> support@noidamovers.in <br />
              <strong>Phone:</strong> +91-98xxxxxx00
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
