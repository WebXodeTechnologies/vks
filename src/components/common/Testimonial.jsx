import React from "react";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi2";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Temple Coordinator",
    comment:
      "Sirpa Kalai transformed our temple with stunning sculptures. Their attention to detail and dedication to traditional art is unmatched. Highly recommend their work!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Priya Sundaram",
    role: "Interior Designer",
    comment:
      "The wall sculpture they created for our living room is absolutely beautiful. It has become the centerpiece of our home. Professional and timely delivery!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Murugan Vel",
    role: "Park Developer",
    comment:
      "Outstanding craftsmanship in our park installation project. The team understood our vision perfectly and delivered beyond expectations. Truly skilled artisans.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
      id="testimonials"
    >
      {/* SaaS Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1c1917 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-orange-600" />
            <span className="text-orange-600 font-bold tracking-[0.3em] text-[10px] uppercase">
              Social Proof
            </span>
            <span className="w-8 h-[1px] bg-orange-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-berkshire text-slate-900"
          >
            What our<span className="text-orange-400 ml-2">Clients Say</span>
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col"
            >
              {/* 1. IMAGE & IDENTITY FIRST */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-500 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* 2. RATINGS SECOND */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <HiStar key={i} className="text-orange-500 text-lg" />
                ))}
              </div>

              {/* 3. COMMENT THIRD */}
              <p className="text-slate-600 font-outfit text-base leading-relaxed italic flex-grow">
                "{item.comment}"
              </p>

              {/* Decorative Accent (Hidden until hover) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-transparent group-hover:bg-orange-600 transition-all duration-500 rounded-b-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
