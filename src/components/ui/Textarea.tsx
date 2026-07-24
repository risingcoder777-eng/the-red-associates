'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, rows = 5, className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={name} className="block text-sm font-medium text-[#1F2937] mb-1.5">
          {label}
        </label>
        <textarea
          ref={ref}
          id={name}
          name={name}
          rows={rows}
          className={cn(
            'w-full px-4 py-3 rounded-xl border border-[#F3D7D7] bg-white outline-none transition-all resize-y',
            'focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C]/20 text-[#1F2937] placeholder:text-gray-400',
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : '',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
