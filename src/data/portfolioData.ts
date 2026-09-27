export interface Project {
  id: string;
  title: string;
  category: 'Odoo & ERP' | 'AI & LLMs' | 'Automation & Workflows' | 'Mobile & Apps' | 'Full-Stack' | 'Data & ML' | 'Hardware & IoT' | 'ERP & POS' | 'AI & Vision';
  shortDesc: string;
  description: string;
  keyHighlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metric?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  campus: string;
  period: string;
  achievements?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  description?: string;
}

export const PERSONAL_INFO = {
  name: "Muhammad Hassaan",
  role: "Odoo ERP Specialist & Full-Stack AI Engineer",
  tagline: "Odoo Custom Modules • Multi-Tenant & White-Label SaaS • RFID Tracking • Enterprise LLMs & n8n",
  phone: "+92 3187090077",
  email: "hassaansaqib00@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-hassaan1",
  linkedinHandle: "muhammad-hassaan1",
  github: "https://github.com/MrHassaan",
  githubHandle: "MrHassaan",
  location: "Pakistan",
  availability: "Available for Full-time Roles & High-Impact Consulting",
  summary: `Results-oriented Software Engineer and Odoo ERP Specialist with a BSCS from FAST-NUCES. Specialized in developing custom Odoo modules, multi-tenant cloud architecture, Odoo white-labeling, and real-time edge hardware integration (UHF RFID tracking & Zebra printers). Proven expertise in building financial Khata and Point of Sale (POS) systems, customized enterprise LLMs with RAG and advanced prompt engineering, autonomous n8n workflows, and Flutter cross-platform mobile apps. Experienced in deploying high-availability cloud solutions, managing automated database backups, and optimizing mission-critical business systems.`,
};

export const STATS = [
  { value: "4+", label: "Years Engineering Journey" },
  { value: "20+", label: "Odoo Modules & Systems Shipped" },
  { value: "Top 12%", label: "National IT Board Rank (9,000+ candidates)" },
  { value: "100%", label: "Industrial & Cloud Deployment Reliability" },
];

export const SKILL_CATEGORIES = [
  {
    name: "Odoo ERP & Custom Module Engineering",
    icon: "Server",
    skills: [
      { name: "Odoo Custom Module Development", level: "Expert" },
      { name: "Multi-Tenant Cloud Architecture", level: "Expert" },
      { name: "Odoo White-Labeling & De-branding", level: "Specialist" },
      { name: "OWL (Odoo Web Library)", level: "Advanced" },
      { name: "UHF RFID Real-Time Tracking", level: "Specialist" },
      { name: "Zebra ZPL Label Printing", level: "Specialist" },
      { name: "QWeb Reports & Invoice Engines", level: "Expert" },
      { name: "Security, Record Rules & Access Rights", level: "Expert" },
      { name: "Automated Encrypted Cloud Backups", level: "Advanced" },
      { name: "PostgreSQL Performance Optimization", level: "Expert" },
    ],
  },
  {
    name: "AI, LLMs & Prompt Engineering",
    icon: "Bot",
    skills: [
      { name: "Large Language Models (LLMs)", level: "Expert" },
      { name: "Prompt Engineering & Guardrails", level: "Expert" },
      { name: "Enterprise Custom LLMs & RAG", level: "Expert" },
      { name: "Chain-of-Thought & System Prompts", level: "Expert" },
      { name: "Agent Development Kit (ADK)", level: "Advanced" },
      { name: "LangChain & LlamaIndex", level: "Advanced" },
      { name: "Hallucination Mitigation & Safety", level: "Expert" },
      { name: "Vector Databases & Embeddings", level: "Advanced" },
    ],
  },
  {
    name: "Workflow Automation & Orchestration",
    icon: "Workflow",
    skills: [
      { name: "n8n Workflow Automation", level: "Expert" },
      { name: "Webhook & API Orchestration", level: "Expert" },
      { name: "Event-Driven Business Pipelines", level: "Advanced" },
      { name: "Automated Error Handling & Retries", level: "Expert" },
      { name: "Multi-Platform System Integration", level: "Advanced" },
      { name: "Scheduled ETL & Cron Triggers", level: "Advanced" },
    ],
  },
  {
    name: "ERP, Khata & POS Systems",
    icon: "Receipt",
    skills: [
      { name: "Khata Digital Ledger Systems", level: "Expert" },
      { name: "Point of Sale (POS) Systems", level: "Expert" },
      { name: "Credit-Debit Double-Entry Logic", level: "Expert" },
      { name: "Barcode & Thermal Receipt Printing (ESC/POS)", level: "Specialist" },
      { name: "Multi-Branch Inventory Synchronization", level: "Expert" },
      { name: "Cashier Shift & Z-Report Reconciliation", level: "Expert" },
    ],
  },
  {
    name: "Mobile & App Development",
    icon: "Smartphone",
    skills: [
      { name: "Flutter Framework", level: "Advanced" },
      { name: "Dart Programming", level: "Advanced" },
      { name: "Cross-Platform iOS & Android Apps", level: "Advanced" },
      { name: "Android Development Kit (ADK)", level: "Advanced" },
      { name: "State Management (Bloc / Provider)", level: "Advanced" },
      { name: "Offline Caching (SQLite / Hive)", level: "Advanced" },
      { name: "REST API & Push Notifications", level: "Advanced" },
    ],
  },
  {
    name: "Data Science, ML & ETL Jobs",
    icon: "ChartBar",
    skills: [
      { name: "Machine Learning (ML)", level: "Advanced" },
      { name: "Data Science & Statistical EDA", level: "Expert" },
      { name: "Distributed ETL Data Pipelines", level: "Expert" },
      { name: "Data Cleaning & Preprocessing", level: "Expert" },
      { name: "Python (Pandas, NumPy, Scikit-learn)", level: "Expert" },
      { name: "Feature Engineering & Model Evaluation", level: "Advanced" },
    ],
  },
  {
    name: "Full-Stack Web Development",
    icon: "Code2",
    skills: [
      { name: "Next.js & React 19", level: "Advanced" },
      { name: "Modern Websites & Responsive UI", level: "Expert" },
      { name: "Node.js & Express APIs", level: "Advanced" },
      { name: "TypeScript & JavaScript", level: "Advanced" },
      { name: "RESTful API Architecture", level: "Expert" },
      { name: "Cloud Deployment (Docker, Linux)", level: "Advanced" },
    ],
  },
  {
    name: "Hardware & Edge IoT Integration",
    icon: "Radio",
    skills: [
      { name: "UHF RFID Long-Range Gateways", level: "Specialist" },
      { name: "Zebra Industrial Printers (ZPL)", level: "Specialist" },
      { name: "Edge Hardware Connectivity & Sockets", level: "Advanced" },
      { name: "Industrial Floor Automation", level: "Advanced" },
      { name: "Hardware Driver Interfacing", level: "Advanced" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Odoo ERP Developer & Software Engineer",
    company: "Edraak Systems",
    period: "2024 – Present",
    type: "Full-Time",
    highlights: [
      "Engineered custom Odoo modules integrating long-range UHF RFID antennas and Zebra ZPL industrial printers for real-time item tracking across manufacturing lines, cutting dispatch times by 70%.",
      "Architected and deployed high-availability multi-tenant Odoo SaaS infrastructure on DigitalOcean with custom white-label branding, customized OWL components, and isolated tenant databases.",
      "Engineered an automated cloud backup daemon module taking scheduled encrypted PostgreSQL database dumps and syncing directly to Google Drive storage.",
      "Built comprehensive POS and Khata credit-debit ledger accounting modules with automated payment reminders via WhatsApp/SMS and instant balance reconciliation.",
      "Orchestrated cross-platform n8n automated workflows connecting Odoo ERP with external billing, messaging, and CRM APIs.",
    ],
    skills: ["Odoo", "Python", "OWL", "Multi-Tenant", "White-Labeling", "UHF RFID", "Zebra ZPL", "PostgreSQL", "DigitalOcean", "n8n"],
  },
  {
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    period: "July 2024 – September 2024",
    type: "Fellowship",
    highlights: [
      "Engineered customized LLM pipelines with Retrieval-Augmented Generation (RAG) and structured prompt engineering guardrails, minimizing hallucination and boosting retrieval accuracy.",
      "Developed machine learning models and automated data science pipelines (EDA, feature selection, and classification) with high-sensitivity evaluation.",
      "Built resilient microservices and low-latency API endpoints in Python with weekly live deployments and peer architectural reviews.",
    ],
    skills: ["Python", "LLMs", "Prompt Engineering", "RAG", "Machine Learning", "Data Science", "FastAPI / Flask", "System Design"],
  },
  {
    role: "Front-end & Mobile Developer Intern",
    company: "Interns Pakistan",
    period: "July 2023 – July 2023",
    type: "Internship",
    highlights: [
      "Collaborated with an agile engineering team to architect modern, responsive web pages and explore Flutter cross-platform mobile interfaces.",
      "Achieved 100% pixel-perfect responsive layouts across mobile viewports, tablet screens, and desktop browsers with enhanced accessibility and Core Web Vitals.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Flutter", "Responsive UI", "Cross-Browser Testing", "Git"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "odoo-rfid-tracking-module",
    title: "Industrial UHF RFID Real-Time Tracking Odoo Module",
    category: "Odoo & ERP",
    shortDesc: "Custom Odoo module interfacing directly with long-range UHF RFID hardware for automated inventory, bundle, and pallet tracking.",
    description: "Architected a mission-critical custom Odoo module that directly bridges physical UHF RFID antenna gateways with Odoo Inventory and MRP. Automatically detects and verifies hundreds of RFID tags simultaneously as bundles pass through factory checkpoints, validates them against Odoo stock moves, and triggers Zebra industrial label printers without any manual intervention.",
    keyHighlights: [
      "Direct socket & serial communication with long-range UHF RFID readers (915MHz)",
      "Automated Odoo stock move and transfer creation eliminating manual tallying errors",
      "Reduced warehouse dispatch verification time by over 70% in active apparel manufacturing",
      "Built with custom OWL frontend widgets and resilient Python background daemons",
    ],
    technologies: ["Odoo", "Python", "OWL", "UHF RFID", "TCP/Serial Sockets", "PostgreSQL"],
    githubUrl: "https://github.com/MrHassaan",
    featured: true,
    metric: "70% Faster Dispatch",
  },
  {
    id: "odoo-white-label-multi-tenant",
    title: "Odoo White-Label & Multi-Tenant SaaS Architecture",
    category: "Odoo & ERP",
    shortDesc: "Enterprise multi-tenant Odoo deployment with custom white-label branding, isolated databases, and automated encrypted cloud backups.",
    description: "Designed and deployed a turnkey multi-tenant Odoo cloud infrastructure hosting isolated client instances. Engineered a custom white-label de-branding module modifying Odoo's web client (OWL), login portals, favicon, system emails, and navigation chrome for enterprise client customization. Incorporates an automated backup engine that snapshots PostgreSQL databases, applies AES encryption, and synchronizes to Google Drive with retention policies.",
    keyHighlights: [
      "Custom white-label UI module with dynamic brand themes and customized enterprise portals",
      "Multi-tenant database isolation on DigitalOcean with Nginx SSL termination and connection pooling",
      "Automated scheduled backup module with encrypted Google Drive cloud sync and zero-downtime snapshots",
      "Centralized administrative control panel for provisioning new tenant instances in minutes",
    ],
    technologies: ["Odoo", "Python", "OWL", "PostgreSQL", "White-Labeling", "Multi-Tenant", "Docker / Linux", "Google Drive API"],
    githubUrl: "https://github.com/MrHassaan",
    featured: true,
    metric: "Multi-Tenant SaaS",
  },
  {
    id: "enterprise-custom-llm",
    title: "Enterprise Customized LLM & Agentic Knowledge Assistant",
    category: "AI & LLMs",
    shortDesc: "Private domain-adapted enterprise LLM pipeline featuring Retrieval-Augmented Generation (RAG), custom system prompts, and strict guardrails.",
    description: "Architected and deployed a private, customized Large Language Model (LLM) solution for enterprise operational intelligence. Integrated Retrieval-Augmented Generation (RAG) over proprietary company policies, SOPs, ERP data, and contracts. Designed advanced prompt engineering pipelines with chain-of-thought verification, few-shot contextual injection, and automated guardrails that prevent hallucination and enforce strict role-based data access control.",
    keyHighlights: [
      "Hybrid semantic & keyword vector retrieval indexing enterprise documentation",
      "Custom prompt engineering architecture reducing model hallucinations by over 92%",
      "Enterprise data governance ensuring departments only query authorized document collections",
      "Agentic workflow capabilities enabling the LLM to query internal APIs and generate structured summaries",
    ],
    technologies: ["Python", "LLMs", "Prompt Engineering", "RAG", "LangChain", "Vector DB", "FastAPI"],
    githubUrl: "https://github.com/MrHassaan",
    featured: true,
    metric: "92% Less Hallucination",
  },
  {
    id: "n8n-workflow-automation",
    title: "Multi-Service n8n Workflow Automation & Integration Hub",
    category: "Automation & Workflows",
    shortDesc: "Autonomous business process automation leveraging n8n, custom webhooks, and multi-platform data synchronization.",
    description: "Designed, engineered, and orchestrated self-healing business automation workflows using n8n. Seamlessly connected heterogeneous software stacks including ERPs, databases, payment gateways, messaging services (Slack, WhatsApp, Email), and CRM tools. Automated complex multi-step routines such as invoice generation, customer onboarding, error alerting, and periodic ETL data sync.",
    keyHighlights: [
      "Automated cross-system operations eliminating 85% of repetitive manual data entry",
      "Custom n8n nodes, webhook listeners, and scheduled cron triggers with retry logic",
      "Real-time error trapping with automated failover and incident alert dispatching",
      "Secure credential vaults and encrypted API communication protocols",
    ],
    technologies: ["n8n", "Webhooks", "REST APIs", "Node.js", "Docker", "PostgreSQL", "JSON Schema"],
    githubUrl: "https://github.com/MrHassaan",
    featured: true,
    metric: "85% Manual Work Cut",
  },
  {
    id: "smart-khata-ledger-system",
    title: "Smart Khata & Merchant Credit-Debit Ledger System",
    category: "ERP & POS",
    shortDesc: "Digital ledger and credit-debit accounting platform for merchants and businesses with automated balance reconciliation.",
    description: "Engineered a robust digital Khata bookkeeping solution replacing paper ledgers for merchants and SMEs. Tracks customer receivables (Udhaar), supplier payables, daily cash flow, and supplier balances with instant calculation, audit trails, and automated customer payment reminders via SMS/WhatsApp.",
    keyHighlights: [
      "Double-entry bookkeeping validation ensuring 100% financial transaction reconciliation",
      "Automated debtor payment reminders and statements with PDF ledger downloads",
      "Role-based merchant & cashier access with offline transaction queuing",
      "Comprehensive cash flow analytics, daily profit/loss, and overdue balance dashboards",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Financial Ledger Logic"],
    githubUrl: "https://github.com/MrHassaan",
    featured: true,
    metric: "100% Reconciled",
  },
  {
    id: "enterprise-pos-system",
    title: "High-Speed Retail & Restaurant Point of Sale (POS) System",
    category: "ERP & POS",
    shortDesc: "Sub-second retail checkout Point of Sale system with thermal receipt printing, barcode scanning, and multi-store inventory syncing.",
    description: "Architected a high-throughput Point of Sale (POS) solution built for fast-paced retail stores, supermarkets, and restaurants. Features quick barcode scanning, multi-tender split payments (Cash, Card, Digital Wallets), automatic inventory deduction across warehouses, network and USB thermal receipt printing (ESC/POS), cash drawer integration, and end-of-shift Z-Report accounting reconciliation.",
    keyHighlights: [
      "Sub-50ms barcode scanning lookup and instant itemized cart calculations",
      "Direct thermal receipt printer (ESC/POS & ZPL) and electronic cash drawer integration",
      "End-of-day register closing and cashier shift reconciliation with variance tracking",
      "Centralized multi-store inventory sync preventing stockouts and over-selling",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "ESC/POS", "Hardware Interfacing"],
    githubUrl: "https://github.com/MrHassaan",
    featured: true,
    metric: "<50ms Cart Response",
  },
  {
    id: "flutter-mobile-app-suite",
    title: "Cross-Platform Mobile Application Suite (Flutter & Dart)",
    category: "Mobile & Apps",
    shortDesc: "Production iOS & Android cross-platform mobile apps built with Flutter, featuring clean architecture, offline caching, and responsive UI.",
    description: "Engineered responsive, production-ready mobile applications using Flutter and Dart. Architected with Bloc/Provider state management for predictable state flow, offline SQLite caching for uninterrupted user experience, ADK integration for device hardware features, secure token authentication, and real-time push notification pipelines.",
    keyHighlights: [
      "Fluid 60 FPS performance with unified UI/UX across Android and iOS from a single codebase",
      "Offline-first data sync leveraging local storage and background synchronizers",
      "Native hardware interfacing via ADK and platform channels (camera, biometrics, notifications)",
      "Clean architecture with comprehensive unit and widget testing",
    ],
    technologies: ["Flutter", "Dart", "ADK", "Bloc / Provider", "REST APIs", "SQLite", "Firebase"],
    githubUrl: "https://github.com/MrHassaan",
    featured: true,
    metric: "60 FPS Fluid UI",
  },
  {
    id: "garment-measurement-cv",
    title: "Computer Vision Garment Measurement System",
    category: "AI & Vision",
    shortDesc: "YOLO & OpenCV powered computer vision tool accurately measuring physical garment dimensions from digital images.",
    description: "An advanced industrial AI tool developed for textile quality inspection. Uses custom-trained YOLO object detection & keypoint detection models coupled with perspective correction and reference calibration to compute inseam, outseam, and waist measurements with sub-centimeter physical accuracy directly from photos.",
    keyHighlights: [
      "Sub-centimeter accuracy for garment waist, outseam, and inseam measurements",
      "Custom perspective correction and metric calibration against physical reference markers",
      "Extensive data augmentation pipeline to handle fabric folds, lighting shifts, and textures",
      "Eliminates manual tape measurement bottlenecks on high-speed apparel lines",
    ],
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "Computer Vision", "NumPy"],
    githubUrl: "https://github.com/MrHassaan",
    featured: false,
    metric: "Sub-cm Accuracy",
  },
  {
    id: "rfid-zebra-odoo-integration",
    title: "Zebra Industrial ZPL Label Printing & Odoo Integration",
    category: "Hardware & IoT",
    shortDesc: "High-speed network label printing engine generating dynamic ZPL barcodes and dispatch tags from Odoo ERP.",
    description: "Custom Odoo module and print spooler interfacing directly with Zebra industrial barcode printers. Generates dynamic ZPL code from work orders, printing custom tracking labels with barcodes and QR codes for packaging lines in sub-second turnaround times.",
    keyHighlights: [
      "Real-time ZPL label generation and printing directly triggered from Odoo work orders",
      "Custom print spooler handling network socket printing across multiple production lines",
      "Barcode & QR code formatting compliant with international shipping standards",
    ],
    technologies: ["Odoo", "Python", "Zebra ZPL", "Serial / TCP Sockets", "PostgreSQL"],
    githubUrl: "https://github.com/MrHassaan",
    featured: false,
    metric: "Instant ZPL Spool",
  },
  {
    id: "modern-responsive-websites",
    title: "Modern Responsive Websites & Full-Stack Web Portals",
    category: "Full-Stack",
    shortDesc: "Fast, SEO-optimized, highly responsive modern web applications and websites built with Next.js, React, and Node.js.",
    description: "Architected and delivered multiple client-facing websites and full-stack web applications. Features server-side rendering (SSR) and static generation (SSG) for top-tier SEO and sub-second load times, interactive UI components, seamless REST/GraphQL API connections, robust responsive layouts across all screen viewports, and modern design aesthetics.",
    keyHighlights: [
      "Near-perfect 98+ Google Lighthouse scores across Performance, SEO, and Accessibility",
      "Modular component architecture with fluid micro-interactions and animations",
      "Full responsive cross-browser optimization from mobile phones to ultra-wide displays",
      "Integrated CMS, contact channels, lead capture, and performance analytics",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind / CSS", "REST APIs"],
    githubUrl: "https://github.com/MrHassaan",
    featured: false,
    metric: "98 Lighthouse Score",
  },
  {
    id: "etl-data-sync-engine",
    title: "Distributed ETL & Automated Data Sync Pipelines",
    category: "Data & ML",
    shortDesc: "Python and SQL-based ETL pipelines automating large-scale data extraction, transformation, data cleaning, and loading.",
    description: "Engineered scalable ETL data pipelines bridging disparate database systems and third-party APIs. Implements automated data cleaning, schema validation, deduplication, transaction log monitoring, and scheduled synchronization between MySQL, PostgreSQL, and analytical data stores with zero data loss.",
    keyHighlights: [
      "Automated end-to-end data extraction, transformation, cleaning, and loading",
      "Fault-tolerant incremental synchronization with automatic retry queues",
      "Guaranteed data consistency across operational databases and reporting warehouses",
    ],
    technologies: ["Python", "ETL Jobs", "Data Science", "PostgreSQL", "MySQL", "Pandas", "Cron / Schedulers"],
    githubUrl: "https://github.com/MrHassaan",
    featured: false,
    metric: "100% Data Integrity",
  },
  {
    id: "predictive-student-grades",
    title: "Machine Learning Predictive Modeling & Advanced Data Science",
    category: "Data & ML",
    shortDesc: "End-to-end data science pipelines with exploratory data analysis (EDA), predictive ML classifiers, and feature engineering.",
    description: "Executed comprehensive data science workflows including rigorous exploratory data analysis (EDA), statistical distribution profiling, data cleaning, and supervised machine learning model training. Evaluated ensemble classifiers, tuned hyperparameters, and derived actionable predictive insights from complex multi-dimensional datasets.",
    keyHighlights: [
      "Comprehensive statistical exploratory data analysis (EDA) and data cleansing",
      "Rigorous model evaluation using cross-validation, confusion matrices, ROC-AUC, and sensitivity",
      "Feature importance ranking identifying key statistical drivers of predictions",
    ],
    technologies: ["Python", "Machine Learning", "Data Science", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/MrHassaan",
    featured: false,
    metric: "High Sensitivity ML",
  },
];

export const EDUCATION: Education = {
  degree: "Bachelor of Science in Computer Science (BSCS)",
  institution: "National University of Computer and Emerging Sciences (FAST-NUCES)",
  campus: "Faisalabad-Chiniot Campus",
  period: "Sep 2020 – Aug 2024",
  achievements: [
    "Rigorous curriculum focused on Algorithms, Data Structures, Distributed Systems, Software Architecture, and AI.",
    "Graduated from Pakistan's premier computing university with solid theoretical and hands-on engineering foundation.",
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "IT Centralized Test — Top 12% Rank",
    issuer: "National IT Board / Industry Standard",
    date: "2024",
    badge: "Top 12% of 9,000+ Candidates",
    description: "Ranked in the top percentile among 9,000+ computing professionals nationwide, demonstrating elite analytical, algorithmic, and software problem-solving capabilities.",
  },
  {
    title: "Google AI Essentials",
    issuer: "Coursera / Google",
    date: "June 2024",
    badge: "Google Certified",
    description: "Comprehensive training on leveraging generative AI tools, prompt engineering, and ethical AI development workflows.",
  },
  {
    title: "Machine Learning: Basic to Advanced",
    issuer: "Udemy",
    date: "March 2023",
    badge: "Mastery Certification",
    description: "In-depth study of supervised and unsupervised learning algorithms, feature engineering, regression, classification, and neural network foundations.",
  },
];
