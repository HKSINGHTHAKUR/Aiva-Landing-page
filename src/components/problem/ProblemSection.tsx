import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const gaps = timelineRef.current.querySelectorAll('.gap-indicator');
    const visits = timelineRef.current.querySelectorAll('.visit-marker');

    // Animate the timeline gaps
    gsap.fromTo(gaps,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate visit markers
    gsap.fromTo(visits,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const consequences = [
    {
      title: "Missed symptom progression",
      description: "Changes that occur gradually between visits may go unnoticed until they become clinically significant"
    },
    {
      title: "Undetected medication-related patterns",
      description: "Temporal relationships between medications and symptoms often remain undocumented"
    },
    {
      title: "Increased documentation burden",
      description: "Providers spend limited visit time reconstructing patient history from incomplete recall"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="problem" 
      className="scroll-mt-24 w-full py-32 relative z-10"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-[11px] text-[#3B82F6] tracking-[0.2em] uppercase mb-6 block">
            The Gap
          </span>
          <h2 className="font-display text-[40px] md:text-[56px] lg:text-[64px] font-light text-white leading-[1.1] max-w-[800px]">
            Healthcare is episodic.<br/>
            <span className="text-[#A1A1AA]">Human health is continuous.</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left: Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="font-body text-[16px] text-[#A1A1AA] leading-[1.8] space-y-6">
              <p>
                Patients experience symptoms, medication effects, and physiological changes 
                continuously across days and weeks.
              </p>
              <p>
                Clinical encounters, however, capture only brief snapshots — often relying 
                on incomplete recall and limited context.
              </p>
              <p className="text-[#71717A]">
                Clinical decisions are often made with incomplete longitudinal data. 
                A significant portion of adverse drug events occur between clinical visits, 
                and a large percentage of these events are considered preventable.
              </p>
            </div>
          </motion.div>

          {/* Right: Timeline visualization */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            ref={timelineRef}
            className="flex flex-col justify-center"
          >
            {/* Timeline */}
            <div className="relative h-[200px]">
              {/* Base line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#27272A] -translate-y-1/2" />
              
              {/* Gaps (unmonitored time) */}
              <div className="gap-indicator absolute top-1/2 left-[10%] w-[25%] h-[1px] bg-[#3F3F46] -translate-y-1/2 origin-left" />
              <div className="gap-indicator absolute top-1/2 left-[45%] w-[35%] h-[1px] bg-[#3F3F46] -translate-y-1/2 origin-left" />
              
              {/* Visit markers */}
              <div className="visit-marker absolute top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#52525B] whitespace-nowrap">Visit 1</span>
              </div>
              
              <div className="visit-marker absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#52525B] whitespace-nowrap">Visit 2</span>
              </div>
              
              <div className="visit-marker absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#52525B] whitespace-nowrap">Visit 3</span>
              </div>

              {/* Gap labels */}
              <div className="absolute top-[20%] left-[22%] -translate-x-1/2">
                <span className="font-mono text-[10px] text-[#52525B]">Unmonitored</span>
              </div>
              <div className="absolute top-[20%] left-[62%] -translate-x-1/2">
                <span className="font-mono text-[10px] text-[#52525B]">Unmonitored</span>
              </div>
            </div>

            {/* Caption */}
            <p className="font-mono text-[11px] text-[#52525B] text-center mt-8">
              Patients experience health continuously, while care remains episodic
            </p>
          </motion.div>
        </div>

        {/* Consequences */}
        <div className="border-t border-[#1C1C1E] pt-16">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] text-[#52525B] tracking-[0.15em] uppercase mb-10"
          >
            This gap results in:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consequences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="h-[1px] w-8 bg-[#3B82F6]/50 mb-6 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-body text-[15px] font-medium text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] text-[#71717A] leading-[1.7]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
