export const SITE = {
  name: "Samuel Ruiz",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://samueldeveloper.com",
  title: "Samuel Ruiz | Senior React & Next.js Developer for Hire",
  shortTitle: "Samuel Ruiz — Senior React Developer",
  description:
    "Senior React & Next.js developer with 10+ years building fast, accessible, SEO-ready apps for startups, FinTech and local businesses. See my work and hire me.",
  locale: "en_US",
  themeColor: "#0b0a12",
  contactFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfh2cH27ONfjGIoPsmiqrg5c3p-GqyE8NycH2EHcDtQvol1kA/viewform",
  contactFormEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfh2cH27ONfjGIoPsmiqrg5c3p-GqyE8NycH2EHcDtQvol1kA/viewform?embedded=true",
} as const;

export const OWNER = {
  firstName: "Samuel",
  fullName: "Samuel Ruiz",
  job: "Senior React & Next.js Developer",
  careerStartedYear: 2016,
  picture: "/images/samuel.webp",
  pictureSize: { width: 800, height: 723 },
  tagline: "I build web apps people love to use — and Google loves to rank.",
  intro:
    "Founder-minded front-end engineer. I turn ideas into fast, accessible, search-optimized products — from a first MVP to a platform that has to scale.",
  about: [
    "I started as a Computer Science student at California State University, East Bay, launched my own gig-payment startup (AlliesPro) before graduating, and went on to become the first employee at Bond.tech, building FinTech products where correctness and trust are non-negotiable.",
    "That path taught me to think like an owner: ship the smallest thing that proves the idea, measure it, then make it excellent. I care about pixel-perfect UI, clean architecture, test-driven development and the invisible details — Core Web Vitals, accessibility and SEO — that decide whether a site actually converts.",
  ],
} as const;

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "Product & MVP Builds",
    text: "Idea to launch with React, Next.js and a pragmatic back end. Real-time features, payments and auth included.",
    icon: "rocket",
  },
  {
    title: "Fast, SEO-ready Websites",
    text: "Semantic markup, structured data and Core Web Vitals tuned so customers find you — and the page loads before they blink.",
    icon: "search",
  },
  {
    title: "Accessible, Responsive UI",
    text: "Mobile-first interfaces built to WCAG guidelines. Keyboard friendly, screen-reader friendly, beautiful on every screen.",
    icon: "layout",
  },
  {
    title: "Architecture & Testing",
    text: "Scalable component systems, micro-front-end migrations and Jest / Testing Library suites that keep releases boring.",
    icon: "shield",
  },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS/SCSS", "Vue & Nuxt"],
  },
  {
    title: "Back-end",
    items: ["Node.js & Express", "REST & GraphQL", "Postgres & Supabase", "Firebase", "Stripe"],
  },
  {
    title: "Quality",
    items: ["Jest & Testing Library", "TDD / BDD", "Accessibility (WCAG)", "Core Web Vitals", "Technical SEO"],
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  kind: string;
  description: string;
  outcome: string;
  stack: readonly string[];
  websiteURL?: string;
  repositoryURL?: string;
  videoURL?: string;
  image?: { src: string; width: number; height: number; alt: string };
  featured?: boolean;
};

export const PROJECTS: readonly Project[] = [
  {
    slug: "inri-paint-and-wall",
    title: "INRI Paint & Wall",
    kind: "Local business website · Lead generation",
    description:
      "A conversion-focused website for a family-owned painting and drywall company in Garland, TX. Services, service areas, pricing, reviews and an estimate request flow, with click-to-call and text buttons on every section.",
    outcome:
      "Built to rank for local searches and turn visitors into estimate requests.",
    stack: ["Next.js", "React", "TypeScript", "Local SEO", "Structured data"],
    websiteURL: "https://www.inripaintwall.com/",
    featured: true,
  },
  {
    slug: "djtip-me",
    title: "DJTip.me",
    kind: "Real-time SaaS · Payments",
    description:
      "DJs accept song requests and tips from the crowd in real time. Fans request a song and boost its priority with a tip.",
    outcome:
      "Live request queue with Stripe payments and instant updates for the DJ.",
    stack: ["Next.js", "TypeScript", "Firebase Realtime DB", "Firebase Auth", "Stripe"],
    websiteURL: "https://djtip.me",
    repositoryURL: "https://github.com/samsoftwaredev/djtips",
    image: {
      src: "/images/djtipme.webp",
      width: 1200,
      height: 587,
      alt: "DJTip.me home page showing the song request and tipping interface",
    },
  },
  {
    slug: "doit4jesus",
    title: "DoIt4Jesus",
    kind: "Community web app · Audio",
    description:
      "A social app that helps Catholics pray the rosary together. See who is online, listen to the rosary, adjust settings and share prayer intentions.",
    outcome:
      "Users stay connected and exchange messages while audio plays without interruption.",
    stack: ["Next.js", "React", "TypeScript", "Styled-Components", "Third-party APIs"],
    websiteURL: "https://doit4jesus.com",
    repositoryURL: "https://github.com/samsoftwaredev/doit4jesus-app",
    image: {
      src: "/images/doit4jesus.webp",
      width: 1200,
      height: 649,
      alt: "DoIt4Jesus rosary app main page",
    },
  },
  {
    slug: "alliespro",
    title: "AlliesPro",
    kind: "Startup · FinTech marketplace",
    description:
      "A gig search and payments platform where freelancers and clients match, collaborate and transact securely. Funds are held until a date or goal is met, then released to the freelancer.",
    outcome:
      "Founded and launched as a student; covered by the campus newspaper.",
    stack: ["Vue", "Nuxt.js", "Node.js", "Firebase", "Payments APIs"],
    videoURL: "https://www.youtube.com/watch?v=ofWu0Mogv2Q&t=16s",
    image: {
      src: "/images/alliespro.webp",
      width: 1200,
      height: 684,
      alt: "AlliesPro website home page",
    },
  },
];

export const AWARDS = [
  {
    kind: "Article",
    title: "Taming a chaotic codebase with Micro Front-Ends",
    text: "How a monolithic, tangled codebase became a scalable, developer-friendly system — and ended merge-conflict nightmares.",
    href: "https://medium.com/@samueldeveloper/modernizing-a-mess-how-i-tamed-a-chaotic-codebase-with-micro-frontends-e823276251d2",
    cta: "Read on Medium",
  },
  {
    kind: "Award",
    title: "1st place — Shape of Health game challenge",
    text: "FITHER, an obesity-prevention video game, won first place in the OWH Shape of Health competition run by the U.S. Department of Health and Human Services.",
    href: "https://www.challenge.gov/challenge/shape-of-health-an-obesity-prevention-game/",
    cta: "View the challenge",
  },
  {
    kind: "Press",
    title: "The Pioneer: student develops gig finder",
    text: "Cal State East Bay's newspaper covered the launch of AlliesPro, built by a computer science senior.",
    href: "https://thepioneeronline.com/38597/campus/csueb-student-develops-gig-finder/",
    cta: "Read the coverage",
  },
] as const;

export const SOCIALS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/samuel-ruiz-839895142/" },
  { name: "GitHub", url: "https://github.com/samsoftwaredev/" },
] as const;
