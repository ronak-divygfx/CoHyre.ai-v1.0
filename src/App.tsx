import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProductSection } from "./components/ProductSection";
import { AgentFlowSection } from "./components/AgentFlowSection";
import { WhyCoHyreSection } from "./components/WhyCoHyreSection";
import { TestimonialsPage } from "./components/TestimonialsPage";
import { PricingPage } from "./components/PricingPage";
import { SecurityComplianceSection } from "./components/SecurityComplianceSection";
import { Footer } from "./components/Footer";
import { ComparisonPage } from "./components/ComparisonPage";
import { AboutPage } from "./components/AboutPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { ResearchPage } from "./components/ResearchPage";
import { VideosPage } from "./components/VideosPage";
import { PressPage } from "./components/PressPage";
import { SupportPage } from "./components/SupportPage";
import { LeadershipPage } from "./components/LeadershipPage";
import { CareersPage } from "./components/CareersPage";
import { ContactPage } from "./components/ContactPage";
import { TermsPage } from "./components/TermsPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { SecurityPage } from "./components/SecurityPage";
import { CookiePage } from "./components/CookiePage";
import { ROICalculatorPage } from "./components/ROICalculatorPage";

import { CandidatesPage } from "./components/CandidatesPage";
import { JobsPage } from "./components/JobsPage";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Iceland gradient transforms - scroll responsive with higher opacity
  const icelandOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.7, 0.9]);
  const icelandScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const icelandY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const icelandRotation = useTransform(scrollYProgress, [0, 1], [0, 45]);
  
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <main className="relative">
            <HeroSection onNavigate={setCurrentPage} />
            <ProductSection />
            <AgentFlowSection />
            <WhyCoHyreSection onNavigate={setCurrentPage} />
            <SecurityComplianceSection />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "comparison":
        return (
          <main className="relative">
            <ComparisonPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "pricing":
        return (
          <main className="relative pt-20">
            <PricingPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "about":
        return (
          <main className="relative pt-20">
            <AboutPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "resources":
        return (
          <main className="relative pt-20">
            <ResourcesPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "research":
        return (
          <main className="relative pt-20">
            <ResearchPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "videos":
        return (
          <main className="relative pt-20">
            <VideosPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "press":
        return (
          <main className="relative pt-20">
            <PressPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "support":
        return (
          <main className="relative pt-20">
            <SupportPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "leadership":
        return (
          <main className="relative pt-20">
            <LeadershipPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "careers":
        return (
          <main className="relative pt-20">
            <CareersPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "contact":
        return (
          <main className="relative pt-20">
            <ContactPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "terms":
        return (
          <main className="relative pt-20">
            <TermsPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "privacy":
        return (
          <main className="relative pt-20">
            <PrivacyPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "security":
        return (
          <main className="relative pt-20">
            <SecurityPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "cookies":
        return (
          <main className="relative pt-20">
            <CookiePage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "roi-calculator":
        return (
          <main className="relative pt-20">
            <ROICalculatorPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "testimonials":
        return (
          <main className="relative">
            <TestimonialsPage onNavigate={setCurrentPage} />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );

      case "candidates":
        return (
          <main className="relative">
            <CandidatesPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      case "jobs":
        return (
          <main className="relative pt-20">
            <JobsPage />
            <Footer onNavigate={setCurrentPage} />
          </main>
        );
      default:
        return renderPage();
    }
  };

  return (
    <ThemeProvider>
      <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-background text-foreground">
        {/* Iceland Floating Gradient Background - Edge to Edge */}
        <div className="fixed inset-0 -z-20 overflow-hidden">
          {/* Base clean background */}
          <div className="absolute inset-0 bg-background" />
          
          {/* Main Iceland Gradient - Full Width Edge to Edge */}
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

          {/* Secondary Iceland Layer - Different Shape */}
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

          {/* Tertiary Iceland Layer - Flowing Across */}
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

          {/* Edge to Edge Flowing Streams */}
          <motion.div
            className="absolute inset-0 w-[200vw] h-full -left-[50vw]"
            style={{
              background: `linear-gradient(45deg, transparent 0%, rgba(12, 142, 255, 0.08) 20%, rgba(159, 98, 237, 0.06) 40%, rgba(12, 142, 255, 0.04) 60%, transparent 80%)`,
              x: useTransform(scrollYProgress, [0, 1], ['-100%', '100%']),
              filter: 'blur(80px)',
              opacity: useTransform(scrollYProgress, [0, 1], [0.6, 1]),
            }}
          />

          <motion.div
            className="absolute inset-0 w-[200vw] h-full -left-[50vw]"
            style={{
              background: `linear-gradient(-45deg, transparent 0%, rgba(159, 98, 237, 0.06) 25%, rgba(12, 142, 255, 0.05) 50%, rgba(159, 98, 237, 0.04) 75%, transparent 100%)`,
              x: useTransform(scrollYProgress, [0, 1], ['100%', '-100%']),
              filter: 'blur(100px)',
              opacity: useTransform(scrollYProgress, [0, 1], [0.5, 0.8]),
            }}
          />

          {/* Subtle glass overlay to maintain premium feel */}
          <motion.div 
            className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px] dark:bg-background/30"
            style={{
              opacity: useTransform(scrollYProgress, [0, 1], [0.6, 0.2])
            }}
          />
        </div>

        {/* Main container with premium floating effect */}
        <motion.div 
          className="relative z-10 min-h-screen"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -50]),
            background: useTransform(
              scrollYProgress, 
              [0, 0.5, 1], 
              ['rgba(var(--background-rgb, 255, 255, 255), 0.15)', 'rgba(var(--background-rgb, 255, 255, 255), 0.08)', 'rgba(var(--background-rgb, 255, 255, 255), 0.03)']
            ),
            backdropFilter: 'blur(1px)',
          }}
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
        
        {/* Enhanced floating scroll to top button */}
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
            {/* Apple-style glass reflection */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent dark:via-white/10" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent dark:from-white/[0.04] rounded-xl pointer-events-none" />
            
            {/* Scroll-responsive glow */}
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
      </div>
    </ThemeProvider>
  );
}