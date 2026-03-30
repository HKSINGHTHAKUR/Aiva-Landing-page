import { motion } from 'motion/react';

export default function WaitlistCTA() {
  const headline = "Pilot: 500 patients.";
  const letters = headline.split("");

  return (
    <section id="waitlist" className="scroll-mt-24 w-full min-h-[100svh] bg-[#080A0F] relative z-10 flex items-center justify-center overflow-hidden py-32">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[30vw] opacity-[0.015] text-[#C8CDD6] leading-none">
          AIVA
        </span>
      </div>

      <div className="max-w-[800px] mx-auto px-6 flex flex-col items-center text-center relative z-10">
        
        <span className="font-mono text-[11px] text-[#1AAFFF] tracking-[0.25em] uppercase mb-8">
          PILOT ROADMAP · PHASE I SPEC
        </span>

        <h2 className="font-display text-[64px] md:text-[80px] lg:text-[96px] font-extralight text-[#F0F2F5] leading-[1.05] mb-8 flex flex-wrap justify-center">
          {letters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.03, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={char === " " ? "w-[0.25em]" : ""}
            >
              {char}
            </motion.span>
          ))}
        </h2>

        <p className="font-body text-[16px] lg:text-[18px] text-[#9CA3AF] leading-[1.65] max-w-[540px] mb-12">
          Phase I defines architecture, safety, and regulatory strategy; multi-site observational validation is planned. Roadmap targets 3–5 practices and ~500 patients over six months—express interest for updates.
        </p>

        {/* Email Input */}
        <div className="w-full max-w-[520px] relative mb-8">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-transparent border border-[rgba(200,205,214,0.2)] rounded-full py-4 pl-6 pr-[160px] font-body text-[16px] text-[#F0F2F5] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1AAFFF] transition-colors"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-[#1AAFFF] text-[#080A0F] font-body font-semibold text-[13px] uppercase tracking-[0.05em] px-6 rounded-full hover:scale-105 transition-transform">
            Request Access
          </button>
        </div>

        {/* Fine Print */}
        <p className="mt-6 text-center text-[#52525B] text-[10px] md:text-[11px] font-mono leading-relaxed max-w-2xl mx-auto uppercase tracking-wider">
          Designed for clinical institutions and research facilities.<br />
          No health data is collected through this marketing form. Tier 1 wellness-style features and Tier 2 clinical decision support are regulated differently; Tier 2 requires appropriate FDA alignment before clinical deployment.
        </p>

      </div>
    </section>
  );
}
