import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export interface CursorState {
  type: 'default' | 'button' | 'view' | 'explore' | 'build' | 'hidden';
  text?: string;
}

export const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorState>({ type: 'default' });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor outer ring lag
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') as CursorState['type'];
        const text = cursorTarget.getAttribute('data-cursor-text') || undefined;
        setCursorState({ type, text });
        return;
      }

      // Default hover detection
      if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorState({ type: 'button' });
      } else if (target.closest('img, video, canvas')) {
        setCursorState({ type: 'explore' });
      } else {
        setCursorState({ type: 'default' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isTextCursor = ['view', 'explore', 'build'].includes(cursorState.type) || !!cursorState.text;
  const isButtonHover = cursorState.type === 'button';

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isTextCursor ? 0 : isButtonHover ? 1.5 : 1,
          opacity: isTextCursor ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Ring / Morph Container */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur-[2px] transition-colors duration-200"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isTextCursor ? 72 : isButtonHover ? 48 : 36,
          height: isTextCursor ? 72 : isButtonHover ? 48 : 36,
          backgroundColor: isTextCursor ? 'rgba(255, 255, 255, 0.95)' : isButtonHover ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
          borderColor: isTextCursor ? 'rgba(255, 255, 255, 1)' : isButtonHover ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
          scale: 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {isTextCursor && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-widest text-black select-none"
          >
            {cursorState.text || cursorState.type}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
