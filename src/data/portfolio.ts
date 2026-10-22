/**
 * =============================================================================
 * PORTFOLIO CONFIGURATION FILE - NENAVATH SAVITHA
 * =============================================================================
 * Populated from verified resume details.
 * =============================================================================
 */

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architectureNotes?: string;
  tags: string[];
  category: 'AI/ML' | 'Full Stack' | 'Computer Vision' | 'System';
  githubUrl: string;
  demoUrl?: string;
  status: 'In Development' | 'Completed' | 'Prototype';
  featured: boolean;
  visualTheme: 'purple' | 'cyan' | 'violet' | 'emerald';
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    context?: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  badge: string;
  description: string;
  credentialUrl?: string;
}

export interface EducationItem {
  degree: string;
  fieldOfStudy: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  highlights: string[];
}

export const PORTFOLIO_CONFIG = {
  // Personal & Brand Information
  profile: {
    name: "Nenavath Savitha",
    initials: "NS",
    role: "AI/ML Engineering Student (B.Tech)",
    subRole: "Software Prototyper & AI Solutions Developer",
    statusText: "SEEKING SDE & AI/ML INTERNSHIPS",
    headline: "Turning real student & developer problems into practical software prototypes.",
    bioShort: "AI/ML engineering student (B.Tech, second year, CGPA 9.03) at Vardhaman College of Engineering. Hands-on with Python, web technologies, workflow automation, and AI API integration; seeking Software Development or AI/ML internship opportunities.",
    bioExtended: [
      "I am an AI/ML engineering student (B.Tech, second year, CGPA 9.03) at Vardhaman College of Engineering who turns real student and developer challenges into practical software prototypes.",
      "My hands-on experience spans Python, web & backend technologies, workflow and role-based access design, and AI-assisted development (Antigravity, ChatGPT) for research, prototyping, debugging, and testing. From SIH 2026 disaster management intelligence (VayuVision) to college event lifecycle platforms (Campus Flow) and AI project guides (Project Guide), I focus on building high-utility, resilient systems."
    ],
    resumePath: "/resume.pdf",
    location: "Hyderabad, Telangana, India",
    phone: "7989284675",
  },

  // Verified Contact Channels
  contact: {
    email: "savitharathod053@gmail.com",
    phone: "+91 7989284675",
    github: "https://github.com/Savitharathod053",
    linkedin: "https://www.linkedin.com/in/savitharathod",
    portfolioDomain: "https://savitha-portfolio.dev",
  },

  // Skills organized strictly into verified groups
  skills: [
    {
      category: "Programming",
      description: "Algorithmic thinking, object-oriented design, and problem solving.",
      skills: [
        { name: "Python", context: "Hands-on data handling, ML scripting, API integrations, backend services" },
        { name: "Java", context: "Object-oriented fundamentals, algorithms, core computer science concepts" },
        { name: "C / C++", context: "Core programming fundamentals, memory concepts, foundational problem solving" },
      ],
    },
    {
      category: "Web & Backend",
      description: "Modern web interfaces, backend microservices, and database integration.",
      skills: [
        { name: "HTML5 & CSS3", context: "Responsive web layouts, semantic document structure, UI styling" },
        { name: "JavaScript", context: "Dynamic DOM interactions, asynchronous requests, modern web standards" },
        { name: "Flask & FastAPI", context: "RESTful endpoints, backend microservices, request routing & handlers" },
        { name: "Database Integration", context: "Data modeling, preloaded dataset queries, persistence layer" },
        { name: "React (Learning)", context: "Modern component architecture, state management, interactive UIs" },
      ],
    },
    {
      category: "AI/ML",
      description: "Applied machine learning workflows, empirical modeling, and LLM API integrations.",
      skills: [
        { name: "Machine Learning Fundamentals", context: "Preprocessing, feature selection, classification, and model evaluation" },
        { name: "AI API Integration", context: "Gemini API integration, prompt engineering, structured output handling" },
        { name: "Geospatial & Risk Modeling", context: "Multi-tier risk classification (Low, Moderate, High, Critical) for decision support" },
      ],
    },
    {
      category: "Tools & Ecosystem",
      description: "Development workflow, AI-assisted engineering tools, and cloud platforms.",
      skills: [
        { name: "GitHub", context: "Version control, collaborative codebases, repository analysis" },
        { name: "Antigravity", context: "AI-assisted development for research, rapid prototyping, debugging, and testing" },
        { name: "ChatGPT", context: "Technical research, architectural exploration, problem analysis" },
        { name: "Deployment & Hosting", context: "Render, Railway, production cloud hosting, REST APIs" },
      ],
    },
  ] as SkillGroup[],

  // Verified Projects from Resume
  projects: [
    {
      id: "vayuvision",
      title: "VayuVision",
      tagline: "AI-Powered Hazard Zone Identification & Disaster Response Prioritization",
      description: "An AI/ML approach for disaster management to identify hazard-prone habitations, assess vulnerability, and prioritise locations needing urgent evaluation or relocation support (SIH 2026 problem statement). Explores Indian geospatial datasets with hazard indicators and designs 4-tier risk classification.",
      architectureNotes: "ML workflow spanning geospatial data preprocessing, feature selection, risk classification (Low, Moderate, High, Critical), and decision support outputs.",
      tags: ["AI/ML", "Python", "Geospatial Data", "Disaster Response", "Risk Classification", "SIH 2026"],
      category: "AI/ML",
      githubUrl: "https://github.com/Savitharathod053/VayuVision",
      demoUrl: "https://vayuvision.onrender.com/",
      status: "Prototype",
      featured: true,
      visualTheme: "emerald",
    },
    {
      id: "campus-flow",
      title: "Campus Flow",
      tagline: "College Event Registration & Lifecycle Management Platform",
      description: "A centralized platform managing the entire college event lifecycle: organizer approval, event publication, student registration, payment verification (transaction ID & screenshot review), and automated QR-based ticket generation.",
      architectureNotes: "Role-based dashboards for students, organizers, HODs, and administrators; roll-number-based student login against a preloaded college dataset; multi-day event handling.",
      tags: ["Web & Backend", "Role-Based Access", "QR Ticketing", "Payment Verification", "Railway"],
      category: "Full Stack",
      githubUrl: "https://github.com/Savitharathod053/Campus-Flow",
      demoUrl: "https://campus-flow.up.railway.app/",
      status: "Completed",
      featured: true,
      visualTheme: "cyan",
    },
    {
      id: "project-guide",
      title: "Project Guide",
      tagline: "AI-Assisted Academic Project Planner & Dataset Discovery",
      description: "Born from real team-coordination challenges in college projects, converting project titles and descriptions into structured, deadline-aware development tasks with suggested resources (tools, component links, datasets, learning materials).",
      architectureNotes: "Explored Gemini API for AI-generated planning outputs; debugged and resolved inconsistent recommendations across successive project inputs.",
      tags: ["Python", "Gemini API", "Academic Planning", "AI Integration", "Dataset Discovery"],
      category: "System",
      githubUrl: "https://github.com/Savitharathod053/AI-Project-Guide",
      demoUrl: "",
      status: "Completed",
      featured: true,
      visualTheme: "violet",
    },
    {
      id: "vibedoubts",
      title: "VibeDoubts",
      tagline: "AI-Powered GitHub Repository Analysis & Code Q&A Platform",
      description: "An intelligent web platform where users submit a GitHub repository and ask questions about unfamiliar code, helping students and developers understand complex codebases faster.",
      architectureNotes: "Planned features: repository structure exploration, AI explanations of selected code & related files, context-aware Q&A, and bug-investigation support with relevant repository context.",
      tags: ["React", "JavaScript", "HTML/CSS", "Repository Analysis", "Code Q&A"],
      category: "AI/ML",
      githubUrl: "https://github.com/Savitharathod053/VibeDoubts",
      demoUrl: "",
      status: "In Development",
      featured: true,
      visualTheme: "purple",
    },
  ] as ProjectItem[],

  // Verified Achievements from Resume
  achievements: [
    {
      id: "sih-2026",
      title: "Smart India Hackathon (SIH) 2026",
      subtitle: "National Level Innovation Initiative",
      date: "2026",
      badge: "Hackathon",
      description: "Worked on an AI/ML problem statement addressing hazard-based red zones and relocation needs for vulnerable habitations (VayuVision).",
    },
    {
      id: "sih-shortlist",
      title: "Internal SIH College Selection Round",
      subtitle: "Vardhaman College of Engineering",
      date: "2026",
      badge: "Hackathon",
      description: "Shortlisted in the college-level internal selection round for Smart India Hackathon 2026 based on solution feasibility and impact.",
    },
    {
      id: "academic-excellence",
      title: "B.Tech CSE (AIML) Academic Excellence",
      subtitle: "CGPA: 9.03 (Currently Pursuing Second Year)",
      date: "Ongoing",
      badge: "Academic",
      description: "Maintaining a top-tier academic record of 9.03 CGPA in Computer Science & Engineering (Artificial Intelligence and Machine Learning).",
    },
    {
      id: "secondary-distinctions",
      title: "Consistent Academic Distinctions",
      subtitle: "Intermediate: 9.7 CGPA | SSC: 9.3 CGPA",
      date: "2023 & 2025",
      badge: "Academic",
      description: "Secured 9.7 CGPA in Intermediate at Sri Chaithanya (2025) and 9.3 CGPA in SSC (10th Standard) at Keshava Reddy School (2023).",
    },
  ] as AchievementItem[],

  // Verified Education History from Resume
  educationList: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      fieldOfStudy: "CSE (Artificial Intelligence & Machine Learning)",
      institution: "Vardhaman College of Engineering",
      location: "Hyderabad, Telangana",
      duration: "Currently pursuing second year",
      grade: "9.03 CGPA",
      highlights: [
        "Specialization in Artificial Intelligence & Machine Learning fundamentals, classification, and neural models.",
        "Core computing foundations: Data Structures, Object-Oriented Programming (Java/Python), Database Integration, and Web Technologies.",
        "Active prototyper: short-listed for internal SIH 2026 selection and team lead on practical campus platforms.",
      ],
    },
    {
      degree: "Intermediate",
      fieldOfStudy: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Chaithanya",
      location: "Telangana, India",
      duration: "Passed 2025",
      grade: "9.7 CGPA",
      highlights: [
        "Rigorous training in higher mathematics, analytical reasoning, and physical sciences.",
        "Graduated with top academic standing (9.7 CGPA).",
      ],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      fieldOfStudy: "10th Standard",
      institution: "Keshava Reddy School",
      location: "Telangana, India",
      duration: "Passed 2023",
      grade: "9.3 CGPA",
      highlights: [
        "Strong foundation in mathematics and sciences with 9.3 CGPA.",
      ],
    },
  ] as EducationItem[],

  // Navigation Links
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};
