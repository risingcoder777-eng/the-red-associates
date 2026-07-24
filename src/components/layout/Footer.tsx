'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { footerData } from '@/data/footer';

export function Footer() {
  return (
    <footer className="bg-[#7F1D1D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 */}
          <div>
            <Link href="/" className="inline-block mb-6" style={{ filter: 'brightness(0) invert(1)' }}>
              <Image src="/images/logo.png" alt="THE RED ASSOCIATES" width={280} height={90} className="object-contain" />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">{footerData.aboutText}</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#F59E0B] transition-colors">in</a>
              <a href="#" className="text-gray-400 hover:text-[#F59E0B] transition-colors">fb</a>
              <a href="#" className="text-gray-400 hover:text-[#F59E0B] transition-colors">ig</a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#F59E0B] transition-colors flex items-center gap-2">
                    <ChevronRight size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              {footerData.expertiseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#F59E0B] transition-colors flex items-center gap-2">
                    <ChevronRight size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#F59E0B] shrink-0 mt-1" size={18} />
                <span className="text-gray-300">{footerData.contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[#F59E0B] shrink-0 mt-1" size={18} />
                <span className="text-gray-300">{footerData.contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#F59E0B] shrink-0 mt-1" size={18} />
                <span className="text-gray-300">{footerData.contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-[#F59E0B] shrink-0 mt-1" size={18} />
                <span className="text-gray-300">{footerData.contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 THE RED ASSOCIATES. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
