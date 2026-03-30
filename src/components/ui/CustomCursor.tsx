import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-[var(--color-accent)]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ width: 12, height: 12, opacity: 0 }}
      animate={{
        width: isHovering ? 40 : 12,
        height: isHovering ? 40 : 12,
        x: isHovering ? cursorX.get() - 14 : cursorX.get(),
        y: isHovering ? cursorY.get() - 14 : cursorY.get(),
        backgroundColor: isHovering ? 'rgba(26,175,255,0.1)' : 'transparent',
        opacity: 1
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
}
