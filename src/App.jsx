import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

// Layout & Common Components
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

// Lazy Loading Pages for Performance 100/100 (Code Splitting)
const Home = lazy(() => import("./pages/Home/HomePage.jsx"));
const About = lazy(() => import("./pages/About/AboutPage.jsx"));
const Services = lazy(() => import("./pages/Services/ServicePage.jsx"));
const Blog = lazy(() => import("./pages/Blog/BlogPage.jsx"));
const Contact = lazy(() => import("./pages/Contact/ContactPage.jsx"));

/**
 * ScrollToTop helper:
 * Essential for SPAs to ensure the user starts at the top
 * of the page when navigating.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* Semantic Wrapper */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main id="main-content" className="flex-grow pt-20">
          {/* Suspense handles the loading state while lazy-loaded pages fetch */}
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen text-cement">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback for 404 */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
