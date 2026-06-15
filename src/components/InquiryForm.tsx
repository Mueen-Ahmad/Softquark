import React, { useState, useEffect } from "react";
import { Inquiry } from "../types";
import { Send, CheckCircle, Database, HelpCircle, Mail, DollarSign, MessageSquare } from "lucide-react";

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectInterest, setProjectInterest] = useState("softstore");
  const [budget, setBudget] = useState("10k-25k");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [pastInquiries, setPastInquiries] = useState<Inquiry[]>([]);

  // Load past submissions from LocalStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("softquark_inquiries");
      if (stored) {
        setPastInquiries(JSON.parse(stored));
      }
    } catch (e) {
      // Fail silently
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Simulate premium visual network propagation delay
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: `SQ-IRQ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        name,
        email,
        projectInterest,
        budget,
        message,
        submittedAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      };

      const updated = [newInquiry, ...pastInquiries];
      setPastInquiries(updated);
      localStorage.setItem("softquark_inquiries", JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitted(true);

      // Clean inputs
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  const getProjectTitle = (id: string) => {
    switch (id) {
      case "softstore": return "SoftStore Digital Catalog";
      case "meal-planner": return "Meal Planner Health Matrix";
      case "countdown": return "Countdown Pro Precision Clock";
      case "ramadan-tracker": return "Ramadan Spiritual tracker";
      case "rokto-seba": return "Rokto Seba Donor Directory";
      case "logic-diagram": return "Logic Gate Circuit Sandbox";
      default: return "Custom Cloud Enterprise";
    }
  };

  return (
    <section id="contact-inquiry" className="py-24 bg-neutral-950 border-t border-neutral-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-cyan-700/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: CTA description & Historic logs */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-800/20 px-3 py-1 rounded-full font-bold uppercase">
              Project Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
              Design your next vision with Softquark
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Have a digital commerce concept, a civic emergency engine, or an interactive utility that matches the architecture of our showcases? Connect with our development engineers to draft high-performance specs today.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-900">
              <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                Corporate Core Standards
              </h4>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Interactive Proof-of-Concepts (POC) generated within 7 days.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Ultra-optimized state trees avoiding duplicate render triggers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Full-stack integration readiness with high-density designs.</span>
                </li>
              </ul>
            </div>

            {/* Historic submissions local database panel */}
            {pastInquiries.length > 0 && (
              <div className="pt-6 border-t border-neutral-900">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">
                  Historic Local Transcripts ({pastInquiries.length})
                </span>
                <div className="space-y-3 max-h-[180px] overflow-y-auto pr-1">
                  {pastInquiries.map((irq) => (
                    <div key={irq.id} className="bg-neutral-900 border border-neutral-850 p-3 rounded-lg text-xs space-y-1">
                      <div className="flex justify-between font-mono font-bold text-neutral-300">
                        <span className="truncate max-w-[150px]">{irq.name}</span>
                        <span className="text-cyan-400 text-[10px]">{irq.budget}</span>
                      </div>
                      <p className="text-[10px] text-neutral-500 font-mono">
                        Affinity: {getProjectTitle(irq.projectInterest)}
                      </p>
                      <p className="text-[11px] text-neutral-400 leading-snug line-clamp-2">
                        "{irq.message}"
                      </p>
                      <span className="text-[9px] text-neutral-600 block text-right font-mono mt-1">
                        Ref: {irq.id} - {irq.submittedAt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic submission form card */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-900/80 rounded-3xl p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-neutral-400 font-mono font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-805/80 text-xs rounded-xl px-3 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                      placeholder="e.g. Al-Mueen"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-neutral-400 font-mono font-semibold">Email Address *</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-805/80 text-xs rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                        placeholder="mueen@softquark.com"
                      />
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-neutral-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Affinity interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-neutral-400 font-mono font-semibold">Project Prototype Reference</label>
                    <select
                      value={projectInterest}
                      onChange={(e) => setProjectInterest(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-805/80 text-xs rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                    >
                      <option value="softstore">SoftStore Catalog (E-commerce)</option>
                      <option value="meal-planner">Meal Planner (Health & Macro)</option>
                      <option value="countdown">Countdown Pro (Milestone Timer)</option>
                      <option value="ramadan-tracker">Ramadan Companion (Spiritual Log)</option>
                      <option value="rokto-seba">Rokto Seba (Emergency Registry)</option>
                      <option value="logic-diagram">Logic Diagram (Discrete Workspace)</option>
                      <option value="custom">Brand New Custom Concept</option>
                    </select>
                  </div>

                  {/* Budget scale */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-neutral-400 font-mono font-semibold">Budget Spectrum Estimator</label>
                    <div className="relative">
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-805/80 text-xs rounded-xl pl-9 pr-3 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                      >
                        <option value="1.5k-5k">$1,500 – $5,000 (MVP Prototype)</option>
                        <option value="5k-10k">$5,000 – $10,000 (Standard Release)</option>
                        <option value="10k-25k">$10,000 – $25,000 (Enterprise Scaled)</option>
                        <option value="25k+">$25,000+ (Comprehensive custom stack)</option>
                      </select>
                      <DollarSign className="absolute left-3 top-3 w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Message details text area */}
                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-mono font-semibold">Project Intent Details *</label>
                  <div className="relative">
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-805/80 text-xs rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 leading-relaxed resize-none"
                      placeholder="Outline your architectural features, required release horizons, or layout visions..."
                    />
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-neutral-500" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-450 hover:to-indigo-500 text-black font-mono font-bold uppercase text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                      Uploading Encrypted Specs...
                    </>
                  ) : (
                    <>
                      Transmit Inquiry <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="inline-block bg-cyan-500/10 p-3 rounded-full border border-cyan-500/20 text-cyan-400">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white">Transmission Stream Secured</h3>
                  <p className="text-xs text-neutral-400 mt-2 max-w-md mx-auto leading-relaxed">
                    Your design parameters have been cached within local memory and processed. An engineering representative from Softquark will synchronize with your email address shortly.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs bg-neutral-950 hover:bg-neutral-900 text-neutral-300 font-mono py-1.5 px-4 rounded-xl border border-neutral-805/80"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
