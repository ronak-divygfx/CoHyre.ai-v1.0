import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";

export function TermsPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
            Legal Terms
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Terms of Service
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Last updated: December 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="prose prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using CoHyre.ai's services, you accept and agree to be bound by the terms 
              and provision of this agreement. These Terms of Service ("Terms") govern your use of our 
              AI-powered hiring platform and related services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              CoHyre.ai provides an autonomous hiring platform powered by 11 specialized AI agents that 
              automate end-to-end recruitment processes. Our platform includes:
            </p>
            <ul>
              <li>AI-powered candidate sourcing and matching</li>
              <li>Automated interview scheduling and conducting</li>
              <li>Intelligent candidate evaluation and ranking</li>
              <li>Bias-free hiring recommendations</li>
              <li>Integration with existing ATS and HR systems</li>
            </ul>

            <h2>3. User Accounts and Registration</h2>
            <p>
              To access our services, you must create an account and provide accurate, complete information. 
              You are responsible for maintaining the confidentiality of your account credentials and for all 
              activities that occur under your account.
            </p>

            <h2>4. Acceptable Use Policy</h2>
            <p>You agree not to use our services to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Discriminate against candidates based on protected characteristics</li>
              <li>Upload malicious code or attempt to compromise system security</li>
              <li>Reverse engineer or attempt to extract our AI algorithms</li>
              <li>Use the platform for any purpose other than legitimate hiring activities</li>
            </ul>

            <h2>5. Data Privacy and Security</h2>
            <p>
              We take data privacy seriously. Our AI agents process candidate data in accordance with applicable 
              privacy laws including GDPR, CCPA, and other regional regulations. For detailed information about 
              how we collect, use, and protect data, please refer to our Privacy Policy.
            </p>

            <h2>6. AI and Machine Learning Limitations</h2>
            <p>
              While our AI agents are designed to provide accurate and unbiased hiring recommendations, you 
              acknowledge that:
            </p>
            <ul>
              <li>AI systems may occasionally produce unexpected results</li>
              <li>Final hiring decisions remain your responsibility</li>
              <li>Our algorithms continuously learn and improve over time</li>
              <li>No AI system is 100% accurate or free from all forms of bias</li>
            </ul>

            <h2>7. Subscription and Payment Terms</h2>
            <p>
              CoHyre.ai operates on a subscription basis. Payment terms, pricing, and cancellation policies 
              are outlined in your specific service agreement. We reserve the right to modify pricing with 
              30 days advance notice.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All AI algorithms, software, and technology used in our platform remain the exclusive property 
              of CoHyre.ai. Users retain ownership of their data while granting us necessary licenses to 
              provide our services.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              CoHyre.ai shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from your use of our services. Our total liability shall not exceed the amount paid 
              for our services in the 12 months preceding the claim.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of significant 
              changes via email or platform notifications. Continued use of our services after changes 
              constitutes acceptance of the modified Terms.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@cohyre.ai
              <br />
              Address: CoHyre.ai, 123 AI Way, San Francisco, CA 94105
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}