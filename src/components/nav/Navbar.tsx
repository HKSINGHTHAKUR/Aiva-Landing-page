import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'INTELLIGENCE', href: '#capabilities', active: true },
    { label: 'CLINICAL', href: '#for-providers' },
    { label: 'SECURITY', href: '#security' },
    { label: 'NETWORK', href: '#platform' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B0C]/90 backdrop-blur-xl border-b border-[#1C1C1E]' 
          : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
      }}
    >
      <div className="w-full px-8 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span 
            className="text-[26px] tracking-wide text-[#A1A1AA]"
            style={{ fontFamily: "Algerian, serif" }}
          >
            AIVA
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] group-hover:scale-125 transition-transform duration-300" />
        </a>

        {/* Center: Links */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`font-mono text-[10.5px] tracking-[0.18em] transition-colors duration-200 mt-0.5 ${
                link.active ? 'text-[#82B2FF]' : 'text-[#52525b] hover:text-[#A1A1AA]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center opacity-60">
            {/* WiFi Icon SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="white"/>
              <path d="M8.5 15.5C10.433 13.567 13.567 13.567 15.5 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12C8.86599 8.13401 15.134 8.13401 19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <a
            href="#waitlist"
            className="group relative h-[36px] px-6 bg-[#A4CAFF] hover:bg-[#82B2FF] text-[#0B0B0C] font-mono text-[10px] tracking-[0.1em] font-medium flex items-center overflow-hidden transition-all duration-300 uppercase shrink-0"
          >
            REQUEST ACCESS
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
