import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import tmtLogo from "@/assets/tmt-logo2.png";
import { company } from "@/data/company";

const FOOTER_LINKS = [
  { to: "/products", label: "Products" },
  { to: "/training", label: "Training" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img
                src={tmtLogo}
                alt="TMT Logo"
                className="h-10 w-auto group-hover:scale-105 transition-transform"
              />
              <span className="font-bold text-foreground">TechMecha Torque</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mb-4">
              We build digital platforms for real-world business.
            </p>
            <div className="flex gap-2">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">
              Site
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">
              Contact
            </div>
            <div className="space-y-3">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                {company.email}
              </a>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                {company.phoneDisplay}
              </a>
              <div className="flex items-start gap-2 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  {company.address.line1}, {company.address.region}
                  <br />
                  {company.address.postalCode}, {company.address.country}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-xs font-medium">
            © 2026 TechMecha Torque. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
