import { useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    ScrollTrigger.defaults({
      markers: false,
      toggleActions: "play none none reverse",
    });

    gsap.config({ nullTargetWarn: false });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <>{children}</>;
}
