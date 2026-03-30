import { motion } from 'motion/react';

export default function PhoneMockup() {
  return (
    <div className="relative w-[320px] h-[650px] rounded-[48px] border-[8px] border-[#1C1C1E] bg-[#0D0F14] shadow-2xl overflow-hidden animate-float">
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
      
      {/* UI Content */}
      <div className="p-6 pt-16 h-full flex flex-col gap-6 relative z-10">
        <div className="flex justify-between items-center">
          <h3 className="font-body text-sm text-[#C8CDD6] font-medium">Today's Health Journal</h3>
          <div className="w-8 h-8 rounded-full bg-[#1AAFFF]/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#1AAFFF]" />
          </div>
        </div>

        {/* Vitals Card */}
        <div className="bg-[#1C1C1E]/50 rounded-2xl p-4 border border-[rgba(200,205,214,0.05)]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-1">Heart Rate</p>
              <p className="font-display text-3xl text-[#F0F2F5]">71<span className="text-lg text-[#6B7280]"> bpm</span></p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] text-[#00FF85] uppercase tracking-wider mb-1">Resting Avg</p>
              <p className="font-mono text-sm text-[#C8CDD6]">68-77</p>
            </div>
          </div>
          {/* Fake Graph */}
          <div className="h-12 w-full flex items-end gap-1">
            {[40, 60, 45, 70, 50, 65, 45, 80, 55, 60, 40, 50].map((h, i) => (
              <motion.div 
                key={i}
                className="flex-1 bg-gradient-to-t from-[#1AAFFF]/20 to-[#1AAFFF] rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
              />
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex flex-col gap-4 mt-2">
          {/* User Message */}
          <motion.div 
            className="self-end max-w-[85%] bg-[#1C1C1E] rounded-2xl rounded-tr-sm p-4 border border-[rgba(200,205,214,0.05)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <p className="font-body text-[13px] text-[#C8CDD6] leading-relaxed">
              "I have a dull ache behind my left eye, started after lunch"
            </p>
          </motion.div>

          {/* AIVA Response */}
          <motion.div 
            className="self-start max-w-[85%] bg-[#1AAFFF]/10 rounded-2xl rounded-tl-sm p-4 border border-[#1AAFFF]/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <p className="font-body text-[13px] text-[#1AAFFF] leading-relaxed">
              Logged. Correlating with today's blood pressure reading...
            </p>
          </motion.div>
        </div>

        {/* Bottom Strip */}
        <div className="absolute bottom-6 left-6 right-6 h-12 bg-[#1C1C1E] rounded-full border border-[rgba(200,205,214,0.05)] flex items-center px-4 gap-3">
          <div className="w-6 h-6 rounded-full bg-[#1AAFFF]/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1AAFFF]" />
          </div>
          <div className="flex-1 h-1 bg-[#2A2A2E] rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#1AAFFF]"
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ delay: 3, duration: 1 }}
            />
          </div>
          <p className="font-mono text-[10px] text-[#9CA3AF]">14:00</p>
        </div>
      </div>
    </div>
  );
}
