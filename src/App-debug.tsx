import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProductSection } from "./components/ProductSection";
import { AgentFlowSection } from "./components/AgentFlowSection";
import { WhyCoHyreSection } from "./components/WhyCoHyreSection";
import { SecurityComplianceSection } from "./components/SecurityComplianceSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { useState } from "react";

export default function App() {
    const [currentPage, setCurrentPage] = useState("home");

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
            default:
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
        }
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
