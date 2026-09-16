import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import tmtLogo from "@/assets/tmt-logo2.png";
import { universityNavLinks } from "@/data/university";

const scrollToAnchor = (href: string) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const UniversityNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 px-4">
      <nav className="mx-auto max-w-4xl rounded-full bg-black/50 backdrop-blur-2xl border border-red-500/20 shadow-[0_0_40px_-10px_rgba(220,38,38,0.35)] px-4 sm:px-6 py-2.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={tmtLogo} alt="TMT Logo" className="h-7 w-auto" />
          <span className="hidden sm:inline text-sm font-bold text-white tracking-tight">TMT</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {universityNavLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToAnchor(link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToAnchor("#contact")}
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-semibold px-5 py-2 shadow-[0_0_20px_-4px_rgba(220,38,38,0.7)] hover:shadow-[0_0_28px_-2px_rgba(220,38,38,0.9)] hover:scale-105 transition-all duration-300"
          >
            Prebook Now
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto max-w-4xl mt-2 rounded-3xl bg-black/80 backdrop-blur-2xl border border-red-500/20 p-5 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {universityNavLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToAnchor(link.href);
                  setIsOpen(false);
                }}
                className="text-left text-base font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToAnchor("#contact");
                setIsOpen(false);
              }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-semibold px-5 py-2.5 mt-1"
            >
              Prebook Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityNav;
