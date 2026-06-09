export interface Project {
  id: string;
  caseNum: string;
  status: 'BUILT' | 'DEPLOYED' | 'PRODUCTION';
  category: string;
  name: string;
  shortDescription: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: 'pagespeaks',
    caseNum: 'case-001',
    status: 'BUILT',
    category: 'Voice AI',
    name: 'PageSpeaks',
    shortDescription: 'Multi-voice TTS needs custom fine-tuning, GPU inference, and chunked streaming to feel real.',
    description: 'Fine-tuned F5-TTS on 19h of audio across 6,676 clips. Built serverless Modal GPU inference with chunked streaming. Zero cold-start perceived latency.',
    tags: ['PyTorch', 'F5-TTS', 'Whisper', 'Modal', 'FastAPI'],
    github: 'https://github.com/Hydrazinev/PageSpeaks',
    live: 'https://pagespeaks.vercel.app/',
    accent: '#c8b6ff',
  },
  {
    id: 'professor',
    caseNum: 'case-002',
    status: 'DEPLOYED',
    category: 'RAG Application',
    name: 'AI Professor Rating',
    shortDescription: 'RAG over professor reviews needs semantic retrieval, fast WebSockets, and load-tested reliability.',
    description: 'LangChain + Pinecone RAG on RateMyProfessor data. FastAPI WebSocket backend with Redis caching. Load-tested to 250+ concurrent users without degradation.',
    tags: ['LangChain', 'Pinecone', 'FastAPI', 'Redis', 'WebSockets'],
    github: 'https://github.com/Hydrazinev/Rate-My-Professor',
    live: 'https://web-production-14c6.up.railway.app/',
    accent: '#b9fbc0',
  },
  {
    id: 'drugshield',
    caseNum: 'case-003',
    status: 'PRODUCTION',
    category: 'Healthcare AI',
    name: 'DrugShield AI',
    shortDescription: 'Medication safety at scale needs real-time interaction checking, explainable outputs, and clinical-grade reliability.',
    description: 'AI-powered drug interaction checker using NLP and medical knowledge graphs. Real-time safety alerts with explainable reasoning, deployed for clinical validation.',
    tags: ['Python', 'NLP', 'FastAPI', 'PostgreSQL', 'React'],
    github: 'https://github.com/Hydrazinev/DrugShield',
    live: 'https://drug-shield.up.railway.app/',
    accent: '#ffadad',
  },
  {
    id: 'nn-scratch',
    caseNum: 'case-004',
    status: 'BUILT',
    category: 'ML Foundations',
    name: 'Neural Network from Scratch',
    shortDescription: 'Understanding backprop means implementing every layer, every gradient, with no framework crutch.',
    description: 'Full neural net from first principles — forward prop, backprop, gradient descent — using only Python and NumPy. No PyTorch, no TensorFlow.',
    tags: ['Python', 'NumPy', 'ML'],
    github: 'https://github.com/Hydrazinev/Neural-Network-from-scratch',
    accent: '#ffafcc',
  },
  {
    id: 'summarizer',
    caseNum: 'case-005',
    status: 'BUILT',
    category: 'AI Application',
    name: 'Academic Summarizer',
    shortDescription: 'Summarizing academic content requires combining video, text, and retrieval into one coherent pipeline.',
    description: 'AI summarizer using GPT-4, RAG, and few-shot learning across video and text sources. Evaluated with BERTScore and ROUGE against ground-truth abstracts.',
    tags: ['GPT-4', 'LangChain', 'RAG', 'LLaMA-2', 'Python'],
    github: 'https://github.com/Hydrazinev/Academic-Video-and-text-Summarizer',
    accent: '#a0c4ff',
  },
  {
    id: 'solar',
    caseNum: 'case-006',
    status: 'BUILT',
    category: 'ML / Forecasting',
    name: 'Solar Insolation Forecasting',
    shortDescription: 'Satellite forecasting at ISRO required reliable pipelines, LSTM tuning, and actionable dashboards.',
    description: 'LSTM forecasting on 1+GB daily satellite data at ISRO. 25% prediction error reduction, 40% faster reporting with Matplotlib/Seaborn dashboards.',
    tags: ['PyTorch', 'LSTM', 'MATLAB', 'Matplotlib', 'CUDA'],
    github: 'https://github.com/Hydrazinev/Hydrazinev-Solar-Insolation-forecasting',
    accent: '#fdffb6',
  },
  {
    id: 'hm-scraper',
    caseNum: 'case-007',
    status: 'BUILT',
    category: 'Data Pipeline',
    name: 'H&M Reviews Scraper',
    shortDescription: 'Collecting product review data at scale needs structured output and clean ML-ready formatting.',
    description: 'Python scraper for H&M customer reviews and product images. Outputs structured datasets for sentiment analysis and ML training pipelines.',
    tags: ['Python', 'Web Scraping', 'Data Engineering'],
    github: 'https://github.com/Hydrazinev/H-M-Reviews-and-images-scraper',
    accent: '#caffbf',
  },
];
