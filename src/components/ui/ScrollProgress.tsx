import { motion, useScroll, useTransform } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[1px] bg-[#3B82F6] z-[10000] origin-left"
      style={{ scaleX }}
    />
  );
}
