export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Book' | 'Chat' | 'Code' | 'Brain';
  deliverables: string[];
  tools: string[];
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
    tools: ['RenPy', 'Unreal Engine', 'Unity', 'Custom Web VN Frameworks']
  },
  {
    id: 'chatbot-application',
    title: 'CHATBOT APPLICATION',
    shortDesc: 'Intelligent, engaging, and character-driven chat experiences for your users and communities.',
    fullDesc: 'Character-based conversational AI, dynamic memory systems, custom personality prompt engineering, and real-time streaming interfaces.',
    iconName: 'Chat',
    deliverables: ['Character Persona Architecture', 'Long-Term Memory Engines', 'Real-Time Streaming UI', 'Community Discord/Web Bots', 'Safety & Moderation Layer'],
    tools: ['LLM Fine-Tuning', 'Vector Databases', 'WebSockets', 'Next.js', 'Python']
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
    client: 'Howling Heaven Studio'
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
