"use client";

import { motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@workspace/ui/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
}

type Square = {
  id: number;
  pos: [number, number]; // always guaranteed
};

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Square[]>(() =>
    Array.from({ length: numSquares }, (_, i) => ({
      id: i,
      pos: [0, 0],
    })),
  );

  // generate a valid position
  function getPos(dimW: number, dimH: number): [number, number] {
    return [
      Math.floor((Math.random() * dimW) / width),
      Math.floor((Math.random() * dimH) / height),
    ];
  }

  // generate squares
  function generateSquares(count: number, dimW: number, dimH: number): Square[] {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(dimW, dimH),
    }));
  }

  // update a single square after animation
  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id ? { ...sq, pos: getPos(dimensions.width, dimensions.height) } : sq,
      ),
    );
  };

  // update squares when dimensions change
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    setSquares(generateSquares(numSquares, dimensions.width, dimensions.height));
  }, [dimensions, numSquares]);

  // Resize observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return; // ✅ guard against undefined
      const { width: w, height: h } = entry.contentRect;
      setDimensions({ width: w, height: h });
    });


    resizeObserver.observe(el);
    return () => resizeObserver.unobserve(el);
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      {/* Pattern */}
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {/* Animated squares */}
      {dimensions.width > 0 &&
        dimensions.height > 0 &&
        squares.map(({ pos: [px, py], id }, index) => (
          <motion.rect
            key={id}
            x={px * width + 1}
            y={py * height + 1}
            width={width - 1}
            height={height - 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            fill="currentColor"
            strokeWidth={0}
          />
        ))}
    </svg>
  );
}
