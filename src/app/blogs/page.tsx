'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Search, Mail, Phone, Tag } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import blogsData from '@/data/blogs.json';

const categories = ['All', 'Corporate Law', 'Property Law', 'Family Law', 'Criminal Law', 'Tax Law', 'Employment Law', 'IP Law'];

const categoryColors: Record<string, string> = {
  'Corporate Law':   'bg-blue-50 text-blue-700 border-blue-100',
  'Property Law':    'bg-amber-50 text-amber-700 border-amber-100',
  'Family Law':      'bg-pink-50 text-pink-700 border-pink-100',
  'Criminal Law':    'bg-red-50 text-[#B91C1C] border-red-100',
  'Tax Law':         'bg-green-50 text-green-700 border-green-100',
  'Employment Law':  'bg-purple-50 text-purple-700 border-purple-100',
  'IP Law':          'bg-orange-50 text-orange-700 border-orange-100',
};

export default function BlogsPage() {
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');

  const featuredBlog = blogsData[0];
  const filtered = blogsData.slice(1).filter(b => {
    const matchCat = active === 'All' || b.category === active;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
                        b.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-[88px] bg-white relative overflow-hidden">
        {/* Red curve */}
        <div
          className="absolute top-0 right-[-5%] w-[32%] h-[90%] rounded-bl-[400px] pointer-events-none z-0"
          style={{ background: 'linear-gradient(145deg, #B91C1C 0%, #7F1D1D 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-24">
          <div className="max-w-[580px]">
            <div className="inline-flex items-center gap-2 text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase mb-6">
              <div className="w-6 h-px bg-[#B91C1C]" />
              Legal Insights
            </div>
            <h1 className="text-[44px] md:text-[56px] font-bold font-serif text-[#1F2937] leading-[1.05] mb-5">
              Insights &amp; Legal<br />
              <span className="text-[#B91C1C] italic">Knowledge Hub.</span>
            </h1>
            <div className="w-12 h-0.5 bg-[#B91C1C] mb-6" />
            <p className="text-[15px] text-gray-600 leading-[1.8] max-w-[460px]">
              Expert analysis on legal trends, regulatory changes, and landmark judgments impacting your business and personal life.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Article ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">Featured Article</span>
          </div>

          <ScrollReveal>
            <Link href={featuredBlog.url} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100 bg-white hover:shadow-[0_16px_48px_rgba(185,28,28,0.1)] transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-[300px] lg:h-[420px] overflow-hidden">
                  <Image
                    src={featuredBlog.coverImage}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                  {/* Category pill */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B91C1C] text-white text-[11px] font-bold uppercase tracking-wider">
                      <Tag size={10} /> {featuredBlog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100 text-[11px] font-bold uppercase tracking-wider mb-6 w-fit">
                    ★ Featured Insight
                  </div>
                  <h2 className="text-[26px] md:text-[30px] font-bold font-serif text-[#1F2937] leading-[1.2] mb-4 group-hover:text-[#B91C1C] transition-colors">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-[14px] text-gray-500 leading-[1.8] mb-8">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-[12px] text-gray-400 font-medium">
                      <span className="flex items-center gap-1.5"><Calendar size={13} />{featuredBlog.publishedDate}</span>
                      <span className="flex items-center gap-1.5"><Clock size={13} />{featuredBlog.readingTime} read</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#B91C1C] font-bold text-[13px] group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── All Articles ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter + Search bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-bold border transition-all ${
                    active === cat
                      ? 'bg-[#B91C1C] text-white border-[#B91C1C]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#B91C1C] hover:text-[#B91C1C]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-[260px] flex-shrink-0">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-[10px] border border-gray-200 bg-white text-[13px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#B91C1C] transition-colors"
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-[15px]">No articles found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((blog, i) => (
                <ScrollReveal key={blog.id} delay={i * 0.07}>
                  <Link href={blog.url} className="group block h-full">
                    <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:border-[#B91C1C]/20 hover:shadow-[0_12px_32px_rgba(185,28,28,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-[210px] overflow-hidden">
                        <Image
                          src={blog.coverImage}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Category */}
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full border text-[11px] font-bold ${categoryColors[blog.category] || 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-3">
                          <span className="flex items-center gap-1"><Calendar size={11} />{blog.publishedDate}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{blog.readingTime} read</span>
                        </div>
                        <h3 className="text-[16px] font-bold font-serif text-[#1F2937] leading-snug mb-3 line-clamp-2 group-hover:text-[#B91C1C] transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-[13px] text-gray-500 leading-[1.7] line-clamp-3 flex-grow mb-5">
                          {blog.excerpt}
                        </p>
                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-[#B91C1C] text-[12px] font-bold group-hover:gap-2.5 transition-all">
                            Read More <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-[#FAFAFA] rounded-[28px] p-10 lg:p-14 border border-gray-100 flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase mb-4">
                  <div className="w-6 h-px bg-[#B91C1C]" />
                  Stay Informed
                </div>
                <h2 className="text-[28px] md:text-[34px] font-bold font-serif text-[#1F2937] mb-3">
                  Subscribe to Our<br />Legal Newsletter
                </h2>
                <p className="text-[14px] text-gray-500 leading-relaxed max-w-[380px]">
                  Get the latest legal updates, firm news, and expert analysis delivered straight to your inbox — no spam, ever.
                </p>
              </div>
              <div className="w-full lg:w-auto flex-shrink-0 lg:min-w-[380px]">
                <form
                  onSubmit={e => e.preventDefault()}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-grow">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full pl-11 pr-4 py-3.5 rounded-[10px] border border-gray-200 bg-white text-[13px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#B91C1C] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#B91C1C] text-white font-bold text-[13px] uppercase tracking-wider rounded-[10px] hover:bg-[#991B1B] transition-colors flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-[11px] text-gray-400 mt-2 text-center sm:text-left">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </ScrollReveal>
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
