'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300 h-[88px] flex items-center border-b border-[#E5E7EB]',
          isScrolled ? 'bg-white/98 backdrop-blur-md shadow-sm' : 'bg-white'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="THE RED ASSOCIATES"
              width={240}
              height={88}
              className="object-contain w-auto"
              style={{ height: 80 }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-bold text-[14px] transition-colors relative group py-2',
                    isActive ? 'text-[#B91C1C]' : 'text-[#1F2937] hover:text-[#B91C1C]'
                  )}
                >
                  {link.label}
                  <span 
                    className={cn(
                      'absolute bottom-0 left-0 w-full h-0.5 bg-[#B91C1C] transition-transform origin-left duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    )} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" href="/contact" className="!rounded-lg px-6 gap-2 text-sm uppercase tracking-wider font-bold">
              Book Consultation
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#1F2937] hover:text-[#B91C1C]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
