export interface ProjectResource {
  name: string;
  category: 'Dataset' | 'Tool' | 'API' | 'Component' | 'Documentation';
  description: string;
  sourceLabel?: string;
  url?: string;
  verified: boolean;
}

export interface ProjectTask {
  id: string;
  stageNumber: string;
  title: string;
  phase: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Verified' | 'Planned';
  deliverables?: string[];
}

export interface ProjectJourneyData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  architectureNotes?: string;
  tags: string[];
  status: 'Prototype' | 'Completed' | 'In Development';
  accentTheme: 'purple' | 'cyan' | 'violet' | 'emerald' | 'yellow';
  links: {
    githubUrl: string;
    demoUrl?: string;
  };
  // Stage 1: Idea Box
  stage1Idea: {
    label: string;
    exampleIdea: string;
    alternativeIdeas?: string[];
    problemSummary: string;
    contextBadge: string;
  };
  // Stage 2: AI Engine / Core System
  stage2AIEngine: {
    label: string;
    headline: string;
    explanation: string;
    processingPills: string[];
    techBadge: string;
    architectureHighlight: string;
  };
  // Stage 3: Resources & Datasets
  stage3Resources: {
    label: string;
    headline: string;
    description: string;
    items: ProjectResource[];
  };
  // Stage 4: Tasks Breakdown
  stage4Tasks: {
    label: string;
    headline: string;
    description: string;
    tasks: ProjectTask[];
  };
  // Stage 5: Project Outcome
  stage5Outcome: {
    label: string;
    headline: string;
    summary: string;
    techStack: string[];
    metrics: {
      label: string;
      value: string;
    }[];
  };
}

export const PROJECT_JOURNEYS: ProjectJourneyData[] = [
  // 1. PROJECT GUIDE (Flagship demonstration)
  {
    id: 'project-guide',
    title: 'Project Guide',
    category: 'AI Project Advisor',
    tagline: 'AI-Assisted Idea Structuring, Dataset Discovery & Milestone Architecture',
    description: 'An AI-assisted project scoping framework that converts open-ended student ideas into structured, deadline-aware milestones, verified datasets, and actionable architectures.',
    architectureNotes: 'Explores Gemini API for structured planning outputs; deterministic prompt schemas prevent hallucinations and ensure steady milestones.',
    tags: ['Python', 'Gemini API', 'Prompt Engineering', 'Academic Planning', 'AI Integration', 'Dataset Discovery'],
    status: 'Prototype',
    accentTheme: 'violet',
    links: {
      githubUrl: 'https://github.com/Savitharathod053/AI-Project-Guide',
    },
    stage1Idea: {
      label: '01 — Start with an Idea',
      exampleIdea: 'Build a smart system to solve a real-world problem.',
      alternativeIdeas: [
        'Design an automated assistant to plan technical capstone projects.',
        'Identify verified datasets and backend architecture for student ML prototypes.',
      ],
      problemSummary: 'Students and early developers often have great project concepts but get stuck on architecture definitions, missing datasets, and disorganized task schedules.',
      contextBadge: 'Student Idea Inception',
    },
    stage2AIEngine: {
      label: '02 — AI Understands the Idea',
      headline: 'Semantic Scoping & Requirement Structuring',
      explanation: 'The AI analysis layer parses natural-language prompts, extracts domain entities, validates architectural feasibility, and normalizes open-ended thoughts into actionable project requirements.',
      processingPills: [
        'Entity Extraction',
        'Domain Scoping',
        'Schema Validation',
        'Structured Output Normalization',
      ],
      techBadge: 'Gemini API & Prompt Schemas',
      architectureHighlight: 'Structured JSON output schemas prevent hallucinations and enforce deterministic component recommendations across successive runs.',
    },
    stage3Resources: {
      label: '03 — Discover Data and Resources',
      headline: 'Curated Datasets, Tools & Integration Endpoints',
      description: 'Identifies verified open datasets and production tools relevant to the identified problem domain.',
      items: [
        {
          name: 'Kaggle & Open Data Hubs',
          category: 'Dataset',
          sourceLabel: 'Verified Data Repositories',
          description: 'Domain-specific tabular & multimodal datasets for model benchmarking and baseline experiments.',
          url: 'https://www.kaggle.com/datasets',
          verified: true,
        },
        {
          name: 'Gemini API & AI Studio',
          category: 'API',
          sourceLabel: 'Google AI Studio',
          description: 'Core generative intelligence providing structured reasoning, task decomposition, and schema extraction.',
          url: 'https://ai.google.dev/',
          verified: true,
        },
        {
          name: 'Python & FastAPI Backend',
          category: 'Tool',
          sourceLabel: 'Modern Python Ecosystem',
          description: 'High-performance async backend pipeline for prompt dispatch, caching, and structured JSON parsing.',
          url: 'https://fastapi.tiangolo.com/',
          verified: true,
        },
        {
          name: 'Academic Component Specs',
          category: 'Documentation',
          sourceLabel: 'Verified Tech Specs',
          description: 'Framework specifications, prompt engineering guidelines, and API schema contract documentation.',
          verified: true,
        },
      ],
    },
    stage4Tasks: {
      label: '04 — Turn the Plan into Tasks',
      headline: 'Phased Implementation Roadmap',
      description: 'Deconstructs the holistic vision into sequential development milestones.',
      tasks: [
        {
          id: 'pg-task-1',
          stageNumber: '01',
          phase: 'Phase 1: Scoping',
          title: 'Problem Scope & Requirement Formulation',
          description: 'Define target user journey, input prompt validation rules, and JSON response contracts.',
          status: 'Completed',
          deliverables: ['Schema contracts', 'Validation rules'],
        },
        {
          id: 'pg-task-2',
          stageNumber: '02',
          phase: 'Phase 2: AI Pipeline',
          title: 'AI Prompt Pipeline & Model Grounding',
          description: 'Configure Gemini API calls with strict system prompts and structured entity extraction.',
          status: 'Completed',
          deliverables: ['System prompts', 'Structured response parser'],
        },
        {
          id: 'pg-task-3',
          stageNumber: '03',
          phase: 'Phase 3: Resources',
          title: 'Resource Indexing & Dataset Discovery',
          description: 'Build dataset category mapping, tool documentation links, and component heuristics.',
          status: 'Completed',
          deliverables: ['Resource catalog', 'Dataset matcher'],
        },
        {
          id: 'pg-task-4',
          stageNumber: '04',
          phase: 'Phase 4: Validation',
          title: 'Prototype Implementation & Output Audits',
          description: 'Benchmarked prompt consistency across multiple runs; debugged and resolved recommendation variance.',
          status: 'Verified',
          deliverables: ['Deterministic testing suite', 'Final prototype'],
        },
      ],
    },
    stage5Outcome: {
      label: '05 — From Idea to Implementation',
      headline: 'Actionable AI Project Architecture Blueprint',
      summary: 'Transforms open-ended project concepts into fully actionable development roadmaps, complete with verified data sources, technical component stacks, and progressive milestone checklists.',
      techStack: [
        'Python',
        'Gemini API',
        'Prompt Engineering',
        'Structured JSON',
        'API Integration',
        'Dataset Discovery',
      ],
      metrics: [
        { label: 'Input Modality', value: 'Natural Language Prompt' },
        { label: 'Execution Path', value: '4 Phased Stages' },
        { label: 'Output Schema', value: 'Deterministic Spec' },
      ],
    },
  },

  // 2. CAMPUS-FLOW
  {
    id: 'campus-flow',
    title: 'Campus-Flow',
    category: 'Full Stack & Operations',
    tagline: 'College Event Lifecycle & Automated QR Registration Platform',
    description: 'A centralized platform managing the entire college event lifecycle: organizer approval, event publication, student registration, payment verification (transaction ID & screenshot review), and automated QR-based ticket generation.',
    architectureNotes: 'Role-based dashboards for students, organizers, HODs, and administrators; roll-number-based student login against a preloaded college dataset; multi-day event handling.',
    tags: ['Web & Backend', 'Role-Based Access', 'QR Ticketing', 'Payment Verification', 'Railway'],
    status: 'Completed',
    accentTheme: 'cyan',
    links: {
      githubUrl: 'https://github.com/Savitharathod053/Campus-Flow',
      demoUrl: 'https://campus-flow.up.railway.app/',
    },
    stage1Idea: {
      label: '01 — Identify Campus Bottlenecks',
      exampleIdea: 'Eliminate chaotic event registrations, unverified payments, and long entry queues.',
      alternativeIdeas: [
        'Automate organizer approval and student check-ins for university events.',
        'Prevent fake payment screenshots with verified transaction tracking.',
      ],
      problemSummary: 'College fest and seminar coordinators relied on disparate Google Forms, faced fraudulent or unverified payment screenshots, and suffered massive physical check-in delays at entry gates.',
      contextBadge: 'Institutional Operations',
    },
    stage2AIEngine: {
      label: '02 — Application Architecture & Modules',
      headline: 'Multi-Role State Machine & Verification Engine',
      explanation: 'A centralized lifecycle engine coordinates student registrations, department organizer reviews, and HOD approvals while executing roll-number validation against preloaded college student records.',
      processingPills: [
        'Roll-Number Lookup',
        'Payment Receipt Auditing',
        'Role-Based State Machine',
        'Multi-Tenant Permissions',
      ],
      techBadge: 'Role-Based Access Control (RBAC)',
      architectureHighlight: 'Separates privileges across 4 user tiers: Students register, Organizers review receipts, HODs authorize events, and Admins supervise audits.',
    },
    stage3Resources: {
      label: '03 — Institutional Data & Workflow Components',
      headline: 'College Datasets, Verification Pipelines & Ticketing',
      description: 'Connects verified institutional databases and transaction verification pipelines.',
      items: [
        {
          name: 'Preloaded College Student Registry',
          category: 'Dataset',
          sourceLabel: 'Internal College Records',
          description: 'Pre-seeded institutional dataset validating student roll numbers, branches, and active enrollment status.',
          verified: true,
        },
        {
          name: 'Payment Verification Pipeline',
          category: 'Component',
          sourceLabel: 'Transaction Ingestion',
          description: 'Payment screenshot upload review, UTR/Transaction ID reference matching, and approval queue.',
          verified: true,
        },
        {
          name: 'Dynamic QR Ticket Module',
          category: 'Tool',
          sourceLabel: 'QR Cryptographic Encoder',
          description: 'Generates secure scannable QR passes embedded with signed attendance and ticket validation keys.',
          verified: true,
        },
        {
          name: 'Railway Cloud Platform',
          category: 'Tool',
          sourceLabel: 'Production Cloud PaaS',
          description: 'Production container environment hosting the live campus management platform.',
          url: 'https://campus-flow.up.railway.app/',
          verified: true,
        },
      ],
    },
    stage4Tasks: {
      label: '04 — Key Implementation Tasks',
      headline: 'Full-Stack Lifecycle Engineering Milestones',
      description: 'From institutional database schema modeling to real-time QR gate scanning.',
      tasks: [
        {
          id: 'cf-task-1',
          stageNumber: '01',
          phase: 'Phase 1: Architecture',
          title: 'Role-Based Auth & Student DB Modeling',
          description: 'Implemented roll-number authenticated logins with segregated dashboards for Students, Organizers, and Admins.',
          status: 'Completed',
          deliverables: ['RBAC schema', 'Preloaded DB queries'],
        },
        {
          id: 'cf-task-2',
          stageNumber: '02',
          phase: 'Phase 2: Workflows',
          title: 'Event Publishing & Lifecycle Handlers',
          description: 'Built multi-day event scheduling, seat capacity quotas, and HOD approval state machine.',
          status: 'Completed',
          deliverables: ['Event manager', 'Approval states'],
        },
        {
          id: 'cf-task-3',
          stageNumber: '03',
          phase: 'Phase 3: Verification',
          title: 'Payment Verification Queue & Dashboard',
          description: 'Created organizer portal for inspecting payment screenshots, matching UTRs, and accepting entries.',
          status: 'Completed',
          deliverables: ['Receipt viewer', 'Audit logs'],
        },
        {
          id: 'cf-task-4',
          stageNumber: '04',
          phase: 'Phase 4: Deployment',
          title: 'Automated QR Generation & Railway Deployment',
          description: 'Connected automated QR ticket issuance and deployed full production application on Railway.',
          status: 'Verified',
          deliverables: ['QR pass generator', 'Live Railway container'],
        },
      ],
    },
    stage5Outcome: {
      label: '05 — Final Campus Management Outcome',
      headline: 'Live Production Platform on Railway',
      summary: 'A centralized web platform managing end-to-end college event lifecycles with verified payment pipelines, zero ticket forgery, and instantaneous entry scanning.',
      techStack: [
        'Web & Backend',
        'Role-Based Access',
        'QR Ticketing',
        'Payment Verification',
        'Railway Deployment',
        'Preloaded DB',
      ],
      metrics: [
        { label: 'Role Portals', value: '4 Specialized Dashboards' },
        { label: 'Verification', value: 'Roll Number & Screenshot UTR' },
        { label: 'Hosting', value: 'Live on Railway' },
      ],
    },
  },

  // 3. VIBEDOUBTS
  {
    id: 'vibedoubts',
    title: 'VibeDoubts',
    category: 'AI/ML & Code Intelligence',
    tagline: 'AI-Powered GitHub Repository Comprehension & Context-Aware Code Q&A',
    description: 'An intelligent web platform where users submit a GitHub repository and ask questions about unfamiliar code, helping students and developers understand complex codebases faster.',
    architectureNotes: 'Planned features: repository structure exploration, AI explanations of selected code & related files, context-aware Q&A, and bug-investigation support with relevant repository context.',
    tags: ['React', 'JavaScript', 'HTML/CSS', 'Repository Analysis', 'Code Q&A'],
    status: 'In Development',
    accentTheme: 'purple',
    links: {
      githubUrl: 'https://github.com/Savitharathod053/VibeDoubts',
    },
    stage1Idea: {
      label: '01 — Pinpoint Developer Confusion',
      exampleIdea: 'Understand complex, unfamiliar GitHub codebases quickly without getting lost in dependencies.',
      alternativeIdeas: [
        'Ask questions directly about unfamiliar code modules and data flow.',
        'Locate bug causes by cross-referencing repository files automatically.',
      ],
      problemSummary: 'Junior developers and students diving into large open-source repositories struggle to understand deep directory structures, multi-file execution paths, and undocumented abstractions.',
      contextBadge: 'Developer Onboarding Barrier',
    },
    stage2AIEngine: {
      label: '02 — AI Code Analysis Workflow',
      headline: 'Repository Structure Ingestion & Context Parsing',
      explanation: 'Traverses GitHub repository tree structures, filters build artifacts, parses source code files, and extracts AST definitions to assemble grounded context for developer questions.',
      processingPills: [
        'Repo Tree Traversal',
        'AST Chunking',
        'Dependency Graphing',
        'Context-Aware Prompt Synthesis',
      ],
      techBadge: 'GitHub REST API & Code Reasoning',
      architectureHighlight: 'Injects relevant helper modules and function signatures alongside selected code snippets to provide accurate, grounded architectural explanations.',
    },
    stage3Resources: {
      label: '03 — Verified Technical Components',
      headline: 'Code Ingestion Pipelines & Interactive Surfaces',
      description: 'Web technologies and repository tools powering the code intelligence experience.',
      items: [
        {
          name: 'GitHub REST API & Crawler',
          category: 'API',
          sourceLabel: 'GitHub Developer Platform',
          description: 'Fetches repository git trees, file contents, and directory hierarchies programmatically.',
          url: 'https://docs.github.com/en/rest',
          verified: true,
        },
        {
          name: 'Code Chunking & AST Parser',
          category: 'Component',
          sourceLabel: 'Code Syntax Analysis',
          description: 'Splits source code into logical modules, classes, and function boundaries for LLM context windows.',
          verified: true,
        },
        {
          name: 'React Interactive Workspace',
          category: 'Tool',
          sourceLabel: 'Frontend Application',
          description: 'Split-screen interface featuring directory tree exploration alongside conversational code Q&A.',
          verified: true,
        },
        {
          name: 'Bug Investigation Pipeline',
          category: 'Component',
          sourceLabel: 'Contextual Debugging (Planned)',
          description: 'Traces stack traces back to relevant repository files to explain failure mechanisms.',
          verified: true,
        },
      ],
    },
    stage4Tasks: {
      label: '04 — Implementation Tasks',
      headline: 'Engineering the Repository Assistant',
      description: 'Progressive development roadmap for the VibeDoubts platform.',
      tasks: [
        {
          id: 'vd-task-1',
          stageNumber: '01',
          phase: 'Phase 1: Ingestion',
          title: 'GitHub API Traversal & File Tree Parser',
          description: 'Constructed repository explorer pulling active file manifests and raw file contents via GitHub API.',
          status: 'Completed',
          deliverables: ['Repo tree crawler', 'File cache layer'],
        },
        {
          id: 'vd-task-2',
          stageNumber: '02',
          phase: 'Phase 2: Context',
          title: 'Code Context Window Optimization',
          description: 'Engineered token pruning heuristics to fit key dependencies and function contracts into LLM windows.',
          status: 'Completed',
          deliverables: ['Chunking utility', 'Token optimizer'],
        },
        {
          id: 'vd-task-3',
          stageNumber: '03',
          phase: 'Phase 3: Q&A Engine',
          title: 'Context-Aware Code Q&A Interface',
          description: 'Designing interactive chat UI supporting file cross-referencing and syntax-highlighted code explanations.',
          status: 'In Progress',
          deliverables: ['Interactive chat view', 'Snippet highlighter'],
        },
        {
          id: 'vd-task-4',
          stageNumber: '04',
          phase: 'Phase 4: Diagnostics',
          title: 'Bug Investigation & Flow Visualization',
          description: 'Synthesizing repository execution traces to visually trace how data flows between client and server modules.',
          status: 'Planned',
          deliverables: ['Flow visualizer', 'Error tracer'],
        },
      ],
    },
    stage5Outcome: {
      label: '05 — Final Developer Experience',
      headline: 'Intelligent Codebase Companion',
      summary: 'An interactive web platform where developers provide any GitHub repository link and receive precise, context-grounded answers about complex logic and bug root causes.',
      techStack: [
        'React',
        'JavaScript',
        'HTML5/CSS3',
        'GitHub API',
        'Repository Analysis',
        'Code Q&A',
      ],
      metrics: [
        { label: 'Scope', value: 'Public GitHub Repos' },
        { label: 'Analysis Unit', value: 'File & AST Level' },
        { label: 'Status', value: 'Active Development' },
      ],
    },
  },

  // 4. VAYUVISION
  {
    id: 'vayuvision',
    title: 'VayuVision',
    category: 'AI/ML & Geospatial Decision Support',
    tagline: 'Hazard Zone Identification & Emergency Disaster Response Prioritization',
    description: 'An AI/ML approach for disaster management to identify hazard-prone habitations, assess vulnerability, and prioritise locations needing urgent evaluation or relocation support (SIH 2026 problem statement). Explores Indian geospatial datasets with hazard indicators and designs 4-tier risk classification.',
    architectureNotes: 'ML workflow spanning geospatial data preprocessing, feature selection, risk classification (Low, Moderate, High, Critical), and decision support outputs.',
    tags: ['AI/ML', 'Python', 'Geospatial Data', 'Disaster Response', 'Risk Classification', 'SIH 2026'],
    status: 'Prototype',
    accentTheme: 'emerald',
    links: {
      githubUrl: 'https://github.com/Savitharathod053/VayuVision',
      demoUrl: 'https://vayuvision.onrender.com/',
    },
    stage1Idea: {
      label: '01 — Environmental & Hazard Problem',
      exampleIdea: 'Identify hazard-prone habitations and prioritize urgent evacuation and relocation support.',
      alternativeIdeas: [
        'Classify habitation disaster vulnerability across multi-tier risk categories.',
        'Deliver data-driven decision support for emergency relief coordination.',
      ],
      problemSummary: 'During severe natural calamities (floods, cyclones, landslides), disaster response authorities lack rapid, data-backed vulnerability indexing to determine which settlements require urgent relocation (SIH 2026 problem statement).',
      contextBadge: 'SIH 2026 National Initiative',
    },
    stage2AIEngine: {
      label: '02 — Verified Data-Processing & ML Pipeline',
      headline: 'Geospatial Vulnerability & ML Risk Classifier',
      explanation: 'Processes geospatial coordinates, historical disaster impact indices, and habitation proximity metrics through a trained classification pipeline to compute localized risk severity.',
      processingPills: [
        'Geospatial Cleansing',
        'Terrain Feature Selection',
        '4-Tier Risk Classification',
        'Relocation Priority Scoring',
      ],
      techBadge: 'Python & Scikit-Learn ML',
      architectureHighlight: 'Categorizes habitations into 4 clear decision tiers: Low, Moderate, High, and Critical risk to guide immediate emergency response.',
    },
    stage3Resources: {
      label: '03 — Datasets & Analytical Stages',
      headline: 'Indian Geospatial Indicators & Risk Matrices',
      description: 'Grounded in regional disaster hazard records and environmental indicators.',
      items: [
        {
          name: 'Indian Geospatial Hazard Datasets',
          category: 'Dataset',
          sourceLabel: 'SIH 2026 Hazard Records',
          description: 'Habitation location coordinates, flood zone mappings, and historical hazard impact indicators.',
          verified: true,
        },
        {
          name: 'Multi-Tier Vulnerability Matrix',
          category: 'Component',
          sourceLabel: 'Risk Modeling Framework',
          description: 'Trained empirical scoring matrix evaluating settlement elevation, waterway proximity, and population density.',
          verified: true,
        },
        {
          name: 'Scikit-Learn ML Pipeline',
          category: 'Tool',
          sourceLabel: 'Python Scientific Stack',
          description: 'Preprocessing pipelines, missing value imputation, feature scaling, and multiclass classification models.',
          url: 'https://scikit-learn.org/',
          verified: true,
        },
        {
          name: 'Render Cloud Deployment',
          category: 'Tool',
          sourceLabel: 'Production Cloud PaaS',
          description: 'Live web deployment hosting the interactive hazard risk classification and mapping dashboard.',
          url: 'https://vayuvision.onrender.com/',
          verified: true,
        },
      ],
    },
    stage4Tasks: {
      label: '04 — Model & Assessment Tasks',
      headline: 'From Raw Geospatial Data to Decision Support',
      description: 'Structured technical workflow developed for the Smart India Hackathon initiative.',
      tasks: [
        {
          id: 'vv-task-1',
          stageNumber: '01',
          phase: 'Phase 1: Data Ingestion',
          title: 'Geospatial Ingestion & Cleansing',
          description: 'Processed Indian hazard datasets, resolved missing coordinate anomalies, and structured settlement boundary features.',
          status: 'Completed',
          deliverables: ['Cleaned geospatial frames', 'Boundary index'],
        },
        {
          id: 'vv-task-2',
          stageNumber: '02',
          phase: 'Phase 2: Features',
          title: 'Feature Engineering & Vulnerability Index',
          description: 'Constructed composite risk indicators combining elevation profiles, river proximity, and historical incident frequencies.',
          status: 'Completed',
          deliverables: ['Feature matrix', 'Correlation analysis'],
        },
        {
          id: 'vv-task-3',
          stageNumber: '03',
          phase: 'Phase 3: Classification',
          title: '4-Tier Risk Categorization & Validation',
          description: 'Trained and evaluated classification models categorizing habitations into Low, Moderate, High, and Critical risk tiers.',
          status: 'Completed',
          deliverables: ['Trained model', 'Evaluation metrics'],
        },
        {
          id: 'vv-task-4',
          stageNumber: '04',
          phase: 'Phase 4: Interface',
          title: 'Visual Decision Support & Render Deployment',
          description: 'Constructed interactive assessment interface and deployed live web application on Render cloud.',
          status: 'Verified',
          deliverables: ['Interactive dashboard', 'Live Render deployment'],
        },
      ],
    },
    stage5Outcome: {
      label: '05 — Resulting Visualization & Outcome',
      headline: 'SIH 2026 Shortlisted Disaster Prioritization Platform',
      summary: 'An operational AI/ML disaster risk evaluation system empowering emergency personnel to instantly distinguish critical habitations requiring immediate evacuation from moderate-risk settlements.',
      techStack: [
        'AI/ML',
        'Python',
        'Geospatial Data',
        'Disaster Response',
        'Risk Classification',
        'Render Cloud',
      ],
      metrics: [
        { label: 'Risk Tiers', value: 'Low / Mod / High / Critical' },
        { label: 'Hackathon', value: 'SIH 2026 Shortlisted' },
        { label: 'Hosting', value: 'Live on Render' },
      ],
    },
  },

  // 5. PROJECT GUARD
  {
    id: 'project-guard',
    title: 'Project Guard',
    category: 'AI Academic Planning & Progress Guard',
    tagline: 'AI-Assisted Academic Project Planner & Dataset Discovery System',
    description: 'Born from real team-coordination challenges in college projects, converting project titles and descriptions into structured, deadline-aware development tasks with suggested resources (tools, component links, datasets, learning materials).',
    architectureNotes: 'Explored Gemini API for AI-generated planning outputs; debugged and resolved inconsistent recommendations across successive project inputs.',
    tags: ['Python', 'Gemini API', 'Academic Planning', 'AI Integration', 'Dataset Discovery'],
    status: 'Completed',
    accentTheme: 'yellow',
    links: {
      githubUrl: 'https://github.com/Savitharathod053/AI-Project-Guide',
    },
    stage1Idea: {
      label: '01 — Project Planning Problem',
      exampleIdea: 'Convert complex academic project titles and briefs into structured, deadline-aware milestones.',
      alternativeIdeas: [
        'Prevent project failure and scope drift in student engineering capstones.',
        'Curate verified tool recommendations and dataset links for college teams.',
      ],
      problemSummary: 'Born from real team-coordination bottlenecks in college engineering projects: team members working with vague milestones, inconsistent guidance, delayed dataset discovery, and scope drift.',
      contextBadge: 'Academic Team Coordination',
    },
    stage2AIEngine: {
      label: '02 — AI-Based Idea Analysis',
      headline: 'Gemini API Structuring & Recommendation Stability',
      explanation: 'Converts unstructured project briefs into deadline-aware task trees, using deterministic prompt schemas to prevent inconsistent suggestions across successive student inputs.',
      processingPills: [
        'Brief Decomposition',
        'Milestone Sequencing',
        'Variance Resolution',
        'Consistency Guardrails',
      ],
      techBadge: 'Gemini API & Structured Prompting',
      architectureHighlight: 'Debugged and eliminated recommendation variance by enforcing strict JSON output contracts and deterministic prompt anchoring.',
    },
    stage3Resources: {
      label: '03 — Components, Resources & Discovery',
      headline: 'Curated Academic Toolkits & Datasets',
      description: 'Maps student project domains to verified libraries, hardware specs, and open dataset repositories.',
      items: [
        {
          name: 'Academic Milestone Templates',
          category: 'Documentation',
          sourceLabel: 'Engineering Curriculum Guidelines',
          description: 'Pre-calibrated task templates covering literature survey, architecture design, prototyping, and testing.',
          verified: true,
        },
        {
          name: 'Dataset Discovery Matcher',
          category: 'Dataset',
          sourceLabel: 'Verified Open Repositories',
          description: 'Automatic matching of project keywords to verified Kaggle and open institutional data sources.',
          verified: true,
        },
        {
          name: 'Component & Library Specs',
          category: 'Component',
          sourceLabel: 'Software & Hardware Specs',
          description: 'Curated technical dependencies, sensor specifications, and modern backend frameworks.',
          verified: true,
        },
        {
          name: 'AI Output Consistency Harness',
          category: 'Tool',
          sourceLabel: 'Python Validation Scripts',
          description: 'Automated test suite verifying that repeated prompts generate steady, reproducible planning roadmaps.',
          verified: true,
        },
      ],
    },
    stage4Tasks: {
      label: '04 — Task Generation & Progress Workflow',
      headline: 'Building the Planning & Guardrail System',
      description: 'Key technical milestones executed to build Project Guard.',
      tasks: [
        {
          id: 'pgr-task-1',
          stageNumber: '01',
          phase: 'Phase 1: Ingestion',
          title: 'Project Brief Analysis & Entity Identification',
          description: 'Built text parsing routines to extract key academic objectives, hardware needs, and timeline constraints.',
          status: 'Completed',
          deliverables: ['Brief parser', 'Entity catalog'],
        },
        {
          id: 'pgr-task-2',
          stageNumber: '02',
          phase: 'Phase 2: Consistency',
          title: 'Gemini API Integration & Variance Audits',
          description: 'Identified and eliminated inconsistent recommendations across runs via structured prompt templates.',
          status: 'Completed',
          deliverables: ['Standardized prompt schemas', 'Variance logs'],
        },
        {
          id: 'pgr-task-3',
          stageNumber: '03',
          phase: 'Phase 3: Milestones',
          title: 'Milestone Dependency Graphing',
          description: 'Generated phased task roadmaps with explicit predecessor constraints and realistic time estimates.',
          status: 'Completed',
          deliverables: ['Dependency trees', 'Timeline estimator'],
        },
        {
          id: 'pgr-task-4',
          stageNumber: '04',
          phase: 'Phase 4: Resources',
          title: 'Resource & Dataset Link Verification',
          description: 'Built curated recommendation tables linking project domains to verified tools and datasets.',
          status: 'Verified',
          deliverables: ['Verified resource tables', 'Final system'],
        },
      ],
    },
    stage5Outcome: {
      label: '05 — Final System Outcome',
      headline: 'Structured Capstone Execution Engine',
      summary: 'A dependable academic project planning system that transforms abstract project ideas into deadline-aware execution roadmaps, backed by verified resources and clear milestones.',
      techStack: [
        'Python',
        'Gemini API',
        'Academic Planning',
        'AI Integration',
        'Dataset Discovery',
        'Prompt Engineering',
      ],
      metrics: [
        { label: 'Consistency', value: 'Schema-Locked Prompts' },
        { label: 'Milestones', value: '4 Phased Stages' },
        { label: 'Focus', value: 'Undergraduate Capstones' },
      ],
    },
  },
];
