'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ElementType;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type = 'text', icon: Icon, className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={name} className="block text-sm font-medium text-[#1F2937] mb-1.5">
          {label}
        </label>
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 peer-focus:text-[#B91C1C]">
              <Icon size={18} />
            </div>
          )}
          <input
            ref={ref}
            id={name}
            name={name}
            type={type}
            className={cn(
              'peer w-full px-4 py-3 rounded-xl border border-[#F3D7D7] bg-white outline-none transition-all',
              'focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C]/20 text-[#1F2937] placeholder:text-gray-400',
              Icon ? 'pl-11' : '',
              error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : '',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
