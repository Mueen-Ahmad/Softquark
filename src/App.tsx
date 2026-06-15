import { Terminal, ShieldCheck, HeartHandshake, Sparkles, ChevronDown, ArrowRight, Code, Database, Cpu } from "lucide-react";
import Navigation from "./components/Navigation";
import ProjectShowcase from "./components/ProjectShowcase";
import InquiryForm from "./components/InquiryForm";

export default function App() {
  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Offset slightly for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const capabilities = [
    {
      title: "Interactive Web Interfaces",
      description: "Engineering responsive layouts that preserve reactive state and avoid infinite render intervals across viewport breakpoints.",
      icon: <Code className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Tactile Sound & Client Logics",
      description: "Incorporating low-latency local client operations, electronic counters, biological tables, and Web Audio synthesizers.",
      icon: <Terminal className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Robust Schema Architectures",
      description: "Establishing deterministic localized storage strategies such as LocalStorage registries and state persistent models.",
      icon: <Database className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Civic & Community Oriented",
      description: "Designing tailored platforms optimized for high-contrast accessibility, daily trackers, and spiritual utilities.",
      icon: <HeartHandshake className="w-5 h-5 text-rose-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-400 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Dynamic Header */}
      <Navigation onScrollTo={handleScrollTo} />

      {/* HERO SECTION */}
      <header
        id="hero-header"
        className="relative pt-36 pb-20 sm:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-b from-neutral-950 via-black to-neutral-950"
      >
        {/* Background Visualizations (Minimal high-fidelity grids) */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> Operational Portfolio Release
          </div>

          {/* Slogan */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-none">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-amber-400">Precision-Grade</span> <br className="hidden sm:inline" /> Digital Tools
            </h1>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed font-sans font-medium">
              We are <span className="text-white font-bold">Softquark</span>. We engineer clean web ecosystems, custom consumer portals, healthcare trackers, and visual developer sandboxes styled with extreme detail.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <button
              onClick={() => handleScrollTo("portfolio-grid")}
              className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-black font-semibold text-xs font-mono uppercase tracking-tight py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-white/5 cursor-pointer"
            >
              Examine Showcase <ArrowRight className="w-4 h-4 text-cyan-500" />
            </button>
            <button
              onClick={() => handleScrollTo("contact-inquiry")}
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-850 text-neutral-100 border border-neutral-800 hover:border-cyan-500/30 font-semibold text-xs font-mono uppercase tracking-tight py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              Draft System Specs
            </button>
          </div>

          {/* Scrolling details Indicator */}
          <div className="pt-10 flex justify-center">
            <button
              onClick={() => handleScrollTo("portfolio-grid")}
              className="text-xs text-neutral-600 hover:text-cyan-400 flex flex-col items-center gap-1.5 font-mono uppercase transition-colors"
            >
              Scroll to explore
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Corporate stats ribbon underneath hero */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-950 border border-neutral-900 rounded-2xl p-6 text-center shadow-lg divide-y-0 divide-x-0 md:divide-x divide-neutral-900">
            <div className="py-2.5 md:py-0">
              <span className="text-2xl sm:text-3xl font-display font-black text-white block">6</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mt-1 block">Active Apps Listed</span>
            </div>
            <div className="py-2.5 md:py-0">
              <span className="text-2xl sm:text-3xl font-display font-black text-cyan-400 block">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mt-1 block">Responsive Integrity</span>
            </div>
            <div className="py-2.5 md:py-0">
              <span className="text-2xl sm:text-3xl font-display font-black text-indigo-400 block">0ms</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mt-1 block">Active Timer Drift</span>
            </div>
            <div className="py-2.5 md:py-0">
              <span className="text-2xl sm:text-3xl font-display font-black text-emerald-400 block">Stateful</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mt-1 block">Memory Persistence</span>
            </div>
          </div>
        </div>
      </header>

      {/* PORTFOLIO GRID SHOWCASE ARCH DEPLOYMENTS */}
      <ProjectShowcase />

      {/* CORE CAPABILITIES MODULE GRID */}
      <section id="capabilities-grid" className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 border border-emerald-800/20 px-3 py-1 rounded-full font-bold">
                Operational Competencies
              </span>
              <h3 className="text-3xl font-display font-black text-white tracking-tight">
                Crafted for pristine execution.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We believe that software should not only be highly operational, but pleasant to operate. We write modular schemas, clean responsive layout systems, and custom client logic algorithms.
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-neutral-400 flex items-center gap-1.5">
                  <ShieldCheck className="text-emerald-400 w-4.5 h-4.5" /> Full Security Shield Compliance
                </span>
              </div>
            </div>

            {/* Right Capabilities cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900/40 border border-neutral-900 rounded-2xl p-5 hover:border-neutral-800 transition-colors"
                >
                  <div className="p-2 bg-black rounded-lg w-fit border border-neutral-850 mb-4 shadow-sm">
                    {cap.icon}
                  </div>
                  <h4 className="font-display font-bold text-base text-neutral-100 leading-tight">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PROJECT INQUIRY PORTAL */}
      <InquiryForm />

      {/* CORPORATE FOOTER */}
      <footer className="bg-black py-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-black font-black">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span className="font-display font-black text-base text-white tracking-tight">
                Soft<span className="text-cyan-400">quark</span> <span className="text-xs text-neutral-500 font-mono font-medium">Systems</span>
              </span>
            </div>
            
            <p className="text-[11px] text-neutral-600 font-mono tracking-tight text-center sm:text-right">
              © 2026 Softquark Systems. Designed with absolute precision. All project references validated and live.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
