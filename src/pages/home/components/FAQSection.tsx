const faqs = [
  {
    q: "How does Fix-Link vet professionals?",
    a: "Every professional undergoes background checks, license verification, and reviews.",
  },
  {
    q: "What is the payment process?",
    a: "Payments are secured and released only after work completion approval.",
  },
  {
    q: "How do I book a service?",
    a: "Search, compare professionals, request quotes, and book directly.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Here are some of the most common questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg bg-white dark:bg-gray-800/50 p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer justify-between items-center font-semibold">
                {faq.q}
                <span className="material-symbols-outlined">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
