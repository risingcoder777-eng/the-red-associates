import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'orange' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'red', className }: BadgeProps) {
  const variants = {
    red: 'bg-[#B91C1C]/10 text-[#B91C1C] border border-[#B91C1C]/20',
    orange: 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20',
    outline: 'bg-transparent text-[#B91C1C] border border-[#B91C1C]',
  };

  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
