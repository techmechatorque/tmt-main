import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import tmtLogo from "@/assets/tmt-logo2.png";
import { company } from "@/data/company";
import { universityNavLinks } from "@/data/university";

const scrollToAnchor = (href: string) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const TRANSFORMATION_STORIES = [
  "Case studies — coming soon as campus rollouts go live",
  "Research & impact reports",
  "Partner university spotlights",
];

const UniversityFooter = () => {
  return (
    <footer id="contact" className="relative border-t border-red-500/[0.15] bg-black/60 backdrop-blur-xl scroll-mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={tmtLogo} alt="TMT Logo" className="h-9 w-auto" />
              <span className="font-bold text-white">TechMecha Torque</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Engineering the future of higher education, one connected campus at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-white/40 mb-4">
              Quick Links
            </div>
            <ul className="space-y-3">
              {universityNavLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToAnchor(link.href)}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-white/40 mb-4">
              Vision
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              A single connected ecosystem for higher education — replacing fragmented, paper-heavy
              campus systems with one platform that scales from one department to an entire university.
            </p>
          </div>

          {/* Transformation Stories */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-white/40 mb-4">
              Transformation Stories
            </div>
            <ul className="space-y-3">
              {TRANSFORMATION_STORIES.map((story) => (
                <li key={story} className="text-sm text-white/50 leading-relaxed">
                  {story}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* HQ contact */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/10">
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
            {company.email}
          </a>
          <div className="flex items-start gap-2 text-sm text-white/70">
            <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <span>
              TMT Headquarters — {company.address.line1}, {company.address.region}{" "}
              {company.address.postalCode}, {company.address.country}
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/40">
          © 2026 TechMecha Torque. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default UniversityFooter;
