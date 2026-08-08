export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  accentColor: string;
  image: string;
  featured: boolean;
  idea: string;
  approach: string;
  build: string[];
  experience: string;
  result: string;
  demoType: 'ecommerce-stride' | 'ecommerce-amazon' | 'creative-lumina' | 'ai-experiments';
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight: string;
    icon?: string;
  }[];
}

export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  serviceType: string;
  budget: string;
  timeline: string;
  message: string;
}
