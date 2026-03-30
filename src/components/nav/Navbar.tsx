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
    { label: 'System', href: '#platform' },
    { label: 'Intelligence', href: '#capabilities' },
    { label: 'Contact', href: '#waitlist' },
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
        <div className="flex items-center gap-16">
          {/* Logo */}
          <a href="#" className="flex items-baseline gap-1 group">
            <span className="text-[30px] font-display font-medium tracking-wider text-white">
              AIVA
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-[15px] font-body text-[#A1A1AA] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center">
          <a
            href="#waitlist"
            className="group relative h-[40px] px-7 bg-[#F4F4F5] hover:bg-white text-[#0B0B0C] font-body text-[13px] tracking-wide font-medium flex items-center justify-center transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-[1px]"
          >
            Request Access
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
