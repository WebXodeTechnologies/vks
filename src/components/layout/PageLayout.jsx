import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-brand-accent/30 selection:text-brand-primary">
      {/* Permanent UI Elements */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow pt-20 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
