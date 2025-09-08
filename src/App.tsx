import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProductSection } from "./components/ProductSection";
import { AgentFlowSection } from "./components/AgentFlowSection";
import { WhyCoHyreSection } from "./components/WhyCoHyreSection";
import { SecurityComplianceSection } from "./components/SecurityComplianceSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef, lazy, Suspense, memo, useMemo, useCallback } from "react";
import { usePerformance } from "./hooks/usePerformance";

// Lazy load heavy components
const TestimonialsPage = lazy(() => import("./components/TestimonialsPage").then(m => ({ default: m.TestimonialsPage })));
const PricingPage = lazy(() => import("./components/PricingPage").then(m => ({ default: m.PricingPage })));
const ComparisonPage = lazy(() => import("./components/ComparisonPage").then(m => ({ default: m.ComparisonPage })));
const AboutPage = lazy(() => import("./components/AboutPage").then(m => ({ default: m.AboutPage })));
const ResourcesPage = lazy(() => import("./components/ResourcesPage").then(m => ({ default: m.ResourcesPage })));
const ResearchPage = lazy(() => import("./components/ResearchPage").then(m => ({ default: m.ResearchPage })));
const VideosPage = lazy(() => import("./components/VideosPage").then(m => ({ default: m.VideosPage })));
const PressPage = lazy(() => import("./components/PressPage").then(m => ({ default: m.PressPage })));
const SupportPage = lazy(() => import("./components/SupportPage").then(m => ({ default: m.SupportPage })));
const LeadershipPage = lazy(() => import("./components/LeadershipPage").then(m => ({ default: m.LeadershipPage })));
const CareersPage = lazy(() => import("./components/CareersPage").then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import("./components/ContactPage").then(m => ({ default: m.ContactPage })));
const TermsPage = lazy(() => import("./components/TermsPage").then(m => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import("./components/PrivacyPage").then(m => ({ default: m.PrivacyPage })));
const SecurityPage = lazy(() => import("./components/SecurityPage").then(m => ({ default: m.SecurityPage })));
const CookiePage = lazy(() => import("./components/CookiePage").then(m => ({ default: m.CookiePage })));
const ROICalculatorPage = lazy(() => import("./components/ROICalculatorPage").then(m => ({ default: m.ROICalculatorPage })));
const CandidatesPage = lazy(() => import("./components/CandidatesPage").then(m => ({ default: m.CandidatesPage })));
const JobsPage = lazy(() => import("./components/JobsPage").then(m => ({ default: m.JobsPage })));

// Loading component
const PageLoader = memo(() => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
));
PageLoader.displayName = "PageLoader";

// Memoized background component to prevent unnecessary re-renders
const BackgroundGradient = memo(() => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Optimized transforms with reduced complexity
  const icelandOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.7, 0.9]);
  const icelandScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const icelandY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const icelandRotation = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base clean background */}
      <div className="absolute inset-0 bg-background" />

      {/* Main Iceland Gradient - Optimized with will-change */}
      <motion.div
        className="absolute w-[150vw] h-[120vh] -left-[25vw] -top-[10vh]"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 30% 40%, rgba(12, 142, 255, 0.2) 0%, rgba(159, 98, 237, 0.15) 25%, rgba(12, 142, 255, 0.1) 50%, rgba(159, 98, 237, 0.08) 75%, transparent 100%)`,
          transform: 'translateZ(0)',
          scale: icelandScale,
          y: icelandY,
          rotate: icelandRotation,
          filter: 'blur(120px)',
          opacity: icelandOpacity,
          willChange: 'transform, opacity',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
          rotate: [0, 15, -10, 0],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Secondary Iceland Layer - Optimized */}
      <motion.div
        className="absolute w-[140vw] h-[100vh] -right-[20vw] top-[20vh]"
        style={{
          background: `radial-gradient(ellipse 100% 70% at 70% 60%, rgba(159, 98, 237, 0.18) 0%, rgba(12, 142, 255, 0.12) 30%, rgba(159, 98, 237, 0.08) 60%, transparent 100%)`,
          transform: 'translateZ(0)',
          scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.6]),
          y: useTransform(scrollYProgress, [0, 1], [50, -200]),
          rotate: useTransform(scrollYProgress, [0, 1], [10, -35]),
          filter: 'blur(150px)',
          opacity: useTransform(scrollYProgress, [0, 1], [0.4, 0.8]),
          willChange: 'transform, opacity',
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 60, -40, 0],
          rotate: [10, -20, 25, 10],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 20
        }}
      />

      {/* Tertiary Iceland Layer - Optimized */}
      <motion.div
        className="absolute w-[200vw] h-[80vh] -left-[50vw] bottom-[10vh]"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.12) 40%, rgba(12, 142, 255, 0.08) 70%, transparent 100%)`,
          transform: 'translateZ(0)',
          scale: useTransform(scrollYProgress, [0, 1], [1.2, 2.0]),
          y: useTransform(scrollYProgress, [0, 1], [0, -400]),
          x: useTransform(scrollYProgress, [0, 1], [0, 300]),
          filter: 'blur(180px)',
          opacity: useTransform(scrollYProgress, [0, 1], [0.5, 0.9]),
          willChange: 'transform, opacity',
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 50, 0],
          scale: [1.2, 1.8, 1.4, 1.2],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 40
        }}
      />

      {/* Edge to Edge Flowing Streams - Optimized */}
      <motion.div
        className="absolute inset-0 w-[200vw] h-full -left-[50vw]"
        style={{
          background: `linear-gradient(45deg, transparent 0%, rgba(12, 142, 255, 0.08) 20%, rgba(159, 98, 237, 0.06) 40%, rgba(12, 142, 255, 0.04) 60%, transparent 80%)`,
          x: useTransform(scrollYProgress, [0, 1], ['-100%', '100%']),
          filter: 'blur(80px)',
          opacity: useTransform(scrollYProgress, [0, 1], [0.6, 1]),
          willChange: 'transform, opacity',
        }}
      />

      <motion.div
        className="absolute inset-0 w-[200vw] h-full -left-[50vw]"
        style={{
          background: `linear-gradient(-45deg, transparent 0%, rgba(159, 98, 237, 0.06) 25%, rgba(12, 142, 255, 0.05) 50%, rgba(159, 98, 237, 0.04) 75%, transparent 100%)`,
          x: useTransform(scrollYProgress, [0, 1], ['100%', '-100%']),
          filter: 'blur(100px)',
          opacity: useTransform(scrollYProgress, [0, 1], [0.5, 0.8]),
          willChange: 'transform, opacity',
        }}
      />

      {/* Subtle glass overlay */}
      <motion.div
        className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px] dark:bg-background/30"
        style={{
          opacity: useTransform(scrollYProgress, [0, 1], [0.6, 0.2])
        }}
      />
    </div>
  );
});
BackgroundGradient.displayName = "BackgroundGradient";

// Memoized scroll to top button
const ScrollToTopButton = memo(() => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
      style={{
        y: useTransform(scrollYProgress, [0, 1], [0, -20])
      }}
    >
      <motion.button
        className="w-11 h-11 relative overflow-hidden group"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 1],
            ['rgba(var(--card-rgb, 255, 255, 255), 0.6)', 'rgba(var(--card-rgb, 255, 255, 255), 0.9)']
          ),
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(var(--border-rgb, 0, 0, 0), 0.3)',
          borderRadius: '12px',
          boxShadow: useTransform(
            scrollYProgress,
            [0, 1],
            ['0 8px 32px rgba(0, 0, 0, 0.1)', '0 25px 50px rgba(12, 142, 255, 0.2)']
          ),
        }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent dark:via-white/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent dark:from-white/[0.04] rounded-xl pointer-events-none" />

        <motion.div
          className="absolute inset-1 bg-gradient-to-br from-[#0C8EFF]/10 via-[#9F62ED]/8 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            opacity: useTransform(scrollYProgress, [0, 1], [0, 0.3])
          }}
        />

        <svg
          className="w-4 h-4 text-muted-foreground relative z-10 group-hover:text-[#0C8EFF] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </motion.div>
  );
});
ScrollToTopButton.displayName = "ScrollToTopButton";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Initialize performance optimizations
  usePerformance();

  // Memoized page renderer with optimized structure
  const renderPage = useCallback(() => {
    const commonMainClass = currentPage === "home" || currentPage === "testimonials" || currentPage === "candidates"
      ? "relative"
      : "relative pt-20";

    const PageContent = () => {
      switch (currentPage) {
        case "home":
          return (
            <>
              <HeroSection onNavigate={setCurrentPage} />
              <ProductSection />
              <AgentFlowSection />
              <WhyCoHyreSection onNavigate={setCurrentPage} />
              <SecurityComplianceSection />
            </>
          );
        case "comparison":
          return <ComparisonPage />;
        case "pricing":
          return <PricingPage />;
        case "about":
          return <AboutPage />;
        case "resources":
          return <ResourcesPage />;
        case "research":
          return <ResearchPage />;
        case "videos":
          return <VideosPage />;
        case "press":
          return <PressPage />;
        case "support":
          return <SupportPage />;
        case "leadership":
          return <LeadershipPage />;
        case "careers":
          return <CareersPage />;
        case "contact":
          return <ContactPage />;
        case "terms":
          return <TermsPage />;
        case "privacy":
          return <PrivacyPage />;
        case "security":
          return <SecurityPage />;
        case "cookies":
          return <CookiePage />;
        case "roi-calculator":
          return <ROICalculatorPage />;
        case "testimonials":
          return <TestimonialsPage onNavigate={setCurrentPage} />;
        case "candidates":
          return <CandidatesPage />;
        case "jobs":
          return <JobsPage />;
        default:
          return null;
      }
    };

    return (
      <main className={commonMainClass}>
        <Suspense fallback={<PageLoader />}>
          <PageContent />
        </Suspense>
        <Footer onNavigate={setCurrentPage} />
      </main>
    );
  }, [currentPage]);

  // Memoized main container with optimized transforms
  const mainContainerStyle = useMemo(() => ({
    y: useTransform(scrollYProgress, [0, 1], [0, -50]),
    background: useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      ['rgba(var(--background-rgb, 255, 255, 255), 0.15)', 'rgba(var(--background-rgb, 255, 255, 255), 0.08)', 'rgba(var(--background-rgb, 255, 255, 255), 0.03)']
    ),
    backdropFilter: 'blur(1px)',
  }), [scrollYProgress]);

  return (
    <ThemeProvider>
      <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-background text-foreground">
        {/* Optimized background gradient */}
        <BackgroundGradient />

        {/* Main container with premium floating effect */}
        <motion.div
          className="relative z-10 min-h-screen"
          style={mainContainerStyle}
        >
          <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
          {renderPage()}
        </motion.div>

        {/* Minimal toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'hsl(var(--card))',
              backdropFilter: 'blur(16px)',
              border: '1px solid hsl(var(--border))',
              borderRadius: '12px',
              color: 'hsl(var(--foreground))',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.08)',
            },
          }}
        />

        {/* Optimized scroll to top button */}
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
}