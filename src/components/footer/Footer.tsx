export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1C1C1E] pt-16 pb-12 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="font-display text-[20px] tracking-[0.15em] font-light text-white">AIVA</span>
            </div>
            <p className="font-body text-[13px] text-[#71717A] mb-2">
              Clinical Intelligence System
            </p>
            <p className="font-mono text-[10px] text-[#52525B] leading-relaxed max-w-[260px]">
              Designed to support clinical review — not replace it
            </p>
          </div>

          {/* Col 2: Platform */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[11px] text-[#A1A1AA] tracking-[0.15em] uppercase mb-2">Platform</h4>
            {[
              { label: 'Architecture', href: '#platform' },
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'For Providers', href: '#for-providers' },
            ].map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="font-body text-[14px] text-[#71717A] hover:text-white transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 3: Security */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[11px] text-[#A1A1AA] tracking-[0.15em] uppercase mb-2">Security</h4>
            {[
              { label: 'Clinical Safety', href: '#security' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'HIPAA Notice', href: '#' },
            ].map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="font-body text-[14px] text-[#71717A] hover:text-white transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[11px] text-[#A1A1AA] tracking-[0.15em] uppercase mb-2">Contact</h4>
            {[
              { label: 'Request Access', href: '#waitlist' },
              { label: 'Pilot Program', href: '#waitlist' },
            ].map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="font-body text-[14px] text-[#71717A] hover:text-white transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 border-t border-[#1C1C1E]">
          <p className="font-mono text-[10px] text-[#3F3F46] max-w-[600px] leading-relaxed">
            AI outputs support — not replace — licensed clinical judgment. Absence of a flagged 
            pattern does not indicate absence of clinical risk. All observations require independent 
            provider review and verification.
          </p>
          
          <p className="font-mono text-[10px] text-[#52525B]">
            © 2024 AIVA. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
