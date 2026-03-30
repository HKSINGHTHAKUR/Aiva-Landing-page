/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GSAPProvider from './components/providers/GSAPProvider';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/nav/Navbar';
import HeroSection from './components/hero/HeroSection';
import ProblemSection from './components/problem/ProblemSection';
import WhatAIVADoes from './components/capabilities/WhatAIVADoes';
import SystemArchitecture from './components/architecture/SystemArchitecture';
import ClinicalSafety from './components/safety/ClinicalSafety';
import ProviderExperience from './components/providers/ProviderExperience';
import HowItWorks from './components/howItWorks/HowItWorks';
import FinalCTA from './components/cta/FinalCTA';
import Footer from './components/footer/Footer';
import SignalWave from './components/ui/SignalWave';

export default function App() {
  return (
    <GSAPProvider>
      <div className="relative min-h-screen text-white font-body selection:bg-[#3B82F6]/30 selection:text-white main-container">
        {/* Global Overlays */}
        <SignalWave />
        <div className="grain-overlay" />
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <ProblemSection />
          <SystemArchitecture />
          <WhatAIVADoes />
          <ProviderExperience />
          <ClinicalSafety />
          <HowItWorks />
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </GSAPProvider>
  );
}
