import { motion } from 'motion/react';

export default function LatticeGraphic() {
  return (
    <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center pointer-events-none">
      {/* 3D Isometric Lattice and Wave SVG */}
      <svg 
        viewBox="0 0 800 800"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 40px rgba(130,178,255,0.1))' }}
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A4CAFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#82B2FF" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="waveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(164, 202, 255, 0.05)" />
            <stop offset="50%" stopColor="rgba(164, 202, 255, 0.35)" />
            <stop offset="100%" stopColor="rgba(164, 202, 255, 0.0)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Isometric Grid Lines */}
        <motion.g 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          stroke="rgba(130, 178, 255, 0.2)" 
          strokeWidth="1.5"
        >
          {/* Main Box Outline */}
          <path d="M 400 150 L 200 250 L 200 550 L 400 650 L 600 550 L 600 250 Z" fill="none" />
          <path d="M 400 350 L 200 250 M 400 350 L 600 250 M 400 350 L 400 650" />
          
          {/* Inner structure lines & subdivisions */}
          <path d="M 300 200 L 300 600 M 500 200 L 500 600 M 200 400 L 600 400" />
          <path d="M 200 400 L 400 300 L 600 400 M 200 400 L 400 500 L 600 400" />
          <path d="M 300 200 L 500 300 M 300 600 L 500 500 M 250 225 L 550 375" />
          <path d="M 250 375 L 550 225 M 250 525 L 550 375 M 250 425 L 550 575" />
          
          <path d="M 300 300 L 300 500 M 500 300 L 500 500" />
          <path d="M 300 400 L 400 350 L 500 400 M 300 400 L 400 450 L 500 400" />
        </motion.g>

        {/* Nodes */}
        {[
          [400, 150], [200, 250], [600, 250], [200, 550], [400, 650], [600, 550],
          [400, 350], [400, 450], [300, 200], [500, 200], [300, 600], [500, 600],
          [200, 400], [400, 300], [600, 400], [400, 500], [300, 400], [500, 400],
          [250, 225], [350, 175], [450, 225], [550, 175], [250, 525], [350, 575],
          [450, 525], [550, 575], [300, 300], [500, 300], [300, 500], [500, 500],
          [250, 375], [550, 375], [250, 425], [550, 425]
        ].map((pos, i) => (
          <motion.g 
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.02 }}
          >
            <circle cx={pos[0]} cy={pos[1]} r="14" fill="url(#nodeGlow)" />
            <circle cx={pos[0]} cy={pos[1]} r="3.5" fill="#A4CAFF" opacity="0.9" />
          </motion.g>
        ))}

        {/* Thick translucent path resembling the wave */}
        <motion.path 
          d="M 150 750 C 350 750, 350 450, 450 350 C 550 250, 650 150, 850 150"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="50"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
        />
        
        {/* Core highlight path of the wave */}
        <motion.path 
          d="M 150 750 C 350 750, 350 450, 450 350 C 550 250, 650 150, 850 150"
          fill="none"
          stroke="#A4CAFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.75"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 1.1 }}
        />
      </svg>
    </div>
  );
}
