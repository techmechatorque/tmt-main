import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import tmtLogo from "@/assets/tmt-logo2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-border shadow-sm transition-all duration-300 ${isMenuOpen ? 'bg-background' : 'bg-background/80 backdrop-blur-xl'}`}>
      {/* ❌ REMOVE the white dot pattern div */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo (unchanged, just slight polish) */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={tmtLogo}
              alt="TMT Logo"
              className="h-14 w-auto group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-foreground tracking-tight">
                TechMecha
              </span>
              <span className="text-lg font-bold text-primary">Torque</span>
            </div>
          </Link>

          {/* Desktop Navigation*/}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Center Nav Links */}
            <div className="flex-1 flex justify-center gap-6 lg:gap-10">
              <Link
                to="/"
                className="text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                Solutions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              <Link
                to="/vision"
                className="text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                Vision
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                to="/founder"
                className="text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                Leadership
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                to="/careers"
                className="text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* <Link
                to="/internships"
                className="text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                Internships
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link> */}

              <Link
                to="/ai-bootcamp"
                className="text-foreground/70 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                Bootcamps
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

            </div>

            {/* Right Side (Toggle + Contact) */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300 backdrop-blur-md"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:scale-105"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Button (same, slight polish) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-background z-50 overflow-y-auto p-8 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            <nav className="flex flex-col space-y-6">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <button
                onClick={() => {
                  scrollToSection("features");
                  setIsMenuOpen(false);
                }}
                className="text-left text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors"
              >
                Solutions
              </button>
              <Link
                to="/vision"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors"
              >
                Vision
              </Link>
              <Link
                to="/founder"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors"
              >
                Leadership
              </Link>
              <Link
                to="/careers"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/ai-bootcamp"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors"
              >
                Bootcamps
              </Link>

              
              <div className="pt-8 border-t border-border mt-4 flex flex-col space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-foreground/60">Appearance</span>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-foreground"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-5 h-5 text-primary" />
                        <span className="font-medium">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5 text-primary" />
                        <span className="font-medium">Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
                
                <Button
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 rounded-2xl text-xl font-bold shadow-[0_10px_30px_rgba(255,0,0,0.3)] transition-all active:scale-95"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
