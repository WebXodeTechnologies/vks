import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Heritage", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-white/95 backdrop-blur-xl border-b border-stone-200 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center relative h-12"
        aria-label="Primary Navigation"
      >
        {/* LOGO */}
        <div className="flex-1 lg:flex-none">
          <Link
            to="/"
            className="relative z-[110] flex flex-col group"
            aria-label="VKS Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tighter text-brand-primary">
              VKS <span className="text-brand-gold uppercase">Sirpa</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 group-hover:text-brand-accent transition-colors">
              Kalai Koodam
            </span>
          </Link>
        </div>

        {/* CENTER LINKS (Desktop) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors hover:text-brand-accent group ${
                    location.pathname === link.path
                      ? "text-brand-accent"
                      : "text-brand-primary/80"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.path ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA (Desktop) */}
        <div className="hidden lg:flex items-center ml-auto">
          <a
            href="tel:+919865390925"
            className="group flex items-center gap-2 px-6 py-2.5 bg-brand-accent text-white text-sm font-bold rounded-saas hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
          >
            <span>Get a Quote</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="relative z-[110] lg:hidden p-2 text-brand-primary ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-0 bg-white z-[90] lg:hidden h-dvh flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-4xl font-bold ${location.pathname === link.path ? "text-brand-accent" : "text-brand-primary"}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
