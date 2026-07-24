'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, children, hover = true, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white border border-[#F3D7D7] rounded-2xl overflow-hidden',
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderColor: '#B91C1C',
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
