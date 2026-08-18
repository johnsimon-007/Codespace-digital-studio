export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tags: string[];
  features: string[];
  demoType: 'crm' | 'booking' | 'ai' | 'whatsapp' | 'payment' | 'website' | 'automation';
}

export interface SecurityCapability {
  id: string;
  title: string;
  category: 'auth' | 'data' | 'api' | 'infrastructure';
  description: string;
  icon: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: 'WEBSITES' | 'SYSTEMS & CRM' | 'AI & AUTOMATION';
  industry: string;
  year: string;
  summary: string;
  imagePlaceholderBg: string;
  deliverables: string[];
  techStack: string[];
  featured: boolean;
  demoData?: Record<string, unknown>;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  initials: string;
  badge: string;
  techs: string[];
}

export interface ProcessStep {
  number: string;
  name: string;
  description: string;
  details: string[];
  deliverables: string[];
}

export interface SystemNode {
  id: string;
  label: string;
  sub: string;
  icon: string;
  active: boolean;
  connectedTo: string[];
  desc: string;
}

export interface EstimatorComponent {
  id: string;
  name: string;
  category: string;
  description: string;
  estimatedWeeks: number;
}
