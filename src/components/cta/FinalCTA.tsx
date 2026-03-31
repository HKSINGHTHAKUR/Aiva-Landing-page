import { motion } from 'motion/react';
import LightRays from '../ui/LightRays';

export default function FinalCTA() {
  return (
    <section id="waitlist" className="scroll-mt-24 w-full min-h-[80vh] bg-[#0B0B0C] relative z-10 flex items-center justify-center py-32 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/[0.02] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/[0.03] blur-[100px]" />
      </div>

      {/* Interactive Light Rays Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
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
          className="font-display text-[40px] md:text-[56px] lg:text-[64px] font-light text-white leading-[1.1] mb-12"
        >
          Bring continuity to<br/>
          <span className="text-[#A1A1AA]">clinical decision-making</span>
        </motion.h2>

        {/* CTA Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-14"
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

        {/* Combined Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-[14px] text-[#71717A] max-w-[500px] mx-auto leading-relaxed"
        >
          Early access available for eligible healthcare partners to evaluate secure, HIPAA-compliant continuous patient monitoring solutions.
        </motion.p>

      </div>
    </section>
  );
}
