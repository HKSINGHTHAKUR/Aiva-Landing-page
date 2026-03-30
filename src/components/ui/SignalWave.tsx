import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SignalWave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Gentle floating animation to give the static web some life
      gsap.to(".mesh-wave-left", {
        x: 30,
        y: 20,
        rotation: 1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      });

      gsap.to(".mesh-wave-right", {
        x: -30,
        y: -20,
        rotation: -1,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Increase array to 30 elements for a dense string/web effect
  const waves = Array.from({ length: 30 });

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[0] overflow-hidden" 
      style={{
        background: 'radial-gradient(circle at center, #0B0B0C 0%, #050506 100%)'
      }}
    >
      {/* Outer fade mask so it blends perfectly into vertical edges */}
      <div 
        className="absolute inset-0 w-full h-full flex justify-between"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, transparent 40%, transparent 60%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, transparent 40%, transparent 60%, rgba(0,0,0,1) 100%)'
        }}
      >
        {/* Left Side Fine Wave Mesh */}
        <svg 
          className="absolute -left-[5%] lg:-left-[2%] w-[60%] lg:w-[45%] h-full opacity-60"
          preserveAspectRatio="none" 
          viewBox="0 0 1000 1000"
        >
          {waves.map((_, i) => {
            // Generate offset overlapping curves mapping mathematical interference
            const startY = 200 + (i * 20);
            const controlY1 = 800 - (i * 30);
            const controlY2 = 200 + (i * 25);
            const endY = 900 - (i * 15);
            return (
              <path 
                key={`left-${i}`}
                className="mesh-wave-left"
                d={`M -200 ${startY} C 300 ${controlY1}, 700 ${controlY2}, 1200 ${endY}`}
                fill="none" 
                stroke="rgba(120, 140, 255, 0.1)" 
                strokeWidth="0.8" 
              />
            );
          })}
        </svg>

        {/* Right Side Fine Wave Mesh */}
        <svg 
          className="absolute -right-[5%] lg:-right-[2%] w-[60%] lg:w-[45%] h-full opacity-60"
          preserveAspectRatio="none" 
          viewBox="0 0 1000 1000"
        >
          {waves.map((_, i) => {
            // Mirror logic but slight randomized difference for organic look
            const startY = 150 + (i * 22);
            const controlY1 = 750 - (i * 28);
            const controlY2 = 250 + (i * 24);
            const endY = 850 - (i * 18);
            return (
              <path 
                key={`right-${i}`}
                className="mesh-wave-right"
                d={`M 1200 ${startY} C 700 ${controlY1}, 300 ${controlY2}, -200 ${endY}`}
                fill="none" 
                stroke="rgba(120, 140, 255, 0.1)" 
                strokeWidth="0.8" 
              />
            );
          })}
        </svg>
      </div>

      {/* Screen edge gradient overlays to soften top and bottom */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0B0C] to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B0C] to-transparent z-10" />
    </div>
  );
}
