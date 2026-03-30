import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function ArchDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll('.flow-line');
    const nodes = svgRef.current.querySelectorAll('.flow-node');

    gsap.set(paths, { strokeDasharray: 1000, strokeDashoffset: 1000 });
    gsap.set(nodes, { scale: 0, opacity: 0, transformOrigin: 'center' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 0.5
      }
    });

    tl.to(nodes, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 })
      .to(paths, { strokeDashoffset: 0, duration: 1.5, ease: "none" }, "-=0.2");

    // Heartbeat pulse for nodes
    gsap.to(nodes, {
      scale: 1.1,
      opacity: 0.8,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      stagger: 0.2
    });

  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <svg ref={svgRef} viewBox="0 0 400 300" className="w-full max-w-[400px] h-auto">
        {/* Lines */}
        <path className="flow-line" d="M50 150 L150 150" stroke="rgba(26,175,255,0.4)" strokeWidth="2" fill="none" />
        <path className="flow-line" d="M150 150 L250 100" stroke="rgba(0,255,133,0.4)" strokeWidth="2" fill="none" />
        <path className="flow-line" d="M150 150 L250 200" stroke="rgba(0,255,133,0.4)" strokeWidth="2" fill="none" />
        <path className="flow-line" d="M250 100 L350 150" stroke="rgba(200,205,214,0.4)" strokeWidth="2" fill="none" />
        <path className="flow-line" d="M250 200 L350 150" stroke="rgba(200,205,214,0.4)" strokeWidth="2" fill="none" />

        {/* Nodes */}
        {/* Patient */}
        <circle className="flow-node" cx="50" cy="150" r="12" fill="#1AAFFF" />
        <text x="50" y="180" fill="#1AAFFF" fontSize="10" fontFamily="DM Mono" textAnchor="middle">PATIENT</text>
        
        {/* Enclave */}
        <rect className="flow-node" x="130" y="130" width="40" height="40" rx="8" fill="#00FF85" fillOpacity="0.2" stroke="#00FF85" strokeWidth="2" />
        <text x="150" y="190" fill="#00FF85" fontSize="10" fontFamily="DM Mono" textAnchor="middle">ENCLAVE</text>

        {/* NLP & Correlation */}
        <circle className="flow-node" cx="250" cy="100" r="8" fill="#00FF85" />
        <text x="250" y="80" fill="#00FF85" fontSize="10" fontFamily="DM Mono" textAnchor="middle">NLP</text>
        
        <circle className="flow-node" cx="250" cy="200" r="8" fill="#00FF85" />
        <text x="250" y="225" fill="#00FF85" fontSize="10" fontFamily="DM Mono" textAnchor="middle">CORRELATE</text>

        {/* Provider */}
        <polygon className="flow-node" points="350,135 365,150 350,165 335,150" fill="#C8CDD6" />
        <text x="350" y="180" fill="#C8CDD6" fontSize="10" fontFamily="DM Mono" textAnchor="middle">PROVIDER</text>
      </svg>
    </div>
  );
}
