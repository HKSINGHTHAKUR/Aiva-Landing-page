import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Clock, Layers, FileText } from 'lucide-react';

export default function ProviderExperience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const features = [
    {
      icon: Clock,
      title: "Structured overview",
      description: "Patient timeline presented in approximately 15-second review format"
    },
    {
      icon: Layers,
      title: "Pattern observation panel",
      description: "Temporal correlations displayed with supporting context"
    },
    {
      icon: FileText,
      title: "Explainability breakdown",
      description: "Methodology and confidence levels for each observation"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="for-providers" 
      className="scroll-mt-24 w-full py-32 relative z-10"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[11px] text-[#3B82F6] tracking-[0.2em] uppercase mb-6 block">
              Provider Experience
            </span>
            <h2 className="font-display text-[40px] md:text-[48px] lg:text-[56px] font-light text-white leading-[1.1] mb-8">
              Clinical Context,<br/>
              <span className="text-[#A1A1AA]">Efficiently Presented</span>
            </h2>
            <p className="font-body text-[16px] text-[#71717A] leading-[1.8] mb-12 max-w-[480px]">
              Inter-visit patient data structured for rapid clinical review. 
              All observations presented with full explainability for independent assessment.
            </p>

            {/* Feature list */}
            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#18181B] flex items-center justify-center mt-1">
                    <feature.icon className="w-5 h-5 text-[#3B82F6]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-body text-[15px] font-medium text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-[13px] text-[#71717A]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="mt-10 font-mono text-[10px] text-[#3F3F46] max-w-[400px]">
              Review time estimates are illustrative. Actual review duration depends on 
              case complexity and provider workflow.
            </p>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            style={{ y: yParallax }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="clinical-card rounded-2xl p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="font-mono text-[11px] text-[#A1A1AA] tracking-wider uppercase">
                    Patient Overview
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#52525B]">
                  Last sync: Recent
                </span>
              </div>

              {/* Patient info placeholder */}
              <div className="bg-[#18181B] rounded-xl p-5 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#27272A]" />
                  <div>
                    <div className="h-3 w-24 bg-[#27272A] rounded mb-2" />
                    <div className="h-2 w-16 bg-[#1C1C1E] rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-[#1C1C1E] rounded" />
                  <div className="h-2 w-4/5 bg-[#1C1C1E] rounded" />
                </div>
              </div>

              {/* Pattern observation card */}
              <div className="bg-[#18181B] rounded-xl p-5 mb-4 border-l-2 border-[#3B82F6]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span className="font-mono text-[10px] text-[#3B82F6] tracking-wider uppercase">
                    Pattern Observation
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-2 w-full bg-[#27272A] rounded" />
                  <div className="h-2 w-3/4 bg-[#27272A] rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-[#52525B]">Confidence:</span>
                    <div className="w-16 h-1.5 bg-[#27272A] rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-[#3B82F6]" />
                    </div>
                  </div>
                  <span className="font-mono text-[9px] text-[#52525B]">Requires review</span>
                </div>
              </div>

              {/* Explainability section */}
              <div className="bg-[#18181B] rounded-xl p-5">
                <span className="font-mono text-[10px] text-[#52525B] tracking-wider uppercase block mb-3">
                  Explainability
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-mono text-[9px] text-[#3F3F46] block mb-1">Method</span>
                    <div className="h-2 w-20 bg-[#27272A] rounded" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#3F3F46] block mb-1">Evidence</span>
                    <div className="h-2 w-24 bg-[#27272A] rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#3B82F6]/5 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#8B5CF6]/5 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
