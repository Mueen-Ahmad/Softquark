import { useState } from "react";
import { Project } from "../types";
import { projects } from "../data/projects";
import {
  ExternalLink,
  Cpu,
  Layers,
  ArrowRight,
  Database,
  Terminal,
  Activity,
  Code2,
  X,
  Play
} from "lucide-react";
import {
  SoftStoreDemo,
  MealPlannerDemo,
  CountdownDemo,
  RamadanTrackerDemo,
  RoktoSebaDemo,
  LogicDiagramDemo
} from "./InteractiveDemos";

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const getDemoComponent = (id: string) => {
    switch (id) {
      case "softstore":
        return <SoftStoreDemo />;
      case "meal-planner":
        return <MealPlannerDemo />;
      case "countdown":
        return <CountdownDemo />;
      case "ramadan-tracker":
        return <RamadanTrackerDemo />;
      case "rokto-seba":
        return <RoktoSebaDemo />;
      case "logic-diagram":
        return <LogicDiagramDemo />;
      default:
        return null;
    }
  };

  return (
    <section id="portfolio-grid" className="py-24 relative overflow-hidden bg-black">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-cyan-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 rounded-full bg-indigo-950/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full font-bold">
            Project Index Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-4 tracking-tight">
            Our Digital Ecosystems
          </h2>
          <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
            A precise collection of web engines, custom consumer portals, and educational utilities engineered with modern client state management.
          </p>
        </div>

        {/* Portfolios Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-neutral-950 border border-neutral-900/80 rounded-2xl p-6 transition-all duration-300 hover:border-neutral-800 flex flex-col justify-between group h-full hover:translate-y-[-4px] relative ${project.colorTheme.shadow}`}
            >
              {/* Top Row: Category Card Header */}
              <div>
                <div className="flex justify-between items-start">
                  <span className={`text-[10px] font-mono font-bold tracking-tight px-2.5 py-0.5 rounded-full border ${project.colorTheme.primary}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" /> Static Metrics
                  </span>
                </div>

                {/* Title & Slogan */}
                <h3 className="font-display font-bold text-xl text-white mt-4 leading-snug group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-1 font-medium italic">
                  {project.subtitle}
                </p>

                {/* High-level Description */}
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Micro tech list inside grid */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-900 border border-neutral-850 text-neutral-400 px-2 py-0.5 rounded text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="bg-neutral-900 border border-neutral-850 text-neutral-400 px-1.5 py-0.5 rounded text-[10px] font-mono">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Row: Key metrics display + CTA actions */}
              <div className="mt-6 pt-5 border-t border-neutral-900 flex justify-between items-center bg-transparent">
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 font-mono block tracking-tight">
                    {project.metrics.label}
                  </span>
                  <span className="text-sm font-mono font-bold text-neutral-200">
                    {project.metrics.value}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-400 hover:text-white rounded-lg border border-neutral-805/80 transition-colors"
                    title="Launch Live App"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="bg-cyan-500 text-black text-[11px] font-bold font-mono py-1.5 px-3 rounded-lg flex items-center gap-1 hover:bg-cyan-400 transition-colors cursor-pointer"
                  >
                    Sandbox <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Sandbox Anchor Hub Section */}
        <div id="sandbox-hub" className="mt-20 bg-neutral-950 rounded-3xl border border-neutral-900/80 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wide">
                Interactive Innovation Hub
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
                Evaluate our logical prototypes on-demand
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Rather than auditing dry static wireframes, test immediate reactive logic instances. Open any project’s Sandbox layer to explore micro-circuits, order delivery estimators, prayer trackers, and clock triggers.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="p-1.5 bg-neutral-900 rounded-lg text-cyan-400 border border-neutral-800">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-neutral-200 text-xs">Production Grade Stack</h5>
                    <p className="text-[11px] text-neutral-500">100% responsive, client-side caching, sound oscillators, and state tracking metrics.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1.5 bg-neutral-900 rounded-lg text-indigo-400 border border-neutral-800">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-neutral-200 text-xs">Aesthetic Precision Design</h5>
                    <p className="text-[11px] text-neutral-500">Structured with high-contrast displays, meticulous grids, and fluid visual palettes.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {projects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(proj)}
                    className="text-[10px] font-bold font-mono bg-neutral-900 hover:bg-neutral-850 hover:border-cyan-500/30 text-neutral-300 border border-neutral-805/80 py-1.5 px-3 rounded-lg flex items-center gap-1 transition-all"
                  >
                    <Play className="w-3 h-3 text-cyan-400" /> {proj.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Default display graphic inside hub */}
            <div className="bg-neutral-900 border border-neutral-850 rounded-2xl p-6 relative shadow-lg">
              <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <div className="text-center py-10 space-y-4">
                <p className="text-xs text-neutral-400 italic block">
                  Select a project from the launcher tags to initiate the interactive testing emulator
                </p>
                <div className="flex justify-center">
                  <span className="p-2.5 bg-neutral-950 rounded-full text-indigo-400 border border-neutral-800 animate-pulse">
                    <Layers className="w-6 h-6" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY DRAWER / PANEL FOR SANDBOX PREVIEW */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm transition-opacity">
          {/* Backdrop Close Click area */}
          <div className="absolute inset-0 cursor-default" onClick={() => setActiveProject(null)} />

          {/* Core Panel Content */}
          <div className="relative w-full max-w-2xl bg-neutral-950 border-l border-neutral-900 h-full overflow-y-auto shadow-2xl p-6 sm:p-8 flex flex-col justify-between z-10">
            <div>
              {/* Header block inside drawer */}
              <div className="flex justify-between items-start border-b border-neutral-900 pb-4 mb-6">
                <div>
                  <span className={`text-[10px] font-mono tracking-tight px-2 py-0.5 rounded-full border ${activeProject.colorTheme.primary}`}>
                    {activeProject.category}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white mt-2">
                    {activeProject.title}
                  </h3>
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-cyan-400 flex items-center gap-1 mt-1 hover:underline"
                  >
                    Visit Main Live Deploy Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1 px-2 text-neutral-400 hover:text-white rounded-lg border border-neutral-800 bg-neutral-950/80 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Specs & Description section */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase text-neutral-500 font-mono font-bold tracking-wider mb-2">
                    Strategic Focus
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {activeProject.longDescription}
                  </p>
                </div>

                {/* Key Features Bullet points */}
                <div>
                  <h4 className="text-xs uppercase text-neutral-500 font-mono font-bold tracking-wider mb-2.5">
                    Strategic Technical Objectives
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex gap-2 items-center bg-neutral-900/50 p-2 rounded border border-neutral-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-neutral-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro tech architecture tags */}
                <div>
                  <h4 className="text-xs uppercase text-neutral-500 font-mono font-bold tracking-wider mb-2">
                    Architecture Stack Chips
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-1 rounded-md text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DYNAMIC SANDBOX INJECTOR PLATFORM */}
                <div className="pt-4">
                  <h4 className="text-xs uppercase text-cyan-400 font-mono font-bold tracking-wider mb-3 flex items-center gap-1">
                    <Play className="w-3.5 h-3.5 text-cyan-400" /> LIVE SANDBOX EXPERIMENT
                  </h4>
                  <div className="border border-neutral-900 rounded-2xl overflow-hidden p-0.5 bg-neutral-950">
                    {getDemoComponent(activeProject.id)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-neutral-900 flex justify-between items-center bg-transparent">
              <div>
                <span className="text-[10px] text-neutral-500 font-mono block uppercase">Status Verification</span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active Deploy
                </span>
              </div>
              <a
                href={activeProject.url}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-mono font-bold text-xs py-2 px-4 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/10 cursor-pointer"
              >
                Launch Main Deploy Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
