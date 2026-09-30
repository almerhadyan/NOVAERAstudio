export interface Project {
  id: string;
  number: string;
  caseCode: string;
  title: string;
  client: string;
  year: string;
  location: string;
  domain: string;
  category: 'all' | 'product' | 'spatial' | 'design-system' | 'fashion-commerce';
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  badgeAccent: 'primary' | 'secondary' | 'tertiary';
  tags: string[];
  telemetry: {
    label: string;
    value: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  architecture: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  simulatorType?: 'orderbook' | 'colorpicker' | 'neural' | 'spatial3d';
}

export interface ServiceCapability {
  domainIndex: string;
  domainName: string;
  shortDesc: string;
  longDesc: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
  capabilities: string[];
  metricTag: string;
  turnaround: string;
  typicalDeliverables: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  accent: 'primary' | 'secondary' | 'tertiary';
  bio: string;
  experience: string;
  previous: string;
  image: string;
  imageAlt: string;
  location: string;
  skills: string[];
}

export interface InsightArticle {
  id: string;
  date: string;
  type: string;
  title: string;
  slug: string;
  summary: string;
  content: string[];
  tag: string;
  readTime: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
  author: string;
}

export interface InquiryFormData {
  scopes: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company?: string;
  brief: string;
}
