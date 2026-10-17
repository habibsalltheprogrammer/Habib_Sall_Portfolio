/* =========================================================
   PORTFOLIO CONTENT DATA
   Edit this file to add / update projects, achievements,
   stats and experience — the page renders from this object.
   ========================================================= */
const PORTFOLIO_DATA = {
  flagship: {
    title: "Achievers Gospel Chapel",
    subtitle: "Flagship Website Project",
    overview: "A fully responsive church website built from scratch with HTML, CSS and JavaScript — deployed live on GitHub Pages. Complete with sermons, events, ministries and a media gallery.",
    tech: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub Pages"],
    features: ["Responsive design", "Home, About & Ministries pages", "Sermons & media library", "Events calendar", "Photo gallery", "Interactive navigation", "Smooth scrolling & animation", "Mobile navigation", "Cross-browser tested", "Performance optimized"],
    liveUrl: "https://achieversgospelchapel.org/",
    codeUrl: "https://github.com/habibsalltheprogrammer/achieversgospelchapel"
  },
  software: [
    {
      title: "SYLREG & Kids Investment Limited",
      glyph: "SK",
      image: "assets/images/projects/sylreg-kids-logo.jpg",
      summary: "Multi-page company website covering services, a Longrich products showcase, partner companies and a working contact form.",
      tech: ["HTML5", "CSS3", "JavaScript", "Supabase", "Formspree", "Vercel"],
      features: ["Home, About, Services, Partners & Contact pages", "Longrich products section", "Partners section (Watu and others)", "Contact form delivering to company email"],
      liveUrl: "https://sylregand-kids-investment-limited.vercel.app/services.html"
    },
    {
      title: "SmartLibrary Management System",
      summary: "Desktop library management suite handling authentication, book records, and borrow/return workflows.",
      tech: ["Python", "PyQt5", "PostgreSQL", "psycopg2"],
      features: ["User authentication", "Book management", "Student records", "Borrow & return tracking"],
      codeUrl: "https://github.com/habibsalltheprogrammer/MiniLibrarySystem"
    },
    {
      title: "Njala University Fees Registration System",
      summary: "A full student-fees platform with a student portal, admin dashboard and automated receipt generation.",
      tech: ["Flask", "HTML/CSS/JS", "PostgreSQL", "JWT"],
      features: ["Student portal", "Admin dashboard", "Receipt generator", "Reporting & payments"],
      codeUrl: "https://github.com/habibsalltheprogrammer/web_Design_DCOMP204_Assignment_1_BSEM1201_905004982_SEM4"
    },
    {
      title: "Programming Wing App",
      summary: "A mobile-first student community app with clean navigation and a modern interface.",
      tech: ["Flutter", "Dart"],
      features: ["Student-focused UI", "Native mobile interface", "Modern mobile design system"],
      codeUrl: "https://github.com/habibsalltheprogrammer/inclusive-tutor"
    },
    {
      title: "E-Commerce Inventory API",
      summary: "A group-built inventory and order management API for e-commerce operations.",
      tech: ["REST API", "PostgreSQL", "JWT Auth"],
      features: ["Inventory tracking", "Order endpoints", "Role-based auth"],
      codeUrl: "https://github.com/chief172/Group-4-Final-Prog-E-Commerce-Inventory-API-BSEM-1201"
    },
    {
      title: "OOP Method Coursework",
      summary: "A collection of object-oriented programming exercises exploring core software design principles.",
      tech: ["OOP", "Design Patterns"],
      features: ["Encapsulation & inheritance drills", "Clean class architecture"],
      codeUrl: "https://github.com/habibsalltheprogrammer/Object_Oriented_Programming_Method2-315-_BSEM1201_905004982"
    }
  ],
  modelingAchievements: [
    { title: "Mr. Brookfields 2025", detail: "Pageant title holder" },
    { title: "Mr. Limkokwing 2025", detail: "Pageant title holder" },
    { title: "Brand Ambassador", detail: "Placeholder — update with brand name" },
    { title: "Fashion Collaboration", detail: "Placeholder — update with collaborator" }
  ],
  modelingStats: [
    { label: "Fashion Shows", value: 12 },
    { label: "Photoshoots", value: 30 },
    { label: "Campaigns", value: 6 },
    { label: "Brands", value: 5 },
    { label: "Awards", value: 2 },
    { label: "Years Active", value: 3 }
  ],
  experience: [
    {
      company: "Kagust Investment Company Limited",
      role: "Supervisor & Database Manager",
      period: "Current",
      points: ["Supervise daily operations & coordinate staff tasks", "Manage and maintain company databases", "Accurate data entry, storage & organization", "Support administrative & technical operations", "Improved workflow efficiency through better data systems"]
    },
    {
      company: "SYLREG Enterprise",
      role: "Bureau Manager",
      period: "October 2022 – March 2025",
      points: ["Managed administrative & digital operations", "Coordinated project workflows & staff activities", "Conducted staff training to improve technical efficiency", "Increased operational productivity through improved processes"]
    }
  ],
  certifications: ["Microsoft Word", "Microsoft Excel", "Microsoft Access", "Microsoft PowerPoint", "Microsoft DOS"],
  testimonials: [
    { quote: "Habib brings rare range — he ships clean, working software and then turns around and art-directs the campaign that sells it.", author: "Placeholder Name", role: "Placeholder Role, Organization" },
    { quote: "Every project he touches ends up looking more premium than the brief asked for. That instinct is not something you can teach.", author: "Placeholder Name", role: "Placeholder Role, Organization" },
    { quote: "A rare combination of engineer's precision and a designer's eye — plus he can present the work on stage as well as he builds it.", author: "Placeholder Name", role: "Placeholder Role, Organization" }
  ]
};
