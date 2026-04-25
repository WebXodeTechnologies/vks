import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 1. Optimized Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Heritage", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header
      className={`fixed top-0 w-full z-100 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center relative h-12"
        aria-label="Primary Navigation"
      >
        {/* LOGO: Left Aligned */}
        <div className="flex-1 lg:flex-none">
          <Link
            to="/"
            className="relative z-110 flex flex-col group focus-visible:ring-2 ring-brand-accent rounded-lg p-1"
            aria-label="VKS Sirpa Kalai Koodam Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tighter text-brand-primary">
              VKS <span className="text-brand-accent uppercase">Sirpa</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 group-hover:text-brand-accent transition-colors duration-300">
              Kalai Koodam
            </span>
          </Link>
        </div>

        {/* DESKTOP LINKS: Perfectly Centered */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-brand-accent group ${
                    location.pathname === link.path
                      ? "text-brand-accent"
                      : "text-brand-primary/80"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.path ? "w-full" : ""
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP CTA: Right Aligned */}
        <div className="hidden lg:flex items-center ml-auto">
          <a
            href="tel:+919865390925"
            className="group flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-white text-sm font-bold rounded-saas hover:bg-slate-800 transition-all duration-300 active:scale-95 shadow-md"
          >
            <span className="whitespace-nowrap">Get a Quote</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="relative z-110 lg:hidden p-2 text-brand-primary focus:outline-none rounded-full ml-auto"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-90 lg:hidden h-dvh w-screen flex flex-col"
          >
            <div className="flex flex-col pt-32 px-8 pb-12 gap-10 h-full overflow-y-auto">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-semibold tracking-tight transition-colors ${
                        location.pathname === link.path
                          ? "text-brand-accent"
                          : "text-brand-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-8 border-t border-slate-100"
              >
                <p className="text-zinc-800 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Quick Connection
                </p>
                <a
                  href="tel:+919865390925"
                  className="flex items-center justify-between p-5 bg-zinc-50 rounded-saas border border-slate-100 group active:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-accent text-white rounded-full shadow-lg">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-brand-primary font-semibold text-lg leading-none mb-1">
                        +91 98653 90925
                      </span>
                      <span className="text-xs text-zinc-500 font-medium">
                        Available 9AM - 8PM
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="text-brand-accent" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
