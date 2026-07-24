'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Mail, Clock, Send, ArrowRight,
  CheckCircle2, MessageSquare, Calendar, Scale
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { footerData } from '@/data/footer';
import { GOOGLE_APPS_SCRIPT_URL } from '@/lib/utils';

const { contactInfo } = footerData;

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: contactInfo.phone,
    sub: 'Mon – Sat, 9AM – 7PM',
    href: `tel:${contactInfo.phone}`,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: contactInfo.email,
    sub: 'We reply within 24 hrs',
    href: `mailto:${contactInfo.email}`,
    color: 'bg-red-50 text-[#B91C1C]',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Connaught Place, New Delhi',
    sub: contactInfo.address,
    href: '#map',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat',
    sub: '9:00 AM – 7:00 PM IST',
    href: '#',
    color: 'bg-green-50 text-green-600',
  },
];

const practiceAreas = [
  'Civil & Property Litigation',
  'Criminal Litigation',
  'Commercial & Corporate',
  'Family & Matrimonial',
  'Labour & Employment',
  'Tax Litigation',
  'Intellectual Property',
  'Alternative Dispute Resolution',
  'Other',
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selected, setSelected] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      area: selected,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });

      // no-cors returns opaque response, so we assume success
      setSubmitStatus('success');
      form.reset();
      setSelected('');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-[88px] bg-white relative overflow-hidden">
        <div
          className="absolute top-0 right-[-5%] w-[32%] h-[90%] rounded-bl-[400px] pointer-events-none z-0"
          style={{ background: 'linear-gradient(145deg, #B91C1C 0%, #7F1D1D 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-24">
          <div className="max-w-[580px]">
            <div className="inline-flex items-center gap-2 text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase mb-6">
              <div className="w-6 h-px bg-[#B91C1C]" />
              Get In Touch
            </div>
            <h1 className="text-[44px] md:text-[56px] font-bold font-serif text-[#1F2937] leading-[1.05] mb-5">
              Let's Discuss<br />
              <span className="text-[#B91C1C] italic">Your Legal Matter.</span>
            </h1>
            <div className="w-12 h-0.5 bg-[#B91C1C] mb-6" />
            <p className="text-[15px] text-gray-600 leading-[1.8] max-w-[460px]">
              Schedule a consultation with our legal experts. We provide strategic counsel tailored to your specific situation — confidential, professional and results-driven.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <a href={card.href} className="group block bg-white rounded-[20px] p-6 border border-gray-100 hover:border-[#B91C1C]/20 hover:shadow-[0_8px_24px_rgba(185,28,28,0.07)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 ${card.color}`}>
                    <card.icon size={18} strokeWidth={2} />
                  </div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{card.label}</div>
                  <div className="text-[14px] font-bold text-[#1F2937] mb-0.5 leading-snug">{card.value}</div>
                  <div className="text-[12px] text-gray-400">{card.sub}</div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Form + Info Split ────────────────────────────────── */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* ── Left: Dark Info Panel ─────────────────────────── */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-[#7F1D1D] rounded-[24px] p-8 lg:p-10 text-white h-full flex flex-col">
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-2 text-white/60 text-[11px] font-bold tracking-[0.12em] uppercase mb-5">
                    <div className="w-5 h-px bg-white/40" />
                    Contact Information
                  </div>
                  <h2 className="text-[24px] font-bold font-serif mb-2">We're Here to Help</h2>
                  <p className="text-[13px] text-white/60 leading-relaxed mb-8">
                    Reach out through any channel. Our team responds promptly to all enquiries.
                  </p>
                </div>

                {/* Info rows */}
                <div className="space-y-6 flex-grow">
                  {[
                    { icon: Phone, label: 'Phone', val: contactInfo.phone },
                    { icon: Mail, label: 'Email', val: contactInfo.email },
                    { icon: MapPin, label: 'Address', val: contactInfo.address },
                    { icon: Clock, label: 'Hours', val: contactInfo.hours },
                  ].map((row, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-[10px] bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <row.icon size={16} className="text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-0.5">{row.label}</div>
                        <div className="text-[13px] text-white/90 leading-relaxed">{row.val}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-4">Follow Us</div>
                  <div className="flex gap-3">
                    {[
                      { label: 'in', title: 'LinkedIn' },
                      { label: 'fb', title: 'Facebook' },
                      { label: 'ig', title: 'Instagram' },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href="#"
                        title={s.title}
                        className="w-9 h-9 rounded-[10px] bg-white/10 flex items-center justify-center text-white text-[12px] font-bold hover:bg-[#B91C1C] transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Seal badge */}
                <div className="mt-8 flex items-center gap-3 p-4 rounded-[14px] bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#B91C1C] flex items-center justify-center flex-shrink-0">
                    <Scale size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-white">Confidential Consultation</div>
                    <div className="text-[11px] text-white/50">All enquiries are 100% confidential</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Right: Form ───────────────────────────────────── */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-gray-100 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare size={18} className="text-[#B91C1C]" />
                  <h2 className="text-[22px] font-bold font-serif text-[#1F2937]">Send Us a Message</h2>
                </div>
                <p className="text-[13px] text-gray-400 mb-8">Fill in the form and we'll get back to you within 24 hours.</p>

                {submitStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-[20px] font-bold text-[#1F2937] mb-2">Message Sent!</h3>
                    <p className="text-[14px] text-gray-500 max-w-[300px]">
                      Thank you for reaching out. One of our attorneys will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-6 px-6 py-2.5 bg-[#B91C1C] text-white font-bold text-[13px] rounded-[10px] hover:bg-[#991B1B] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Full Name *</label>
                        <input name="name" required placeholder="Arvind Kumar" className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#B91C1C] transition-colors bg-[#FAFAFA] focus:bg-white" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Phone Number *</label>
                        <input name="phone" type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#B91C1C] transition-colors bg-[#FAFAFA] focus:bg-white" />
                      </div>
                    </div>

                    {/* Email + Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Email Address *</label>
                        <input name="email" type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#B91C1C] transition-colors bg-[#FAFAFA] focus:bg-white" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Subject *</label>
                        <input name="subject" required placeholder="Legal Consultation" className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#B91C1C] transition-colors bg-[#FAFAFA] focus:bg-white" />
                      </div>
                    </div>

                    {/* Practice Area */}
                    <div>
                      <label className="block text-[12px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Area of Legal Need</label>
                      <div className="flex flex-wrap gap-2">
                        {practiceAreas.map(area => (
                          <button
                            key={area}
                            type="button"
                            onClick={() => setSelected(area)}
                            className={`px-3 py-1.5 rounded-full border text-[11px] font-bold transition-all ${
                              selected === area
                                ? 'bg-[#B91C1C] text-white border-[#B91C1C]'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-[#B91C1C] hover:text-[#B91C1C]'
                            }`}
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="area" value={selected} />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[12px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Your Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Briefly describe your legal matter or question…"
                        className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#B91C1C] transition-colors bg-[#FAFAFA] focus:bg-white resize-none"
                      />
                    </div>

                    {/* Error */}
                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-[10px] border border-red-100 text-[13px]">
                        Something went wrong. Please try again or call us directly.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#B91C1C] text-white font-bold text-[14px] uppercase tracking-wider rounded-[12px] hover:bg-[#991B1B] disabled:opacity-60 transition-all shadow-[0_8px_20px_rgba(185,28,28,0.25)] hover:shadow-[0_12px_28px_rgba(185,28,28,0.35)] hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-400 text-center">
                      By submitting, you agree to our privacy policy. All enquiries are strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Google Map ───────────────────────────────────────────── */}
      <section className="py-16 bg-white" id="map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-[12px] font-bold tracking-[0.12em] uppercase">Find Us</span>
          </div>
          <h2 className="text-[28px] font-bold font-serif text-[#1F2937] mb-8">Our Office Location</h2>
          <div className="rounded-[24px] overflow-hidden border border-gray-100 shadow-sm h-[380px] bg-[#FAFAFA] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674!2d77.2195!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88a8a15edda5!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Red Associates Office Location"
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-8 bg-[#7F1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Calendar size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white text-[20px] font-bold">Ready to Take the Next Step?</div>
                <div className="text-white/70 text-[14px]">Book a consultation and speak directly with a specialist attorney.</div>
              </div>
            </div>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B91C1C] text-white font-bold text-[13px] uppercase tracking-wider rounded-[10px] hover:bg-[#991B1B] transition-colors flex-shrink-0 shadow-lg"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
