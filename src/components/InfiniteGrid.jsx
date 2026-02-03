import { useRef, useId } from 'react';
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from 'framer-motion';

const GridPattern = ({ offsetX, offsetY, patternId }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(212, 175, 55, 0.8)"
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

const InfiniteGrid = ({ className = '' }) => {
  const uniqueId = useId();
  const basePatternId = `grid-base-${uniqueId}`;
  const hoverPatternId = `grid-hover-${uniqueId}`;

  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.3) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.3) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`absolute inset-0 overflow-hidden z-[1] ${className}`}
    >
      {/* Base grid - visible */}
      <div className="absolute inset-0 opacity-[0.25]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} patternId={basePatternId} />
      </div>

      {/* Reveal grid on hover - brighter */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} patternId={hoverPatternId} />
      </motion.div>
    </div>
  );
};

export default InfiniteGrid;
