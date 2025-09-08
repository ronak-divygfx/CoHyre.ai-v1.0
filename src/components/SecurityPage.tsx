import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from "lucide-react";

export function SecurityPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const securityFeatures = [
    {
      icon: Shield,
      title: "SOC 2 Type II Certified",
      description: "Independently audited security controls and procedures"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption", 
      description: "AES-256 encryption for data at rest, TLS 1.3 for data in transit"
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Enterprise-grade cloud infrastructure with 99.9% uptime SLA"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and automated threat detection"
    }
  ];

  const compliance = [
    "SOC 2 Type II",
    "GDPR Compliant", 
    "CCPA Compliant",
    "ISO 27001",
    "HIPAA Ready",
    "EEOC Compliant"
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
            Security & Compliance
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Security Policy
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Enterprise-grade security protecting your hiring data and AI operations
          </p>
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            Compliance & Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {compliance.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-4 py-2 bg-green-50/60 backdrop-blur-xl border border-green-200/60 rounded-full"
              >
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-700 font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="prose prose-slate max-w-none">
            <h2>Data Security Framework</h2>
            <p>
              CoHyre.ai implements a comprehensive security framework designed to protect sensitive 
              hiring data processed by our AI agents:
            </p>

            <h3>Encryption Standards</h3>
            <ul>
              <li><strong>Data at Rest:</strong> AES-256 encryption for all stored data</li>
              <li><strong>Data in Transit:</strong> TLS 1.3 encryption for all API communications</li>
              <li><strong>Database Encryption:</strong> Column-level encryption for PII data</li>
              <li><strong>Backup Encryption:</strong> Encrypted backups with separate key management</li>
            </ul>

            <h3>Access Controls</h3>
            <ul>
              <li>Multi-factor authentication (MFA) required for all accounts</li>
              <li>Role-based access control (RBAC) with principle of least privilege</li>
              <li>Single Sign-On (SSO) integration with enterprise identity providers</li>
              <li>Regular access reviews and automated deprovisioning</li>
            </ul>

            <h2>AI Agent Security</h2>
            <p>
              Our 11 specialized AI agents are designed with security-first principles:
            </p>

            <h3>Secure AI Processing</h3>
            <ul>
              <li>Isolated processing environments for each AI agent</li>
              <li>Input validation and sanitization for all data processing</li>
              <li>Encrypted model storage and version control</li>
              <li>Audit trails for all AI decisions and data access</li>
            </ul>

            <h3>Model Security</h3>
            <ul>
              <li>Proprietary AI models protected with intellectual property safeguards</li>
              <li>Regular model validation and bias testing</li>
              <li>Secure model deployment pipelines</li>
              <li>Protection against model extraction and inference attacks</li>
            </ul>

            <h2>Infrastructure Security</h2>
            <p>
              Our cloud infrastructure follows industry best practices:
            </p>

            <h3>Cloud Security</h3>
            <ul>
              <li>Multi-region deployment with data residency controls</li>
              <li>VPC isolation and network segmentation</li>
              <li>Web Application Firewall (WAF) and DDoS protection</li>
              <li>Intrusion detection and prevention systems</li>
            </ul>

            <h3>Monitoring and Incident Response</h3>
            <ul>
              <li>24/7 Security Operations Center (SOC) monitoring</li>
              <li>Automated threat detection and response</li>
              <li>Comprehensive logging and audit trails</li>
              <li>Incident response plan with defined escalation procedures</li>
            </ul>

            <h2>Data Governance</h2>
            <p>
              We maintain strict data governance policies:
            </p>

            <h3>Data Classification</h3>
            <ul>
              <li>All data classified by sensitivity level</li>
              <li>Automated data discovery and classification</li>
              <li>Data retention policies based on classification</li>
              <li>Secure data disposal procedures</li>
            </ul>

            <h3>Privacy by Design</h3>
            <ul>
              <li>Data minimization principles in AI processing</li>
              <li>Anonymization and pseudonymization techniques</li>
              <li>Consent management for all data processing</li>
              <li>Right to be forgotten compliance</li>
            </ul>

            <h2>Third-Party Security</h2>
            <p>
              All third-party integrations undergo rigorous security assessment:
            </p>
            <ul>
              <li>Vendor security assessments and due diligence</li>
              <li>Contractual data protection requirements</li>
              <li>Regular security reviews of integrated systems</li>
              <li>Secure API integration patterns</li>
            </ul>

            <h2>Vulnerability Management</h2>
            <p>
              We maintain a proactive vulnerability management program:
            </p>
            <ul>
              <li>Regular penetration testing by external security firms</li>
              <li>Automated vulnerability scanning and assessment</li>
              <li>Bug bounty program for responsible disclosure</li>
              <li>Patch management with priority-based deployment</li>
            </ul>

            <h2>Business Continuity</h2>
            <p>
              Our business continuity plans ensure service availability:
            </p>
            <ul>
              <li>99.9% uptime SLA with multi-region failover</li>
              <li>Automated backup and disaster recovery procedures</li>
              <li>Regular business continuity testing</li>
              <li>Communication plans for security incidents</li>
            </ul>

            <div className="mt-8 p-6 bg-amber-50/60 border border-amber-200/60 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Security Incident Reporting</h4>
                  <p className="text-amber-800 text-sm">
                    If you discover a security vulnerability or incident, please report it immediately 
                    to our security team at security@cohyre.ai. We maintain a responsible disclosure 
                    policy and will respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <h2>Contact Security Team</h2>
            <p>
              For security-related questions or to report vulnerabilities:
              <br />
              Email: security@cohyre.ai
              <br />
              Security Hotline: +1 (555) 123-SECURE
              <br />
              Address: CoHyre.ai Security Team, 123 AI Way, San Francisco, CA 94105
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}