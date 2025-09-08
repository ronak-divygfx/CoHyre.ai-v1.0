import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProductSection } from "./components/ProductSection";
import { AgentFlowSection } from "./components/AgentFlowSection";
import { WhyCoHyreSection } from "./components/WhyCoHyreSection";
import { SecurityComplianceSection } from "./components/SecurityComplianceSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { useState, lazy, Suspense } from "react";

// Lazy load all page components
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
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
);

export default function App() {
    const [currentPage, setCurrentPage] = useState("home");

    const renderPage = () => {
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
                    return (
                        <>
                            <HeroSection onNavigate={setCurrentPage} />
                            <ProductSection />
                            <AgentFlowSection />
                            <WhyCoHyreSection onNavigate={setCurrentPage} />
                            <SecurityComplianceSection />
                        </>
                    );
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
    };

    return (
        <ThemeProvider>
            <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
                <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
                {renderPage()}

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
            </div>
        </ThemeProvider>
    );
}
