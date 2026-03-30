import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';

export default function StepsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true
        }
      }
    );
  }, []);

  const steps = [
    {
      num: "01",
      title: "Capture experience as it happens.",
      body: "Natural language, voice, or body-map input—offline when needed. Medication and vitals context without punitive adherence language.",
      img: "bg-gradient-to-br from-[#1C1C1E] to-[#0D0F14]"
    },
    {
      num: "02",
      title: "Clinical intelligence with guardrails.",
      body: "Medication–symptom temporal correlation and NLP extraction inside AWS Nitro Enclaves; knowledge-base filtering; explainable pattern observations—not diagnoses.",
      img: "bg-gradient-to-br from-[#0D0F14] to-[#1C1C1E]"
    },
    {
      num: "03",
      title: "Providers review in seconds—not silos.",
      body: "SMART on FHIR R4 paths, Super Summary overview, EHR inbox delivery where supported, and CDS-oriented explainability for independent clinical review.",
      img: "bg-gradient-to-br from-[#1C1C1E] to-[#0D0F14]"
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="scroll-mt-24 w-full bg-[#0B0E1A] py-32 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        
        {/* Progress Line */}
        <div className="absolute top-[160px] left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-[rgba(26,175,255,0.1)] hidden md:block">
          <div ref={lineRef} className="h-full bg-[#1AAFFF] origin-left" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col relative"
            >
              <div className={`w-full h-[320px] rounded-2xl ${step.img} border border-[rgba(200,205,214,0.05)] mb-8 relative overflow-hidden flex items-center justify-center`}>
                {/* Number overlay */}
                <span className="absolute -top-4 -left-2 font-mono text-[72px] text-[#1AAFFF]/20 font-medium select-none pointer-events-none">
                  {step.num}
                </span>
                
                {/* Abstract Visuals based on step */}
                {i === 0 && (
                  <div className="w-16 h-16 rounded-full bg-[#1AAFFF]/10 border border-[#1AAFFF]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#1AAFFF] animate-pulse" />
                  </div>
                )}
                {i === 1 && (
                  <div className="grid grid-cols-3 gap-2 opacity-50">
                    {[...Array(9)].map((_, j) => (
                      <div key={j} className={`w-3 h-3 rounded-full ${j % 2 === 0 ? 'bg-[#00FF85]' : 'bg-[#1AAFFF]'}`} />
                    ))}
                  </div>
                )}
                {i === 2 && (
                  <div className="w-32 h-24 bg-[#0B0E1A] rounded-lg border border-[rgba(200,205,214,0.1)] p-3 flex flex-col gap-2 opacity-80">
                    <div className="h-2 w-1/2 bg-[#2A2A2E] rounded" />
                    <div className="h-2 w-full bg-[#2A2A2E] rounded" />
                    <div className="h-2 w-3/4 bg-[#2A2A2E] rounded" />
                  </div>
                )}
              </div>

              <h3 className="font-display text-[28px] lg:text-[36px] font-light text-[#F0F2F5] leading-[1.2] mb-4">
                {step.title}
              </h3>
              <p className="font-body text-[15px] text-[#9CA3AF] leading-[1.65]">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
