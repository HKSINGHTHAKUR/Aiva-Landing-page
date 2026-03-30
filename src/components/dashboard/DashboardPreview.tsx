import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function DashboardPreview() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={containerRef} className="scroll-mt-24 w-full min-h-[100svh] bg-[#080A0F] py-32 relative z-10 flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center w-full">
        
        {/* Left: Text (50%) */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="font-mono text-[11px] text-[#C8CDD6] tracking-[0.25em] uppercase mb-8">
            PATTERN OBSERVATIONS · EXPLAINABILITY
          </span>
          
          <h2 className="font-display text-[56px] lg:text-[72px] font-light text-[#F0F2F5] leading-[1.05] mb-12">
            Every Pattern.<br/>
            Explained. Not<br/>
            Just Flagged.
          </h2>

          <ul className="space-y-4">
            {[
              'Medication-Symptom Temporal Correlation',
              'NLP Symptom Extraction (SNOMED CT)',
              'SHAP-powered Explainability Panel',
              'PHQ-9 / GAD-7 Screening Integration',
              'Confidence Intervals on Every Insight',
              'Alternative Hypothesis Display'
            ].map((feature, i) => (
              <li key={i} className="group flex items-center gap-4 font-mono text-[13px] lg:text-[14px] text-[#9CA3AF]">
                <span className="text-[#4B5563] group-hover:text-[#1AAFFF] transition-colors">→</span>
                <span className="group-hover:text-[#C8CDD6] transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Dashboard UI (50%) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-[1200px]">
          <motion.div 
            style={{ y: yParallax }}
            initial={{ rotateY: 8, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-[540px] bg-[#0F1117] border border-[rgba(26,175,255,0.1)] rounded-2xl p-6 lg:p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF85]/10 border border-[#00FF85]/20 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#00FF85] uppercase tracking-wider">Pattern Observation — Active</span>
                </div>
                <h3 className="font-body text-lg text-[#F0F2F5] font-medium">Patient #2847</h3>
              </div>
              <span className="font-mono text-[10px] text-[#6B7280]">Synced: Just now</span>
            </div>

            {/* Observation Card */}
            <div className="bg-[#1C1C1E]/50 rounded-xl border border-[rgba(200,205,214,0.05)] p-5 mb-6">
              <h4 className="font-body text-[15px] text-[#1AAFFF] mb-4">High Confidence Correlation Detected</h4>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 bg-[#0B0E1A] rounded p-3 border border-[rgba(200,205,214,0.05)]">
                  <p className="font-mono text-[10px] text-[#9CA3AF] mb-1">TRIGGER</p>
                  <p className="font-body text-[13px] text-[#F0F2F5]">Metformin started Feb 3</p>
                </div>
                <span className="text-[#4B5563]">→</span>
                <div className="flex-1 bg-[#0B0E1A] rounded p-3 border border-[rgba(200,205,214,0.05)]">
                  <p className="font-mono text-[10px] text-[#9CA3AF] mb-1">OBSERVATION</p>
                  <p className="font-body text-[13px] text-[#F0F2F5]">Fatigue reports ↑68%<br/><span className="text-[#6B7280]">Feb 5–12</span></p>
                </div>
              </div>

              {/* Confidence Bar */}
              <div className="mb-2 flex justify-between items-end">
                <span className="font-mono text-[10px] text-[#9CA3AF]">CONFIDENCE INTERVAL</span>
                <span className="font-mono text-[12px] text-[#1AAFFF]">87%</span>
              </div>
              <div className="h-1.5 w-full bg-[#0B0E1A] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#1AAFFF]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "87%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                />
              </div>
            </div>

            {/* Explainability Panel */}
            <div className="border-t border-[rgba(200,205,214,0.08)] pt-6">
              <div className="flex items-center justify-between mb-4 cursor-pointer group">
                <h5 className="font-mono text-[11px] text-[#C8CDD6] tracking-wider">EXPLAINABILITY PANEL</h5>
                <span className="text-[#4B5563] group-hover:text-[#F0F2F5] transition-colors">−</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-[10px] text-[#6B7280] mb-1">METHOD</p>
                  <p className="font-body text-[12px] text-[#9CA3AF]">Pearson temporal (p=0.003)</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#6B7280] mb-1">EVIDENCE BASE</p>
                  <p className="font-body text-[12px] text-[#9CA3AF]">FDA FAERS (142 cases)</p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-[10px] text-[#6B7280] mb-1">ALTERNATIVE HYPOTHESIS</p>
                  <p className="font-body text-[12px] text-[#9CA3AF]">Seasonal affective disorder (Low probability)</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
