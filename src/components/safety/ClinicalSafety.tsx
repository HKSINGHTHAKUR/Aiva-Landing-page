import { motion } from 'motion/react';
import { ShieldCheck, AlertCircle, Eye, FileCheck } from 'lucide-react';

export default function ClinicalSafety() {
  const principles = [
    {
      icon: AlertCircle,
      title: "No automated diagnosis",
      description: "System identifies patterns for clinical review only. Diagnostic conclusions remain exclusively within provider authority."
    },
    {
      icon: ShieldCheck,
      title: "No treatment recommendations",
      description: "AIVA does not suggest, modify, or influence treatment decisions. Clinical judgment is never automated."
    },
    {
      icon: FileCheck,
      title: "Mandatory clinical review",
      description: "All outputs require explicit provider acknowledgment before any clinical action. Nothing bypasses human oversight."
    },
    {
      icon: Eye,
      title: "Full explainability",
      description: "Every pattern observation includes methodology, confidence level, and supporting evidence for independent verification."
    }
  ];

  return (
    <section id="security" className="scroll-mt-24 w-full py-32 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-[11px] text-[#3B82F6] tracking-[0.2em] uppercase mb-6 block">
            Safety
          </span>
          <h2 className="font-display text-[40px] md:text-[48px] lg:text-[56px] font-light text-white leading-[1.1] mb-6">
            Built for Clinical Accountability
          </h2>
          <p className="font-body text-[16px] text-[#71717A] max-w-[600px] leading-[1.7]">
            AIVA operates within strict boundaries designed to support — never supplant — 
            clinical decision-making.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="flex gap-5 p-6 rounded-xl border border-[#1C1C1E] bg-[#0D0D0E]/50 hover:border-[#27272A] transition-colors duration-300">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#18181B] flex items-center justify-center">
                  <principle.icon className="w-5 h-5 text-[#A1A1AA]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-body text-[15px] font-medium text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="font-body text-[13px] text-[#71717A] leading-[1.7]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance statement */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-[#1C1C1E] pt-12"
        >
          <div className="clinical-card rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-[#27272A] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#3B82F6]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h4 className="font-body text-[15px] font-medium text-white mb-2">
                  Regulatory Alignment
                </h4>
                <p className="font-body text-[13px] text-[#71717A] leading-[1.7]">
                  Architecture designed with HIPAA compliance considerations. Clinical decision support 
                  functionality subject to appropriate regulatory pathways. System does not make or 
                  recommend clinical decisions — outputs require provider interpretation and action.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer disclaimers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-4 justify-center"
        >
          {[
            "Designed to support clinical review — not replace it",
            "Patterns are presented for interpretation, not diagnosis",
            "Absence of flagged patterns does not indicate absence of clinical issues"
          ].map((text, i) => (
            <span key={i} className="font-mono text-[10px] text-[#3F3F46]">
              {text}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
