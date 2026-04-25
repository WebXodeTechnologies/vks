import React from "react";
import SliderComponent from "react-slick";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Asset Imports
import SculptureImg from "../../assets/img1.jpg";
import ParkImg from "../../assets/hero1.jpg";
import InteriorImg from "../../assets/hero2.jpg";

const Slider = SliderComponent.default || SliderComponent;

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    pauseOnHover: false,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  const slides = [
    {
      image: SculptureImg,
      tag: "Legacy Since 1996",
      title: "Preserving Dravidian Heritage",
      desc: "Mastering the art of temple architecture and traditional cement sculptures with generational precision.",
    },
    {
      image: ParkImg,
      tag: "Public Spaces",
      title: "Modern Park Artistry",
      desc: "Transforming public landscapes into artistic landmarks that define modern cityscapes.",
    },
    {
      image: InteriorImg,
      tag: "Bespoke Interiors",
      title: "Custom Wall Expressions",
      desc: "Elevating luxury homes with handcrafted 3D wall art and premium textured designs.",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1C1917]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen outline-none">
            {/* 1. BACKGROUND IMAGE WITH GOLDEN OVERLAY */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-50"
              />
              {/* Golden-Tinted Gradient: Adds that "Gold Accent" to the image itself */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/80 via-[#D4AF37]/5 to-[#1c1917]/90" />
            </motion.div>

            {/* 2. CENTERED CONTENT */}
            <div className="relative z-10 flex items-center justify-center w-full h-full px-6">
              <div className="max-w-5xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {/* Premium Tag */}
                  <span className="inline-block px-5 py-2 mb-8 text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 backdrop-blur-sm">
                    {slide.tag}
                  </span>

                  {/* Main Title: Using Champagne Ivory */}
                  <h1 className="mb-8 text-5xl font-medium md:text-7xl lg:text-8xl font-berkshire text-[#FDFCF0] leading-[1.1] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    {slide.title}
                  </h1>

                  {/* Description: Muted Sand */}
                  <p className="max-w-2xl mx-auto mb-12 text-lg md:text-xl font-outfit text-stone-300/90 leading-relaxed tracking-wide font-light">
                    {slide.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <button className="group flex items-center gap-3 px-10 py-4 font-bold text-[#1C1917] transition-all bg-[#D4AF37] rounded-full hover:bg-[#FDFCF0] hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)]">
                      Explore Projects
                      <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-10 py-4 font-bold text-[#FDFCF0] transition-all border border-[#FDFCF0]/20 rounded-full backdrop-blur-md hover:bg-[#FDFCF0]/10">
                      Request Consultation
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* 3. CUSTOM STYLING FOR GOLDEN DOTS */}
      <style>{`
        .custom-dots {
          bottom: 60px !important;
        }
        .custom-dots li {
            margin: 0 6px !important;
        }
        .custom-dots li button {
          width: 8px !important;
          height: 8px !important;
          background: rgba(212, 175, 55, 0.2) !important;
          border: 1px solid rgba(212, 175, 55, 0.3) !important;
          border-radius: 50% !important;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .custom-dots li button:before { display: none !important; }
        .custom-dots li.slick-active button {
          background: #D4AF37 !important;
          transform: scale(1.8);
          border: none !important;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
        }
        
        @media (max-width: 768px) {
          .h-screen { height: 100svh; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
