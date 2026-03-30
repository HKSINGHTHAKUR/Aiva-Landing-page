import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center pt-24 pb-20 px-4 md:px-8 z-10"
    >
      <motion.div 
        className="max-w-[900px] flex flex-col items-center text-center"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.15 }}
      >
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="flex flex-col text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-[1.1] font-display font-normal text-white mb-10 tracking-tight"
        >
          <span>8,760 Hours of Your</span>
          <span>
            Health. <span className="text-[#82B2FF]">15 Minutes</span>
          </span>
          <span>to Explain It.</span>
        </motion.h1>

        {/* Body Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="font-body text-[#A1A1AA] text-[16px] sm:text-[17px] md:text-[19px] leading-[1.6] max-w-[650px] font-light tracking-wide"
        >
          AIVA bridges the critical gap between medical appointments, turning passive data into clinical intelligence. Developed for the next generation of predictive medicine.
        </motion.p>
      </motion.div>
    </section>
  );
}
