import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import tmtLogo from "@/assets/tmt-logo2.png";

const NAV_LINKS = [
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/training", label: "Training" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(`${to}/`);

  // Transparent right at the top (floats over the hero, as intended), but once you
  // scroll past it the header needs its own background — otherwise whatever's
  // behind it (a screenshot, a light/dark card) shows straight through and clashes
  // with the logo/nav text instead of reading as "the header."
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border border-border shadow-professional"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="px-2 sm:px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
            >
              <img
                src={tmtLogo}
                alt="TMT Logo"
                className="h-8 sm:h-12 w-auto flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm sm:text-lg font-bold text-foreground tracking-tight whitespace-nowrap">
                  TechMecha
                </span>
                <span className="text-sm sm:text-lg font-bold text-primary whitespace-nowrap">Torque</span>
              </div>
            </Link>

            {/* Desktop Navigation — logo stays front-left, this nav pill sits in the
                middle, theme toggle + Contact anchor the end (right) */}
            <div className="hidden xl:flex items-center justify-between w-full">
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 rounded-full bg-foreground/5 border border-foreground/10 p-2">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        isActive(link.to)
                          ? "bg-background text-foreground shadow-sm"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-300 backdrop-blur-md"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 btn-primary-glow hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden text-foreground hover:bg-foreground/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay — floats as its own glass panel below the header bar */}
      {isMenuOpen && (
        <div className="xl:hidden fixed top-20 sm:top-24 left-4 right-4 bottom-4 bg-background/95 backdrop-blur-2xl border border-foreground/10 rounded-2xl z-50 overflow-y-auto p-6 sm:p-8 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors"
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

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

              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 rounded-lg text-xl font-bold btn-primary-glow transition-all active:scale-95 gap-2">
                  Start a project
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
