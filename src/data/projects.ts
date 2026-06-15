import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "softstore",
    title: "SoftStore",
    subtitle: "Digital Commerce & Software Storefront",
    category: "E-Commerce",
    url: "https://softstore.kafaahbd.com/",
    description: "An optimized digital marketplace specialized in streamlined merchant checkout, fluid license delivery pipelines, and searchable SaaS licensing.",
    longDescription: "SoftStore is an advanced storefront created to eliminate friction in digital distribution. Designed to handle scalable licensing catalogs, it features responsive product filtering, live shopping cart analytics, and interactive simulations for license key issuance. This product highlights Softquark's ability to create enterprise-ready e-commerce layouts.",
    techStack: ["React 19", "Tailwind CSS", "Lucide Icons", "LocalStorage", "Client Cart Handlers"],
    keyFeatures: [
      "Dynamic Grid Catalog Filtering",
      "Interactive Product Checkout Cart",
      "Sleek Licenses & Invoices Simulator",
      "Performance-tuned responsive layout"
    ],
    colorTheme: {
      primary: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      secondary: "from-emerald-500 to-teal-600",
      accent: "#10b981",
      gradient: "from-emerald-900/40 via-neutral-900 to-neutral-950",
      shadow: "shadow-emerald-500/10"
    },
    metrics: {
      label: "Average Conversion Rate",
      value: "14.3%"
    }
  },
  {
    id: "meal-planner",
    title: "Meal Planner",
    subtitle: "Weekly Culinary Scheduler",
    category: "Health & Lifestyle",
    url: "https://meal-ebon.vercel.app/",
    description: "An elegant, highly intuitive health planner for setting weekly custom recipe sequences, tracking macronutrient intake, and generating shopping digests.",
    longDescription: "Maintaining nutritional wellness shouldn't feel overcomplicated. This application establishes a seamless daily drag-or-toggle plan interface that logs breakfast, lunch, and dinner. It aggregates nutritional indexes in real-time, displaying caloric targets within visual metrics bars.",
    techStack: ["React 19", "Tailwind CSS", "Macro calculators", "State Persistence", "Motion Transitions"],
    keyFeatures: [
      "7-Day Food Planner Board",
      "Macro-calorie intake counters",
      "Dynamic Ingredients grocery generator",
      "Fluid animated status indicators"
    ],
    colorTheme: {
      primary: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      secondary: "from-amber-500 to-orange-600",
      accent: "#f59e0b",
      gradient: "from-amber-900/40 via-neutral-900 to-neutral-950",
      shadow: "shadow-amber-500/10"
    },
    metrics: {
      label: "Planner Compliance Rate",
      value: "94.2%"
    }
  },
  {
    id: "countdown",
    title: "Countdown Pro",
    subtitle: "Visual Event Milestone Tracker",
    category: "Productivity & Utility",
    url: "https://count-down-five-flax.vercel.app/",
    description: "An aesthetic milestone countdown utility designed with millisecond-accuracy, sound effects, and dark futuristic ambient customization.",
    longDescription: "Countdown Pro delivers immersive event time-tracking. Built on stateful client timers, users can save countdowns, choose ambient backdrops, and trigger alarm notifications. Designed with smooth CSS transitions that represent ticking seconds with extreme visual care.",
    techStack: ["React 19", "Custom Audio APIs", "CSS variables", "Precision interval loops", "Motion Layouts"],
    keyFeatures: [
      "Millisecond precision clocks",
      "Atmospheric background customizer",
      "Audio buzzer alarm library",
      "Active timers local persistence"
    ],
    colorTheme: {
      primary: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      secondary: "from-purple-500 to-indigo-600",
      accent: "#8b5cf6",
      gradient: "from-purple-900/40 via-neutral-900 to-neutral-950",
      shadow: "shadow-purple-500/10"
    },
    metrics: {
      label: "Timer Drift Margin",
      value: "0.00ms"
    }
  },
  {
    id: "ramadan-tracker",
    title: "Ramadan Companion",
    subtitle: "Spiritual Goal & Prayer Scheduler",
    category: "Spiritual & Community",
    url: "https://ramadan-tracker-phi.vercel.app/",
    description: "A serene, stateful companion logs fasting routines, prayers, benevolent community acts, and scripture progress alongside a digital tasbih.",
    longDescription: "This application offers a structured platform to coordinate fast completions, prayers, and acts of charity. It provides active feedback loops, a custom digital Tasbih tapping engine, and beautiful cards demonstrating daily accomplishments.",
    techStack: ["React 19", "Tailwind CSS", "Spiritual Checklist Nodes", "Local Storage", "Sound cues"],
    keyFeatures: [
      "Sehri & Iftar dynamic trackers",
      "5 Daily Prayers checklist map",
      "Stateful Digital Tasbih tap counter",
      "Charitable actions milestone tracker"
    ],
    colorTheme: {
      primary: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
      secondary: "from-yellow-500 to-yellow-600",
      accent: "#eab308",
      gradient: "from-yellow-950/40 via-neutral-900 to-neutral-950",
      shadow: "shadow-yellow-500/10"
    },
    metrics: {
      label: "Avg Daily Tasbih Taps",
      value: "10K+"
    }
  },
  {
    id: "rokto-seba",
    title: "Rokto Seba (Blood Donor Grid)",
    subtitle: "Urgent Medical Connection Portal",
    category: "Civic & Health Tech",
    url: "https://rokto-seba.vercel.app/",
    description: "A lifesaving community platform mapping urgent blood recipient needs with qualified, available volunteer donors in real-time.",
    longDescription: "Rokto Seba provides immediate matching interfaces for medical emergencies. Users can log critical requests, filter donors by region and type, and consult an interactive compatibility board detailing biological matches.",
    techStack: ["React 19", "Critical response form", "Copy-contact handles", "Blood type matrices"],
    keyFeatures: [
      "Dynamic emergency request bulletins",
      "Biological blood-type matching engine",
      "Simple, lightweight, high-contrast layouts",
      "Instant copy-to-clipboard contact handles"
    ],
    colorTheme: {
      primary: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      secondary: "from-rose-500 to-red-600",
      accent: "#f43f5e",
      gradient: "from-rose-950/40 via-neutral-900 to-neutral-950",
      shadow: "shadow-rose-500/10"
    },
    metrics: {
      label: "Average Query Match Time",
      value: "<12 min"
    }
  },
  {
    id: "logic-diagram",
    title: "Logic Diagram Composer",
    subtitle: "Interactive Boolean Circuit Sandbox",
    category: "Developer & Education",
    url: "https://logic-diagram.vercel.app/",
    description: "An educational visual workspace for creating logic circuits, linking custom input states, AND/OR/XOR gates, and output lights.",
    longDescription: "Built with the aim of teaching discrete logic structures, the Logic Diagram Composer allows users to configure abstract circuits. By chaining logic gates interactively, they can monitor boolean currents flowing down visual paths instantly.",
    techStack: ["React 19", "Tailwind CSS", "SVG node pipelines", "Boolean logic engine", "Responsive layout grid"],
    keyFeatures: [
      "Dynamic input value signal toggling",
      "Movable Logic Gate modules (AND/OR/XOR/NOT)",
      "Vibrant SVG vector electrical pathing",
      "Instant Truth Table state resolution"
    ],
    colorTheme: {
      primary: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      secondary: "from-cyan-500 to-blue-600",
      accent: "#06b6d4",
      gradient: "from-cyan-950/40 via-neutral-900 to-neutral-950",
      shadow: "shadow-cyan-500/10"
    },
    metrics: {
      label: "Gate Resolution Delay",
      value: "0.12ms"
    }
  }
];
