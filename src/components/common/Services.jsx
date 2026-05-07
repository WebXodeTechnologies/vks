import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineHome,
  HiOutlineSun,
  HiOutlineTrophy,
  HiOutlineBuildingLibrary,
  HiOutlineCube,
} from "react-icons/hi2";

// Asset Imports
import GodImg from "../../assets/god_image.jpg";
import InteriorImg from "../../assets/wall_image.jpg";
import ParkImg from "../../assets/park_image.png";
import AnimalImg from "../../assets/animal_image.jpg";
import TempleImg from "../../assets/img2.jpg";
import CustomImg from "../../assets/coustomized_image.jpg";

const services = [
  {
    image: GodImg,
    icon: <HiOutlineSparkles />,
    title: "God Sculptures",
    desc: "Exquisite handcrafted deities following traditional shastras, carved with divine precision.",
  },
  {
    image: InteriorImg,
    icon: <HiOutlineHome />,
    title: "Home Wall & Interior",
    desc: "Elevating modern living spaces with bespoke 3D wall murals and elegant cement art.",
  },
  {
    image: ParkImg,
    icon: <HiOutlineSun />,
    title: "Park & Garden Art",
    desc: "Creating landmarks for public spaces with durable, life-sized artistic structures.",
  },
  {
    image: AnimalImg,
    icon: <HiOutlineTrophy />,
    title: "Animal Sculptures",
    desc: "Realistic animal figures that bring character to private estates and commercial projects.",
  },
  {
    image: TempleImg,
    icon: <HiOutlineBuildingLibrary />,
    title: "Temple Construction",
    desc: "Comprehensive architecture services, from foundation to intricate gopuram sculptures.",
  },
  {
    image: CustomImg,
    icon: <HiOutlineCube />,
    title: "Customized Projects",
    desc: "Turning your unique vision into reality with tailor-made cement art at any scale.",
  },
];

const Services = () => {
  return (
    <section
      className="relative py-16 lg:py-32 bg-[#FAFAF9] overflow-hidden"
      id="services"
    >
      {/* SaaS Background Decor: Dot Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none " />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-8 h-px bg-orange-600/30" />
            <span className="text-orange-600 font-bold tracking-[0.3em] text-[9px] uppercase bg-orange-100/50 px-3 py-1 rounded-full">
              Our Expertise
            </span>
            <span className="w-8 h-px bg-orange-600/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-berkshire text-slate-900 leading-tight tracking-tight px-4"
          >
            Mastering <span className="text-orange-500">Artistry</span>
          </motion.h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col sm:flex-row bg-white rounded-3xl sm:rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-500 border border-slate-100 mx-auto w-full max-w-125 lg:max-w-none"
            >
              {/* Image Section: Reduced height on mobile (h-40) */}
              <div className="w-full sm:w-[10%] lg:w-[40%] shrink-0 relative overflow-hidden h-40 sm:h-auto border-b sm:border-b-0 sm:border-r border-slate-50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover sm:object-contain grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Section: Balanced padding for mobile */}
              <div className="grow p-6 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Smaller icon for mobile */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-50 text-slate-900 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-orange-600 group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 shadow-sm">
                    <span className="text-lg lg:text-xl">{service.icon}</span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-berkshire text-slate-900 mb-2 lg:mb-3 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-xs lg:text-sm leading-relaxed font-light mb-6 lg:mb-8 line-clamp-2 sm:line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-orange-600 transition-all duration-300 cursor-pointer">
                  <span>Enquire Now</span>
                  <HiOutlineArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
