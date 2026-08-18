import {
  ServiceItem,
  SecurityCapability,
  PortfolioProject,
  TeamMember,
  ProcessStep,
  SystemNode,
  EstimatorComponent
} from '../types';

export const COMPANY_INFO = {
  name: 'CODESPACE',
  tagline: 'DIGITAL SYSTEMS. BUILT DIFFERENT.',
  subTagline: 'WE BUILD WHAT BUSINESSES NEED NEXT.',
  phone: '+91 86808 88188',
  phoneFormatted: '+91 86808 88188',
  phoneRaw: '918680888188',
  extraPhones: ['9445102105', '6369667598', '8825643219'],
  email: '21305gopi@gmail.com',
  address: 'India / Global Remote',
  status: 'SYSTEMS OPERATIONAL 2026',
  copyright: '© 2026 CODESPACE. BUILT FOR WHAT\'S NEXT.'
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-dev',
    name: 'PREMIUM WEBSITE DEVELOPMENT',
    shortDesc: 'High-performance, responsive and visually impressive websites designed around the business.',
    fullDesc: 'We craft bespoke web experiences that combine editorial typography, fluid 3D interactions, ultra-fast load speeds, and seamless content management to set your brand miles apart from template-driven competitors.',
    iconName: 'Globe',
    tags: ['Next-Gen Web', 'Editorial Layouts', '3D Visuals', '100 Core Web Vitals'],
    features: [
      'Custom React/Vite architecture without heavy bloated themes',
      'Fluid mobile-first responsive recomposition',
      'SEO & OpenGraph metadata optimization built-in',
      'Ultra-smooth motion design and micro-interactions'
    ],
    demoType: 'website'
  },
  {
    id: 'brand-design',
    name: 'BRAND & LOGO DESIGN',
    shortDesc: 'Distinctive visual identities, logos and brand systems that make businesses recognizable.',
    fullDesc: 'Comprehensive visual strategy covering logo design, typography pairs, neon & monochrome color systems, design tokens, and digital brand guidelines to establish instant authority.',
    iconName: 'Palette',
    tags: ['Logo Design', 'Typography Rules', 'Design Systems', 'Brand Manual'],
    features: [
      'Vector logo packages with light and dark mode variations',
      'Curated typography guidelines & mathematical font scaling',
      'Custom icon packages & social asset templates',
      'Digital style guides & CSS theme tokens'
    ],
    demoType: 'website'
  },
  {
    id: 'crm-systems',
    name: 'CRM SYSTEMS',
    shortDesc: 'Custom dashboards for leads, customers, bookings, operations and business management.',
    fullDesc: 'Custom-built internal operating systems that give management complete control over sales pipelines, client data, automated follow-ups, analytics, and team role permissions.',
    iconName: 'LayoutDashboard',
    tags: ['Lead Pipeline', 'Role Auth', 'Analytics', 'Custom Dashboards'],
    features: [
      'Real-time lead status tracking & drag-and-drop Kanban boards',
      'Granular role-based access control (Admin, Sales, Staff)',
      'Automated email/SMS notification triggers on stage change',
      'Exportable financial and lead conversion metrics'
    ],
    demoType: 'crm'
  },
  {
    id: 'booking-systems',
    name: 'BOOKING SYSTEMS',
    shortDesc: 'Smart booking experiences for appointments, gaming centres, clinics, services and businesses.',
    fullDesc: 'Interactive calendar and seat/slot selection engines built to eliminate scheduling friction, send automated WhatsApp reminders, and prevent double-bookings.',
    iconName: 'CalendarCheck',
    tags: ['Seat Maps', 'Time Slots', 'Instant Confirmations', 'Calendar Sync'],
    features: [
      'Interactive visual slot or room/seat map selection',
      'Automated WhatsApp/SMS booking confirmations & reminders',
      'Time zone conversion & Google/Outlook calendar sync',
      'Integrated deposit or full payment collection at booking'
    ],
    demoType: 'booking'
  },
  {
    id: 'payment-gateway',
    name: 'PAYMENT GATEWAY INTEGRATION',
    shortDesc: 'Secure and seamless payment experiences integrated into digital products.',
    fullDesc: 'Server-verified payment flows covering credit cards, UPI, Razorpay, Stripe, subscription billing, and automated invoice generation with webhook security.',
    iconName: 'CreditCard',
    tags: ['Stripe/Razorpay', 'UPI Direct', 'Server Verification', 'Webhooks'],
    features: [
      'Server-side HMAC signature verification for payment safety',
      'Instant UPI QR code generation and checkout redirects',
      'Automated PDF invoice generation and customer email receipts',
      'Recurring subscription plans & billing customer portal'
    ],
    demoType: 'payment'
  },
  {
    id: 'ai-chatbots',
    name: 'AI CHATBOTS',
    shortDesc: 'AI-powered assistants that answer questions, handle enquiries and guide customers.',
    fullDesc: 'Context-aware conversational AI trained on your business knowledge base, trained to answer client queries 24/7, qualify leads, and direct users to appropriate services.',
    iconName: 'Bot',
    tags: ['Gemini AI', 'Knowledge Base', '24/7 Lead Capturing', 'Smart Context'],
    features: [
      'Custom vector database trained on your services & FAQs',
      'Natural human conversational tone with customized brand persona',
      'Direct lead qualification and handover to human staff',
      'Multi-language support for international or local clients'
    ],
    demoType: 'ai'
  },
  {
    id: 'whatsapp-automation',
    name: 'WHATSAPP AUTOMATION',
    shortDesc: 'Automated enquiries, reminders, confirmations, customer communication and workflows.',
    fullDesc: 'Direct WhatsApp Cloud API integrations that turn WhatsApp into a high-converting sales channel with auto-responders, lead qualification bots, and automated appointment updates.',
    iconName: 'MessageSquareText',
    tags: ['Cloud API', 'Instant Broadcast', 'Workflow Trigger', 'Lead Nurturing'],
    features: [
      'Official WhatsApp Business API setup & template approval',
      'Automated enquiry responses within < 2 seconds',
      'Appointment reminder sequences to reduce no-shows',
      'Two-way sync with your CRM dashboard'
    ],
    demoType: 'whatsapp'
  },
  {
    id: 'business-automation',
    name: 'BUSINESS AUTOMATION',
    shortDesc: 'Connect repetitive business processes and reduce unnecessary manual work.',
    fullDesc: 'End-to-end integration of Webhooks, Zapier/Make engines, database webhooks, and cloud functions to connect form submissions, invoicing, Google Sheets, and team messaging.',
    iconName: 'Cpu',
    tags: ['Webhook Engine', 'Zero Manual Entry', 'API Connectors', 'Cloud Workers'],
    features: [
      'Automated data syncing across CRMs, spreadsheets & email',
      'Instant Slack / WhatsApp team alert on hot lead submission',
      'Automated customer onboarding document dispatch',
      'Error handling and retry queues for failed webhook events'
    ],
    demoType: 'automation'
  },
  {
    id: 'ai-receptionist',
    name: 'AI RECEPTIONIST',
    shortDesc: 'Intelligent assistants that can handle enquiries, qualify leads and support businesses around the clock.',
    fullDesc: 'Next-generation automated AI agent that handles phone/voice & chat intake, qualifies incoming prospective clients, captures service details, and logs booked appointments into your calendar.',
    iconName: 'Sparkles',
    tags: ['Voice Intake', '24/7 Availability', 'Smart Qualification', 'CRM Sync'],
    features: [
      'Round-the-clock prospective client intake',
      'Dynamic questionnaire to filter serious buyers from tire-kickers',
      'Direct calendar booking insertion upon qualification',
      'Audio call transcript summaries sent directly to owner\'s email'
    ],
    demoType: 'ai'
  },
  {
    id: 'custom-systems',
    name: 'CUSTOM DIGITAL SYSTEMS',
    shortDesc: 'Purpose-built software and integrations designed around specific business requirements.',
    fullDesc: 'Tailor-made cloud software, inventory managers, gaming center seat managers, clinic patient portals, and custom API integrations engineered precisely for unique operational workflows.',
    iconName: 'Layers',
    tags: ['Tailor Made', 'Full-Stack Architecture', 'Scalable Cloud', 'Custom API'],
    features: [
      'Bespoke PostgreSQL / Firestore schema architecture',
      'Modular microservices designed for future expansion',
      'High-throughput web APIs with JWT authentication',
      'Custom reporting dashboards & client portals'
    ],
    demoType: 'crm'
  }
];

export const SECURITY_CAPABILITIES: SecurityCapability[] = [
  {
    id: 'sec-auth',
    title: 'Secure Authentication & JWT',
    category: 'auth',
    description: 'Multi-factor authentication, salted password hashing, stateless JWT session tokens with HttpOnly secure cookies.',
    icon: 'ShieldCheck'
  },
  {
    id: 'sec-rbac',
    title: 'Role-Based Admin Access (RBAC)',
    category: 'auth',
    description: 'Strict authorization barriers ensuring staff, clients, and system admins only access authorized CRM records.',
    icon: 'Lock'
  },
  {
    id: 'sec-input',
    title: 'XSS & SQL Injection Prevention',
    category: 'data',
    description: 'Sanitized input payloads, parameterization, and strict Content Security Policy (CSP) headers across all routes.',
    icon: 'Code2'
  },
  {
    id: 'sec-rate',
    title: 'API Rate Limiting & Bot Defense',
    category: 'api',
    description: 'Throttling mechanisms protecting forms, search routes, and AI endpoints against brute force and DDoS abuse.',
    icon: 'ZapOff'
  },
  {
    id: 'sec-secret',
    title: 'Environment Variable Vault',
    category: 'infrastructure',
    description: 'Zero exposure of API keys, Gemini tokens, or Stripe secrets to the browser. All secrets reside safely in isolated backend containers.',
    icon: 'Key'
  },
  {
    id: 'sec-webhook',
    title: 'Webhook Signature Verification',
    category: 'api',
    description: 'Cryptographic signature checking on incoming payment and WhatsApp webhooks to block forged payloads.',
    icon: 'CheckCircle2'
  }
];

export const ECOSYSTEM_NODES: SystemNode[] = [
  { id: 'website', label: 'WEBSITE', sub: 'Client Touchpoint', icon: 'Globe', active: true, connectedTo: ['crm', 'ai', 'booking'], desc: 'High-speed frontend captures client intent and triggers system workflows.' },
  { id: 'crm', label: 'CRM', sub: 'Lead Intelligence', icon: 'LayoutDashboard', active: true, connectedTo: ['whatsapp', 'automation', 'payments'], desc: 'Central neural hub managing leads, client statuses, and staff pipeline.' },
  { id: 'whatsapp', label: 'WHATSAPP', sub: 'Instant Communication', icon: 'MessageSquareText', active: true, connectedTo: ['crm', 'booking'], desc: 'Automated 2-way message sequences for reminders and sales updates.' },
  { id: 'ai', label: 'AI AGENT', sub: '24/7 Receptionist', icon: 'Bot', active: true, connectedTo: ['crm', 'booking', 'website'], desc: 'Gemini-powered intake assistant answering queries & qualifying leads.' },
  { id: 'booking', label: 'BOOKING', sub: 'Smart Scheduling', icon: 'Calendar', active: true, connectedTo: ['payments', 'whatsapp'], desc: 'Real-time calendar & seat selection engine synced with staff schedules.' },
  { id: 'payments', label: 'PAYMENTS', sub: 'Secure Checkout', icon: 'CreditCard', active: true, connectedTo: ['crm', 'automation'], desc: 'Stripe/Razorpay gateway processing deposits and sending invoices.' },
  { id: 'automation', label: 'AUTOMATION', sub: 'Process Orchestrator', icon: 'Cpu', active: true, connectedTo: ['security', 'crm'], desc: 'Background workers executing webhook triggers & cloud tasks.' },
  { id: 'security', label: 'SECURITY', sub: 'Shield Architecture', icon: 'Shield', active: true, connectedTo: ['website', 'payments', 'crm'], desc: 'Encrypted verification layer ensuring complete data protection.' }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'gaming-center',
    name: 'Apex Gaming Realm',
    category: 'WEBSITES',
    industry: 'Gaming & Entertainment',
    year: '2026',
    summary: 'High-energy cyberpunk website featuring a live 3D seat booking engine, hourly station reservations, tournament leaderboard, and automated WhatsApp booking passes.',
    imagePlaceholderBg: 'from-zinc-900 via-neutral-900 to-blue-950',
    deliverables: ['Cyberpunk 3D Web Experience', 'Visual Seat Map Booking', 'Tournament Portal', 'WhatsApp QR Passes'],
    techStack: ['React', 'Three.js', 'Vite', 'Tailwind CSS', 'WhatsApp Cloud API'],
    featured: true,
    demoData: {
      totalStations: 24,
      availableNow: 6,
      nextTournament: 'Valorant Showdown 2026',
      featuredSpecs: 'RTX 4090 / 240Hz OLED'
    }
  },
  {
    id: 'dental-clinic',
    name: 'Aura Dental Clinic',
    category: 'WEBSITES',
    industry: 'Healthcare & Clinics',
    year: '2026',
    summary: 'Sleek, reassuring clinic website with an intelligent patient onboarding flow, doctor slot booking, treatment cost estimator, and automated appointment reminders.',
    imagePlaceholderBg: 'from-neutral-900 via-zinc-900 to-blue-950',
    deliverables: ['Clinic Web Platform', 'Intelligent Slot Picker', 'Treatment Price Estimator', 'SMS/WhatsApp Reminders'],
    techStack: ['React 19', 'Express', 'Tailwind', 'AI Receptionist', 'PostgreSQL'],
    featured: true,
    demoData: {
      doctorsCount: 5,
      rating: '4.9 ★ (840+ Patients)',
      speciality: 'Cosmetic Dentistry & Implantology'
    }
  },
  {
    id: 'vanguard-crm',
    name: 'Vanguard Business CRM',
    category: 'SYSTEMS & CRM',
    industry: 'Professional Services & Sales',
    year: '2026',
    summary: 'Custom-tailored business operating system featuring automated lead assignment, live sales forecasting, automated client onboarding, and role-based permissions.',
    imagePlaceholderBg: 'from-black via-zinc-900 to-neutral-800',
    deliverables: ['Lead Pipeline Board', 'Role Auth System', 'Revenue Forecasting', 'Automated Invoicing'],
    techStack: ['TypeScript', 'Node.js', 'Express', 'Chart.js', 'JWT Auth'],
    featured: true,
    demoData: {
      activePipelineValue: '₹48,50,000',
      conversionRate: '34.2%',
      teamUsers: 18
    }
  },
  {
    id: 'omni-ai-reception',
    name: 'OmniAI Receptionist',
    category: 'AI & AUTOMATION',
    industry: 'Multi-Industry / Services',
    year: '2026',
    summary: 'Smart 24/7 conversational AI receptionist that handles website inquiries, qualifies prospect budget/timeline, and schedules discovery calls automatically.',
    imagePlaceholderBg: 'from-zinc-900 via-neutral-950 to-blue-900',
    deliverables: ['Gemini AI Agent', 'Knowledge Vector DB', 'Lead Qualification Flow', 'Google Calendar Sync'],
    techStack: ['Gemini 2.5 API', 'Node.js', 'Express', 'Vector Search', 'Webhooks'],
    featured: true,
    demoData: {
      queriesAnswered: '14,200+',
      avgResponseTime: '0.8s',
      leadQualificationAcc: '98.4%'
    }
  },
  {
    id: 'whatsapp-flow',
    name: 'FlowAutomate WhatsApp Engine',
    category: 'AI & AUTOMATION',
    industry: 'Retail & Local Services',
    year: '2026',
    summary: 'Automated WhatsApp sales assistant designed for local businesses, handling price inquiries, sending catalog PDFs, taking bookings, and dispatching instant payment links.',
    imagePlaceholderBg: 'from-neutral-900 via-blue-950 to-black',
    deliverables: ['WhatsApp Bot Flow', 'PDF Catalog Engine', 'Razorpay Link Dispatch', 'CRM Sync'],
    techStack: ['WhatsApp Cloud API', 'Express', 'Node.js', 'Razorpay API'],
    featured: false
  },
  {
    id: 'nexus-pay',
    name: 'Nexus Secure Payment Hub',
    category: 'SYSTEMS & CRM',
    industry: 'Fintech & Digital Commerce',
    year: '2026',
    summary: 'Unified payment terminal integration supporting instant UPI QR generation, Stripe credit card checkouts, automated tax invoices, and server webhook verification.',
    imagePlaceholderBg: 'from-black via-neutral-900 to-zinc-800',
    deliverables: ['UPI QR Terminal', 'Stripe Gateway Integration', 'Automated GST Invoicing', 'Webhook Guard'],
    techStack: ['Stripe SDK', 'Razorpay API', 'HMAC Verification', 'PDF Generator'],
    featured: false
  },
  {
    id: 'elevate-build',
    name: 'Elevate Construction Portal',
    category: 'WEBSITES',
    industry: 'Construction & Real Estate',
    year: '2026',
    summary: 'Architectural portfolio website showcasing high-resolution project galleries, 3D floor plan viewers, client portal progress trackers, and material cost estimators.',
    imagePlaceholderBg: 'from-neutral-950 via-zinc-900 to-stone-900',
    deliverables: ['Architectural Web Design', 'Client Milestone Portal', '3D Model Viewer', 'Project Estimate Generator'],
    techStack: ['React', 'Three.js', 'Tailwind', 'Express Backend'],
    featured: false
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'GOPIKRISHNAN',
    role: 'Strategy / Development / Client Solutions',
    specialty: 'Architecting complete digital business engines, full-stack development, & high-growth technical strategy.',
    initials: 'GP',
    badge: 'LEAD ARCHITECT',
    techs: ['Full-Stack Dev', 'Client Solutions', 'System Architecture', 'React/Node']
  },
  {
    name: 'ROHITH',
    role: 'Development / Technology',
    specialty: 'High-throughput backend architectures, database schemas, secure payment gateways, & API design.',
    initials: 'RT',
    badge: 'SYSTEMS ENGINEER',
    techs: ['Node.js', 'Express', 'Database Security', 'API Integrations']
  },
  {
    name: 'ROHETH',
    role: 'Design / Development',
    specialty: 'Editorial UI/UX, interactive motion design, high-contrast layouts, & 3D WebGL experiences.',
    initials: 'RH',
    badge: 'CREATIVE DIRECTOR',
    techs: ['Editorial UI/UX', 'Three.js / WebGL', 'Motion Design', 'Tailwind']
  },
  {
    name: 'JOHN',
    role: 'Technology / Development',
    specialty: 'AI integrations, WhatsApp API automation workflows, cloud execution workers, & security architectures.',
    initials: 'JN',
    badge: 'AI & AUTOMATION SPECIALIST',
    techs: ['Gemini AI API', 'WhatsApp Cloud API', 'Webhooks', 'Security Headers']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'DISCOVER',
    description: 'Deconstruct the business model, identify bottlenecks, map user journeys, and define target outcomes.',
    details: [
      'Deep-dive consultation into current manual business processes',
      'Competitor analysis & visual positioning audit',
      'Technical roadmap & system architecture diagram drafting'
    ],
    deliverables: ['System Architecture Blueprint', 'Project Scope & Fixed Proposal']
  },
  {
    number: '02',
    name: 'DESIGN',
    description: 'Craft bold editorial layouts, 3D interactive visuals, typography scales, and seamless user experiences.',
    details: [
      'High-impact desktop & mobile wireframe layouts',
      'High-contrast black/white/neon design system & component library',
      'Interactive visual prototypes for client review'
    ],
    deliverables: ['Figma / Interactive UI Prototype', 'Design System Specifications']
  },
  {
    number: '03',
    name: 'BUILD',
    description: 'Engineered with clean TypeScript, secure API proxies, database schemas, and AI / WhatsApp integrations.',
    details: [
      'Full-stack TypeScript codebase development',
      'Integration of CRMs, Booking Engine, Payment Gateways & AI',
      'Security hardening (RBAC, XSS, OWASP, Rate Limiting, Encrypted Keys)'
    ],
    deliverables: ['Complete Codebase', 'Integrated API Services', 'Security Audit Pass']
  },
  {
    number: '04',
    name: 'LAUNCH',
    description: 'Deploy on high-performance Cloud Run containers, test across all devices, verify security, & handover.',
    details: [
      'Cloud deployment with automatic HTTPS & CDN edge delivery',
      'Live end-to-end user journey & webhook testing',
      'Team training walkthrough & ongoing maintenance plan'
    ],
    deliverables: ['Live System Deployment', 'Admin & CRM Documentation', '24/7 Operational Warranty']
  }
];

export const ESTIMATOR_COMPONENTS: EstimatorComponent[] = [
  { id: 'est-web', name: 'Premium Website Development', category: 'Core Web', description: 'Bespoke editorial website with motion, 3D hero, and high conversion design', estimatedWeeks: 1 },
  { id: 'est-crm', name: 'Custom CRM Dashboard', category: 'Business Systems', description: 'Lead tracking Kanban, client management, role auth, & analytics', estimatedWeeks: 2 },
  { id: 'est-booking', name: 'Smart Booking System', category: 'Business Systems', description: 'Interactive time-slot or seat selection with automated updates', estimatedWeeks: 1 },
  { id: 'est-pay', name: 'Payment Gateway Terminal', category: 'Integrations', description: 'Stripe / Razorpay UPI checkout with automated PDF invoicing', estimatedWeeks: 1 },
  { id: 'est-ai', name: 'AI Chatbot & Receptionist', category: 'AI & Automation', description: '24/7 Gemini-powered knowledge assistant & lead qualifier', estimatedWeeks: 1 },
  { id: 'est-wa', name: 'WhatsApp Business Automation', category: 'AI & Automation', description: 'Official Cloud API setup for instant automated customer workflows', estimatedWeeks: 1 },
  { id: 'est-sec', name: 'Hardened Security Vault', category: 'Infrastructure', description: 'OWASP mitigation, JWT auth, rate limiting, & encrypted environment', estimatedWeeks: 1 }
];

export const WHY_STATEMENTS = [
  "CUSTOM, NOT TEMPLATE.",
  "DESIGNED FOR YOUR BUSINESS.",
  "BUILT TO PERFORM.",
  "SECURITY BY DESIGN.",
  "AUTOMATION WHEN IT MATTERS.",
  "DESIGN WITH PURPOSE.",
  "TECHNOLOGY WITHOUT THE COMPLEXITY."
];
