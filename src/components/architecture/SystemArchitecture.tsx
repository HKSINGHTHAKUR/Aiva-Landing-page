import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { Smartphone, Cpu, Monitor } from 'lucide-react';

export default function SystemArchitecture() {
  const sectionRef = useRef<HTMLElement>(null);
  const connectorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !connectorsRef.current) return;

    const connectors = connectorsRef.current.querySelectorAll('.connector-line');

    gsap.fromTo(connectors,
      { scaleX: 0 },
      {
        scaleX: 1,
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const layers = [
    {
      icon: Smartphone,
      label: "Layer 01",
      title: "Patient Health Journal",
      description: "Mobile application for continuous health logging. Patients record symptoms, medication timing, and vitals using natural language, voice, or structured input. Data is encrypted locally before any transmission.",
      color: "#3B82F6"
    },
    {
      icon: Cpu,
      label: "Layer 02",
      title: "Clinical Intelligence Engine",
      description: "Processes patient-reported data to identify temporal relationships between symptoms and medications. Applies clinical knowledge bases to contextualize observations. Generates explainability for each pattern identified.",
      color: "#8B5CF6"
    },
    {
      icon: Monitor,
      label: "Layer 03",
      title: "Provider Dashboard",
      description: "Presents structured summaries for clinical review. Integrates with EHR systems via SMART on FHIR. Providers retain full authority over clinical decisions — system outputs require explicit acknowledgment.",
      color: "#06B6D4"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="platform" 
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
            Architecture
          </span>
          <h2 className="font-display text-[40px] md:text-[48px] lg:text-[56px] font-light text-white leading-[1.1] max-w-[700px]">
            System Architecture
          </h2>
        </motion.div>

        {/* Architecture cards */}
        <div className="relative" ref={connectorsRef}>
          {/* Connector lines (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-[33%] w-[34%] -translate-y-1/2 z-0">
            <div className="connector-line h-[1px] w-full bg-gradient-to-r from-[#3B82F6]/30 via-[#8B5CF6]/30 to-[#06B6D4]/30 origin-left" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {layers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="clinical-card rounded-2xl p-8 h-full transition-all duration-300 hover:translate-y-[-4px]">
                  {/* Layer label */}
                  <span 
                    className="font-mono text-[10px] tracking-[0.2em] uppercase mb-6 block"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </span>

                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{ 
                      backgroundColor: `${layer.color}10`,
                    }}
                  >
                    <layer.icon 
                      className="w-6 h-6 transition-colors duration-300" 
                      style={{ color: layer.color }}
                      strokeWidth={1.5} 
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-body text-[20px] font-medium text-white mb-4">
                    {layer.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#71717A] leading-[1.8]">
                    {layer.description}
                  </p>

                  {/* Bottom accent line */}
                  <div 
                    className="mt-8 h-[2px] w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                    style={{ backgroundColor: layer.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
