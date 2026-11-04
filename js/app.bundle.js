/**
 * app.bundle.js
 * Universal Standalone Application Controller for Pithiya Hardik's 3D Portfolio
 * Zero-dependency, runs both in static HTTP hosting (Vercel) and direct local file:// browsing.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. DATA REPOSITORY
     ========================================================================== */
  const personalInfo = {
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
      focus: "Computer Science & Information Technology",
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

  const careerTimeline = [
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

  const enterpriseCaseStudies = [
    {
      id: "meril-healthcare",
      title: "Meril Healthcare Manufacturing ERP",
      subtitle: "Multinational Healthcare Manufacturer (MNC)",
      category: "Manufacturing",
      client: "Meril Life Sciences",
      duration: "Sep 2024 - Dec 2025",
      tags: ["Manufacturing", "Exim Workflows", "Buying Module", "Multi-tier BOM", "ERPNext"],
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
      id: "minix-asset-tracker",
      title: "Minix IT Asset Tracking & Allocation System",
      subtitle: "High-Frequency Fintech & Colocation Infrastructure",
      category: "Fintech",
      client: "Minix Fintech Pvt. Ltd.",
      duration: "Dec 2025 - Present",
      tags: ["Asset Management", "Barcode (Code128)", "Custom HTML Block", "Fintech Colo"],
      challenge: "High-frequency trading demands tracking hundreds of high-value laptops, monitors, and overclocked servers at NSE Colocation (FD1/FD2) without slow procurement overheads, plus employee custody handovers.",
      solution: "Built a direct Asset Master entry workflow with instantaneous Code128 thermal barcode label printing, employee-to-employee transfer logging, colocation server health monitoring, and interactive custom HTML desk dashboards.",
      impact: [
        "Direct master entry saving 80% time over traditional procurement pipelines",
        "Thermal barcode label generator for instant physical hardware tagging",
        "Full custody audit trails across employee exits, transfers, and promotions",
        "NSE Colocation server tracking (Hostname, IP, Rack, Criticality)"
      ],
      architecture: "Frappe Desk -> Custom HTML Dashboard Block -> Asset Allocation DocType -> Code128 Barcode Generator -> Audit & Return Engine"
    },
    {
      id: "zoom-chatbot-app",
      title: "Zoom Chatbot & Actionable Enterprise Notifications",
      subtitle: "Interactive ChatOps & Employee Self-Service",
      category: "Integrations",
      client: "Enterprise Internal Tool",
      duration: "Jun 2025 - Aug 2025",
      tags: ["Zoom Webhooks", "OAuth2", "ChatOps", "Python REST API"],
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

  const skillsData = {
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

  const architectureNodes = [
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

  /* ==========================================================================
     2. 3D WEBGL HERO CANVAS (THREE.JS)
     ========================================================================== */
  function initThreeHero() {
    const canvas = document.getElementById('heroCanvas3d');
    if (!canvas) return;

    if (typeof THREE === 'undefined') {
      renderFallback(canvas);
      return;
    }

    try {
      const scene = new THREE.Scene();
      const width = canvas.clientWidth || 500;
      const height = canvas.clientHeight || 480;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 18;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
      scene.add(ambientLight);

      const pointCyan = new THREE.PointLight(0x00f2fe, 3, 50);
      pointCyan.position.set(10, 10, 10);
      scene.add(pointCyan);

      const pointPurple = new THREE.PointLight(0x7928ca, 4, 50);
      pointPurple.position.set(-10, -10, 8);
      scene.add(pointPurple);

      // Core Group
      const coreGroup = new THREE.Group();

      const innerGeo = new THREE.IcosahedronGeometry(3.2, 0);
      const innerMat = new THREE.MeshPhysicalMaterial({
        color: 0x00f2fe,
        emissive: 0x0a192f,
        roughness: 0.15,
        metalness: 0.85,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      coreGroup.add(innerMesh);

      const wireGeo = new THREE.IcosahedronGeometry(4.0, 1);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x7928ca,
        wireframe: true,
        transparent: true,
        opacity: 0.45
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      coreGroup.add(wireMesh);

      const ringGeo = new THREE.TorusGeometry(5.2, 0.05, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f2fe,
        transparent: true,
        opacity: 0.6
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      coreGroup.add(ringMesh);

      scene.add(coreGroup);

      // Orbiting Technology Badges
      const nodesGroup = new THREE.Group();
      const techBadges = [
        { name: "ERPNext", color: "#00f2fe", radius: 7.2, speed: 0.6, angle: 0 },
        { name: "Frappe", color: "#38bdf8", radius: 7.6, speed: 0.8, angle: Math.PI / 3 },
        { name: "Python", color: "#facc15", radius: 6.8, speed: 0.5, angle: (2 * Math.PI) / 3 },
        { name: "MariaDB", color: "#ec4899", radius: 8.0, speed: 0.7, angle: Math.PI },
        { name: "REST API", color: "#10b981", radius: 7.0, speed: 0.9, angle: (4 * Math.PI) / 3 },
        { name: "Bench", color: "#a855f7", radius: 7.4, speed: 0.75, angle: (5 * Math.PI) / 3 }
      ];

      const nodeMeshes = techBadges.map(badge => {
        const badgeCanvas = document.createElement('canvas');
        badgeCanvas.width = 256;
        badgeCanvas.height = 128;
        const ctx = badgeCanvas.getContext('2d');

        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(8, 8, 240, 112, 24);
        } else {
          ctx.rect(8, 8, 240, 112);
        }
        ctx.fill();

        ctx.lineWidth = 4;
        ctx.strokeStyle = badge.color;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(badge.name, 128, 64);

        const texture = new THREE.CanvasTexture(badgeCanvas);
        const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.92 });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.scale.set(3.2, 1.6, 1);

        nodesGroup.add(sprite);

        return {
          sprite,
          radius: badge.radius,
          speed: badge.speed,
          angle: badge.angle,
          yOffset: (Math.random() - 0.5) * 2.5
        };
      });

      scene.add(nodesGroup);

      // Particle Nebula
      const particleCount = 500;
      const partGeo = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      const colArray = new Float32Array(particleCount * 3);
      const c1 = new THREE.Color(0x00f2fe);
      const c2 = new THREE.Color(0x7928ca);

      for (let i = 0; i < particleCount * 3; i += 3) {
        const r = 8 + Math.random() * 14;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        posArray[i] = r * Math.sin(phi) * Math.cos(theta);
        posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        posArray[i + 2] = r * Math.cos(phi);

        const mixed = c1.clone().lerp(c2, Math.random());
        colArray[i] = mixed.r;
        colArray[i + 1] = mixed.g;
        colArray[i + 2] = mixed.b;
      }

      partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      partGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

      const partMat = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
      });
      const particles = new THREE.Points(partGeo, partMat);
      scene.add(particles);

      // Interactivity
      let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
      let isDragging = false, prevMouse = { x: 0, y: 0 };

      window.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth) * 2 - 1;
        targetY = -(e.clientY / window.innerHeight) * 2 + 1;
      });

      canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        prevMouse = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('mouseup', () => { isDragging = false; });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevMouse.x;
        const deltaY = e.clientY - prevMouse.y;
        coreGroup.rotation.y += deltaX * 0.008;
        coreGroup.rotation.x += deltaY * 0.008;
        prevMouse = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('resize', () => {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      });

      // Render Loop
      function animateLoop() {
        requestAnimationFrame(animateLoop);

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        if (!isDragging) {
          coreGroup.rotation.y += 0.005;
          coreGroup.rotation.x += 0.002;
          coreGroup.position.x = mouseX * 0.8;
          coreGroup.position.y = mouseY * 0.8;
        }

        const time = Date.now() * 0.001;
        nodeMeshes.forEach(node => {
          const curAngle = node.angle + time * node.speed;
          node.sprite.position.x = Math.cos(curAngle) * node.radius;
          node.sprite.position.z = Math.sin(curAngle) * node.radius;
          node.sprite.position.y = Math.sin(time + node.angle) * 1.5 + node.yOffset;
        });

        particles.rotation.y += 0.001;
        renderer.render(scene, camera);
      }

      animateLoop();

    } catch (err) {
      console.warn('WebGL init error, using fallback:', err);
      renderFallback(canvas);
    }
  }

  function renderFallback(canvas) {
    const parent = canvas.parentElement;
    if (!parent) return;
    canvas.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'canvas-fallback animate-float';
    fallback.innerHTML = `
      <div style="width: 240px; height: 240px; border-radius: 50%; background: radial-gradient(circle, rgba(0,242,254,0.3) 0%, rgba(121,40,202,0.5) 60%, transparent 100%); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 50px rgba(0,242,254,0.3); border: 2px solid rgba(0,242,254,0.5);">
        <div style="font-family: monospace; font-size: 1.4rem; font-weight: 800; color: #ffffff; text-align: center;">
          ERPNext<br><span style="color: #00f2fe; font-size: 1rem;">Python 3D Core</span>
        </div>
      </div>
    `;
    parent.appendChild(fallback);
  }

  /* ==========================================================================
     3. RENDER WORK EXPERIENCE TIMELINE (3-TIER VERIFIED)
     ========================================================================== */
  function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    container.innerHTML = careerTimeline.map(item => {
      let promotionsHtml = '';
      if (item.promotions && item.promotions.length > 0) {
        promotionsHtml = `
          <div class="promotions-accordion">
            <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--purple-secondary); font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">
              3-Stage Internal Career Progression:
            </div>
            ${item.promotions.map(p => `
              <div class="promo-step">
                <div class="promo-title-row">
                  <span class="promo-title">${p.title}</span>
                  <span class="promo-period">${p.period}</span>
                </div>
                <div class="promo-desc">${p.description}</div>
              </div>
            `).join('')}
          </div>
        `;
      }

      const badgeStyle = item.statusBadge.includes('Current') ? 'badge-emerald' : (item.statusBadge.includes('Lead') ? 'badge-purple' : 'badge-amber');

      return `
        <div class="timeline-item reveal-on-scroll">
          <div class="timeline-marker"></div>
          <div class="glass-card timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3 class="timeline-company-title">${item.company}</h3>
                <div class="timeline-role">
                  <span>${item.role}</span>
                  <span class="badge ${badgeStyle}">${item.statusBadge}</span>
                </div>
              </div>
              <div class="timeline-period-badge">${item.period} · ${item.duration}</div>
            </div>
            
            <div class="timeline-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${item.location}
            </div>

            <p class="timeline-summary">${item.summary}</p>

            ${promotionsHtml}

            <ul class="timeline-highlights">
              ${item.highlights.map(h => `<li>${h.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #ffffff;">$1</strong>')}</li>`).join('')}
            </ul>

            <div class="timeline-skills-list">
              ${item.skills.map(s => `<span class="badge badge-cyan">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ==========================================================================
     4. RENDER CASE STUDIES & FILTER TABS
     ========================================================================== */
  function renderCaseStudies(category = 'All') {
    const grid = document.getElementById('caseStudiesGrid');
    if (!grid) return;

    const filtered = category === 'All' 
      ? enterpriseCaseStudies 
      : enterpriseCaseStudies.filter(p => p.category === category);

    grid.innerHTML = filtered.map(project => `
      <div class="glass-card project-card" data-project-id="${project.id}" id="projectCard_${project.id}">
        <div>
          <div class="project-top-meta">
            <span class="badge badge-purple">${project.category}</span>
            <span class="project-client-badge">${project.client}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
          <p class="project-challenge-snippet">${project.challenge.substring(0, 130)}...</p>
        </div>

        <div class="project-footer-meta">
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            ${project.tags.slice(0, 3).map(t => `<span class="badge badge-cyan">${t}</span>`).join('')}
          </div>
          <span class="project-view-cta">
            Case Study 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const pId = card.getAttribute('data-project-id');
        const project = enterpriseCaseStudies.find(p => p.id === pId);
        if (project) openProjectModal(project);
      });
    });
  }

  function initFilterTabs() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        renderCaseStudies(cat);
      });
    });
  }

  function openProjectModal(project) {
    const overlay = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalContent = document.getElementById('modalContent');

    if (!overlay || !modalTitle || !modalContent) return;

    modalTitle.textContent = project.title;
    modalSubtitle.textContent = `${project.client} · ${project.duration} · ${project.category}`;

    modalContent.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="color: var(--cyan-primary); font-size: 0.95rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 8px;">
            Business Challenge
          </h4>
          <p style="color: #cbd5e1; line-height: 1.6;">${project.challenge}</p>
        </div>

        <div>
          <h4 style="color: var(--cyan-primary); font-size: 0.95rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 8px;">
            Technical Solution
          </h4>
          <p style="color: #cbd5e1; line-height: 1.6;">${project.solution}</p>
        </div>

        <div>
          <h4 style="color: var(--purple-secondary); font-size: 0.95rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 8px;">
            System Architecture Pipeline
          </h4>
          <div style="background: rgba(10, 15, 29, 0.9); border: 1px dashed rgba(121, 40, 202, 0.4); border-radius: var(--radius-sm); padding: 14px 18px; font-family: var(--font-mono); font-size: 0.85rem; color: #a78bfa; word-break: break-word;">
            ${project.architecture}
          </div>
        </div>

        <div>
          <h4 style="color: var(--emerald-accent); font-size: 0.95rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 12px;">
            Measurable Outcomes & Impact
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
            ${project.impact.map(item => `
              <li style="position: relative; padding-left: 20px; font-size: 0.9rem; color: #f1f5f9;">
                <span style="position: absolute; left: 0; color: var(--emerald-accent);">✓</span>
                ${item}
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
          ${project.tags.map(t => `<span class="badge badge-cyan">${t}</span>`).join('')}
        </div>
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.closeProjectModal = function() {
    const overlay = document.getElementById('projectModal');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  /* ==========================================================================
     5. INTERACTIVE ARCHITECTURE VISUALIZER
     ========================================================================== */
  function initArchitectureVisualizer() {
    const pipelineContainer = document.getElementById('archPipeline');
    const detailPanel = document.getElementById('archDetailPanel');

    if (!pipelineContainer || !detailPanel) return;

    pipelineContainer.innerHTML = architectureNodes.map((node, index) => `
      <div class="arch-node ${index === 0 ? 'active' : ''}" data-node-id="${node.id}" id="archNode_${node.id}">
        <div class="arch-node-icon">
          ${getNodeIcon(node.icon)}
        </div>
        <div class="arch-node-label">${node.label}</div>
        <div class="arch-node-tech">${node.tech}</div>
      </div>
    `).join('');

    function updateDetailPanel(node) {
      detailPanel.innerHTML = `
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="badge badge-cyan">${node.label}</span>
            <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">${node.tech}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 12px;">${node.desc}</p>
          <div style="font-family: var(--font-mono); font-size: 0.775rem; color: var(--cyan-primary); background: rgba(0,242,254,0.06); padding: 8px 14px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,242,254,0.25);">
            ${getArchitectureInsight(node.id)}
          </div>
        </div>
      `;
    }

    function getArchitectureInsight(id) {
      switch (id) {
        case 'client-layer':
          return 'Production Insight: Configured real-time custom HTML blocks inside Minix Desk and Vue-powered interfaces for Frappe LMS.';
        case 'api-layer':
          return 'Production Insight: Built secure REST endpoints with OAuth2 authentication and Zoom Webhook verification for ChatOps.';
        case 'app-layer':
          return 'Production Insight: Architected Meril Exim buying controllers and automated landed cost calculation in Python DocType hooks.';
        case 'queue-layer':
          return 'Production Insight: Offloaded heavy report calculations, PDF generation, and automated reminder emails to background Redis/RQ jobs.';
        case 'data-layer':
          return 'Production Insight: Tuned high-throughput MariaDB tables for asset allocation tracking and batch-wise finished goods traceability.';
        default:
          return 'Scalable enterprise architecture built on Frappe and Python.';
      }
    }

    function getNodeIcon(iconType) {
      switch (iconType) {
        case 'monitor':
          return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
        case 'shield':
          return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
        case 'cpu':
          return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`;
        case 'refresh':
          return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`;
        case 'database':
          return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
        default:
          return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
      }
    }

    updateDetailPanel(architectureNodes[0]);

    pipelineContainer.querySelectorAll('.arch-node').forEach(el => {
      el.addEventListener('click', () => {
        const nodeId = el.getAttribute('data-node-id');
        const nodeData = architectureNodes.find(n => n.id === nodeId);
        if (nodeData) {
          pipelineContainer.querySelectorAll('.arch-node').forEach(n => n.classList.remove('active'));
          el.classList.add('active');
          updateDetailPanel(nodeData);
        }
      });
    });
  }

  /* ==========================================================================
     6. RENDER SKILLS MATRIX
     ========================================================================== */
  function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = skillsData.categories.map(cat => `
      <div class="glass-card skill-category-card reveal-on-scroll">
        <div class="category-header">
          <div class="category-icon">
            ${getCategoryIcon(cat.icon)}
          </div>
          <h3 class="category-title">${cat.title}</h3>
        </div>
        <div class="skill-items-list">
          ${cat.skills.map(s => `
            <div class="skill-item">
              <div class="skill-label-row">
                <span class="skill-name">${s.name} ${s.highlight ? '<span style="color: var(--cyan-primary);">★</span>' : ''}</span>
                <span class="skill-percent">${s.level}%</span>
              </div>
              <div class="skill-track">
                <div class="skill-bar" data-width="${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
          });
        }
      });
    }, { threshold: 0.2 });

    grid.querySelectorAll('.skill-category-card').forEach(card => skillObserver.observe(card));
  }

  function getCategoryIcon(type) {
    switch (type) {
      case 'layers':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
      case 'code':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
      case 'network':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`;
      case 'database':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
      default:
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
    }
  }

  /* ==========================================================================
     7. NAVIGATION, FORMS, CLOCK & UTILITIES
     ========================================================================== */
  function initNavScroll() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    const mobileToggle = document.getElementById('mobileMenuToggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
          if (navMenu.style.display === 'flex') {
            navMenu.style.display = '';
          } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '76px';
            navMenu.style.left = '24px';
            navMenu.style.right = '24px';
            navMenu.style.background = 'rgba(10, 15, 29, 0.95)';
            navMenu.style.padding = '20px';
            navMenu.style.borderRadius = '16px';
            navMenu.style.border = '1px solid rgba(0, 242, 254, 0.3)';
          }
        }
      });
    }
  }

  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !email || !message) {
        showToast('⚠️ Please fill out all required fields.');
        return;
      }

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
      
      showToast('🚀 Opening your email client to send message to Hardik...');
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);

      form.reset();
    });
  }

  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  window.copyToClipboard = function(text, label) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ Copied ${label} to clipboard: ${text}`);
      });
    } else {
      const input = document.createElement('textarea');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
      showToast(`✓ Copied ${label} to clipboard: ${text}`);
    }
  };

  function initLiveClock() {
    const clockEl = document.getElementById('localClock');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeStr = now.toLocaleTimeString('en-US', options);
      clockEl.textContent = `${timeStr} IST (Gujarat, India)`;
    }

    update();
    setInterval(update, 1000);
  }

  function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach(el => observer.observe(el));
  }

  window.toggleResumePreview = function(show) {
    if (show) {
      document.body.classList.add('print-preview-mode');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.classList.remove('print-preview-mode');
    }
  };

  // DOM Bootstrapping
  document.addEventListener('DOMContentLoaded', () => {
    initThreeHero();
    initArchitectureVisualizer();
    renderTimeline();
    renderCaseStudies('All');
    initFilterTabs();
    renderSkills();
    initNavScroll();
    initContactForm();
    initLiveClock();
    initScrollAnimations();
  });

})();
