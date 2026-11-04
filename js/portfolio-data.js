/**
 * portfolio-data.js
 * Source of truth for Pithiya Hardik's Portfolio & Digital Resume
 * Verified against LinkedIn profile & production ERPNext/Frappe history
 */

export const personalInfo = {
  name: "Pithiya Hardik",
  badge: "Project Manager & Senior ERP Specialist",
  title: "Engineering Intelligent ERP & Scalable Python Architectures",
  summary: "Results-driven Project Manager and Senior ERPNext / Frappe Specialist with 4 years and 8 months of comprehensive enterprise experience. Proven track record architecting high-throughput manufacturing solutions (Meril Healthcare MNC), mission-critical fintech IT asset tracking systems (Minix Fintech), and custom workflow automations that drive measurable efficiency gains.",
  experienceYears: "4.8",
  experienceFull: "4 Years 8 Months",
  location: "Gandhinagar / Ahmedabad / Akhodad, Gujarat, India",
  email: "pithiyahardik18@gmail.com",
  phone: "+91 7284013972",
  phoneFormatted: "+91 72840 13972",
  linkedin: "https://linkedin.com/in/pithiya-hardik-227328214",
  linkedinUser: "pithiya-hardik-227328214",
  github: "https://github.com/Pithiya-Hardik?tab=stars",
  githubUser: "Pithiya-Hardik",
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    focus: "Computer Science & Software Development",
    year: "Graduated"
  },
  availability: "Available for Senior Roles & Enterprise Consulting",
  stats: [
    { label: "Total Experience", value: "4.8+", suffix: "Years" },
    { label: "Enterprise Apps Built", value: "12+", suffix: "Apps" },
    { label: "Turnaround Reduction", value: "30%", suffix: "Speedup" },
    { label: "On-Time Milestones", value: "100%", suffix: "Success" }
  ]
};

export const careerTimeline = [
  {
    id: "minix-fintech",
    company: "Minix Fintech Private Limited",
    role: "Project Manager",
    employmentType: "Full-time",
    period: "Dec 2025 - Present",
    duration: "11 mos",
    location: "Gandhinagar, Gujarat, India · On-site",
    statusBadge: "Current Role",
    summary: "Leading enterprise IT asset management, low-latency colocation infrastructure tracking, and bespoke Frappe application lifecycles in a high-frequency fintech environment.",
    highlights: [
      "Designed and deployed the Minix IT Asset Tracking & Allocation System supporting barcode thermal scanning (Code128) and real-time employee custody handovers.",
      "Spearheaded infrastructure monitoring for mission-critical trading servers at NSE Colocation (FD1/FD2) tracking hostnames, IPs, device criticalities, and audit schedules.",
      "Engineered real-time Custom HTML Dashboard blocks within Frappe Desk for instant visibility into asset distribution, department allocations, and compliance lifecycles.",
      "Integrated multi-channel enterprise bots (Zoom chatbot with interactive actionable buttons & automated WhatsApp notifications).",
      "Directed cross-functional development sprints from initial business requirements mapping to on-premise production releases."
    ],
    skills: ["Project Management", "Frappe Framework", "ERPNext", "Fintech Infrastructure", "Barcode/QR Systems", "Zoom API", "Python"]
  },
  {
    id: "hybrowlabs",
    company: "Hybrowlabs Technologies",
    role: "Senior ERPNext & Frappe Developer",
    employmentType: "Full-time",
    period: "Sep 2024 - Dec 2025",
    duration: "1 yr 4 mos",
    location: "Pune District, Maharashtra, India · On-site",
    statusBadge: "Enterprise Lead",
    summary: "Lead ERPNext technical specialist driving large-scale digital transformation for multinational healthcare manufacturing clients.",
    highlights: [
      "Configured and set up complete manufacturing flow in ERPNext for **Meril (Multinational Healthcare Manufacturer)**, managing requirement gathering, process mapping, and development for ERP workflows.",
      "Engineered full **Exim (Import/Export) workflows** in the Buying module covering domestic purchase, import purchase, custom duty calculations, and compliance audit logging.",
      "Developed robust Bill of Materials (BOM) multi-level explosion, work order routing, job card operational tracking, and in-process/post-production quality inspection protocols.",
      "Delivered ERPNext manufacturing solutions aligning with client's compliance, multi-currency accounting, and operational requirements."
    ],
    skills: ["ERPNext", "Manufacturing Module", "Exim Buying Workflows", "Multi-Currency Accounting", "Python", "MariaDB", "DocTypes"]
  },
  {
    id: "sanskar-technolab",
    company: "Sanskar Technolab Pvt. Ltd.",
    role: "Senior Frappe Developer | ERPNext Developer (3-Stage Growth)",
    employmentType: "Full-time · 2 yrs 5 mos",
    period: "May 2022 - Sep 2024",
    duration: "2 yrs 5 mos",
    location: "Ahmedabad, Gujarat, India · On-site",
    statusBadge: "Career Growth",
    summary: "Progressed through 3 consecutive promotions from Trainee to Senior Developer, managing end-to-end client implementations across manufacturing, wholesale trade, and services.",
    promotions: [
      {
        title: "Senior Frappe Developer | ERPNext Developer",
        period: "May 2023 - Sep 2024 · 1 yr 5 mos",
        description: "Specialized in Manufacturing, Stock, Buying, Selling, and Subcontracting modules. Managed the entire project lifecycle from requirement gathering to deployment for eFRA Industries and delivered a 30% order turnaround speedup for a major trading client."
      },
      {
        title: "ERPNext Developer | Frappe Developer",
        period: "Oct 2022 - Apr 2023 · 7 mos",
        description: "Implemented custom DocTypes, client-side scripts, hooks, workflows, and integrated external RESTful APIs with MariaDB backend."
      },
      {
        title: "Python Trainee Developer",
        period: "May 2022 - Sep 2022 · 5 mos",
        description: "Mastered Python programming, database relational modeling, object-oriented concepts, and Frappe framework architectural fundamentals."
      }
    ],
    highlights: [
      "Successfully completed multiple manufacturing and ERP projects single-handedly, managing the entire lifecycle from requirement gathering and mapping to deployment.",
      "Managed eFRA Industries manufacturing implementation across Manufacturing, Stock, Buying, Selling, and Subcontracting; developed Item Master auto-generation, metal weight calculator, batch master receipt-wise tracking, and machine-wise time tracking.",
      "Engineered automated WhatsApp integration (`whatsapp_sender`) for instant document dispatches (Invoices, POs, Receipts) via WhatsApp Business Cloud API.",
      "Successfully implemented ERPNext for a Trading client, resulting in a 30% reduction in order processing time and improved inventory management."
    ],
    skills: ["Python", "Manufacturing Module", "Subcontracting", "WhatsApp Business API", "Frappe Bench", "ERPNext Customization", "MariaDB Query Tuning"]
  }
];

export const enterpriseCaseStudies = [
  {
    id: "meril-healthcare",
    title: "Meril Healthcare Manufacturing ERP",
    subtitle: "Multinational Healthcare Manufacturer (MNC)",
    category: "Manufacturing",
    client: "Meril Life Sciences",
    duration: "Sep 2024 - Dec 2025",
    tags: ["Manufacturing", "Exim Workflows", "Buying Module", "Multi-tier BOM", "ERPNext"],
    icon: "healthcare",
    accentColor: "#00f2fe",
    challenge: "Managing complex healthcare medical device manufacturing requiring strict regulatory compliance, multi-currency international procurement, import duty & customs calculations, multi-level Bill of Materials (BOM), and shop-floor production monitoring.",
    solution: "Engineered an end-to-end ERPNext manufacturing setup: configured the complete manufacturing flow (multi-level BOMs, work orders, job cards, quality inspection gates), customized Exim (Import/Export) workflows in the Buying module with domestic vs. import calculations, and built custom compliance audit logs.",
    impact: [
      "Set up complete end-to-end manufacturing flow in ERPNext from raw material inward to finished goods",
      "100% compliance and operational excellence for large-scale multinational healthcare device manufacturing",
      "Automated import & domestic purchase process mapping with custom duty & landed cost calculations in Buying",
      "Multi-tier BOM explosion with machine-level job card tracking and quality inspection checkpoints",
      "Eliminated manual inventory reconciliation between customs clearance and warehouse storage"
    ],
    architecture: "Frappe Buying (Exim) -> Custom Duty/Tax Engine -> Multi-level BOM -> Work Orders & Job Cards -> In-Process QC -> Finished Goods Batch Ledger"
  },
  {
    id: "efra-industries",
    title: "eFRA Industries Production & Procurement Suite",
    subtitle: "Industrial Manufacturing & Subcontracting",
    category: "Manufacturing",
    client: "eFRA Industries LLP",
    duration: "Feb 2024 - Aug 2024",
    tags: ["Manufacturing", "Stock & Subcontracting", "Weight Calculator", "Batch Master", "Machine Time Tracking"],
    icon: "industry",
    accentColor: "#10b981",
    challenge: "Industrial manufacturing lifecycle across Manufacturing, Stock, Buying, Selling, and Subcontracting suffered from duplicate item codes, complex weight-based metal procurement calculations, untracked receipt-wise batches, and lack of machine runtime visibility.",
    solution: "Managed the entire project lifecycle from requirement gathering to deployment across Manufacturing, Stock, Buying, Selling, and Subcontracting. Created Item Master for automated Item Code & Name generation, developed raw material weight calculator, designed a batch master for receipt-wise tracking, and implemented machine-wise time tracking systems for production monitoring.",
    impact: [
      "Managed entire project lifecycle from requirement gathering and process mapping to deployment",
      "Automated Item Master code & description generation, eliminating 100% duplicate SKUs",
      "Optimized procurement processes with custom weight calculator system for raw metal sheets and pipes",
      "Designed batch master enabling receipt-wise tracking throughout the manufacturing process",
      "Implemented machine-wise time tracking systems for real-time production monitoring and capacity planning"
    ],
    architecture: "Item Master Auto-Gen -> Weight Calculator -> Subcontracting Order -> Receipt-wise Batch Master -> Machine Time Tracker -> Production Stock Ledger"
  },
  {
    id: "whatsapp-sender-integration",
    title: "ERPNext WhatsApp Automated Messaging & Dispatch Engine",
    subtitle: "Omnichannel Transactional Dispatch & Webhook Callbacks",
    category: "Integrations",
    client: "Enterprise Custom App (whatsapp_sender)",
    duration: "2024 - 2025",
    tags: ["WhatsApp Cloud API", "Automated Dispatch", "Webhook Callbacks", "PDF Automation", "Frappe Hooks"],
    icon: "message",
    accentColor: "#25d366",
    challenge: "Critical customer communications (sales invoices, delivery dispatches, purchase orders, payment receipts, and balance reminders) sent via email suffered from low open rates (20-25%) and customer follow-up delays.",
    solution: "Architected a dedicated Frappe custom app ('whatsapp_sender') integrating Meta WhatsApp Business Cloud API. Configured automated document trigger hooks on submission to dynamically render Jinja message templates, attach generated PDF invoices, and send them directly to customer WhatsApp numbers with real-time delivery status logging.",
    impact: [
      "Achieved 98% message open rate within 5 minutes of document creation",
      "Automated instant WhatsApp dispatch of Sales Invoices, POs, and payment receipts with attached PDFs",
      "Two-way webhook integration tracking Sent, Delivered, and Read statuses directly in ERPNext",
      "Reduced customer inbound inquiry call volume by 35% through instant dispatch notifications"
    ],
    architecture: "Frappe Document Event (on_submit) -> whatsapp_sender App -> Jinja Template Engine -> PDF Generator -> Meta Cloud API -> Two-Way Status Webhooks"
  },
  {
    id: "zoom-chatbot-app",
    title: "Zoom Chatbot & Actionable Enterprise Notifications",
    subtitle: "Interactive ChatOps & Employee Self-Service",
    category: "Integrations",
    client: "Enterprise Internal Tool",
    duration: "Jun 2025 - Aug 2025",
    tags: ["Zoom Webhooks", "OAuth2", "ChatOps", "Python REST API"],
    icon: "chat",
    accentColor: "#38bdf8",
    challenge: "Employees had to log in to ERPNext for routine approvals, notifications, and leave submissions, slowing response times for managers and remote workers.",
    solution: "Built a dedicated Frappe custom app integrating Zoom Chatbot API with interactive message cards, action buttons (Approve/Reject), and conversational leave requests directly within Zoom channels.",
    impact: [
      "Enabled one-click leave approval directly within Zoom chat",
      "Instant system alerts with embedded actionable buttons",
      "Secure OAuth2 user mapping between Zoom IDs and ERPNext employees",
      "Reduced routine HR approval turnaround from hours to minutes"
    ],
    architecture: "Frappe Doc Event -> Webhook Trigger -> Zoom Card Template Engine -> Interactive Button Action -> Frappe REST Endpoint"
  },
  {
    id: "trading-erp-optimization",
    title: "Wholesale Trading ERP & Order Turnaround Engine",
    subtitle: "Supply Chain & Order-to-Cash Acceleration",
    category: "Supply Chain",
    client: "Major Wholesale Trading Enterprise",
    duration: "2023 - 2024",
    tags: ["Order Processing", "Stock Allocation", "Turnaround Optimization"],
    icon: "trending",
    accentColor: "#f59e0b",
    challenge: "High-volume order processing suffered from manual inventory reservation delays, leading to order backlogs and delayed customer dispatches.",
    solution: "Implemented automated stock reservation algorithms, batch picking lists, real-time credit limit validation, and streamlined sales order-to-invoice workflows.",
    impact: [
      "Achieved a 30% reduction in order processing turnaround time",
      "Zero inventory reservation conflicts during peak order rushes",
      "Real-time dispatch status tracking for warehouse operations",
      "Improved on-time delivery metric from 74% to 96%"
    ],
    architecture: "Sales Order Submission -> Auto-Stock Reservation Query -> Credit Engine -> Batch Dispatch Picking -> Invoice Generation"
  },
  {
    id: "frappe-lms-certificates",
    title: "Frappe LMS Dynamic Certificate Engine",
    subtitle: "EdTech & Cryptographic Verification",
    category: "Integrations",
    client: "Learning & Certification Platform",
    duration: "2024",
    tags: ["Frappe LMS", "Jinja2 Templates", "WeasyPrint", "QR Verification"],
    icon: "certificate",
    accentColor: "#ec4899",
    challenge: "Need for instant, high-resolution certificate generation upon course completion with anti-fraud QR code public verification.",
    solution: "Developed custom print formats using modern Jinja2 and PDF rendering with encoded unique hash verification links embedded into 2D QR codes.",
    impact: [
      "Sub-second automated PDF certificate generation upon course completion",
      "Public verification portal confirming authenticity via QR scan",
      "Pixel-perfect print rendering optimized for standard A4 landscape",
      "Zero maintenance serverless PDF pipeline"
    ],
    architecture: "LMS Course Event -> Jinja2 HTML Canvas -> PDF Rendering Engine -> Public Verification Route"
  },
  {
    id: "digital-library-system",
    title: "Digital Library Management & Barcode Scanner",
    subtitle: "Knowledge Ops & Smart Book Circulation",
    category: "Integrations",
    client: "Corporate Knowledge Hub",
    duration: "2024",
    tags: ["QR Code Tracking", "Circulation Engine", "Custom HTML Block"],
    icon: "book",
    accentColor: "#8b5cf6",
    challenge: "Manual book logs caused lost assets, delayed returns, and complete lack of visibility into inventory availability.",
    solution: "Created an online library app in Frappe featuring unique QR code tracking per book, issue/return logs with due date reminders, and an interactive custom HTML dashboard.",
    impact: [
      "Instant book check-in/check-out via webcam or mobile QR scan",
      "Automated email notifications for upcoming and overdue returns",
      "Live availability search widget embedded directly into employee portal",
      "Reduced book losses to virtually zero"
    ],
    architecture: "Book Master -> QR Generator -> Circulation Logger -> Due Date Cron Worker -> Custom HTML Search Block"
  },
  {
    id: "travel-desk-control-tower",
    title: "Corporate Travel Desk Control Tower",
    subtitle: "Multi-Option Booking & SLA Exception Monitoring",
    category: "Fintech",
    client: "Corporate Travel Operations",
    duration: "2024 - 2025",
    tags: ["Frappe APIs", "Control Tower", "SLA Monitoring", "Dashboard"],
    icon: "plane",
    accentColor: "#06b6d4",
    challenge: "Corporate travel bookings involved fragmented email chains for flight/hotel options, manager approvals, and ticket issuance with missed SLAs.",
    solution: "Built a centralized 'Control Tower' in travel_minix with intake queues, travel option sourcing cards, traveler preference selections, and exception watchers.",
    impact: [
      "Consolidated travel lifecycle from request to ticket into a single portal",
      "Real-time SLA exception strip alerting desk managers of pending items",
      "Multi-quote comparison enabling 15% corporate travel cost savings",
      "Automated policy compliance check before ticket booking"
    ],
    architecture: "Travel Request -> Option Sourcing API -> Traveler Selection -> Manager Approval -> Control Tower Queue"
  }
];

export const skillsData = {
  categories: [
    {
      title: "ERP & Frappe Ecosystem",
      icon: "layers",
      skills: [
        { name: "Frappe Framework (v14/v15)", level: 98, highlight: true },
        { name: "ERPNext Core Modules (Mfg, Buying, Stock)", level: 96, highlight: true },
        { name: "Custom DocTypes & Workflows", level: 98, highlight: true },
        { name: "Server & Client Scripts", level: 95, highlight: true },
        { name: "Custom HTML Blocks & Desk Customization", level: 94, highlight: true },
        { name: "Jinja Print Formats & Report Builder", level: 92, highlight: false },
        { name: "Frappe Bench CLI & Multi-Tenancy", level: 92, highlight: false },
        { name: "App Hooks, Events & Scheduled Patches", level: 95, highlight: false }
      ]
    },
    {
      title: "Programming & Web Technologies",
      icon: "code",
      skills: [
        { name: "Python 3 (Async, OOP, Scripting)", level: 95, highlight: true },
        { name: "JavaScript (ES6+, DOM, Fetch, Async)", level: 90, highlight: true },
        { name: "HTML5 & Semantic Markup", level: 95, highlight: false },
        { name: "CSS3 / Modern Glassmorphism & Flexbox", level: 92, highlight: false },
        { name: "SQL (Complex Joins, Window Funcs)", level: 92, highlight: true },
        { name: "Three.js & WebGL 3D Visualization", level: 85, highlight: true }
      ]
    },
    {
      title: "Architecture, Integrations & APIs",
      icon: "network",
      skills: [
        { name: "RESTful API Design & Integration", level: 94, highlight: true },
        { name: "Zoom Chatbot & Webhook Pipelines", level: 92, highlight: true },
        { name: "WhatsApp Business API Messaging", level: 88, highlight: false },
        { name: "Barcode & QR Code Printing Systems", level: 95, highlight: true },
        { name: "Google Drive & Cloud File Sync", level: 88, highlight: false },
        { name: "Redis Caching & Background Queues (RQ)", level: 86, highlight: false }
      ]
    },
    {
      title: "Databases, DevOps & Tools",
      icon: "database",
      skills: [
        { name: "MariaDB & MySQL Database Tuning", level: 92, highlight: true },
        { name: "Linux Server Administration (Ubuntu/Debian)", level: 90, highlight: true },
        { name: "Git Version Control & GitHub Workflows", level: 95, highlight: true },
        { name: "Postman API Testing & Automation", level: 92, highlight: false },
        { name: "Nginx Reverse Proxy Configuration", level: 88, highlight: false },
        { name: "Vercel & Cloud Static Hosting", level: 90, highlight: false }
      ]
    }
  ]
};

export const architectureNodes = [
  {
    id: "client-layer",
    label: "Client Layer",
    tech: "Frappe Desk / Three.js 3D UI",
    desc: "Responsive web interface, custom HTML blocks, interactive dashboards, and mobile barcode scanners.",
    icon: "monitor"
  },
  {
    id: "api-layer",
    label: "API Gateway",
    tech: "frappe.whitelist() REST APIs",
    desc: "Token authentication, role-based access control (RBAC), Zoom webhooks, and rate-limited endpoints.",
    icon: "shield"
  },
  {
    id: "app-layer",
    label: "Application Core",
    tech: "Python & Frappe Framework",
    desc: "DocType controllers, business validation hooks, BOM explosion engine, landed cost calculators, and custom workflows.",
    icon: "cpu"
  },
  {
    id: "queue-layer",
    label: "Async Background Worker",
    tech: "Redis & RQ (Worker Queue)",
    desc: "Asynchronous task handling, automated email dispatch, cron maintenance jobs, and heavy report processing.",
    icon: "refresh"
  },
  {
    id: "data-layer",
    label: "Database & Storage",
    tech: "MariaDB / MySQL & Redis Cache",
    desc: "Optimized relational storage, multi-tenant database partitions, indexed queries, and immutable audit logs.",
    icon: "database"
  }
];
