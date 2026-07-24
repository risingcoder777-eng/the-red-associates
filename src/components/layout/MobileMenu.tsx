'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 bg-white flex flex-col"
        >
          {/* Top Bar */}
          <div className="h-20 px-4 sm:px-6 flex items-center justify-between border-b border-[#F3D7D7]">
            <Link href="/" onClick={onClose} className="flex items-center">
              <Image src="/logo-navbar.png" alt="THE RED ASSOCIATES" width={150} height={50} className="object-contain mix-blend-multiply" />
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-[#1F2937] hover:text-[#B91C1C]"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'text-2xl font-serif font-medium',
                    pathname === link.href ? 'text-[#B91C1C]' : 'text-[#1F2937] hover:text-[#B91C1C]'
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navLinks.length * 0.1 }}
              className="mt-8"
            >
              <Button href="/contact" variant="primary" className="w-full" onClick={onClose}>
                Book Consultation
              </Button>
            </motion.div>
          </div>

          {/* Social */}
          <div className="p-6 border-t border-[#F3D7D7] flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-[#F59E0B]">in</a>
            <a href="#" className="text-gray-400 hover:text-[#F59E0B]">fb</a>
            <a href="#" className="text-gray-400 hover:text-[#F59E0B]">ig</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
