import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring } from 'motion/react';

function AnimatedNumber({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const springValue = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function StatsBar() {
  const stats = [
    { value: 700000, suffix: '', label: 'Annual US ED visits tied to adverse drug events (~700k, national estimates)' },
    { value: 8759, suffix: ' hrs', label: 'Lived health hours per year vs. ~1 hour of typical primary care contact' },
    { value: 56, suffix: '%', label: 'Adverse drug events estimated preventable (up to, literature range)' },
    { value: 289, suffix: 'B', label: 'Medication non-adherence cost to US system (upper-range billions)' }
  ];

  return (
    <section className="w-full bg-[#0B0E1A] py-[160px] border-y border-[rgba(200,205,214,0.08)] relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(200,205,214,0.1)]">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="flex flex-col items-start lg:px-12 first:pl-0 last:pr-0 pt-8 lg:pt-0 first:pt-0"
            >
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-[64px] font-semibold text-[#F0F2F5] leading-none">
                  {stat.value === 289 ? '$' : ''}
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p className="font-body text-[13px] text-[#6B7280] uppercase tracking-[0.08em] leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
