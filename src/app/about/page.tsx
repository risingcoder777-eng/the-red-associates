import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Scale, Shield, Eye, Target, Heart, Users, Lightbulb,
  CheckCircle2, Phone, ArrowRight, Building2,
  Award, FileText, Handshake, TrendingUp, MapPin, Calendar
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/* ─── Data ──────────────────────────────────────────────────────── */

const values = [
  {
    icon: Scale,
    title: 'Integrity',
    desc: 'We uphold the highest ethical standards in everything we do.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We deliver legal solutions with care, diligence and expertise.',
  },
  {
    icon: Users,
    title: 'Client First',
    desc: "Our clients' goals and well-being are our top priority.",
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'We believe in clear communication and complete transparency.',
  },
  {
    icon: Shield,
    title: 'Justice',
    desc: 'We are committed to protecting rights and delivering justice.',
  },
];

const reasons = [
  'Experienced team of dedicated legal professionals',
  'Personalised legal strategies tailored to your needs',
  'Transparent communication at every step',
  'Timely updates and proactive case management',
  'Strong track record of successful outcomes',
];

const team = [
  {
    name: 'Arvind Narayanan',
    role: 'Managing Partner',
    specialty: 'Corporate & Commercial Law',
    img: '/images/attorney_arvind.jpg',
  },
  {
    name: 'Meera Krishnan',
    role: 'Partner',
    specialty: 'Litigation & Dispute Resolution',
    img: '/images/attorney_meera.jpg',
  },
  {
    name: 'Rohan Mehta',
    role: 'Partner',
    specialty: 'Taxation & Regulatory',
    img: '/images/attorney_rohan.jpg',
  },
  {
    name: 'Ananya Iyer',
    role: 'Partner',
    specialty: 'Intellectual Property Law',
    img: '/images/attorney_ananya.jpg',
  },
];

const milestones = [
  {
    year: '2010',
    title: 'Firm Established',
    desc: 'With a vision to deliver ethical legal services.',
    icon: Building2,
  },
  {
    year: '2014',
    title: 'Expanded Practice',
    desc: 'Strengthened our team and practice areas.',
    icon: TrendingUp,
  },
  {
    year: '2017',
    title: '100K+ Cases Milestone',
    desc: 'Successfully represented over 1000 clients.',
    icon: Award,
  },
  {
    year: '2020',
    title: 'Recognised Excellence',
    desc: 'Awarded for outstanding legal services.',
    icon: Shield,
  },
  {
    year: '2023',
    title: 'Pan-India Presence',
    desc: 'Expanded our services across major cities.',
    icon: MapPin,
  },
  {
    year: '2024+',
    title: 'Continuing Forward',
    desc: 'Committed to growing with trust and integrity.',
    icon: Calendar,
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-[88px] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[420px]">

            {/* Left */}
            <ScrollReveal direction="right" className="flex flex-col justify-center py-16 pr-12">
              <div className="inline-flex items-center gap-2 text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase mb-6">
                <div className="w-6 h-px bg-[#B91C1C]" />
                About Us
              </div>
              <h1 className="text-[42px] md:text-[52px] font-bold font-serif text-[#1F2937] leading-[1.1] mb-4">
                Committed to Justice.<br />
                <span className="text-[#B91C1C] italic">Driven by Results.</span>
              </h1>
              <div className="w-12 h-0.5 bg-[#B91C1C] mb-6" />
              <p className="text-[15px] text-gray-600 leading-[1.8] max-w-[460px]">
                The Red Associates is a full-service law firm built on the foundation of integrity, expertise and client success. We deliver strategic legal solutions with dedication and a relentless commitment to justice.
              </p>
            </ScrollReveal>

            {/* Right — office image */}
            <ScrollReveal direction="left" className="relative">
              <div className="absolute top-0 right-0 w-[110%] h-full">
                <Image
                  src="/images/office_reception.jpg"
                  alt="THE RED ASSOCIATES Office Reception"
                  fill
                  priority
                  className="object-cover object-center"
                />
                {/* Red curve overlay on left edge */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — justice statue image */}
            <ScrollReveal direction="right">
              <div className="relative h-[400px] md:h-[460px] rounded-[20px] overflow-hidden shadow-xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Lady Justice Statue"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>

            {/* Right — story text */}
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase mb-5">
                <div className="w-6 h-px bg-[#B91C1C]" />
                Our Story
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold font-serif text-[#1F2937] leading-[1.2] mb-6">
                A Journey Rooted in Integrity and Dedicated to Justice
              </h2>
              <div className="space-y-4 text-[15px] text-gray-600 leading-[1.8] mb-8">
                <p>
                  Founded with a vision to provide reliable, result-oriented and ethical legal representation, The Red Associates has grown into a trusted legal partner for individuals, startups, businesses and corporations.
                </p>
                <p>
                  Over the years, we have built long-standing relationships based on trust, transparency and exceptional legal outcomes.
                </p>
              </div>
              {/* Signature block */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div>
                  <div className="font-serif italic text-2xl text-[#1F2937] mb-0.5" style={{ fontFamily: 'cursive' }}>
                    Arvind Narayanan
                  </div>
                  <div className="text-[12px] text-gray-500 font-medium tracking-wider uppercase">Managing Partner</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────── */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Mission */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm h-full">
                <div className="w-12 h-12 rounded-full border-2 border-[#B91C1C]/20 bg-[#FEF2F2] flex items-center justify-center mb-5">
                  <Target size={22} className="text-[#B91C1C]" />
                </div>
                <h3 className="text-[20px] font-bold text-[#1F2937] mb-3">Our Mission</h3>
                <p className="text-[14px] text-gray-600 leading-[1.8]">
                  To provide exceptional legal solutions through integrity, dedication and professional excellence, ensuring the best possible outcomes for our clients.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm h-full">
                <div className="w-12 h-12 rounded-full border-2 border-[#B91C1C]/20 bg-[#FEF2F2] flex items-center justify-center mb-5">
                  <Eye size={22} className="text-[#B91C1C]" />
                </div>
                <h3 className="text-[20px] font-bold text-[#1F2937] mb-3">Our Vision</h3>
                <p className="text-[14px] text-gray-600 leading-[1.8]">
                  To be recognized as one of India's most respected and trusted law firms, known for our commitment to justice, our people and the communities we serve.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Label */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">Our Values</span>
          </div>
          <h2 className="text-[32px] md:text-[38px] font-bold font-serif text-[#1F2937] mb-12">
            The Principles That Define Us
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center p-6 rounded-[16px] border border-gray-100 hover:border-[#B91C1C]/20 hover:shadow-md transition-all duration-200 group bg-white">
                  <div className="w-12 h-12 rounded-full bg-[#FEF2F2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <v.icon size={22} className="text-[#B91C1C]" strokeWidth={1.75} />
                  </div>
                  <div className="text-[15px] font-bold text-[#1F2937] mb-2">{v.title}</div>
                  <div className="text-[12px] text-gray-500 leading-[1.6]">{v.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#B91C1C]" />
                <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">Why Clients Choose Us</span>
              </div>
              <h2 className="text-[30px] md:text-[36px] font-bold font-serif text-[#1F2937] leading-[1.2] mb-8">
                More Than Legal Advice.<br />
                A Partnership You Can Trust.
              </h2>
              <ul className="space-y-4">
                {reasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#B91C1C] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[14px] text-gray-600 leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Right — image */}
            <ScrollReveal direction="left">
              <div className="relative h-[360px] md:h-[420px] rounded-[20px] overflow-hidden shadow-xl">
                <Image
                  src="/images/conference_room.jpg"
                  alt="Legal conference room"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">Our Leadership</span>
          </div>
          <h2 className="text-[32px] md:text-[38px] font-bold font-serif text-[#1F2937] mb-12">
            Experienced. Respected. Committed.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group">
                  {/* Photo */}
                  <div className="relative h-[260px] rounded-[16px] overflow-hidden mb-4 shadow-sm">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Info */}
                  <div>
                    <div className="text-[16px] font-bold text-[#1F2937]">{member.name}</div>
                    <div className="text-[13px] text-[#B91C1C] font-semibold mb-0.5">{member.role}</div>
                    <div className="text-[12px] text-gray-500 mb-3">{member.specialty}</div>
                    <a href="#" className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#0A66C2] text-white hover:opacity-80 transition-opacity text-[11px] font-bold">
                      in
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">Our Journey</span>
          </div>
          <h2 className="text-[32px] md:text-[38px] font-bold font-serif text-[#1F2937] mb-14">
            Milestones That Mark Our Growth
          </h2>

          {/* Timeline row */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gray-200 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center relative z-10">
                    {/* Icon circle */}
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#B91C1C]/20 flex items-center justify-center mb-4 shadow-sm">
                      <m.icon size={20} className="text-[#B91C1C]" strokeWidth={1.75} />
                    </div>
                    <div className="text-[15px] font-bold text-[#B91C1C] mb-1">{m.year}</div>
                    <div className="text-[13px] font-bold text-[#1F2937] mb-1">{m.title}</div>
                    <div className="text-[11px] text-gray-500 leading-[1.5]">{m.desc}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
                <div className="text-white text-[20px] font-bold">Need Legal Assistance?</div>
                <div className="text-white/70 text-[14px]">Schedule a consultation with our legal experts today.</div>
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
