'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, icon, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-[#B91C1C] text-white hover:bg-[#7F1D1D] focus:ring-[#B91C1C]',
      secondary: 'bg-white text-[#B91C1C] border border-[#B91C1C] hover:bg-[#FEF2F2] focus:ring-[#B91C1C]',
      'outline-white': 'bg-transparent text-white border border-white hover:bg-white/10 focus:ring-white',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    const MotionButton = motion.button;
    const MotionLink = motion(Link);

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <MotionLink
          href={href}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
          {icon && <span className="ml-2">{icon}</span>}
        </MotionLink>
      );
    }

    return (
      <MotionButton
        ref={ref as any}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';
