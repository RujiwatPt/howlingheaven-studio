import { faqs, siteUrl } from '@/lib/site';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
  url: siteUrl,
};

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 bg-transparent border-t border-amber-500/10 z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-10 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-amber-400 uppercase">
            <span>—</span>
            <span>Questions</span>
            <span>—</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-title tracking-tight">
            Answers, in plain language
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              open
              className="group rounded-xl studio-card border-gold-subtle px-5 py-4 open:border-amber-400/40"
            >
              <summary className="cursor-pointer text-sm sm:text-base font-semibold text-white font-serif-title list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                <h3 className="text-sm sm:text-base font-semibold text-left">{item.question}</h3>
                <span className="text-amber-400 text-lg leading-none group-open:rotate-45 transition-transform" aria-hidden>
                  +
                </span>
              </summary>
              <p className="pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
