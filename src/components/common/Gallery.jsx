import React from "react";
import { motion } from "framer-motion";

// Asset Imports
import GodImg from "../../assets/god_image.jpg";
import InteriorImg from "../../assets/wall_image.jpg";
import ParkImg from "../../assets/park_image.png";
import AnimalImg from "../../assets/animal_image.jpg";
import TempleImg from "../../assets/img2.jpg";
import CustomImg from "../../assets/coustomized_image.jpg";

const galleryItems = [
  { image: GodImg, title: "God Sculptures", category: "Sacred Art" },
  { image: InteriorImg, title: "Home Interior", category: "Modern Decor" },
  { image: ParkImg, title: "Park Sculptures", category: "Landscapes" },
  { image: AnimalImg, title: "Animal Art", category: "Wildlife" },
  { image: TempleImg, title: "Temple Works", category: "Heritage" },
  { image: CustomImg, title: "Custom Projects", category: "Bespoke" },
];

const Gallery = () => {
  const doubleItems = [...galleryItems, ...galleryItems];

  return (
    <section
      className="relative py-24 lg:py-32 bg-[#FAFAF9] overflow-hidden"
      id="gallery"
    >
      {/* Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[10rem] lg:text-[14rem] font-black text-slate-200/20 select-none pointer-events-none font-berkshire whitespace-nowrap z-0">
        VKS GALLERY
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-12 h-px bg-orange-600/40" />
            <span className="text-orange-600 font-bold tracking-[0.4em] text-[10px] uppercase">
              The Showcase
            </span>
            <span className="w-12 h-px bg-orange-600/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-berkshire text-slate-900 tracking-tight"
          >
            Our <span className="text-orange-500">Master Strokes</span>
          </motion.h2>
        </div>

        {/* Infinite Carousel */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex w-max animate-carousel-infinite group-hover:pause-animation py-4">
            {doubleItems.map((item, index) => (
              <div
                key={index}
                className="relative flex-none w-[280px] sm:w-[320px] lg:w-[380px] aspect-[4/5] mx-6 rounded-3xl overflow-hidden group/item"
              >
                {/* Image Container */}
                <div className="h-full w-full relative overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/item:scale-110"
                  />
                </div>

                {/* The "Plaque" Card (Small Rectangle at Bottom) */}
                <div className="absolute inset-x-4 bottom-4">
                  <div className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100 transform transition-all duration-500 group-hover/item:-translate-y-2">
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-orange-600 text-[9px] font-black uppercase tracking-[0.2em] mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-slate-900 font-berkshire text-xl lg:text-2xl leading-none">
                        {item.title}
                      </h3>
                    </div>

                    {/* Minimal Highlight Bar - Grows on hover */}
                    <div className="w-6 group-hover/item:w-full h-1 bg-orange-500/20 mt-3 transition-all duration-700 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes carousel-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-carousel-infinite {
          animation: carousel-infinite 40s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Gallery;
