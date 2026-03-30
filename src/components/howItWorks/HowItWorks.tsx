import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const line = timelineRef.current.querySelector('.timeline-progress');
    const dots = timelineRef.current.querySelectorAll('.timeline-dot');

    if (line) {
      gsap.fromTo(line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );
    }

    gsap.fromTo(dots,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const steps = [
    {
      number: "01",
      title: "Capture patient experience",
      description: "Patients log symptoms, medication timing, and health observations through natural language or structured input as they occur."
    },
    {
      number: "02",
      title: "Analyze temporal patterns",
      description: "System identifies relationships between logged events across time, applying clinical knowledge bases for context."
    },
    {
      number: "03",
      title: "Present structured insights",
      description: "Findings are formatted for clinical review with full explainability, requiring provider acknowledgment for any clinical action."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="scroll-mt-24 w-full py-32 relative z-10"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-[11px] text-[#3B82F6] tracking-[0.2em] uppercase mb-6 block">
            Process
          </span>
          <h2 className="font-display text-[40px] md:text-[48px] lg:text-[56px] font-light text-white leading-[1.1]">
            How It Works
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2">
            <div className="w-full h-full bg-[#1C1C1E]" />
            <div className="timeline-progress absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] origin-top" />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-[45%] ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <span className="font-mono text-[11px] text-[#52525B] tracking-[0.2em] block mb-4">
                    STEP {step.number}
                  </span>
                  <h3 className="font-display text-[28px] md:text-[32px] font-light text-white leading-[1.2] mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#71717A] leading-[1.8]">
                    {step.description}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="timeline-dot relative z-10 w-12 h-12 rounded-full bg-[#0B0B0C] border-2 border-[#27272A] flex items-center justify-center">
                  <span className="font-mono text-[12px] text-[#A1A1AA]">{step.number}</span>
                </div>

                {/* Visual placeholder */}
                <div className={`w-full lg:w-[45%] ${i % 2 === 1 ? 'lg:order-first' : ''}`}>
                  <div className="clinical-card rounded-xl p-8 h-[200px] flex items-center justify-center">
                    {/* Abstract visual based on step */}
                    {i === 0 && (
                      <div className="flex gap-3">
                        {[...Array(3)].map((_, j) => (
                          <div 
                            key={j} 
                            className="w-3 h-3 rounded-full bg-[#3B82F6]/30"
                            style={{ animationDelay: `${j * 0.2}s` }}
                          />
                        ))}
                      </div>
                    )}
                    {i === 1 && (
                      <div className="w-24 h-24 rounded-full border border-[#8B5CF6]/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border border-[#8B5CF6]/50 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
                        </div>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="space-y-2 w-32">
                        <div className="h-2 w-full bg-[#06B6D4]/20 rounded" />
                        <div className="h-2 w-4/5 bg-[#06B6D4]/30 rounded" />
                        <div className="h-2 w-3/5 bg-[#06B6D4]/20 rounded" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
