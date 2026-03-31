import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import RippleGrid from '../ui/RippleGrid';
import StickerPeel from '../ui/StickerPeel';
import logoImage from '../../assets/logo.png';

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
      <div className="absolute inset-0 z-0 pointer-events-none">
        <RippleGrid
          enableRainbow={false}
          gridColor="#2a4b8c"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>

      {/* Floating Sticker Hearts */}
      {/* Left Heart */}
      <motion.div
        className="absolute left-[-30%] sm:left-[-10%] md:left-[-5%] lg:left-[2%] xl:left-[8%] top-[35%] z-20 cursor-grab active:cursor-grabbing"
        initial={{ opacity: 0, x: -50, rotate: 0 }}
        animate={{ opacity: 1, x: 0, rotate: 0, y: [-10, 10, -10] }}
        transition={{ 
          opacity: { duration: 1.2, delay: 0.2 },
          x: { duration: 1.2, delay: 0.2, ease: "easeOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } 
        }}
      >
        <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[#82B2FF]/20 blur-3xl rounded-full mix-blend-screen opacity-50 pointer-events-none" />
          <StickerPeel
            imageSrc={logoImage}
            width={220}
            rotate={-12}
            peelBackHoverPct={30}
            peelBackActivePct={40}
            shadowIntensity={0.5}
            lightingIntensity={0.1}
            peelDirection={45}
          />
        </div>
      </motion.div>

      {/* Right Heart */}
      <motion.div
        className="absolute right-[-30%] sm:right-[-10%] md:right-[-5%] lg:right-[2%] xl:right-[8%] top-[45%] z-20 cursor-grab active:cursor-grabbing"
        initial={{ opacity: 0, x: 50, rotate: 0 }}
        animate={{ opacity: 1, x: 0, rotate: 0, y: [10, -10, 10] }}
        transition={{ 
          opacity: { duration: 1.2, delay: 0.4 },
          x: { duration: 1.2, delay: 0.4, ease: "easeOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } 
        }}
      >
        <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[#f472b6]/10 blur-3xl rounded-full mix-blend-screen opacity-50 pointer-events-none" />
          <StickerPeel
            imageSrc={logoImage}
            width={200}
            rotate={12}
            peelBackHoverPct={30}
            peelBackActivePct={40}
            shadowIntensity={0.5}
            lightingIntensity={0.1}
            peelDirection={-45}
          />
        </div>
      </motion.div>

      <motion.div 
        className="max-w-[900px] flex flex-col items-center text-center relative z-10"
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
