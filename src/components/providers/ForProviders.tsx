import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ForProviders() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"]
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} id="for-providers" className="scroll-mt-24 w-full py-32 relative z-10 overflow-hidden">
      {/* Background transition */}
      <motion.div 
        className="absolute inset-0 bg-[#F5F6F7] z-0"
        style={{ opacity: bgOpacity }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20 relative z-10">
        
        {/* Left: Text (45%) */}
        <motion.div 
          className="w-full lg:w-[45%] flex flex-col justify-center"
          style={{ y: yText, opacity: opacityText }}
        >
          <span className="font-mono text-[11px] text-[#0A6EBD] tracking-[0.25em] uppercase mb-8">
            PROVIDER WORKFLOW · REIMBURSEMENT CONTEXT
          </span>
          
          <h2 className="font-display text-[56px] lg:text-[72px] font-light text-[#0B0E1A] leading-[1.05] mb-12">
            Your Patients.<br/>
            Fully Documented.<br/>
            Before They<br/>
            Arrive.
          </h2>

          <p className="font-body text-[17px] text-[#4B5563] leading-[1.65] mb-12 max-w-[480px]">
            Zero-login EHR inbox delivery where integrated. Super Summary in ~15 seconds. Documentation aligned with RPM/CCM workflows—CPT 99457, 99458, 99490, and 99091 (billing eligibility depends on payer and documentation; not guaranteed by AIVA).
          </p>

          <a
            href="#waitlist"
            className="self-start h-[52px] px-8 rounded-full bg-[#080A0F] text-[#F0F2F5] font-body font-semibold text-[14px] uppercase tracking-[0.05em] hover:scale-105 transition-transform inline-flex items-center"
          >
            Express interest
          </a>
        </motion.div>

        {/* Right: Light Dashboard Mockup (55%) */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end perspective-[1200px]">
          <motion.div 
            initial={{ rotateY: -8, opacity: 0, x: 40 }}
            whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-[640px] aspect-[16/10] bg-white rounded-xl border border-[rgba(11,14,26,0.1)] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Chrome */}
            <div className="h-10 bg-[#F5F6F7] border-b border-[rgba(11,14,26,0.05)] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <div className="ml-4 flex-1 h-6 bg-white rounded border border-[rgba(11,14,26,0.05)] flex items-center px-3">
                <span className="font-mono text-[10px] text-[#9CA3AF]">aiva.health/provider/dashboard</span>
              </div>
            </div>

            {/* App UI */}
            <div className="flex-1 p-6 flex gap-6">
              {/* Sidebar */}
              <div className="w-1/4 h-full flex flex-col gap-3">
                <div className="h-4 w-1/2 bg-[#E5E7EB] rounded mb-4" />
                <div className="h-12 w-full bg-[#F3F4F6] rounded-lg border border-[rgba(11,14,26,0.05)]" />
                <div className="h-12 w-full bg-[#0A6EBD]/10 rounded-lg border border-[#0A6EBD]/20" />
                <div className="h-12 w-full bg-[#F3F4F6] rounded-lg border border-[rgba(11,14,26,0.05)]" />
              </div>

              {/* Main Content */}
              <div className="flex-1 h-full flex flex-col gap-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="h-6 w-1/3 bg-[#E5E7EB] rounded" />
                  <div className="h-8 w-32 bg-[#0A6EBD] rounded-full" />
                </div>
                
                {/* Patient Card Expanded */}
                <div className="flex-1 w-full bg-[#F9FAFB] rounded-xl border border-[rgba(11,14,26,0.05)] p-6 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#E5E7EB]" />
                    <div>
                      <div className="h-4 w-32 bg-[#D1D5DB] rounded mb-2" />
                      <div className="h-3 w-24 bg-[#E5E7EB] rounded" />
                    </div>
                  </div>

                  <div className="h-24 w-full bg-white rounded-lg border border-[rgba(11,14,26,0.05)] p-4 mb-4">
                    <div className="h-3 w-1/4 bg-[#E5E7EB] rounded mb-3" />
                    <div className="h-2 w-full bg-[#F3F4F6] rounded mb-2" />
                    <div className="h-2 w-5/6 bg-[#F3F4F6] rounded" />
                  </div>

                  {/* Highlighted Button */}
                  <div className="absolute bottom-6 right-6">
                    <div className="px-4 py-2 bg-[#0B0E1A] text-white font-body text-[12px] rounded-lg shadow-lg flex items-center gap-2">
                      <span className="text-[#00FF85]">✦</span> Create Clinical Note
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
