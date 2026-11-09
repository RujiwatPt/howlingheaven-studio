export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://howlingheaven.com'
).replace(/\/$/, '');

export const siteName = 'Howling Heaven Studio';

export const siteEmail = 'gdulahan@gmail.com';

/** Quotable definition shared by the hero, metadata, FAQ, and structured data. */
export const siteDescription =
  'Howling Heaven Studio is an independent digital studio that designs and ships browser games, visual novels, character tools, and AI chat products.';

export const siteTagline = 'We build experiences that connect.';

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is Howling Heaven Studio?',
    answer: siteDescription,
  },
  {
    question: 'What services does Howling Heaven Studio offer?',
    answer:
      'Four services: visual novels with branching narrative, character art, and multi-ending logic; character-driven chatbot applications with persistent memory; custom web development with Next.js and Three.js; and tailored AI solutions such as retrieval pipelines, workflow agents, and API integrations.',
  },
  {
    question: 'Which products has Howling Heaven Studio released?',
    answer:
      'Released work includes BeastForge, Three Souls, One Heart, Beastmen Masseur, BeastBar, Combo Quest, Howly.ai, VideoFetcher, and Fubble Rivals. Each one runs in the browser on its own howlingheaven.com address.',
  },
  {
    question: 'How do I start a project with Howling Heaven Studio?',
    answer: `Email ${siteEmail} or use the contact form on this site. Share the story, product, or AI workflow you want built.`,
  },
];
