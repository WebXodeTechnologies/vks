import { Link } from "react-router-dom";
// Tree-shaken imports for performance
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

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
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-12 border-t border-brand-gold/20 font-outfit">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 1. Heritage Newsletter Section (Glassmorphic Orange/Gold) */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-stone-900 via-stone-900 to-orange-950/20 p-8 md:p-12 mb-20 border border-brand-gold/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-berkshire tracking-wide">
                Join the <span className="text-brand-gold">Artisan</span> Circle
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Stay updated with our latest temple projects and traditional
                Tamil craftsmanship insights.
              </p>
            </div>
            <form
              className="flex w-full lg:w-auto gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full lg:w-72 bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 ring-brand-accent/50 transition-all placeholder:text-stone-600"
                required
              />
              <button className="bg-brand-accent hover:bg-orange-600 text-white px-8 py-3.5 rounded-2xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-orange-900/20">
                <RiSendPlaneFill size={18} />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
          {/* Subtle Golden Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>

        {/* 2. Main Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col mb-8 group">
              <span className="text-2xl font-bold tracking-tighter text-white">
                VKS <span className="text-brand-gold uppercase">Sirpa</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 group-hover:text-brand-accent transition-colors duration-300">
                Kalai Koodam
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs italic">
              "Preserving Dravidian excellence through cement and stone artistry
              since 1996."
            </p>
            <div className="flex gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3.5 bg-white/5 border border-white/5 rounded-2xl text-stone-400 hover:bg-brand-gold hover:text-stone-950 hover:border-brand-gold/50 transition-all duration-300 shadow-sm"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Column: Exploration */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-brand-accent pl-4">
              Exploration
            </h4>
            <ul className="space-y-4">
              {footerLinks.exploration.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-brand-accent flex items-center group transition-colors"
                  >
                    {link.name}
                    <HiOutlineArrowUpRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Specialties */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-brand-accent pl-4">
              Specialties
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.specialties.map((item) => (
                <li
                  key={item}
                  className="hover:text-brand-gold cursor-pointer transition-colors uppercase tracking-tighter"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Studio Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-brand-accent pl-4">
              The Studio
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-2xl border border-brand-gold/20">
                  <IoLocationOutline size={20} />
                </div>
                <div className="text-sm leading-relaxed">
                  <span className="block text-white font-semibold mb-1 tracking-tighter">
                    Main Workshop
                  </span>
                  <p>Karur, Tamil Nadu, India</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-2xl border border-brand-accent/20">
                  <IoCallOutline size={20} />
                </div>
                <div className="text-sm leading-relaxed">
                  <span className="block text-white font-semibold mb-1 tracking-tighter">
                    Direct Inquiry
                  </span>
                  <a
                    href="tel:+919865390925"
                    className="hover:text-brand-accent transition-colors font-bold text-stone-300"
                  >
                    +91 98653 90925
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Bar & Credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.25em] font-bold">
          <p className="text-stone-600 italic">
            © {currentYear} VKS Sirpa Kalai Koodam — Traditional Artistry
          </p>
          <div className="flex gap-10">
            <Link
              to="/privacy"
              className="hover:text-brand-gold transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-brand-gold transition-colors"
            >
              Terms
            </Link>
          </div>
          <p className="text-stone-700 italic lowercase tracking-normal">
            Legacy Crafted by VKS Dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
