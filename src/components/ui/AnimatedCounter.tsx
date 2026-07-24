'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export function AnimatedCounter({ target, suffix = '', label, light = false }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [count, isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={cn(
          'text-4xl md:text-5xl font-bold font-serif mb-2',
          light ? 'text-white' : 'text-[#1F2937]'
        )}
      >
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div
        className={cn(
          'text-sm uppercase tracking-wide',
          light ? 'text-gray-300' : 'text-gray-600'
        )}
      >
        {label}
      </div>
    </div>
  );
}
