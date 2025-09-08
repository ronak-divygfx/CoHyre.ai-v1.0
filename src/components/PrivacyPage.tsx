import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

export function PrivacyPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Enterprise-grade security protecting all candidate and company data"
    },
    {
      icon: Lock,
      title: "Encryption",
      description: "End-to-end encryption for data in transit and at rest"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear visibility into how AI agents process and use data"
    },
    {
      icon: UserCheck,
      title: "User Control",
      description: "Complete control over data retention, deletion, and access rights"
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
            Privacy & Data Protection
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            How we protect and handle your data with our AI agents
            <br />
            <span className="text-base">Last updated: December 2024</span>
          </p>
        </motion.div>

        {/* Privacy Principles */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {privacyPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="p-6 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {principle.description}
                </p>
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
            <h2>Information We Collect</h2>
            <p>
              CoHyre.ai's AI agents collect and process the following types of information to provide 
              autonomous hiring services:
            </p>
            
            <h3>Company Data</h3>
            <ul>
              <li>Job descriptions and requirements</li>
              <li>Company culture and hiring preferences</li>
              <li>Historical hiring data and outcomes</li>
              <li>Integration data from existing ATS and HR systems</li>
            </ul>

            <h3>Candidate Data</h3>
            <ul>
              <li>Resume and profile information</li>
              <li>Interview responses and performance data</li>
              <li>Communication preferences and history</li>
              <li>Skills assessments and evaluation results</li>
            </ul>

            <h2>How Our AI Agents Use Data</h2>
            <p>Our 11 specialized AI agents use data for the following purposes:</p>
            
            <h3>Company Context & Benchmark Agent</h3>
            <p>
              Analyzes company culture, skills requirements, and market benchmarks to establish 
              hiring baselines and preferences.
            </p>

            <h3>Candidate Search & Matching Agents</h3>
            <p>
              Process candidate profiles to identify relevant matches based on skills, experience, 
              and cultural fit rather than keyword matching.
            </p>

            <h3>Interview & Assessment Agents</h3>
            <p>
              Conduct structured interviews, analyze responses, and provide unbiased evaluation 
              recommendations while maintaining candidate privacy.
            </p>

            <h2>Data Sharing and Third Parties</h2>
            <p>
              We do not sell, rent, or trade personal information. Data is shared only:
            </p>
            <ul>
              <li>With explicit consent for specific hiring processes</li>
              <li>With integrated ATS and HR systems as configured</li>
              <li>When required by law or legal process</li>
              <li>With service providers under strict confidentiality agreements</li>
            </ul>

            <h2>AI and Algorithmic Processing</h2>
            <p>
              Our AI agents are designed with privacy-by-design principles:
            </p>
            <ul>
              <li>Data minimization - only necessary data is processed</li>
              <li>Purpose limitation - data used only for specified hiring functions</li>
              <li>Bias detection and mitigation in all AI decisions</li>
              <li>Regular audits of algorithmic fairness and accuracy</li>
            </ul>

            <h2>Data Retention and Deletion</h2>
            <p>
              We retain data only as long as necessary:
            </p>
            <ul>
              <li>Active hiring data: Duration of hiring process + 1 year</li>
              <li>Historical analytics: Anonymized and aggregated for 3 years</li>
              <li>Account data: Until account closure + 30 days</li>
              <li>Legal compliance: As required by applicable laws</li>
            </ul>

            <h2>Security Measures</h2>
            <p>
              We implement comprehensive security measures:
            </p>
            <ul>
              <li>SOC 2 Type II certified infrastructure</li>
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 encryption for data in transit</li>
              <li>Multi-factor authentication and access controls</li>
              <li>Regular security audits and penetration testing</li>
            </ul>

            <h2>Your Rights and Choices</h2>
            <p>
              Under GDPR, CCPA, and other privacy laws, you have the right to:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request data deletion</li>
              <li>Object to certain processing activities</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights:
              <br />
              Email: privacy@cohyre.ai
              <br />
              Data Protection Officer: dpo@cohyre.ai
              <br />
              Address: CoHyre.ai, 123 AI Way, San Francisco, CA 94105
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}