import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SignalWave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // BASE CONTINUOUS SCROLLING ANIMATION (Infinite Seamless Loop)
      // Wave 1: Period 1000px. Moves left seamlessly.
      gsap.fromTo(".wave-1", 
        { x: 0 },
        {
          x: -1000,
          duration: 12,
          repeat: -1,
          ease: "none"
        }
      );

      // Wave 2: Period 800px. Moves right seamlessly.
      gsap.fromTo(".wave-2", 
        { x: -800 },
        {
          x: 0,
          duration: 9,
          repeat: -1,
          ease: "none"
        }
      );

      // Wave 3: Period 1200px. Moves left seamlessly at different speed.
      gsap.fromTo(".wave-3", 
        { x: 0 },
        {
          x: -1200,
          duration: 16,
          repeat: -1,
          ease: "none"
        }
      );

      // The background now simply flows infinitely on autopilot.
      // Opacity and blur removed from scroll dependency so they are always visible.

    }, containerRef); // Scope to container

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[0] overflow-hidden" 
      style={{
        background: 'radial-gradient(circle at center, #0B0B0C 0%, #080809 100%)'
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage: 'linear-gradient(to right, transparent, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent)'
        }}
      >
        <svg 
          className="absolute w-full h-full"
          preserveAspectRatio="none" 
          viewBox="0 0 1000 1000"
        >
          {/* Default opacity set to a steady, visible tier without needing to scroll */}
          <g className="wave-group" style={{ transformOrigin: 'center center', opacity: 0.4 }}>
            
            {/* Wave 1: Minimal amplitude, continuous period of 1000 */}
            <path 
              className="wave wave-1"
              d="M -1000 400 Q -750 350, -500 400 T 0 400 Q 250 350, 500 400 T 1000 400 Q 1250 350, 1500 400 T 2000 400"
              fill="none" 
              stroke="rgba(120, 140, 255, 0.45)" 
              strokeWidth="1.5" 
            />
            
            {/* Wave 2: Downward minimal amplitude, offset phase, period 800 */}
            <path 
              className="wave wave-2"
              d="M -800 550 Q -600 590, -400 550 T 0 550 Q 200 590, 400 550 T 800 550 Q 1000 590, 1200 550 T 1600 550 Q 1800 590, 2000 550 T 2400 550"
              fill="none" 
              stroke="rgba(120, 140, 255, 0.25)" 
              strokeWidth="2.0" 
            />
            
            {/* Wave 3: Period 1200, broader curve */}
            <path 
              className="wave wave-3"
              d="M -1200 700 Q -900 650, -600 700 T 0 700 Q 300 650, 600 700 T 1200 700 Q 1500 650, 1800 700 T 2400 700"
              fill="none" 
              stroke="rgba(120, 140, 255, 0.45)" 
              strokeWidth="1.5" 
            />

          </g>
        </svg>
      </div>
    </div>
  );
}
