import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered ? 'text-center' : 'text-left')}>
      <h2
        className={cn(
          'font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
          light ? 'text-white' : 'text-[#1F2937]'
        )}
      >
        {title}
      </h2>
      
      <div
        className={cn(
          'w-16 h-1 rounded-full mb-6',
          centered ? 'mx-auto' : '',
          light ? 'bg-[#F59E0B]' : 'bg-[#B91C1C]'
        )}
      />
      
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl',
            centered ? 'mx-auto' : '',
            light ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
