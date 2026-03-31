import { motion } from 'motion/react';
import { Activity, Clock, FileText, TrendingUp } from 'lucide-react';
import BorderGlow from '../ui/BorderGlow';

export default function WhatAIVADoes() {
  const features = [
    {
      icon: Activity,
      title: "Continuous Health Logging",
      description: "Captures patient-reported symptoms, vitals, and experiences as they occur throughout daily life"
    },
    {
      icon: TrendingUp,
      title: "Medication–Symptom Correlation",
      description: "Identifies temporal relationships between medication administration and reported symptoms"
    },
    {
      icon: Clock,
      title: "Clinical Pattern Observation",
      description: "Processes longitudinal data to surface patterns that may warrant clinical attention"
    },
    {
      icon: FileText,
      title: "Provider-Ready Summaries",
      description: "Generates structured documentation formatted for efficient clinical review"
    }
  ];

  return (
    <section id="capabilities" className="scroll-mt-24 w-full py-32 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-[11px] text-[#3B82F6] tracking-[0.2em] uppercase mb-6 block">
            Capabilities
          </span>
          <h2 className="font-display text-[40px] md:text-[48px] lg:text-[56px] font-light text-white leading-[1.1] mb-6">
            What AIVA Does
          </h2>
          <p className="font-body text-[16px] text-[#71717A] max-w-[500px] mx-auto">
            Patterns are presented for interpretation, not diagnosis
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative block h-full"
            >
              <BorderGlow
                className="h-full transition-transform duration-300 hover:translate-y-[-2px] text-left"
                edgeSensitivity={30}
                glowColor="217 91 60"
                backgroundColor="#0B0B0C"
                borderRadius={16}
                glowRadius={30}
                coneSpread={25}
                animated={false}
                colors={['#3B82F6', '#8B5CF6', '#ec4899']}
              >
                <div className="p-8 h-full flex flex-col items-start w-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/15 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-[#3B82F6]" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-body text-[18px] font-medium text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#71717A] leading-[1.7]">
                    {feature.description}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center font-mono text-[10px] text-[#3F3F46] max-w-[600px] mx-auto"
        >
          Absence of flagged patterns does not indicate absence of clinical issues. 
          All outputs require clinical review.
        </motion.p>

      </div>
    </section>
  );
}
