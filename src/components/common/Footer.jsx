import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    exploration: [
      { name: "Home", path: "/" },
      { name: "Our Heritage", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Process", path: "/blog" },
      { name: "Inquiry", path: "/contact" },
    ],
    specialties: [
      "Temple Architecture",
      "Park Sculptures",
      "Interior Wall Art",
      "Traditional Statues",
      "Cement Foundations",
    ],
  };

  const socials = [
    { Icon: IoLogoInstagram, href: "#", label: "Instagram" },
    { Icon: IoLogoFacebook, href: "#", label: "Facebook" },
    { Icon: IoLogoLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-stone-950 text-stone-400 pt-20 pb-12 border-t border-white/5 font-outfit">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 1. NEWSLETTER CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-900/50 border border-white/5 p-8 md:p-12 mb-20 shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-md text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-berkshire tracking-wide">
                Join the <span className="text-orange-500">Artisan</span> Circle
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Receive exclusive updates on our latest temple restorations and
                traditional Tamil craftsmanship.
              </p>
            </div>

            <form
              className="flex flex-col sm:flex-row w-full lg:w-auto gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow lg:w-72 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 ring-orange-500/50 transition-all placeholder:text-stone-600"
                required
              />
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-orange-900/20">
                <RiSendPlaneFill size={18} />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </div>

        {/* 2. NAVIGATION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 border-b border-white/5 pb-20">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="flex flex-col mb-6 group">
              <span className="text-3xl font-bold tracking-tighter text-white">
                VKS{" "}
                <span className="text-orange-500 uppercase font-berkshire">
                  Sirpa
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-500 group-hover:text-orange-400 transition-colors">
                Kalai Koodam
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 italic text-stone-500">
              "Mastering the divine art of cement and stone sculpture since
              1996."
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-white/5 border border-white/5 rounded-xl text-stone-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-orange-600 pl-4">
              Exploration
            </h4>
            <ul className="space-y-4">
              {footerLinks.exploration.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-orange-500 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-orange-600 pl-4">
              Specialties
            </h4>
            <ul className="space-y-4">
              {footerLinks.specialties.map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-orange-500 cursor-pointer transition-colors font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-orange-600 pl-4">
              The Studio
            </h4>
            <div className="space-y-6 flex flex-col items-center sm:items-start">
              <div className="flex gap-4">
                <div className="p-2.5 bg-orange-600/10 text-orange-50 rounded-xl border border-orange-600/20 hidden sm:block">
                  <IoLocationOutline size={18} />
                </div>
                <div className="text-sm">
                  <span className="block text-white font-bold mb-1">
                    Main Workshop
                  </span>
                  <p>Karur, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2.5 bg-orange-600/10 text-orange-50 rounded-xl border border-orange-600/20 hidden sm:block">
                  <IoCallOutline size={18} />
                </div>
                <div className="text-sm">
                  <span className="block text-white font-bold mb-1">
                    Direct Inquiry
                  </span>
                  <a
                    href="tel:+919865390925"
                    className="text-orange-500 font-bold hover:text-orange-400 transition-colors text-base"
                  >
                    +91 98653 90925
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CENTERED CREDITS BAR */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-600">
              © {currentYear} VKS Sirpa Kalai Koodam — Traditional Artistry
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-stone-500">
              <Link
                to="/privacy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          {/* Developer & Company Tag */}
          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-3 text-[11px] font-medium text-stone-500 tracking-wide bg-white/[0.03] px-8 py-3 rounded-full border border-white/5 shadow-inner">
            <span>Developed with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span>by</span>
            <span className="text-white font-bold italic tracking-tighter text-[12px]">
              Priyadharshini
            </span>
            <span className="mx-2 text-stone-800">|</span>
            <span className="text-stone-600 uppercase text-[9px] font-black">
              Powered by
            </span>
            <a
              href="https://www.webxode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-black hover:text-white transition-all group relative tracking-widest"
            >
              Webxode Technolgies
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Bottom Info Stack */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
