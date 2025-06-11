import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice()) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: '#111',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.08s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.05)'
      }}
    />
  );
};

export default CustomCursor; 