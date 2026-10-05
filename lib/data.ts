export type Service = { icon: string; title: string; tagline: string; desc: string; tags: string[] };

export const services: Service[] = [
  { icon: "globe", title: "Website Development", tagline: "Fast, responsive, SEO-ready", desc: "Corporate sites, e-commerce, web apps and portals built with modern frameworks.", tags: ["React", "Next.js", "Node.js"] },
  { icon: "phone", title: "Mobile App Development", tagline: "iOS & Android, one codebase", desc: "Native-feeling apps with smooth animation, offline support and push notifications.", tags: ["Flutter", "Kotlin", "Swift"] },
  { icon: "code", title: "Custom Software", tagline: "Built around your process", desc: "ERP, CRM, inventory and automation systems with scalable back-ends and APIs.", tags: [".NET", "Laravel", "PostgreSQL"] },
  { icon: "pen", title: "UI/UX Design", tagline: "Interfaces people enjoy", desc: "Research, wireframes, prototypes and design systems that convert.", tags: ["Figma", "Prototyping", "Branding"] },
  { icon: "cloud", title: "Cloud & DevOps", tagline: "Deploy with confidence", desc: "CI/CD pipelines, containers, monitoring and cloud migration.", tags: ["AWS", "Azure", "Docker"] },
  { icon: "bot", title: "AI & Data", tagline: "Smarter products", desc: "Machine-learning features, chatbots, analytics and business intelligence.", tags: ["Python", "LLMs", "Power BI"] },
  { icon: "shield", title: "QA & Testing", tagline: "Ship without fear", desc: "Manual and automated testing, performance and security checks.", tags: ["Automation", "Load tests", "Audits"] },
  { icon: "users", title: "IT Outsourcing", tagline: "Extend your team", desc: "Skilled engineers and dedicated teams on flexible engagement models.", tags: ["Dedicated", "Staffing", "Support"] },
];

export const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "100+", label: "Team players" },
  { value: "500+", label: "Projects delivered" },
  { value: "99%", label: "Client satisfaction" },
];

export const industries = ["Finance & Banking", "Health & Pharmacy", "Education & E-Learning", "Retail & E-Commerce", "Real Estate", "Logistics", "Manufacturing", "Government", "Startups"];

export const steps = [
  { title: "Discover", text: "Goals, users and scope defined together." },
  { title: "Design", text: "Clickable UI you approve before code." },
  { title: "Build", text: "Weekly demos, clean tested code." },
  { title: "Launch", text: "Deployment, store release, support." },
];

export const projects = [
  { cat: "Mobile", sector: "Fintech", name: "FinWave Wallet", text: "Mobile payments app", tags: ["Flutter", "Node.js"], g: "#6d5dfc,#0891b2" },
  { cat: "Web", sector: "Health", name: "CareLink Portal", text: "Patient booking platform", tags: ["Next.js", "PostgreSQL"], g: "#0891b2,#22c55e" },
  { cat: "Web", sector: "Retail", name: "ShopSphere", text: "Multi-vendor e-commerce", tags: ["Next.js", "Stripe"], g: "#d946ef,#6d5dfc" },
  { cat: "Mobile", sector: "Education", name: "LearnLoop", text: "Interactive e-learning app", tags: ["Flutter"], g: "#f59e0b,#d946ef" },
  { cat: "Web", sector: "Logistics", name: "RouteIQ", text: "Fleet tracking dashboard", tags: ["React", "Maps"], g: "#0ea5e9,#6d5dfc" },
  { cat: "Mobile", sector: "Real Estate", name: "PropNest", text: "Property listing marketplace", tags: ["Flutter", "Firebase"], g: "#10b981,#0891b2" },
];

export const techs: Record<string, string[]> = {
  Backend: ["Node.js", "NestJS", "PHP", "Laravel", ".NET", "Python", "Django", "C#"],
  Frontend: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "TypeScript", "HTML5", "CSS3"],
  Mobile: ["Flutter", "Android", "iOS", "React Native", "Kotlin", "Swift", "Ionic"],
  Cloud: ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Firebase"],
  "AI & ML": ["Python", "Keras", "TensorFlow", "LangChain", "Power BI"],
};

export const pricing = [
  { name: "Fixed Price", text: "Best for well-defined projects with a clear scope.", points: ["Fixed scope & timeline", "Milestone payments", "No surprises"], hot: false },
  { name: "Time & Material", text: "Ideal for evolving products and agile teams.", points: ["Pay for hours worked", "Change scope anytime", "Weekly reporting"], hot: true },
  { name: "Dedicated Team", text: "Extend your team with engineers who work only for you.", points: ["Monthly engagement", "Scale up or down", "Direct communication"], hot: false },
];
