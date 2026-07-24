import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Scale, Shield, Building2, Heart, Briefcase, FileText,
  Lightbulb, Handshake, ArrowRight, Phone, CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { expertiseAreas } from '@/data/expertise';

const IconMap: Record<string, React.ElementType> = {
  Scale, Shield, Building2, Heart, Briefcase, FileText, Lightbulb, Handshake
};

/* ── Why us bullets ─────────────────────────────────────────────── */
const whyUs = [
  'Deep domain expertise across all major practice areas',
  'Aggressive yet strategic approach to every case',
  'Transparent fee structures with no hidden costs',
  'Regular case updates and direct attorney access',
  'Proven track record across High Courts & Tribunals',
];

/* ── Process steps ──────────────────────────────────────────────── */
const process = [
  { step: '01', title: 'Initial Consultation', desc: 'We listen carefully to understand your situation, goals, and legal needs.' },
  { step: '02', title: 'Case Assessment', desc: 'Our experts analyse merits, risks, and the best legal strategy for you.' },
  { step: '03', title: 'Strategy & Action', desc: 'We craft a precise legal plan and execute it with diligence and speed.' },
  { step: '04', title: 'Resolution & Beyond', desc: 'We resolve your matter and remain available for any future legal needs.' },
];

export default function ExpertisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-[88px] bg-white relative overflow-hidden">
        {/* Courthouse watermark */}
        <div
          className="absolute inset-0 w-[65%] pointer-events-none z-0 flex items-center"
          style={{ opacity: 0.80, mixBlendMode: 'multiply' }}
        >
          <Image src="/images/courthouse.png" alt="" width={900} height={700} className="object-contain w-full h-auto" />
        </div>

        {/* Red curve — right */}
        <div
          className="absolute top-0 right-[-5%] w-[32%] h-[90%] rounded-bl-[400px] pointer-events-none z-0"
          style={{ background: 'linear-gradient(145deg, #B91C1C 0%, #7F1D1D 100%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase mb-6">
              <div className="w-6 h-px bg-[#B91C1C]" />
              Our Practice Areas
            </div>
            <h1 className="text-[44px] md:text-[58px] font-bold font-serif text-[#1F2937] leading-[1.05] mb-5">
              Legal Expertise<br />
              <span className="text-[#B91C1C] italic">Built for Results.</span>
            </h1>
            <div className="w-12 h-0.5 bg-[#B91C1C] mb-6" />
            <p className="text-[16px] text-gray-600 leading-[1.8] max-w-[480px] mb-8">
              Comprehensive legal solutions across multiple practice areas, delivered with strategic precision and an unwavering commitment to your outcome.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 h-[50px] bg-[#B91C1C] text-white font-bold rounded-[10px] text-[13px] uppercase tracking-wider shadow-[0_8px_20px_rgba(185,28,28,0.3)] hover:bg-[#991B1B] hover:-translate-y-0.5 transition-all">
                Book Consultation <ArrowRight size={16} />
              </Link>
              <Link href="#areas" className="inline-flex items-center gap-2 px-7 h-[50px] bg-white border border-gray-200 text-[#1F2937] font-bold rounded-[10px] text-[13px] uppercase tracking-wider hover:border-[#B91C1C] hover:text-[#B91C1C] hover:-translate-y-0.5 transition-all">
                Explore Areas <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practice Areas Grid ───────────────────────────────────── */}
      <section id="areas" className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Label */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">What We Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="text-[32px] md:text-[40px] font-bold font-serif text-[#1F2937] leading-[1.15]">
              Areas of Practice
            </h2>
            <p className="text-[14px] text-gray-500 max-w-[360px] leading-relaxed">
              Our attorneys are recognised specialists. Every case is handled with full dedication by the right expert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertiseAreas.map((area, i) => {
              const Icon = IconMap[area.icon] || Scale;
              return (
                <ScrollReveal key={area.id} delay={i * 0.07}>
                  <div className="group bg-white rounded-[20px] p-7 border border-gray-100 hover:border-[#B91C1C]/30 hover:shadow-[0_12px_32px_rgba(185,28,28,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-[12px] bg-[#FEF2F2] flex items-center justify-center mb-5 group-hover:bg-[#B91C1C] transition-colors duration-300">
                      <Icon size={22} className="text-[#B91C1C] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    {/* Number */}
                    <div className="text-[11px] font-bold text-gray-300 tracking-[0.15em] mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-[16px] font-bold text-[#1F2937] mb-3 leading-snug">{area.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-[1.7] flex-grow mb-5">{area.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[#B91C1C] text-[13px] font-bold group-hover:gap-2.5 transition-all"
                    >
                      Get Advice <ArrowRight size={14} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — image */}
            <ScrollReveal direction="right">
              <div className="relative h-[420px] rounded-[24px] overflow-hidden shadow-xl">
                <Image src="/images/conference_room.jpg" alt="Legal consultation" fill className="object-cover" />
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                  {[
                    { val: '15+', label: 'Years' },
                    { val: '500+', label: 'Cases' },
                    { val: '98%', label: 'Success' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/90 backdrop-blur-sm rounded-[12px] p-3 text-center shadow-sm">
                      <div className="text-[20px] font-bold text-[#B91C1C]">{s.val}</div>
                      <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — text */}
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#B91C1C]" />
                <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-[30px] md:text-[36px] font-bold font-serif text-[#1F2937] leading-[1.2] mb-6">
                The Right Legal Partner<br />For Every Challenge.
              </h2>
              <p className="text-[14px] text-gray-500 leading-[1.8] mb-8">
                At The Red Associates, every client receives focused attention from experienced attorneys who are committed to achieving the best possible outcome.
              </p>
              <ul className="space-y-3 mb-8">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#B91C1C] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[14px] text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 h-[48px] bg-[#B91C1C] text-white font-bold rounded-[10px] text-[13px] uppercase tracking-wider hover:bg-[#991B1B] transition-colors">
                Talk to an Expert <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Process ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">How We Work</span>
          </div>
          <h2 className="text-[32px] md:text-[38px] font-bold font-serif text-[#1F2937] mb-12">
            Our Process. Simple & Transparent.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  {/* Connector */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(100%_-_12px)] w-full h-px border-t-2 border-dashed border-gray-200 z-0" />
                  )}
                  <div className="relative z-10 bg-white rounded-[20px] p-7 border border-gray-100 hover:border-[#B91C1C]/20 hover:shadow-md transition-all duration-200">
                    <div className="text-[32px] font-black text-[#B91C1C]/10 leading-none mb-4 font-serif">{p.step}</div>
                    <h3 className="text-[16px] font-bold text-[#1F2937] mb-2">{p.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-[1.7]">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-8 bg-[#7F1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white text-[20px] font-bold">Need Expert Legal Guidance?</div>
                <div className="text-white/70 text-[14px]">Our specialists are ready to take your case today.</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B91C1C] text-white font-bold text-[13px] uppercase tracking-wider rounded-[10px] hover:bg-[#991B1B] transition-colors flex-shrink-0 shadow-lg"
            >
              Book A Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
