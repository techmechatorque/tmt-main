import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import tmtLogo from "@/assets/tmt-logo2.png";

const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col gap-4 items-center">
        {/* Top Section */}
        <div className="w-full flex justify-center">
          <div className="max-w-xl w-full text-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center justify-center gap-2 mb-3 group"
            >
              <img
                src={tmtLogo}
                alt="TMT Logo"
                className="h-10 w-auto group-hover:scale-105 transition-transform mix-blend-multiply"
              />
            </Link>

            {/* Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed font-medium text-xs md:text-sm">
              Leading the digital transformation of higher education through innovative technology solutions.
              Empowering universities worldwide with comprehensive, integrated platforms for modern learning.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-2">
              <a
                href="https://www.linkedin.com/company/techmecha-torque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://www.instagram.com/techmechatorque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full border-t border-border pt-4">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center text-center">
            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-[11px] text-muted-foreground mb-0.5">
                  Email
                </div>
                <a
                  href="mailto:team@techmechatorque.com"
                  className="text-foreground hover:text-primary transition-colors font-semibold text-xs md:text-sm"
                >
                  team@techmechatorque.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-[11px] text-muted-foreground mb-0.5">
                  Headquarters
                </div>
                <div className="text-foreground font-medium text-xs md:text-sm">
                  Sangareddy, Telangana
                  <br />
                  India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-border pt-3 flex justify-center items-center">
          <p className="text-muted-foreground text-[11px] md:text-xs font-medium text-center">
            © 2025 TechMecha Torque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
