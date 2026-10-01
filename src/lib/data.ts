export interface FeaturedWork {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  urlLabel: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Book' | 'Chat' | 'Code' | 'Brain';
  deliverables: string[];
  tools: string[];
  featuredWork?: FeaturedWork;
}

export interface CharacterCard {
  id: string;
  name: string;
  role: string;
  avatar: string;
  greeting: string;
  tags: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categoryKey: 'games' | 'branding' | 'cinematic' | 'web';
  image: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
  year: string;
  client: string;
  url?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const NEW_SERVICES_DATA: ServiceItem[] = [
  {
    id: 'visual-novel',
    title: 'VISUAL NOVEL',
    shortDesc: 'We create rich, narrative-driven visual novels with meaningful choices and immersive storytelling.',
    fullDesc: 'Custom visual novel engines, branching narrative architecture, character artwork, voice acting integration, and multi-ending logic.',
    iconName: 'Book',
    deliverables: ['Branching Narrative Scripting', 'Character & Scene Art', 'Choice-Driven Engine Systems', 'Audio & Music Composition', 'Cross-Platform Publishing'],
    tools: ['RenPy', 'Unreal Engine', 'Unity', 'Custom Web VN Frameworks'],
    featuredWork: {
      title: 'Three Souls, One Heart',
      subtitle: 'Furry Fantasy Visual Novel',
      description: 'A furry fantasy visual novel. Four chapters and an epilogue, five endings, three hearts to win.',
      image: '/images/three_souls_preview.png',
      url: 'https://threesouls.howlingheaven.com/',
      urlLabel: 'Play Three Souls, One Heart',
      tags: ['Visual Novel', 'Branching Story', 'Multiple Endings', 'Web Game']
    }
  },
  {
    id: 'chatbot-application',
    title: 'CHATBOT APPLICATION',
    shortDesc: 'Intelligent, engaging, and character-driven chat experiences for your users and communities.',
    fullDesc: 'Character-based conversational AI, dynamic memory systems, custom personality prompt engineering, and real-time streaming interfaces.',
    iconName: 'Chat',
    deliverables: ['Character Persona Architecture', 'Long-Term Memory Engines', 'Real-Time Streaming UI', 'Community Discord/Web Bots', 'Safety & Moderation Layer'],
    tools: ['LLM Fine-Tuning', 'Vector Databases', 'WebSockets', 'Next.js', 'Python'],
    featuredWork: {
      title: 'Howly.ai',
      subtitle: 'Persistent-Memory Roleplay Chatbot Platform',
      description: 'Immersive roleplay with unique characters, rich stories, and memory-aware conversations.',
      image: '/images/howly_ui_preview.jpg',
      url: 'https://howly.howlingheaven.com/',
      urlLabel: 'Launch Howly.ai',
      tags: ['AI Chatbot', 'Next.js', 'LLM', 'Roleplay']
    }
  },
  {
    id: 'web-development',
    title: 'WEB DEVELOPMENT',
    shortDesc: 'Responsive, performant, and scalable web applications tailored to your needs.',
    fullDesc: 'Modern web applications engineered with Next.js, Three.js 3D graphics, seamless micro-interactions, and edge-server deployments.',
    iconName: 'Code',
    deliverables: ['3D Web Canvas Experiences', 'Full-Stack Web App Development', 'Design System Architecture', 'Cloudflare Worker Deployment', 'SEO & CWV Optimization'],
    tools: ['Next.js', 'React', 'Three.js', 'Tailwind CSS', 'TypeScript', 'Cloudflare']
  },
  {
    id: 'ai-solution',
    title: 'AI SOLUTION',
    shortDesc: 'Custom AI solutions that automate, assist, and elevate your business to the next level.',
    fullDesc: 'Tailored artificial intelligence models, automated workflow agents, custom retrieval-augmented generation (RAG) pipelines, and intelligent API integrations.',
    iconName: 'Brain',
    deliverables: ['Custom RAG Knowledge Bases', 'Automated AI Workflow Agents', 'Custom API Integrations', 'AI Analytics & Dashboards', 'Enterprise Security Compliance'],
    tools: ['OpenAI / Gemini SDK', 'LangChain / LlamaIndex', 'Pinecone', 'Python', 'FastAPI']
  }
];

export const FEATURED_CHARACTERS: CharacterCard[] = [
  {
    id: 'fenton',
    name: 'Fenton',
    role: 'The Charming Outlaw',
    avatar: '🐺',
    greeting: 'Care to join me for a drink, darling?',
    tags: ['Charming', 'Roguish', 'Witty']
  },
  {
    id: 'blaidd',
    name: 'Blaidd',
    role: 'The Loyal Half-Wolf',
    avatar: '⚔️',
    greeting: 'I will always be by your side. Command me.',
    tags: ['Loyal', 'Protective', 'Noble']
  },
  {
    id: 'lucien',
    name: 'Lucien',
    role: 'The Mysterious Noble',
    avatar: '👑',
    greeting: 'Shadows reveal secrets to those patient enough to listen.',
    tags: ['Mysterious', 'Aristocratic', 'Cunning']
  },
  {
    id: 'kael',
    name: 'Kael',
    role: 'The Wandering Wizard',
    avatar: '🔮',
    greeting: 'The stars whisper ancient truths tonight...',
    tags: ['Arcane', 'Wise', 'Enigmatic']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'three-souls',
    title: 'Three Souls, One Heart',
    category: 'Furry Fantasy Visual Novel',
    categoryKey: 'games',
    image: '/images/three_souls_preview.png',
    description: 'A furry fantasy visual novel. Four chapters and an epilogue, five endings, three hearts to win.',
    challenge: 'Craft a deep, branching fantasy visual novel narrative with multiple endings and rich character dynamics.',
    solution: 'Designed custom web-based visual novel engine with interactive choice systems, gallery unlocks, and immersive soundscapes.',
    impact: 'Live playable release with passionate community reception across multiple story routes.',
    tags: ['Visual Novel', 'Narrative Game', 'Interactive Story', 'Fantasy'],
    year: '2026',
    client: 'Howling Heaven Studio',
    url: 'https://threesouls.howlingheaven.com/'
  },
  {
    id: 'howly-ai',
    title: 'Howly.ai',
    category: 'Roleplay Chatbot Platform',
    categoryKey: 'web',
    image: '/images/howly_ui_preview.jpg',
    description: 'Immersive roleplay with unique characters, rich stories, and limitless possibilities.',
    challenge: 'Build a character-driven conversational AI platform with persistent memory.',
    solution: 'Engineered dynamic prompt engineering and vector memory storage.',
    impact: 'Active user base of roleplayers engaging in multi-turn storytelling.',
    tags: ['AI Chatbot', 'Next.js', 'LLM', 'Roleplay'],
    year: '2026',
    client: 'Howling Heaven Studio',
    url: 'https://howly.howlingheaven.com/'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Concept',
    description: 'We align on story, tech architecture, and user experience goals.',
    details: ['Narrative Briefing', 'System Architecture']
  }
];
