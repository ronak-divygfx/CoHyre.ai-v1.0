import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { Cookie, Settings, Eye, Shield } from "lucide-react";

export function CookiePage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality and security",
      duration: "Session",
      canDisable: false
    },
    {
      icon: Eye,
      title: "Analytics Cookies", 
      description: "Help us understand how visitors interact with our platform",
      duration: "1 year",
      canDisable: true
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enable enhanced features and personalization",
      duration: "6 months",
      canDisable: true
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/80" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 bg-white/60 backdrop-blur-xl">
            Cookie Policy
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Cookie Policy
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            How we use cookies to enhance your experience
            <br />
            <span className="text-base">Last updated: December 2024</span>
          </p>
        </motion.div>

        {/* Cookie Types */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {cookieTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="p-6 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {type.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="text-slate-700">{type.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Can disable:</span>
                    <span className={type.canDisable ? "text-green-600" : "text-red-600"}>
                      {type.canDisable ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="prose prose-slate max-w-none">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you interact with our AI-powered hiring platform.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              CoHyre.ai uses cookies for the following purposes:
            </p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly and cannot be disabled:
            </p>
            <ul>
              <li>Authentication and session management</li>
              <li>Security features and fraud prevention</li>
              <li>Load balancing and performance optimization</li>
              <li>Remembering your cookie preferences</li>
            </ul>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors use our platform:
            </p>
            <ul>
              <li>Google Analytics for website traffic analysis</li>
              <li>Heatmapping tools to understand user behavior</li>
              <li>Performance monitoring for our AI agents</li>
              <li>A/B testing for feature improvements</li>
            </ul>

            <h3>Functional Cookies</h3>
            <p>
              These cookies enhance your experience on our platform:
            </p>
            <ul>
              <li>Remembering your language and region preferences</li>
              <li>Saving your dashboard customizations</li>
              <li>Personalizing content recommendations</li>
              <li>Chat widget functionality and history</li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>
              Some cookies are set by third-party services we use:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Website usage analytics</li>
              <li><strong>Intercom:</strong> Customer support chat functionality</li>
              <li><strong>HubSpot:</strong> Marketing automation and lead tracking</li>
              <li><strong>Stripe:</strong> Payment processing and security</li>
            </ul>

            <h2>Cookie Duration</h2>
            <p>
              Cookies have different lifespans:
            </p>
            <ul>
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
              <li><strong>Secure Cookies:</strong> Only transmitted over encrypted connections</li>
            </ul>

            <h2>Managing Your Cookie Preferences</h2>
            <p>
              You have several options for managing cookies:
            </p>

            <h3>Browser Settings</h3>
            <p>
              Most browsers allow you to:
            </p>
            <ul>
              <li>View and delete existing cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block third-party cookies</li>
              <li>Clear cookies when you close the browser</li>
            </ul>

            <h3>Our Cookie Banner</h3>
            <p>
              When you first visit our website, you'll see a cookie banner allowing you to:
            </p>
            <ul>
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences</li>
              <li>Learn more about our cookie usage</li>
            </ul>

            <h3>Opt-Out Links</h3>
            <p>
              You can opt out of specific tracking services:
            </p>
            <ul>
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out</a></li>
              <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener">Digital Advertising Alliance Opt-out</a></li>
              <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener">Your Online Choices</a></li>
            </ul>

            <h2>Impact of Disabling Cookies</h2>
            <p>
              If you disable cookies, some features may not work properly:
            </p>
            <ul>
              <li>You may need to log in repeatedly</li>
              <li>Your preferences may not be saved</li>
              <li>Some interactive features may be limited</li>
              <li>Our AI agents may provide less personalized experiences</li>
            </ul>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in our practices or for legal 
              compliance. We will notify you of significant changes by posting the updated policy 
              on our website and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies:
              <br />
              Email: privacy@cohyre.ai
              <br />
              Address: CoHyre.ai, 123 AI Way, San Francisco, CA 94105
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}