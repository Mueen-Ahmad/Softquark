import { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight, Cpu } from "lucide-react";

interface NavigationProps {
  onScrollTo: (elementId: string) => void;
}

export default function Navigation({ onScrollTo }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Portfolio Grid", id: "portfolio-grid" },
    { label: "Interactive Sandbox", id: "sandbox-hub" },
    { label: "Capabilites", id: "capabilities-grid" },
    { label: "Connect", id: "contact-inquiry" }
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onScrollTo(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo element with Space Grotesk elegant font styles */}
          <div
            onClick={() => onScrollTo("hero-header")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-black font-black shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-all">
              <Cpu className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Soft<span className="text-cyan-400">quark</span>
              </span>
              <span className="text-[9px] block font-mono text-neutral-500 leading-none tracking-widest uppercase">
                DIGITAL ECOSYSTEMS
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-xs font-mono font-medium text-neutral-400 hover:text-white transition-colors tracking-tight uppercase"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleItemClick("contact-inquiry")}
              className="bg-neutral-900 hover:bg-neutral-850 text-white font-mono text-[10px] uppercase font-bold py-1.5 px-3.5 border border-neutral-800 rounded-lg flex items-center gap-1.5 transition-all hover:border-cyan-500/30"
            >
              Start Project <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 px-2.5 text-neutral-400 hover:text-white transition-colors rounded-lg border border-neutral-800 bg-neutral-950"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer with slide effect */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-900 pb-5 pt-3 px-4 space-y-3.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="block w-full text-left text-xs font-mono text-neutral-400 hover:text-white py-2 border-b border-neutral-900 uppercase font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleItemClick("contact-inquiry")}
            className="w-full justify-center bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-semibold text-xs py-2 px-4 rounded-xl flex items-center gap-2 transition-all"
          >
            Start Project <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
