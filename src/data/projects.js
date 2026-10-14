/**
 * PROJECTS DATA — EXTRACTED FROM KOMAL PAWAR'S RESUME & REPOSITORIES
 * ─────────────────────────────────────────────────────────────
 * Primary projects:
 * 1. CampusConnect — University Placement Management System (PERN Stack)
 * 2. QuickBite — Campus Food Delivery System (MERN Stack + Socket.IO)
 * 3. GRE Dashboard — Guest Relation Executive Management System (MERN Stack + Socket.IO)
 *
 * Sourced from Komal Pawar's verified credentials.
 */

export const projects = [
  {
    id: "campusconnect",
    slug: "campusconnect",
    number: "01",
    title: "CampusConnect",
    category: "AI-Assisted Placement Portal & ATS / Full-Stack TypeScript",
    shortDescription:
      "A full-stack campus placement management system featuring an AI-assisted ATS that semantically matches student resumes against company Job Descriptions (JDs) to automate candidate shortlisting.",
    overview:
      "CampusConnect is a full-stack campus placement management system featuring an AI-assisted ATS that semantically matches student resumes against company Job Descriptions (JDs) to automate candidate shortlisting.",
    problem:
      "Traditional campus recruitment relies heavily on manual resume screening, scattered Excel sheets, and WhatsApp groups, which leads to delays, human bias, and zero feedback for students. CampusConnect solves this by automating the entire lifecycle—replacing manual screening with an AI-driven ATS that ranks resumes against company JDs, enforces eligibility rules automatically, and provides transparent feedback to candidates.",
    goals: [
      "To automate the resume screening process by semantically matching student resumes against company Job Descriptions using AI and NLP embeddings.",
      "To centralize all campus recruitment workflows—job postings, applications, drives, and notices—onto a single unified digital platform.",
      "To provide transparent and explainable candidate evaluations with detailed breakdowns of matched skills, missing skills, and match percentages.",
      "To enforce automated eligibility criteria (minimum CGPA, department, and backlogs) to prevent ineligible student applications.",
      "To deliver real-time application stage tracking and instant recruitment updates for students throughout the placement lifecycle.",
      "To ensure secure, role-based data access and privacy across students, placement officers, and administrators using JWT authentication.",
    ],
    features: [
      {
        title: "RoleGuard-Based Multi-Portal Architecture",
        description:
          "Distinct, role-protected environments for Students, Placement Officers, and System Administrators with strict JWT route guards and API authorization middleware.",
      },
      {
        title: "Hugging Face Semantic AI Shortlisting Engine",
        description:
          "Transformer-powered NLP matching engine (all-MiniLM-L6-v2) that semantically compares student resumes against company Job Descriptions with transparent scoring breakdowns.",
      },
      {
        title: "Automated Student Eligibility Engine",
        description:
          "Server-side validation system that verifies student CGPA, department, and academic criteria against job requirements in real time before allowing application submission.",
      },
      {
        title: "Department-Targeted Job Postings & Drive Management",
        description:
          "Comprehensive recruitment portal enabling placement teams to publish company vacancies, set qualification criteria, target specific academic schools, and manage drive timelines.",
      },
      {
        title: "Resume Parsing & Skill Extraction Pipeline",
        description:
          "Automated PDF/DOCX resume ingestion module that parses raw text and extracts technical skills, projects, and academic background into structured database profiles.",
      },
      {
        title: "Human-in-the-Loop ATS Application Pipeline",
        description:
          "Multi-stage recruitment workflow (Applied → AI Screened → Shortlisted → Interview → Selected) featuring candidate review modals and 1-click shortlisting controls.",
      },
      {
        title: "Placement Performance & Metric Analytics",
        description:
          "Real-time summary dashboards displaying total applicant counts, resume processing ratios, criteria eligibility rates, and AI recommendation benchmarks.",
      },
      {
        title: "Real-Time Drive Notification Center",
        description:
          "In-app communication feed delivering instant alerts to students for application status updates, drive schedules, and shortlisting announcements.",
      },
    ],
    designDecisions: [
      "It provides a simple one-click application portal for students and a high-density candidate screening dashboard for placement officers.",
      "Color-coded match scores and skill tags allow recruiters to evaluate and compare top candidates in seconds without reading entire resumes.",
      "The AI only recommends scores and highlights skill gaps, keeping the final shortlisting decision strictly in the placement officer's hands.",
      "The system automatically blocks ineligible candidates based on CGPA and department criteria before submission to prevent manual filtering effort.",
    ],
    technicalNotes:
      "CampusConnect is built on an end-to-end TypeScript stack using React, Vite, and Tailwind CSS on the frontend, and a layered Node.js and Express service architecture on the backend. Data persistence is managed through Prisma ORM connected to a cloud-hosted PostgreSQL database on Supabase with connection pooling.\n\nThe platform integrates an AI screening engine powered by Hugging Face's all-MiniLM-L6-v2 transformer model, which semantically compares parsed student resumes against company Job Descriptions to generate transparent match scores and skill-gap breakdowns. System security is enforced via JWT-based Role-Based Access Control across Students, Placement Officers, and Admins, with automated server-side eligibility validation, and is deployed live on Vercel (frontend) and Render (backend).",
    challenges: [
      {
        challenge: "Overcoming rigid keyword mismatches and false negatives in resume screening",
        solution:
          "Integrated Hugging Face's all-MiniLM-L6-v2 transformer model to compute semantic vector embeddings, blending 60% semantic similarity with 40% exact keyword matching to accurately recognize technical synonyms and project context.",
      },
      {
        challenge: "Preventing database connection exhaustion and latency spikes during bulk campus drive evaluations",
        solution:
          "Migrated direct PostgreSQL database connections to Supabase transaction connection pooling over IPv4, optimizing Prisma ORM query pooling to handle concurrent batch candidate screening without timeouts or connection drops.",
      },
    ],
    lessons: [
      "Prisma ORM with TypeScript eliminates runtime data errors across complex relational recruitment schemas.",
      "Dual-layer authorization across React route guards and Express API endpoints is essential for true security.",
      "Hybrid AI (semantic NLP embeddings + keyword matching) provides explainable, bias-free resume screening.",
      "Server-side eligibility validation prevents disqualified applications at the source, eliminating manual review fatigue.",
    ],
    nextSteps: [
      "Integrate automated WhatsApp and email alerts for interview round scheduling and drive updates.",
      "Add self-service interview slot booking with Google Calendar and Zoom API integration.",
      "Implement automated offer letter generation with digital signatures and campus placement policy tracking.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Hugging Face AI",
      "all-MiniLM-L6-v2",
      "JWT",
      "Vercel",
      "Render",
    ],
    liveUrl: "https://placement-portal-ashy.vercel.app/login",
    githubUrl: "https://github.com/komalpawar79/Placement-Portal",
    status: "live",
    featured: true,
    image: "/images/campusconnect-main.png",
    detailImage: "/images/campusconnect-main.png",
    imageAlt: "CampusConnect candidate sign-in portal gateway with institutional credentials, Google OAuth 2.0, and verified placement metrics",
    accentColor: "#C7FF4A",
    bgColor: "#0A1017",
    screenshots: [
      {
        id: "main-gateway",
        url: "/images/campusconnect-main.png",
        title: "Candidate Sign-In & Authentication Gateway",
        subtitle: "Primary Portal Gateway",
        category: "Authentication & Portal Gateway",
        description:
          "Institutional gateway supporting roll number / institutional email sign-in, Google OAuth 2.0 single sign-on, and real-time university placement metrics (1,420+ offers, 94.2% placement rate, ₹42 LPA highest CTC, 180+ recruiters).",
        role: "All Users / Candidate Access",
        aspectRatio: "1024/470",
        isMain: true,
        highlights: [
          "Secure institutional authentication with JWT & Bcrypt",
          "One-click Google OAuth 2.0 single sign-on",
          "Live university placement highlights ticker",
          "Role-directed session routing upon authorization",
        ],
      },
      {
        id: "student-dashboard",
        url: "/images/campusconnect-student-dashboard.png",
        title: "Student Dashboard & Placement Journey",
        subtitle: "Candidate Workflow Portal",
        category: "Student Workflow Portal",
        description:
          "Interactive student console featuring profile completeness milestone gating (Profile Verification, Resume Parsing, Department Gating), active recruitment drive notices, and end-to-end application stage tracking.",
        role: "Student / Candidate",
        aspectRatio: "1024/470",
        isMain: false,
        highlights: [
          "Profile completeness verification milestones",
          "Automated eligibility gating prior to application submission",
          "Live notice board for placement drive schedules",
          "Personalized stage tracking across interview rounds",
        ],
      },
      {
        id: "admin-dashboard",
        url: "/images/campusconnect-admin-dashboard.png",
        title: "Placement Cell Intelligence & Operations",
        subtitle: "Coordinator Operations Hub",
        category: "Placement Cell Management",
        description:
          "Centralized operational hub for placement coordinators to monitor real-time application volume trends, evaluate department performance, and manage active corporate drives.",
        role: "Placement Cell / Department Admins",
        aspectRatio: "1024/466",
        isMain: false,
        highlights: [
          "Application volume trend graphs with historical benchmarks",
          "Department-wise candidate participation breakdown",
          "Active recruitment drive status indicators",
          "Streamlined candidate shortlisting workflows",
        ],
      },
      {
        id: "analytics-reporting",
        url: "/images/campusconnect-analytics.png",
        title: "Enterprise Placement Analytics & CTC Reports",
        subtitle: "Reporting & Insights Engine",
        category: "Executive Analytics & Reporting",
        description:
          "Executive analytics module delivering interactive CTC package distribution brackets (Above ₹20 LPA, ₹10-20 LPA, ₹6-10 LPA, Up to ₹6 LPA), company-wise hiring volume distributions, and one-click institutional Excel export.",
        role: "Leadership & Placement Cell",
        aspectRatio: "1024/470",
        isMain: false,
        highlights: [
          "Interactive CTC package distribution breakdown",
          "Company-wise hiring volume visualization",
          "Department placement percentage comparisons",
          "One-click XLSX report generation for university reporting",
        ],
      },
    ],
  },
  {
    id: "quickbite",
    slug: "quickbite",
    number: "02",
    title: "QuickBite",
    category: "Campus Online Food Ordering & Delivery / Real-Time MERN Stack",
    shortDescription:
      "A full-stack, multi-vendor Campus Online Food Ordering & Delivery Management System built specifically for college campuses and university ecosystems.",
    overview:
      "QuickBite is a full-stack, multi-vendor Campus Online Food Ordering & Delivery Management System built specifically for college campuses and university ecosystems.\n\nIt eliminates long cafeteria queues by allowing students and faculty to browse menus from multiple on-campus canteens, place pre-orders, pay via a built-in digital wallet, and track order preparation in real-time.",
    problem:
      "Traditional campus canteens suffer from long queues, counter congestion, and payment delays during short break hours. QuickBite solves this by enabling students to pre-order food from multiple canteens using an integrated 1-click digital wallet and real-time live order tracking. This eliminates waiting lines, prevents kitchen chaos, and lets students pick up their freshly prepared food instantly with zero wait time.",
    goals: [
      "Build an intuitive multi-canteen food ordering interface with dynamic search, dietary tagging (Veg/Non-Veg), and instant category filtering.",
      "Implement bidirectional WebSocket communication using Socket.IO to provide real-time, zero-refresh order lifecycle updates from kitchen to customer.",
      "Integrate a secure campus digital wallet system with atomic balance deductions to enable 1-click, friction-free cashless checkouts.",
      "Develop specialized role-based portals (RBAC) tailored for Students (ordering & tracking), Canteen Managers (kitchen board & stock), and Super Admins.",
      "Empower canteen operators with a live kitchen order queue and instant stock availability toggles to eliminate stockout disappointments.",
      "Deliver a centralized admin dashboard featuring campus-wide revenue analytics, peak-hour sales trends, user management, and broadcast announcements.",
    ],
    features: [
      {
        title: "Multi-Canteen Pre-Orders",
        category: "ORDERING & DISCOVERY",
        description:
          "Browse live menus across all campus dining halls, filter by dietary preferences (Veg/Non-Veg), customize items, and place timed pre-orders to skip cafeteria lines.",
      },
      {
        title: "Live WebSocket Order Tracking",
        category: "REAL-TIME SYNC",
        description:
          "Real-time bidirectional status updates powered by Socket.IO (Pending → Preparing → Ready for Pickup → Completed) with zero manual page refreshes.",
      },
      {
        title: "Digital Wallet & 1-Click Checkout",
        category: "CAMPUS PAYMENTS",
        description:
          "Integrated prepaid wallet with atomic balance deduction, instant top-ups, transaction audit trails, and friction-free cashless checkout.",
      },
      {
        title: "Canteen Manager Kitchen Board",
        category: "KITCHEN OPERATIONS",
        description:
          "Dedicated operational portal for kitchen staff to manage incoming order queues, toggle real-time item availability (out-of-stock), and view daily sales summaries.",
      },
      {
        title: "Centralized Admin Analytics",
        category: "PLATFORM GOVERNANCE",
        description:
          "Comprehensive administrative dashboard featuring campus-wide revenue trends, peak-hour order volume charts, canteen onboarding, and broadcast announcements.",
      },
      {
        title: "RBAC & Zustand State Management",
        category: "SECURITY & INFRASTRUCTURE",
        description:
          "Secure JWT authentication paired with granular role-based access control (RBAC), backed by high-performance Zustand stores for persistent carts and instant UI responsiveness.",
      },
    ],
    designDecisions: [
      "Thumb-Friendly Controls (Mobile Navigation): Floating cart sheets and horizontal category pills enable effortless single-handed ordering on phones.",
      "Animated Status Badges (Visual Feedback): Color-coded pulsating badges display live order progress clearly at a glance.",
      "High-Contrast Typography (Kitchen Display): Oversized ticket numbers ensure easy readability from across busy, steamy kitchen counters.",
      "Optimistic Cart Updates (UI Performance): Instant button feedback paired with background validation prevents out-of-stock errors.",
      "1-Click Wallet Modal (Checkout Flow): In-app wallet eliminates slow external gateway redirects for fast, zero-lag payments.",
    ],
    technicalNotes:
      "QuickBite is built on the MERN stack using a responsive React 18 and Tailwind CSS frontend with Zustand for lightweight client state management. The backend runs on Node.js and Express.js, integrated with MongoDB Atlas for data modeling and JWT-based RBAC for secure multi-role access.\n\nReal-time order synchronization between students and kitchen dashboards is powered by bidirectional Socket.IO WebSockets, while the digital wallet leverages atomic database operations ($inc) to guarantee concurrency-safe transactions. The system is deployed in production across Vercel (frontend) and Render (backend).",
    challenges: [
      {
        challenge:
          "Preventing race conditions and double-spending during concurrent wallet checkouts at peak rush hours.",
        solution:
          "Replaced multi-step read-modify-save queries with atomic MongoDB $findOneAndUpdate operations using $inc balance decrements and $gte threshold guards to guarantee zero negative balances.",
      },
      {
        challenge:
          "Managing cross-origin WebSocket stability and connection recovery across separate cloud environments (Vercel & Render).",
        solution:
          "Configured dynamic CORS origin resolvers in Express and Socket.IO, backed by client-side exponential backoff reconnection strategies to gracefully handle Render free-tier cold starts.",
      },
    ],
    lessons: [
      "Zustand provides a much lighter, boilerplate-free alternative to Redux for managing real-time cart and WebSocket state.",
      "Room-scoped Socket.IO channels and auto-reconnection are vital for reliable live tracking over spotty campus Wi-Fi.",
      "Kitchen displays demand high-contrast, glanceable typography and large tap targets over consumer-app visual aesthetics.",
      "Atomic database updates ($inc) are essential to prevent race conditions and double-spending during peak checkout rushes.",
    ],
    nextSteps: [
      "Deploy QR-code scanning at pickup counters to verify student identity and mark orders as collected in a single tap.",
      "Integrate AI-driven prep time estimation that dynamically adjusts wait times based on real-time kitchen queue volume.",
      "Introduce semester meal subscriptions and collaborative group carts with automatic bill-splitting for study groups.",
    ],
    technologies: [
      "React 18",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB Atlas",
      "JWT",
      "Vercel",
      "Render",
    ],
    liveUrl: "https://quickbite-online-food-delivery-webs.vercel.app/",
    githubUrl: "https://github.com/komalpawar79/canteen",
    status: "live",
    featured: true,
    image: "/images/quickbite-hero.png",
    detailImage: "/images/quickbite-hero.png",
    imageAlt: "QuickBite campus food ordering and delivery system showing multi-canteen ordering, live kitchen management, and role-based administration",
    accentColor: "#C7FF4A",
    bgColor: "#0A140C",
    screenshots: [
      {
        id: "quickbite-hero",
        url: "/images/quickbite-hero.png",
        title: "Campus Food Companion & Hero Portal",
        subtitle: "Main Consumer Landing Gateway",
        category: "Consumer Food Ordering Gateway",
        description:
          "Hero landing page allowing students and campus faculty to order meals in 3 taps, highlighting 30-min delivery, live order tracking, and statistics across 10K+ students, 5 canteens, and 2K+ dishes.",
        role: "Students & Campus Consumers",
        aspectRatio: "1906/866",
        isMain: true,
        highlights: [
          "Frictionless 3-tap food ordering flow",
          "Live campus delivery highlights (30-min guarantee)",
          "Campus-wide metrics (10K+ students, 5 canteens, 2K+ dishes)",
          "Direct entry into multi-canteen menus and active cart",
        ],
      },
      {
        id: "quickbite-menu",
        url: "/images/quickbite-menu.png",
        title: "Multi-Canteen Food Catalog & Filter Engine",
        subtitle: "Canteen-Wise Food Catalog",
        category: "Food Menu & Cart Ordering",
        description:
          "Comprehensive multi-canteen food catalog with interactive filter tabs (Tuck-Shop, Tirupati, Asifa Sandwich, Indian Fresh Juice), price tags, preparation times, and instant add-to-cart controls.",
        role: "Students & Campus Faculty",
        aspectRatio: "1897/862",
        isMain: false,
        highlights: [
          "One-click canteen filtering across campus food spots",
          "Live stock counts and 40+ item catalog browsing",
          "Preparation time indicators (30-min kitchen clock)",
          "Zustand-powered optimistic cart management",
        ],
      },
      {
        id: "quickbite-user-orders",
        url: "/images/quickbite-user-orders.png",
        title: "Curated Menu Delights & Food Exploration",
        subtitle: "Personalized Food Discovery",
        category: "Curated Menu Discovery",
        description:
          "Personalized menu exploration feed showcasing popular campus delicacies (Samosa, Masala Dosa, Mini Veg Thali, Veg Grilled Sandwich) with ratings, prices, and one-click cart additions.",
        role: "Students & Campus Consumers",
        aspectRatio: "1892/863",
        isMain: false,
        highlights: [
          "Dynamic algorithmic food recommendation feed",
          "High-contrast visual cards with star ratings & price tags",
          "Direct single-click item add-to-cart interaction",
          "Responsive touch-optimized layout for mobile ordering",
        ],
      },
      {
        id: "quickbite-canteen-management",
        url: "/images/quickbite-canteen-management.png",
        title: "Canteen Kitchen & Menu Item Management",
        subtitle: "Vendor Kitchen Control Tower",
        category: "Canteen Vendor Operations",
        description:
          "Dedicated live operations console for canteen managers (e.g. Indian Fresh Juice Center) to add new menu items, update item pricing, and toggle real-time availability (Mark Unavailable) during stockouts.",
        role: "Canteen Managers & Kitchen Staff",
        aspectRatio: "1901/865",
        isMain: false,
        highlights: [
          "Real-time item availability toggle preventing out-of-stock orders",
          "Instant menu item creation with category and pricing tags",
          "Live synchronization with customer-facing menus",
          "Multi-action item controls (Edit, Delete, Mark Unavailable)",
        ],
      },
      {
        id: "quickbite-admin-dashboard",
        url: "/images/quickbite-admin-dashboard.png",
        title: "Platform User Governance & Role Controls",
        subtitle: "Super-Admin User Management",
        category: "Platform Administration",
        description:
          "Master administrative console providing oversight across all platform accounts (Canteen Managers, Staff, Faculty, Admins) with role tags, university IDs, assigned canteen associations, and status toggles.",
        role: "Super-Admin (Platform Operators)",
        aspectRatio: "1901/867",
        isMain: false,
        highlights: [
          "Granular role-based user directory (Admin, Canteen Manager, Faculty)",
          "University ID tracking and canteen mapping",
          "1-click active/inactive user status toggle controls",
          "Admin account provisioning with secure authentication",
        ],
      },
      {
        id: "quickbite-admin-management",
        url: "/images/quickbite-admin-management.png",
        title: "Campus Canteen Management & Operations Hub",
        subtitle: "Campus Vendor Governance",
        category: "Campus Vendor Oversight",
        description:
          "Centralized campus dining hub managing all active canteens (Meeting Point, Indian Fresh Juice Center, Asifa Sandwich, Tirupati, Tuck-Shop) with campus locations, operating hours, ratings, and status controls.",
        role: "Super-Admin & Campus Authorities",
        aspectRatio: "1907/865",
        isMain: false,
        highlights: [
          "Campus-wide dining spot registry with block & floor locations",
          "Operating hours scheduling (07:00 - 22:00)",
          "Campus-wide vendor status toggles and rating metrics",
          "New canteen registration and building assignment",
        ],
      },
    ],
  },
  {
    id: "gre-dashboard",
    slug: "gre-dashboard",
    number: "03",
    title: "GRE Dashboard",
    category: "Guest Relation Executive Management / Real-Time MERN Stack",
    shortDescription:
      "A real-time Guest Relation Executive (GRE) Management System designed for real estate site offices and sales lounges to log visitor walk-ins, attribute leads to managers, and track staff attendance.",
    overview:
      "The GRE Dashboard is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed as a Guest Relation Executive (GRE) Management System—primarily tailored for real estate site offices, sales lounges, and customer reception desks.\n\nInstead of relying on manual paper registers or fragmented spreadsheets, it serves as a centralized, real-time command center for logging visitor walk-ins, assigning leads to sales managers, monitoring staff attendance, and analyzing site performance.",
    problem:
      "In fast-paced sales lounges and real estate site offices, managing visitor traffic through manual registers and disjointed spreadsheets leads to lost leads, delayed response times, and attribution conflicts. The GRE Dashboard replaces this manual chaos with a centralized, real-time digital command center to track walk-ins, assign managers, and monitor performance instantly.",
    goals: [
      "Build an intuitive, responsive interface for rapid visitor logging, dynamic search, and multi-parameter filtering.",
      "Implement secure JWT authentication and role-based access control across GRE staff, managers, and admins.",
      "Enable real-time bidirectional communication via WebSockets for instant, zero-refresh floor updates.",
      "Track daily staff attendance, check-in timings, and live manager availability before client allocation.",
      "Deliver a centralized dashboard featuring visual performance analytics and one-click Excel report exports.",
    ],
    features: [
      {
        title: "Role-Based Authentication",
        category: "SECURITY & ACCESS",
        description:
          "Secure JWT login with Bcrypt password encryption, protected frontend route guards, and role-based permissions for GRE staff, managers, and admins.",
      },
      {
        title: "Live Floor Updates & Feeds",
        category: "REAL-TIME SYNC",
        description:
          "Bidirectional Socket.IO communication providing instant client intake notifications and live status updates across desks without page refreshes.",
      },
      {
        title: "Visitor Intake & Lead Attribution",
        category: "CLIENT MANAGEMENT",
        description:
          "End-to-end client logging with form numbers, phone validation, lead source tagging (Walk-in, Channel Partner, CRM, Revisit), and manager assignment.",
      },
      {
        title: "Daily Roster & Punctuality Tracking",
        category: "STAFF ATTENDANCE",
        description:
          "Real-time attendance logging for Closing Managers, Sourcing Managers, GRE, and CRM staff with check-in timings and status indicators (Present, Absent, Leave).",
      },
      {
        title: "Visual Dashboards & Excel Export",
        category: "ANALYTICS & REPORTS",
        description:
          "Interactive Recharts data visualization for footfall trends and manager conversion rates, along with one-click filtered Excel (.xlsx) report generation.",
      },
      {
        title: "Responsive Multi-Device UI",
        category: "USER EXPERIENCE",
        description:
          "Clean Tailwind CSS layout with quick search, multi-parameter date filters, modal editors, responsive tables, and smooth cross-device adaptability.",
      },
      {
        title: "Scalable Cloud Architecture",
        category: "INFRASTRUCTURE",
        description:
          "MERN stack deployment configured for cloud hosting with MongoDB Atlas database pooling, CORS policies, and Helmet security headers.",
      },
    ],
    designDecisions: [
      "High-Contrast Status Indicators: Color-coded badges for client attendance and staff presence (Present, Absent, Late) enabling instant status checks at a single glance.",
      "Single-Screen Tabbed Navigation: Persistent sidebar tabs and responsive headers allowing front-desk receptionists to switch between logging, tables, and reports without page reloads.",
      "Zero-Refresh Socket Synchronization: Live WebSocket feeds updating table rows and counters across multiple front-desk screens simultaneously.",
      "Context-Aware Quick Filters: One-click date range presets and dropdown filters designed for rapid querying during peak footfall hours.",
    ],
    technicalNotes:
      "The application is built on the MERN stack (MongoDB, Express, React 18, Node.js) with a decoupled, cloud-ready architecture. The frontend is bundled using Vite and styled with Tailwind CSS, featuring React Router v6 for protected route guards and Recharts for data visualization.\n\nThe backend runs an Express.js REST API with Socket.IO for bidirectional real-time synchronization, secured using JWT authentication, Bcrypt hashing, and Helmet. Data is modeled via Mongoose using compound-indexed schemas for high-speed querying, while SheetJS (xlsx) powers dynamic server-side Excel report generation. The system is deployed with the client on Vercel and the API service on Render.",
    challenges: [
      {
        challenge:
          "Synchronizing live visitor logs across multiple reception counters without manual reloads or data conflicts.",
        solution:
          "Integrated bidirectional Socket.IO event broadcasting and dynamic refresh triggers to push instant state updates across all connected front-desk clients.",
      },
      {
        challenge:
          "Timezone discrepancies and day-boundary mismatches during custom date-range analytics filtering.",
        solution:
          "Implemented explicit local-date string parsing with normalized start-of-day (00:00) and end-of-day (23:59) boundaries paired with compound MongoDB indexes.",
      },
      {
        challenge:
          "Generating large, multi-filtered Excel reports on the fly without blocking server memory or degrading API performance.",
        solution:
          "Utilized lean database projections (.lean()) combined with in-memory SheetJS binary streaming to export structured spreadsheets instantly.",
      },
      {
        challenge:
          "Preventing duplicate staff attendance entries while tracking varying shifts and absence reasons.",
        solution:
          "Engineered compound unique indexing on manager, role, and date fields alongside a unified check-in and reason capture workflow.",
      },
    ],
    lessons: [
      "Real-time WebSocket synchronization completely eliminates floor communication delays and manual desk follow-ups.",
      "Compound database indexing paired with lean queries ensures high-speed filtering even with large visitor datasets.",
      "Dual-layer security via frontend route guards and backend JWT middleware guarantees strict role-based access control.",
    ],
    nextSteps: [
      "Integrate automated WhatsApp and SMS gateways for instant visitor welcome messages and manager alerts.",
      "Implement an automated round-robin algorithm to distribute incoming leads evenly among available managers.",
      "Introduce OCR and QR-code scanning to instantly parse visitor ID cards and paper inquiry forms.",
    ],
    technologies: [
      "React 18",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "Socket.IO",
      "Recharts",
      "SheetJS (xlsx)",
      "JWT & Bcrypt",
      "Vercel",
      "Render",
    ],
    liveUrl: "https://gre-woad.vercel.app/dashboard",
    githubUrl: "https://github.com/komalpawar79/Guest-Relation-Executive-",
    status: "live",
    featured: true,
    image: "/images/OverviewDashboard.png",
    detailImage: "/images/OverviewDashboard.png",
    imageAlt:
      "GRE Dashboard real-time guest relation executive management system showing visitor walk-ins, sales manager attribution, and attendance analytics",
    accentColor: "#C7FF4A",
    bgColor: "#09140E",
    screenshots: [
      {
        id: "overview-dashboard",
        url: "/images/OverviewDashboard.png",
        title: "Real-Time Floor Command & Visitor Analytics",
        subtitle: "Overview Dashboard",
        category: "Real-Time Floor Command",
        description:
          "Central executive command center displaying real-time footfall counters (Total Clients, Attended, Pending, Attendance Rate), interactive Recharts trend graphs for daily traffic and manager conversions, and multi-parameter date/manager filters with one-click Excel export.",
        role: "GRE Reception & Operations Leadership",
        aspectRatio: "1887/863",
        isMain: true,
        highlights: [
          "Live footfall KPI counters with 100% attendance rate tracking",
          "Interactive Recharts line and bar graphs for traffic trends",
          "Multi-parameter date and manager filtering controls",
          "One-click filtered Excel (.xlsx) report export",
        ],
      },
      {
        id: "clients-list",
        url: "/images/ClientsList.png",
        title: "Visitor Intake & Lead Attribution Directory",
        subtitle: "Clients Roster",
        category: "Lead Management & Attribution",
        description:
          "Real-time visitor directory logging walk-ins, channel partners, and CRM visits with client contact details, lead source badges, assigned Closing & Sourcing Managers, inquiry remarks, and inline status/action controls.",
        role: "GRE Desk & Sales Floor Reception",
        aspectRatio: "1901/863",
        isMain: false,
        highlights: [
          "Color-coded lead source tagging (Walk-in, Channel Partner, CRM)",
          "Closing and Sourcing Manager lead attribution mapping",
          "Zero-refresh WebSocket state updates across front-desk terminals",
          "Inline client status toggles and record management",
        ],
      },
      {
        id: "attendance-intake",
        url: "/images/AttendanceStaff.png",
        title: "Daily Staff Attendance Intake & Status Logging",
        subtitle: "Mark Attendance",
        category: "Staff Roster & Attendance",
        description:
          "Operational check-in console allowing front-desk GREs to log attendance for Closing Managers, Sourcing Managers, and CRM staff with shift timings, reason notes, and live presence metrics (Total Days, Present, Absent, Late).",
        role: "GRE Front-Desk & Shift Coordinators",
        aspectRatio: "1896/866",
        isMain: false,
        highlights: [
          "Role-specific manager selection (Closing, Sourcing, GRE, CRM)",
          "Check-in timestamp and absence reason documentation",
          "Live summary cards displaying presence and punctuality ratios",
          "Compound uniqueness check preventing duplicate daily entries",
        ],
      },
      {
        id: "staff-attendance-stats",
        url: "/images/StaffAttendance.png",
        title: "Staff Attendance Analytics & Punctuality Board",
        subtitle: "Staff Attendance",
        category: "Team Punctuality & Governance",
        description:
          "Comprehensive staff roster tracking attendance metrics across the entire sales and desk team, featuring individual attendance percentages with progress bars, punctuality breakdown (Present, Absent, Late), and date filters.",
        role: "Sales Management & Site Operations",
        aspectRatio: "1892/860",
        isMain: false,
        highlights: [
          "Attendance percentage calculation with visual progress bars",
          "Role-grouped roster covering GRE, Closing & Sourcing staff",
          "Granular punctuality tracking (Present, Late, Absent counts)",
          "Live availability check prior to client allocation",
        ],
      },
      {
        id: "reports-engine",
        url: "/images/ReportsBasedOnClients.png",
        title: "Periodic Client Reporting & Export Engine",
        subtitle: "Reports Generator",
        category: "Executive Analytics & Export",
        description:
          "Dedicated reporting portal providing selectable time-horizon statistics (Daily Report, Monthly Report, Yearly Report) for auditing site footfall patterns, manager throughput, and exporting formatted spreadsheets.",
        role: "Branch Managers & Executive Leadership",
        aspectRatio: "1916/867",
        isMain: false,
        highlights: [
          "Configurable reporting modes: Daily, Monthly, and Yearly",
          "Normalized date-boundary querying for accurate aggregates",
          "Lean query execution for rapid report compilation",
          "Direct integration with SheetJS server-side Excel exporter",
        ],
      },
      {
        id: "gre-login",
        url: "/images/GRELoginDashboard.png",
        title: "Role-Based Authentication & Reception Portal Gateway",
        subtitle: "Login Gateway",
        category: "Security & Access Control",
        description:
          "Secure entrance portal protected by JWT authentication and Bcrypt password hashing, providing role-differentiated access routing for GRE staff, Closing/Sourcing managers, and administrators.",
        role: "All Personnel (GRE, Managers, Admin)",
        aspectRatio: "1917/862",
        isMain: false,
        highlights: [
          "JWT authentication with secure token persistence",
          "Role-based redirection to assigned operational dashboards",
          "Bcrypt-encrypted credentials and route protection guards",
          "Modern glassmorphism UI designed for high-density reception desks",
        ],
      },
    ],
  },
];

/**
 * Returns a project by its slug.
 */
export function getProjectBySlug(slug) {
  return (
    projects.find(
      (p) =>
        p.slug === slug ||
        (slug === "project-three" && p.id === "gre-dashboard")
    ) || null
  );
}

/**
 * Returns projects marked as featured (shown on the homepage).
 */
export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

/**
 * Returns the previous and next projects relative to a given slug.
 */
export function getAdjacentProjects(slug) {
  const current = getProjectBySlug(slug);
  const idx = current ? projects.findIndex((p) => p.id === current.id) : -1;
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}

export default projects;
