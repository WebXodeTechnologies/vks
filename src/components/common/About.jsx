import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { HiOutlineArrowRight, HiOutlineArrowUpRight } from "react-icons/hi2";
import AboutImg from "../../assets/hero2.jpg";

/**
 * Reusable Counter Component
 * Uses Framer Motion values for high-performance number ticking
 */
const StatCounter = ({ value, title, suffix = "+" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom premium cubic-bezier
      });
    }
  }, [isInView, count, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center lg:items-start group cursor-default select-none"
    >
      <div className="flex items-baseline gap-1">
        <motion.span className="text-3xl md:text-5xl font-berkshire text-slate-900 tracking-tighter">
          {rounded}
        </motion.span>
        <span className="text-xl md:text-2xl font-bold text-orange-600">
          {suffix}
        </span>
      </div>
      <p className="text-[10px] md:text-xs font-bold text-orange-900/60 uppercase tracking-[0.2em] mt-2 group-hover:text-orange-600 transition-colors duration-300">
        {title}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
      id="about"
    >
      {/* Decorative SaaS Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* LEFT: LAYERED VISUAL COMPOSITION */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {/* Image Frame with Aspect Ratio Utility */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border-[12px] border-white">
                <img
                  src={AboutImg}
                  alt="VKS Artistry"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Glassmorphism Badge */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-8 -right-4 md:-right-8 bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/50 hidden md:block z-20"
              >
                <span className="block text-[10px] font-semibold text-black uppercase tracking-[0.2em] mb-1">
                  Established
                </span>
                <span className="block text-3xl font-berkshire text-black">
                  1985
                </span>
                <div className="mt-4 w-10 h-1 bg-orange-600 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100 rounded-full blur-[120px] -z-10 opacity-60" />
          </div>

          {/* RIGHT: REFINED CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-50 rounded-full mb-8 border border-orange-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-700">
                  40 Years of Excellence
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-berkshire text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Honoring Tradition, <br />
                <span className="text-orange-400 font-light">
                  Defining Artistry.
                </span>
              </h2>

              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed mb-10 max-w-2xl font-light">
                <p>
                  At{" "}
                  <span className="text-orange-500 font-medium italic">
                    VKS Sirpa Kalai Koodam
                  </span>
                  , we believe sculptures are not just cement and stone; they
                  are living legacies. Since 1985, we have mastered the delicate
                  balance between ancient Dravidian aesthetics and modern
                  structural design.
                </p>
              </div>

              {/* STATS: Clean Horizontal Row */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 py-8 border-y border-slate-200/60 mb-10">
                <StatCounter value={28} title="Years Mastery" />
                <StatCounter value={500} title="Projects" />
                <StatCounter value={100} title="Global Clients" />
              </div>

              {/* ACTION GROUP */}
              <div className="flex justify-center items-center gap-8">
                <button className="group relative flex items-center gap-4 px-7 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-1 active:scale-95 overflow-hidden">
                  <span className="relative z-10">Know More</span>
                  <HiOutlineArrowRight
                    size={18}
                    className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                  />
                  {/* Hover Slide Effect */}
                  <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
