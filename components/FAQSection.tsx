type FAQSectionProps = {
  faqs: Array<{ question: string; answer: string }>;
};

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="bg-ivory px-5 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold text-forestDeep md:text-5xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-forestDeep/10 rounded-md border border-forestDeep/10 bg-white">
          {faqs.map((faq) => (
            <details className="group p-5" key={faq.question}>
              <summary className="cursor-pointer list-none font-semibold text-forestDeep">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
