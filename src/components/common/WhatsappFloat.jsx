import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "9865390925";
  const businessName = "VKS Sirpa Kalai Koodam";
  const initials = "VKS";
  const prefilledMessage =
    "Hello! I'm interested in your traditional sculptures.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="wa-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-72 rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100"
          >
            <div className="bg-[#128C7E] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white text-xs font-bold">
                  {initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    {businessName}
                  </p>
                  <p className="text-white/70 text-[11px]">
                    Online · Replies in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 bg-[#ECE5DD]">
              <div className="bg-white rounded-xl px-4 py-3 shadow-sm">
                <p className="text-[#128C7E] text-xs font-semibold mb-1">
                  {businessName}
                </p>
                <p className="text-gray-700 text-sm">
                  Vanakkam! 🙏 How can we help you today?
                </p>
              </div>
            </div>

            <div className="p-4 bg-white">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold transition"
              >
                <Send size={15} />
                Start conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Chat on WhatsApp"
        className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors -top-11   ${
          isOpen ? "bg-gray-800" : "bg-[#25D366]"
        }`}
      >
        {isOpen ? (
          <X size={24} color="white" />
        ) : (
          <FaWhatsapp size={24} color="white" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75" />
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
