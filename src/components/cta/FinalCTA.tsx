import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section id="waitlist" className="scroll-mt-24 w-full min-h-[80vh] bg-[#0B0B0C] relative z-10 flex items-center justify-center py-32">
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/[0.02] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/[0.03] blur-[100px]" />
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] opacity-[0.015] text-white leading-none">
          AIVA
        </span>
      </div>

      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
        
        {/* Tag */}
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] text-[#3B82F6] tracking-[0.2em] uppercase mb-8 block"
        >
          Early Access
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-[40px] md:text-[56px] lg:text-[64px] font-light text-white leading-[1.1] mb-8"
        >
          Bring continuity to<br/>
          <span className="text-[#A1A1AA]">clinical decision-making</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-body text-[16px] text-[#71717A] leading-[1.8] mb-12 max-w-[500px] mx-auto"
        >
          Early access available for pilot healthcare partners interested 
          in evaluating continuous patient monitoring capabilities.
        </motion.p>

        {/* CTA Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-[480px] mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:flex-1 h-[56px] bg-[#111112] border border-[#27272A] rounded-full px-6 font-body text-[15px] text-white placeholder:text-[#52525B] focus:outline-none focus:border-[#3B82F6]/50 transition-colors"
            />
            <button className="w-full sm:w-auto h-[56px] px-8 bg-[#3B82F6] text-white font-body font-medium text-[15px] rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300">
              Request Access
            </button>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {['HIPAA Compliant', 'No data collected via this form', 'Healthcare partners only'].map((text, i) => (
            <span key={i} className="font-mono text-[10px] text-[#52525B] tracking-[0.1em] uppercase">
              {text}
            </span>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-mono text-[10px] text-[#3F3F46] max-w-[500px] mx-auto leading-relaxed"
        >
          This form collects contact information only. No health data is requested or stored. 
          Pilot participation subject to eligibility review and institutional requirements.
        </motion.p>

      </div>
    </section>
  );
}
