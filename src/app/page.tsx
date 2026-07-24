import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scale, Shield, Building2, Heart, Briefcase, FileText, Lightbulb, Handshake, Star, ShieldCheck, Users, Award, Quote } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { coreValues } from '@/data/values';
import { expertiseAreas } from '@/data/expertise';
import { stats } from '@/data/stats';
import blogsData from '@/data/blogs.json';

const IconMap: Record<string, React.ElementType> = {
  Scale, Shield, Building2, Heart, Briefcase, FileText, Lightbulb, Handshake, Star, ShieldCheck, Users, Award
};

export default function Home() {
  const featuredBlogs = blogsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-[88px] overflow-hidden bg-white min-h-[auto] md:min-h-[700px] lg:min-h-[820px] flex items-center">
        {/* Background Elements */}
        {/* Courthouse Outline Watermark */}
        <div
          className="absolute inset-0 w-[70%] pointer-events-none z-0 flex items-center"
          style={{ opacity: 0.80, mixBlendMode: 'multiply' }}
        >
          <Image
            src="/images/courthouse.png"
            alt="Courthouse Background"
            width={900}
            height={700}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Deep red premium curved background on the right */}
        <div 
          className="absolute top-0 right-[-5%] w-[35%] h-[85%] rounded-bl-[450px] pointer-events-none z-0 overflow-hidden shadow-2xl"
          style={{ background: 'linear-gradient(145deg, #B91C1C 0%, #7F1D1D 100%)' }}
        >
          {/* Abstract curved lines for premium feel */}
          <svg className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 Q60,40 100,0" stroke="white" strokeWidth="0.5" fill="none" />
            <path d="M0,30 Q40,80 100,30" stroke="white" strokeWidth="0.5" fill="none" />
            <path d="M0,60 Q70,100 100,70" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        
        {/* Dotted grid pattern */}
        <div className="absolute top-12 right-[32%] text-[#B91C1C]/10 hidden lg:block z-0">
          <svg width="120" height="120" fill="none" viewBox="0 0 100 100">
            <pattern id="dots" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
            </pattern>
            <rect width="100" height="100" fill="url(#dots)"></rect>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Content */}
            <ScrollReveal direction="right" className="lg:col-span-6 pr-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#B91C1C]/20 bg-[#FEF2F2] text-[#B91C1C] text-[13px] font-bold tracking-[0.1em] mb-8 shadow-sm uppercase">
                <ShieldCheck size={16} strokeWidth={2.5} />
                PREMIUM LEGAL COUNSEL
              </div>
              
              <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-bold font-serif text-[#1F2937] leading-[0.95] tracking-[-0.03em] max-w-[650px] mb-6">
                Justice That<br />
                Speaks.<br />
                <span className="text-[#B91C1C] italic">Results That</span><br />
                <span className="text-[#B91C1C] italic">Matter.</span>
              </h1>
              
              <hr className="w-full max-w-[120px] border-t border-[#B91C1C]/40 mb-6" />
              
              <p className="text-[20px] text-gray-700 mb-8 max-w-[520px] font-medium leading-[1.8]">
                A premium law firm dedicated to providing strategic, aggressive, and highly effective legal representation for businesses and individuals facing complex challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="inline-flex justify-center items-center gap-2 px-7 h-[52px] bg-[#B91C1C] text-white font-bold rounded-[10px] shadow-[0_8px_20px_rgba(185,28,28,0.3)] hover:bg-[#991B1B] hover:-translate-y-[2px] transition-all text-[13px] uppercase tracking-wider flex-shrink-0">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <Link href="/expertise" className="inline-flex justify-center items-center gap-2 px-7 h-[52px] bg-white border border-gray-200 text-[#1F2937] hover:border-[#B91C1C] hover:text-[#B91C1C] font-bold rounded-[10px] shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all text-[13px] uppercase tracking-wider flex-shrink-0">
                  Explore Our Expertise <ArrowRight size={16} />
                </Link>
              </div>

              {/* Stats Row */}
              <ScrollReveal delay={0.4} className="mt-10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { value: '15+', label: 'Years of\nExperience', icon: Shield },
                    { value: '500+', label: 'Cases\nHandled', icon: Briefcase },
                    { value: '98%', label: 'Client\nSatisfaction', icon: Users },
                    { value: '50+', label: 'Legal\nProfessionals', icon: Award }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-[14px] px-4 py-3 shadow-sm border border-gray-100 hover:border-[#B91C1C]/30 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default group">
                      <stat.icon size={22} className="text-[#B91C1C] flex-shrink-0" strokeWidth={1.75} />
                      <div>
                        <div className="text-[20px] font-bold text-[#1F2937] leading-none">{stat.value}</div>
                        <div className="text-[10px] font-medium text-gray-500 leading-[1.35] whitespace-pre-line mt-0.5">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </ScrollReveal>

            {/* Right Column - Image & Cards */}
            <ScrollReveal direction="left" delay={0.2} className="lg:col-span-6 relative mt-12 lg:mt-0">
              {/* Hero Image Container */}
              <div className="relative h-[480px] md:h-[540px] lg:h-[580px] w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto rounded-[24px] overflow-hidden shadow-[0_24px_48px_-8px_rgba(0,0,0,0.22)]">
                <Image
                  src="/images/hero.jpg"
                  alt="Lawyer consulting with client"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute bottom-[80px] right-0 lg:-right-4 bg-white p-6 rounded-[20px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] w-[280px] z-20 border border-gray-100">
                <Quote size={28} className="text-[#B91C1C] mb-2" fill="currentColor" />
                <p className="text-[#1F2937] font-medium text-[13px] leading-[1.6] mb-3">
                  We don't just represent cases. We defend rights, protect futures and deliver justice.
                </p>
                <div className="w-8 h-0.5 bg-[#B91C1C] mb-2" />
                <div className="text-[10px] font-bold text-[#B91C1C] tracking-[0.15em] uppercase">
                  THE RED ASSOCIATES
                </div>

                {/* Circular Seal — overlaps bottom-right of quote card */}
                <div className="absolute -bottom-7 -right-7 w-[72px] h-[72px] bg-[#B91C1C] text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(185,28,28,0.35)] border-4 border-white z-30">
                  <Scale size={22} strokeWidth={1.5} className="relative z-10" />
                  <svg className="absolute w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                    <path id="curve2" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent" />
                    <text fontSize="9" fontWeight="700" letterSpacing="2" fill="white">
                      <textPath href="#curve2" startOffset="0%">INTEGRITY • EXCELLENCE • RESULTS • </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Trusted By Section */}
          <ScrollReveal delay={0.6} className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-[12px] font-semibold text-gray-400 mb-6 uppercase tracking-[0.15em]">
              Trusted by Businesses and Individuals Across Industries
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-40 hover:opacity-75 transition-all duration-500">
              <span className="text-[22px] font-black font-serif text-[#1F2937] tracking-tight">TATA</span>
              <span className="text-[22px] font-bold font-sans text-[#1F2937] tracking-tighter lowercase">wipro</span>
              <span className="text-[22px] font-bold font-sans text-[#1F2937] tracking-tight">Infosys</span>
              <span className="text-[22px] font-bold font-sans text-[#1F2937] tracking-tighter lowercase">accenture</span>
              <span className="text-[22px] font-bold font-sans text-[#1F2937] tracking-tight">Cipla</span>
              <span className="text-[22px] font-bold font-sans text-[#1F2937] tracking-tight">Deloitte.</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#7F1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((value, i) => {
              const Icon = IconMap[value.icon];
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="text-center p-6 rounded-[20px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200">
                    <div className="mx-auto w-12 h-12 rounded-[12px] bg-white/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-bold text-[15px] text-white mb-1.5">{value.title}</h3>
                    <p className="text-[12px] text-white/60 leading-[1.6]">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Firm Intro ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative h-[400px] md:h-[460px] rounded-[20px] overflow-hidden shadow-xl">
                <Image
                  src="/images/office_reception.jpg"
                  alt="THE RED ASSOCIATES Office"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase mb-5">
                <div className="w-6 h-px bg-[#B91C1C]" />
                About Us
              </div>
              <h2 className="text-[30px] md:text-[38px] font-bold font-serif text-[#1F2937] leading-[1.15] mb-6">
                A New Standard in Legal Representation.
              </h2>
              <div className="space-y-4 text-[14px] text-gray-600 leading-[1.8] mb-8">
                <p>
                  At THE RED ASSOCIATES, we combine decades of deep legal expertise with the agility of a modern enterprise. Our approach is straightforward: aggressive advocacy balanced with strategic foresight.
                </p>
                <p>
                  We don't just advise on the law; we partner with our clients to navigate complex regulatory landscapes, protect their assets, and secure their future.
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 px-7 h-[48px] bg-white border border-gray-200 text-[#1F2937] font-bold rounded-[10px] text-[13px] uppercase tracking-wider hover:border-[#B91C1C] hover:text-[#B91C1C] hover:-translate-y-0.5 transition-all">
                Discover Our Story <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Expertise Preview ───────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">What We Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="text-[30px] md:text-[38px] font-bold font-serif text-[#1F2937] leading-[1.15]">
              Our Areas of Expertise
            </h2>
            <p className="text-[13px] text-gray-500 max-w-[320px] leading-relaxed">
              Comprehensive legal solutions tailored to your unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertiseAreas.slice(0, 4).map((area, i) => {
              const Icon = IconMap[area.icon];
              return (
                <ScrollReveal key={area.id} delay={i * 0.07}>
                  <div className="group bg-white rounded-[20px] p-7 border border-gray-100 hover:border-[#B91C1C]/30 hover:shadow-[0_12px_32px_rgba(185,28,28,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-[12px] bg-[#FEF2F2] flex items-center justify-center mb-5 group-hover:bg-[#B91C1C] transition-colors duration-300">
                      <Icon size={22} className="text-[#B91C1C] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    <div className="text-[11px] font-bold text-gray-300 tracking-[0.15em] mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-[16px] font-bold text-[#1F2937] mb-3 leading-snug">{area.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-[1.7] flex-grow mb-5">{area.description}</p>
                    <Link
                      href={area.slug}
                      className="inline-flex items-center gap-1.5 text-[#B91C1C] text-[13px] font-bold group-hover:gap-2.5 transition-all"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/expertise" className="inline-flex items-center gap-2 px-7 h-[48px] bg-[#B91C1C] text-white font-bold rounded-[10px] text-[13px] uppercase tracking-wider hover:bg-[#991B1B] hover:-translate-y-0.5 transition-all shadow-[0_8px_20px_rgba(185,28,28,0.25)]">
              View All Expertise <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Statistics ──────────────────────────────────────────── */}
      <section className="py-16 bg-[#7F1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedCounter
                key={i}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                light
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Insights ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">Latest Insights</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="text-[30px] md:text-[38px] font-bold font-serif text-[#1F2937] leading-[1.15]">
              Legal Insights &amp; Resources
            </h2>
            <Link href="/blogs" className="inline-flex items-center gap-2 text-[#B91C1C] text-[13px] font-bold hover:gap-3 transition-all">
              View All Articles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog, i) => (
              <ScrollReveal key={blog.id} delay={i * 0.07}>
                <Link href={blog.url} className="group block h-full">
                  <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:border-[#B91C1C]/20 hover:shadow-[0_12px_32px_rgba(185,28,28,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-[200px] overflow-hidden">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#B91C1C] text-white text-[10px] font-bold uppercase tracking-wider">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3">
                        <span>{blog.publishedDate}</span>
                        <span>·</span>
                        <span>{blog.readingTime} read</span>
                      </div>
                      <h3 className="text-[15px] font-bold font-serif text-[#1F2937] leading-snug mb-3 line-clamp-2 group-hover:text-[#B91C1C] transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 leading-[1.7] line-clamp-3 flex-grow mb-5">
                        {blog.excerpt}
                      </p>
                      <div className="pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center gap-1.5 text-[#B91C1C] text-[12px] font-bold group-hover:gap-2.5 transition-all">
                          Read Article <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────── */}
      <section className="py-8 bg-[#7F1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Scale size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white text-[20px] font-bold">Ready to Discuss Your Case?</div>
                <div className="text-white/70 text-[14px]">Schedule a confidential consultation with our legal experts today.</div>
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
