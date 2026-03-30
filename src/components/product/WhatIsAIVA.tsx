import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function WhatIsAIVA() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(section, 
      { xPercent: -5, opacity: 0 }, 
      { xPercent: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    const length = line.getTotalLength();
    gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
    
    gsap.to(line, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
      }
    });

  }, []);

  return (
    <section ref={sectionRef} id="problem" className="scroll-mt-24 w-full bg-[#080A0F] py-32 relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20">
        
        {/* Left: Text (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <span className="font-mono text-[11px] text-[#1AAFFF] tracking-[0.25em] uppercase mb-8 block">
            Product definition
          </span>
          
          <h2 className="font-display text-[48px] md:text-[64px] font-light text-[#F0F2F5] leading-[1.1] mb-12">
            A Clinical Co-Pilot<br/>
            for the 8,759 Hours<br/>
            Between Visits.
          </h2>
          
          <div className="font-body text-[17px] text-[#9CA3AF] leading-[1.65] space-y-6 max-w-[540px] mb-16">
            <p>
              Health is continuous; primary care contact is not—often on the order of an hour per year versus thousands of hours of lived experience. Between visits, adverse drug effects, symptom change, and device data rarely become structured clinical context.
            </p>
            <p>
              <strong className="font-medium text-[#C8CDD6]">AIVA</strong> is a patient-controlled health intelligence platform that serves as a Clinical Co-Pilot, converting that lived experience into structured, time-aware clinical documentation for healthcare providers—not replacing clinical judgment.
            </p>
          </div>

          <blockquote className="border-l-[3px] border-[#1AAFFF] pl-6 font-display italic text-[22px] md:text-[24px] text-[#C8CDD6] max-w-[520px] leading-snug">
            Doctors make all medical decisions; AIVA helps them see inter-visit reality with explainable, reviewable signals.
          </blockquote>
        </div>

        {/* Right: Decorative Timeline (40%) */}
        <div className="hidden lg:flex w-[40%] items-center justify-center relative">
          <svg width="120" height="600" viewBox="0 0 120 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background faint line */}
            <path d="M60 0V600" stroke="rgba(200,205,214,0.05)" strokeWidth="1" />
            
            {/* Animated main line */}
            <path ref={lineRef} d="M60 0V600" stroke="#1AAFFF" strokeWidth="2" />
            
            {/* Nodes */}
            <circle cx="60" cy="100" r="4" fill="#080A0F" stroke="#1AAFFF" strokeWidth="2" />
            <circle cx="60" cy="300" r="4" fill="#080A0F" stroke="#1AAFFF" strokeWidth="2" />
            <circle cx="60" cy="500" r="4" fill="#080A0F" stroke="#1AAFFF" strokeWidth="2" />
            
            {/* Labels */}
            <text x="75" y="104" fill="#6B7280" fontFamily="DM Mono" fontSize="10" letterSpacing="0.1em">DATA CAPTURE</text>
            <text x="75" y="304" fill="#6B7280" fontFamily="DM Mono" fontSize="10" letterSpacing="0.1em">SYNTHESIS</text>
            <text x="75" y="504" fill="#6B7280" fontFamily="DM Mono" fontSize="10" letterSpacing="0.1em">CLINICAL ACTION</text>
          </svg>
        </div>

      </div>
    </section>
  );
}
