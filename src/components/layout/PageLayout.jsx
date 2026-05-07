import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsappFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Replace with your real WhatsApp number (NO +, NO spaces)
  const phoneNumber = "919876543210";

  const message = encodeURIComponent(
    "Hello! I'm interested in the traditional sculptures at VKS Sirpa Kalai Koodam.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-600 p-5 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                      <span className="font-bold text-sm">VKS</span>
                    </div>

                    {/* ✅ FIXED TYPO HERE */}
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-green-600 rounded-full"></span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold">
                      VKS Sirpa Kalai Koodam
                    </h3>
                    <p className="text-[11px] text-white/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      Online | Replies in minutes
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-1 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Message */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border">
                <p className="text-xs text-gray-500 mb-1 font-medium">
                  VKS Support
                </p>
                <p className="text-[13px] text-gray-700">
                  Namaste! 🙏 Welcome to VKS Sirpa Kalai Koodam. How can we help
                  you today?
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="p-4 bg-white">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-semibold shadow-md hover:bg-[#20ba5a] active:scale-95 transition"
              >
                <Send size={18} />
                Start Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-gray-800" : "bg-[#25D366]"
        } text-white p-4 rounded-full shadow-2xl transition flex items-center justify-center relative`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}

        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative h-4 w-4 rounded-full bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsappFloat;
