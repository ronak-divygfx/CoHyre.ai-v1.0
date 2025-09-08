import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Check, 
  X,
  Sparkles,
  User,
  Zap,
  Building,
  Users,
  Crown,
  DollarSign,
  IndianRupee
} from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPriceUSD: number;
  annualPriceUSD: number;
  monthlyPriceINR: number;
  annualPriceINR: number;
  originalPriceUSD?: number;
  originalPriceINR?: number;
  icon: any;
  popular?: boolean;
  features: Array<{
    name: string;
    included: boolean;
    highlight?: boolean;
  }>;
  cta: string;
  ctaStyle: "primary" | "secondary" | "outline";
}

type Currency = "USD" | "INR";
type BillingPeriod = "monthly" | "annually";

export function PricingPage() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const pricingTiers: PricingTier[] = [
    {
      id: "trial",
      name: "Trial User",
      tagline: "Perfect for testing our platform",
      monthlyPriceUSD: 36,
      annualPriceUSD: 36,
      monthlyPriceINR: 3000,
      annualPriceINR: 3000,
      originalPriceUSD: 72,
      originalPriceINR: 6000,
      icon: User,
      features: [
        { name: "400 AI Credits", included: true },
        { name: "1 User - Free Posting", included: true },
        { name: "AI Resume Sourcing", included: true },
        { name: "AI CV Assessment", included: true },
        { name: "Email API", included: true },
        { name: "In-built ATS", included: false },
        { name: "CoHyre Pool Suggestions", included: false },
        { name: "AI Conversation Assessment", included: false },
        { name: "AI Voice Calling", included: false }
      ],
      cta: "Get Started",
      ctaStyle: "outline"
    },
    {
      id: "starter",
      name: "Starter",
      tagline: "Rapid Results Hiring",
      monthlyPriceUSD: 500,
      annualPriceUSD: 500,
      monthlyPriceINR: 42000,
      annualPriceINR: 42000,
      icon: Zap,
      features: [
        { name: "2000 AI Credits", included: true, highlight: true },
        { name: "Multiple Users & Job Postings", included: true },
        { name: "Unlimited Users & Jobs", included: true },
        { name: "AI Resume Sourcing", included: true },
        { name: "CoHyre Pool Suggestions", included: true },
        { name: "AI CV Assessment", included: true },
        { name: "In-built ATS", included: true },
        { name: "AI Conversation Assessment", included: false },
        { name: "AI Voice Calling", included: false }
      ],
      cta: "Get Started",
      ctaStyle: "outline"
    },
    {
      id: "growth",
      name: "Growth",
      tagline: "For Scaling Teams",
      monthlyPriceUSD: 1000,
      annualPriceUSD: 850,
      monthlyPriceINR: 85000,
      annualPriceINR: 72000,
      icon: Building,
      popular: true,
      features: [
        { name: "5000 AI Credits", included: true, highlight: true },
        { name: "Unlimited Users & Jobs", included: true },
        { name: "AI Resume Sourcing", included: true },
        { name: "AI CV Assessment", included: true },
        { name: "CoHyre Pool Suggestions", included: true },
        { name: "AI Conversation Assessment", included: true, highlight: true },
        { name: "In-built ATS", included: true },
        { name: "AI Voice Calling", included: false }
      ],
      cta: "Get Started",
      ctaStyle: "primary"
    },
    {
      id: "scaleup",
      name: "Scaleup",
      tagline: "For Growth Companies",
      monthlyPriceUSD: 1800,
      annualPriceUSD: 1500,
      monthlyPriceINR: 150000,
      annualPriceINR: 125000,
      icon: Users,
      features: [
        { name: "10000 AI Credits", included: true, highlight: true },
        { name: "Unlimited Users & Jobs", included: true },
        { name: "AI Resume Sourcing", included: true },
        { name: "AI CV Assessment", included: true },
        { name: "CoHyre Pool Suggestions", included: true },
        { name: "AI Conversation Assessment", included: true },
        { name: "AI Voice Calling", included: true, highlight: true },
        { name: "In-built ATS", included: true }
      ],
      cta: "Contact Sales",
      ctaStyle: "outline"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      tagline: "For Scale",
      monthlyPriceUSD: 0,
      annualPriceUSD: 0,
      monthlyPriceINR: 0,
      annualPriceINR: 0,
      icon: Crown,
      features: [
        { name: "Everything in Scaleup", included: true },
        { name: "Custom Integrations", included: true, highlight: true },
        { name: "Custom ATS", included: true },
        { name: "Premium Support", included: true },
        { name: "Dedicated Account Manager", included: true, highlight: true },
        { name: "Volume-based Pricing", included: true },
        { name: "White-label Solution", included: true, highlight: true }
      ],
      cta: "Contact Sales",
      ctaStyle: "secondary"
    }
  ];

  const formatPrice = (price: number, currencyType: Currency) => {
    if (price === 0) return "Custom";
    
    if (currencyType === "USD") {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
    } else {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
    }
  };

  const getCurrentPrice = (tier: PricingTier) => {
    const basePrice = currency === "USD" 
      ? (billingPeriod === "annually" ? tier.annualPriceUSD : tier.monthlyPriceUSD)
      : (billingPeriod === "annually" ? tier.annualPriceINR : tier.monthlyPriceINR);
    
    const originalPrice = currency === "USD" 
      ? tier.originalPriceUSD 
      : tier.originalPriceINR;
    
    return { basePrice, originalPrice };
  };

  const getSavingsPercentage = (monthly: number, annual: number) => {
    if (monthly === annual || annual === 0) return 0;
    return Math.round(((monthly - annual) / monthly) * 100);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/5 to-[#9F62ED]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#9F62ED]/5 to-[#0C8EFF]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Smarter Way to Hire
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Flexible plans powered by AI agents to fit your recruiting needs.
          </motion.p>

          {/* Modern Control Panel */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Currency Toggle */}
            <div className="relative p-1 bg-muted/50 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg">
              <div className="flex items-center">
                <motion.button
                  onClick={() => setCurrency("USD")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                    currency === "USD" 
                      ? 'text-background shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {currency === "USD" && (
                    <motion.div
                      className="absolute inset-0 bg-foreground rounded-xl"
                      layoutId="currency-active"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <DollarSign className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">USD</span>
                </motion.button>
                <motion.button
                  onClick={() => setCurrency("INR")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                    currency === "INR" 
                      ? 'text-background shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {currency === "INR" && (
                    <motion.div
                      className="absolute inset-0 bg-foreground rounded-xl"
                      layoutId="currency-active"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <IndianRupee className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">INR</span>
                </motion.button>
              </div>
            </div>

            {/* Billing Period Toggle */}
            <div className="relative p-1 bg-muted/50 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg">
              <div className="flex items-center">
                <motion.button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                    billingPeriod === "monthly" 
                      ? 'text-background shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {billingPeriod === "monthly" && (
                    <motion.div
                      className="absolute inset-0 bg-foreground rounded-xl"
                      layoutId="billing-active"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">Monthly</span>
                </motion.button>
                <motion.button
                  onClick={() => setBillingPeriod("annually")}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                    billingPeriod === "annually" 
                      ? 'text-background shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {billingPeriod === "annually" && (
                    <motion.div
                      className="absolute inset-0 bg-foreground rounded-xl"
                      layoutId="billing-active"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">Annual</span>
                  <Badge className="bg-green-500 text-white text-xs px-2 py-0.5 relative z-10">
                    Save 15%
                  </Badge>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            const { basePrice, originalPrice } = getCurrentPrice(tier);
            const savingsPercentage = billingPeriod === "annually" && tier.monthlyPriceINR !== tier.annualPriceINR 
              ? getSavingsPercentage(
                  currency === "USD" ? tier.monthlyPriceUSD : tier.monthlyPriceINR,
                  currency === "USD" ? tier.annualPriceUSD : tier.annualPriceINR
                )
              : 0;
            
            return (
              <motion.div
                key={tier.id}
                className={`relative group ${tier.popular ? 'md:scale-105 z-10' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-xl">
                      <Sparkles className="w-4 h-4 inline mr-2" />
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <div className={`relative h-full p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 group-hover:shadow-2xl overflow-hidden ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-background/95 via-background/90 to-muted/30 border-[#0C8EFF]/30 shadow-xl' 
                    : 'bg-background/60 border-border/40 hover:border-border/60 hover:bg-background/80'
                }`}>
                  
                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-3xl" />
                  
                  {/* Animated Background Glow for Popular */}
                  {tier.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  )}

                  {/* Header */}
                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      tier.popular 
                        ? 'bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20' 
                        : 'bg-muted/50'
                    }`}>
                      <Icon className={`w-7 h-7 ${
                        tier.popular ? 'text-[#0C8EFF]' : 'text-muted-foreground'
                      }`} />
                    </div>
                    
                    {savingsPercentage > 0 && billingPeriod === "annually" && (
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20 font-medium">
                        Save {savingsPercentage}%
                      </Badge>
                    )}
                  </div>

                  {/* Plan Info */}
                  <div className="relative z-10 mb-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide font-medium">{tier.tagline}</p>
                  </div>

                  {/* Pricing */}
                  <div className="relative z-10 mb-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${currency}-${billingPeriod}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {tier.id === 'trial' ? (
                          <div>
                            <div className="flex items-baseline gap-3 mb-2">
                              <span className="text-4xl font-bold text-foreground">
                                {formatPrice(basePrice, currency)}
                              </span>
                              {originalPrice && (
                                <span className="text-xl text-muted-foreground line-through">
                                  {formatPrice(originalPrice, currency)}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              50% off first month, then {formatPrice(originalPrice || 0, currency)}/month
                            </p>
                          </div>
                        ) : tier.id === 'enterprise' ? (
                          <div>
                            <div className="text-4xl font-bold text-foreground mb-2">
                              Custom
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Tailored to your needs
                            </p>
                          </div>
                        ) : (
                          <div>
                            <div className="text-4xl font-bold text-foreground mb-2">
                              {formatPrice(basePrice, currency)}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {billingPeriod === "annually" ? 'per month, billed annually' : 'per month'}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* CTA Button */}
                  <div className="relative z-10 mb-8">
                    <Button 
                      className={`w-full h-12 rounded-xl font-medium transition-all duration-300 ${
                        tier.ctaStyle === 'primary'
                          ? 'bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white hover:shadow-lg hover:shadow-[#0C8EFF]/25'
                          : tier.ctaStyle === 'secondary'
                            ? 'bg-muted text-foreground hover:bg-muted/80'
                            : 'border-2 border-border hover:border-foreground/30 bg-transparent hover:bg-muted/50'
                      }`}
                    >
                      {tier.cta}
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="relative z-10 space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.05 }}
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          feature.included 
                            ? feature.highlight
                              ? 'bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED]'
                              : 'bg-green-500/20'
                            : 'bg-muted/50'
                        }`}>
                          {feature.included ? (
                            <Check className={`w-3 h-3 ${
                              feature.highlight ? 'text-white' : 'text-green-600'
                            }`} />
                          ) : (
                            <X className="w-3 h-3 text-muted-foreground" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          feature.included 
                            ? feature.highlight
                              ? 'text-foreground font-medium'
                              : 'text-foreground'
                            : 'text-muted-foreground'
                        }`}>
                          {feature.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-muted-foreground mb-8">
            * All Multi-User plans include unlimited users and unlimited job postings. All Credits are renewed monthly.
          </p>
          
          {/* Contact CTA */}
          <div className="bg-muted/30 backdrop-blur-xl rounded-2xl border border-border/50 p-8 inline-block">
            <h3 className="text-xl font-semibold text-foreground mb-2">Need help choosing?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Our team can help you find the perfect plan for your hiring needs.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}