import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col lg:flex-row"
    >
      {/* Left Column */}
      <div className="w-full lg:w-[55%] relative flex flex-col justify-center px-8 lg:px-20 pt-32 pb-20 z-10">
        <motion.div 
          className="max-w-[550px]"
          style={{ y: contentY }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.1 }}
        >
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col text-[64px] md:text-[80px] lg:text-[96px] leading-[0.9] font-display text-white mb-8"
          >
            <span className="font-light tracking-[-0.02em]">8,760 Hours</span>
            <span className="italic text-[#D4D4D8] font-light">of Your Health.</span>
            <span className="italic font-normal text-[#A4CAFF]">15 Minutes</span>
            <span className="font-light tracking-[-0.02em]">to Explain It.</span>
          </motion.h1>

          {/* Body Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-body text-[#A1A1AA] text-[15px] leading-relaxed max-w-[420px] mb-12"
          >
            AIVA bridges the critical gap between medical appointments, turning passive data into clinical intelligence. Developed for the next generation of predictive medicine.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex items-center gap-6"
          >
            <a 
              href="#waitlist" 
              className="bg-[#A4CAFF] hover:bg-[#82B2FF] text-[#0B0B0C] font-mono text-[11px] font-medium tracking-[0.1em] px-10 h-[48px] flex items-center justify-center transition-colors duration-300"
            >
              JOIN WAITLIST
            </a>
            <a 
              href="#how-it-works" 
              className="border border-[#27272A] hover:border-[#52525B] text-[#A1A1AA] hover:text-white font-mono text-[11px] tracking-[0.1em] px-10 h-[48px] flex items-center justify-center transition-colors duration-300"
            >
              WATCH DEMO
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column - Phone Mockup */}
      <div className="w-full lg:w-[45%] relative bg-gradient-to-br from-[#121214] to-[#0A0A0B] flex justify-center items-center py-20 px-4 lg:border-l border-white/5 min-h-[700px] lg:min-h-0">
        {/* Subtle diagonal line effect in background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[-30deg] scale-150" />
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#82B2FF]/10 to-transparent rotate-[-30deg] scale-150" />
        </div>

        {/* CSS Phone Mockup */}
        <motion.div 
          style={{ y: phoneY, transformOrigin: "center center" }}
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -15 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 w-[320px] md:w-[360px] aspect-[1/2.1] bg-[#0E0E10] rounded-[48px] border-[10px] border-[#1C1C1E] shadow-[-20px_40px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Inner Bezel highlight */}
          <div className="absolute inset-0 z-20 rounded-[38px] border border-white/10 pointer-events-none" />
          
          {/* Hardware notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-[#1C1C1E] rounded-b-[14px] z-30" />

          {/* Screen Content */}
          <div className="w-full h-full relative blueprint-grid bg-[size:30px_30px] flex flex-col pt-16 px-6 pb-10">
            {/* Top Bar inside app */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="font-display italic text-[#C0A080] opacity-80 text-[20px]">AIVA</span>
              <span className="font-mono text-[9px] text-white/30 tracking-[0.1em] mt-2">DIRECT VNV/420</span>
            </div>

            {/* Dashboard Graphics */}
            <div className="flex-1 flex flex-col gap-8 relative z-10 mt-4">
              {/* Vitals rings */}
              <div className="flex justify-between px-2">
                {[45, 80, 60].map((val, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.2, duration: 1 }}
                    className="w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center relative bg-black/20 backdrop-blur-sm"
                  >
                    {/* Dark inner background for the circle */}
                    <div className="absolute inset-2 bg-[#0A0A0C] rounded-full z-0 border border-white/5" />
                    
                    <svg className="absolute inset-0 w-full h-full rotate-[-90deg] z-10" viewBox="0 0 70 70">
                      <circle cx="35" cy="35" r="32" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                      <motion.circle 
                        cx="35" cy="35" r="32" 
                        fill="none" 
                        stroke={i === 1 ? '#82B2FF' : 'rgba(255,255,255,0.2)'} 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 200" }}
                        animate={{ strokeDasharray: `${val * 2} 200` }}
                        transition={{ duration: 2, delay: 1.2 + i * 0.2, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="font-mono text-[9px] text-[#A1A1AA] mb-0.5 z-20">C0{i+1}</span>
                    <span className={`font-mono text-[13px] z-20 ${i === 1 ? 'text-[#82B2FF]' : 'text-white/80'}`}>{val}</span>
                  </motion.div>
                ))}
              </div>

              {/* Data Graph */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="w-full h-[140px] border border-white/5 rounded-2xl mt-4 relative overflow-hidden bg-[#0A0A0C]/80 backdrop-blur-sm shadow-inner"
              >
                <div className="absolute inset-x-0 bottom-0 h-[80%] opacity-40 mix-blend-screen" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(130, 178, 255, 0.4) 100%)' }} />
                
                {/* Grid within graph */}
                <div className="absolute inset-0 blueprint-grid opacity-20" />

                {/* SVG Graph Line - Continuous animation */}
                <div className="absolute inset-0 top-[5%] h-[110%] w-[1200px] pointer-events-none">
                  <motion.svg 
                    className="w-full h-full" 
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    initial={{ opacity: 0 }}
                    animate={{ x: [0, -400], opacity: 1 }}
                    transition={{ 
                      x: { duration: 4, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 1, delay: 2 }
                    }}
                  >
                    <defs>
                      <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(130, 178, 255, 0.2)" />
                        <stop offset="100%" stopColor="rgba(130, 178, 255, 0.0)" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 0 60 C 40 20, 60 0, 100 40 C 140 80, 160 120, 200 80 C 240 40, 260 30, 300 60 C 340 90, 360 100, 400 60 C 440 20, 460 0, 500 40 C 540 80, 560 120, 600 80 C 640 40, 660 30, 700 60 C 740 90, 760 100, 800 60 C 840 20, 860 0, 900 40 C 940 80, 960 120, 1000 80 C 1040 40, 1060 30, 1100 60 C 1140 90, 1160 100, 1200 60 L 1200 120 L 0 120 Z" 
                      fill="url(#waveGradient)" 
                    />
                    <path 
                      d="M 0 60 C 40 20, 60 0, 100 40 C 140 80, 160 120, 200 80 C 240 40, 260 30, 300 60 C 340 90, 360 100, 400 60 C 440 20, 460 0, 500 40 C 540 80, 560 120, 600 80 C 640 40, 660 30, 700 60 C 740 90, 760 100, 800 60 C 840 20, 860 0, 900 40 C 940 80, 960 120, 1000 80 C 1040 40, 1060 30, 1100 60 C 1140 90, 1160 100, 1200 60"
                      fill="none" 
                      stroke="#82B2FF" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      style={{ filter: 'drop-shadow(0 4px 6px rgba(130, 178, 255, 0.4))' }}
                    />
                  </motion.svg>
                </div>
                
                <div className="absolute bottom-3 inset-x-4 flex justify-between z-20">
                  <span className="font-mono text-[8px] text-white/30 tracking-widest">H2 22</span>
                  <span className="font-mono text-[8px] text-white/30 tracking-widest">20/0ms</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Scanner status */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="h-[60px] w-full border border-white/5 bg-[#0A0A0C]/90 rounded-xl mt-auto p-4 flex flex-col justify-center relative backdrop-blur-xl z-20"
            >
              <span className="font-mono text-[9px] text-white/60 mb-2">VZ1AL_SCAN_ACTIVE</span>
              <div className="w-full h-[2px] bg-white/10 rounded-full relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-[40%] h-full bg-[#82B2FF] shadow-[0_0_8px_#82B2FF]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
