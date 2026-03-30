import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ArchDiagram from './ArchDiagram';

export default function FeatureRows() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const rows = containerRef.current.querySelectorAll('.feature-row');
    
    rows.forEach((row, i) => {
      const leftContent = row.querySelector('.left-content');
      const rightContent = row.querySelector('.right-content');
      
      gsap.fromTo(leftContent, 
        { x: -30, opacity: 0 },
        { 
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "center center",
            scrub: 0.5
          }
        }
      );

      gsap.fromTo(rightContent, 
        { x: 30, opacity: 0 },
        { 
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "center center",
            scrub: 0.5
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} id="platform" className="scroll-mt-24 w-full bg-[#080A0F] pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-24">
        <h2 className="font-display text-[64px] lg:text-[80px] font-extralight text-[#F0F2F5] leading-[1.1]">
          Engineered in<br/>
          Three Layers.
        </h2>
      </div>

      {/* Row 1 */}
      <div className="feature-row group border-t border-[rgba(200,205,214,0.08)] hover:border-[rgba(26,175,255,0.4)] hover:bg-[rgba(26,175,255,0.02)] transition-all duration-400 ease-out py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="left-content w-full lg:w-1/2 flex flex-col">
            <span className="font-mono text-[11px] text-[#1AAFFF] tracking-[0.25em] uppercase mb-6">
              LAYER 01 / PATIENT INTERFACE
            </span>
            <h3 className="font-display text-[40px] lg:text-[52px] font-light text-[#F0F2F5] mb-6">
              Health Journal
            </h3>
            <p className="font-body text-[16px] text-[#9CA3AF] leading-[1.65] max-w-[480px]">
              React Native (iOS &amp; Android). Offline-first WatermelonDB + SQLCipher (AES-256). Natural language symptoms via text, voice, or body maps. Medication timeline with non-judgmental adherence prompts. WCAG 2.1 AA–oriented UX for chronic conditions and varied health literacy.
            </p>
          </div>
          <div className="right-content w-full lg:w-1/2 flex justify-center perspective-[1200px]">
            {/* Visual: 3D Phone Mockup */}
            <div className="relative w-[280px] h-[580px] rounded-[40px] border-[6px] border-[#1C1C1E] bg-[#0D0F14] shadow-2xl overflow-hidden transform-gpu transition-transform duration-700 group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 backface-hidden p-6 pt-12 flex flex-col gap-4">
                <div className="w-full h-32 bg-[#1C1C1E]/50 rounded-2xl border border-[rgba(200,205,214,0.05)] p-4">
                  <div className="w-8 h-8 rounded-full bg-[#1AAFFF]/20 mb-2" />
                  <div className="h-2 w-24 bg-[#2A2A2E] rounded-full mb-2" />
                  <div className="h-2 w-16 bg-[#2A2A2E] rounded-full" />
                </div>
                <div className="w-full h-24 bg-[#1AAFFF]/10 rounded-2xl border border-[#1AAFFF]/20 p-4 ml-4" />
                <div className="w-full h-24 bg-[#1C1C1E]/50 rounded-2xl border border-[rgba(200,205,214,0.05)] p-4 mr-4" />
              </div>
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0B0E1A] p-6 pt-12 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#00FF85] flex items-center justify-center mb-4">
                  <span className="text-[#00FF85]">🔒</span>
                </div>
                <h4 className="font-display text-xl text-[#F0F2F5] mb-2">My Health Vault</h4>
                <p className="font-mono text-[10px] text-[#9CA3AF] text-center">AES-256 Encrypted<br/>Local Storage Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 — processing & privacy anchor */}
      <div id="security" className="feature-row group scroll-mt-28 border-t border-[rgba(200,205,214,0.08)] hover:border-[rgba(26,175,255,0.4)] hover:bg-[rgba(26,175,255,0.02)] transition-all duration-400 ease-out py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="left-content w-full lg:w-1/2 flex flex-col lg:pl-16">
            <span className="font-mono text-[11px] text-[#00FF85] tracking-[0.25em] uppercase mb-6">
              LAYER 02 / AI ENGINE
            </span>
            <h3 className="font-display text-[40px] lg:text-[52px] font-light text-[#F0F2F5] mb-6">
              Intelligence Engine
            </h3>
            <p className="font-body text-[16px] text-[#9CA3AF] leading-[1.65] max-w-[480px]">
              Python microservices in AWS Nitro Enclaves: in-memory processing, attested enclaves, session limits. Medication–symptom temporal correlation filtered through DailyMed, FAERS, RxNorm, and SNOMED CT–backed logic. NLP extraction + full explainability for pattern observations. Hard-coded guardrails: no AI diagnosis, treatment advice, or crisis counselling.
            </p>
          </div>
          <div className="right-content w-full lg:w-1/2 h-[400px] bg-[#0B0E1A]/50 rounded-3xl border border-[rgba(200,205,214,0.05)] overflow-hidden relative">
            <ArchDiagram />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="feature-row group border-t border-b border-[rgba(200,205,214,0.08)] hover:border-[rgba(26,175,255,0.4)] hover:bg-[rgba(26,175,255,0.02)] transition-all duration-400 ease-out py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="left-content w-full lg:w-1/2 flex flex-col">
            <span className="font-mono text-[11px] text-[#C8CDD6] tracking-[0.25em] uppercase mb-6">
              LAYER 03 / PROVIDER INTERFACE
            </span>
            <h3 className="font-display text-[40px] lg:text-[52px] font-light text-[#F0F2F5] mb-6">
              Care Dashboard
            </h3>
            <p className="font-body text-[16px] text-[#9CA3AF] leading-[1.65] max-w-[480px]">
              Next.js 15 dashboard for NPI-verified clinicians. SMART on FHIR R4 via HAPI FHIR–style integration paths. Super Summary in ~15 seconds, active acknowledgements, SOAP note drafts with mandatory human edit. Summaries and flags to Epic In-Basket / Oracle Message Center—single-click launch without extra login.
            </p>
          </div>
          <div className="right-content w-full lg:w-1/2 flex justify-center">
            {/* Visual: Browser Mockup */}
            <div className="w-full max-w-[500px] aspect-[4/3] bg-[#0F1117] rounded-xl border border-[rgba(200,205,214,0.1)] shadow-2xl overflow-hidden flex flex-col">
              {/* Chrome */}
              <div className="h-8 bg-[#1C1C1E] border-b border-[rgba(200,205,214,0.05)] flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              {/* App UI */}
              <div className="flex-1 p-4 flex gap-4">
                {/* Sidebar */}
                <div className="w-1/3 h-full bg-[#1C1C1E]/50 rounded-lg border border-[rgba(200,205,214,0.05)] p-3 flex flex-col gap-2">
                  <div className="h-6 w-1/2 bg-[#2A2A2E] rounded mb-2" />
                  <div className="h-10 w-full bg-[#1AAFFF]/10 border border-[#1AAFFF]/20 rounded" />
                  <div className="h-10 w-full bg-[#2A2A2E]/50 rounded" />
                  <div className="h-10 w-full bg-[#2A2A2E]/50 rounded" />
                </div>
                {/* Main Content */}
                <div className="flex-1 h-full flex flex-col gap-4">
                  <div className="h-24 w-full bg-[#1C1C1E]/50 rounded-lg border border-[rgba(200,205,214,0.05)] p-4">
                    <div className="h-4 w-1/3 bg-[#2A2A2E] rounded mb-2" />
                    <div className="h-2 w-full bg-[#2A2A2E] rounded mb-1" />
                    <div className="h-2 w-2/3 bg-[#2A2A2E] rounded" />
                  </div>
                  <div className="flex-1 w-full bg-[#1C1C1E]/50 rounded-lg border border-[rgba(200,205,214,0.05)] p-4 relative overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#0B0E1A] border-l border-[rgba(200,205,214,0.05)] p-3 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                      <div className="h-4 w-1/2 bg-[#1AAFFF]/50 rounded mb-4" />
                      <div className="h-2 w-full bg-[#2A2A2E] rounded mb-2" />
                      <div className="h-2 w-full bg-[#2A2A2E] rounded mb-2" />
                      <div className="h-2 w-3/4 bg-[#2A2A2E] rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
