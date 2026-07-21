import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/liberty-logo.png";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Markets", href: "#markets" },
  { name: "Approach", href: "#approach" },
  { name: "Who We Serve", href: "#clients" },
  { name: "Why Partner", href: "#why-partner" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track the current section so the matching nav item can be highlighted
  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Close the mobile menu on Escape, and lock body scroll while it is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    window.location.hash = "";
    setActiveHash("");
    window.scrollTo({ top: 0 });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-20">
          <a href="#" onClick={goHome} className="flex items-center" aria-label="Liberty International — home">
            <img src={logo} alt="Liberty International" className="h-12 md:h-14" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={activeHash === item.href ? "page" : undefined}
                className={`text-label transition-colors duration-300 hover:text-foreground ${
                  activeHash === item.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border/30"
          >
            <nav className="flex flex-col py-6 px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={activeHash === item.href ? "page" : undefined}
                  className={`text-label py-3 transition-colors duration-300 hover:text-foreground ${
                    activeHash === item.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
