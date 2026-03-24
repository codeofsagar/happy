"use client";

import React, { useState } from "react";
import Link from "next/link";
import TextAnimation from "../components/TextAnimation";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string | null }>({ type: null, message: null });
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      message: '',
      marketing: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
          setIsSubmitting(false);
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          setFormData({ firstName: '', lastName: '', email: '', role: '', message: '', marketing: false });
      }, 1500);
  };

  return (
    <main className="relative w-full min-h-screen text-black overflow-x-hidden selection:bg-black/10 selection:text-black bg-[#f5f5f5] pt-32 pb-20">
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 md:px-12">
            
            {/* WHITE CARD CONTAINER */}
            <div className="w-full max-w-7xl bg-white shadow-2xl overflow-hidden flex flex-col min-h-[800px] rounded-[32px] pt-16">
                <TextAnimation>
                  <h1 className="w-full text-5xl md:text-7xl font-normal mb-12 tracking-tighter text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Ready to tee off?
                  </h1>
                </TextAnimation>

                {/* Content Columns Wrapper */}
                <div className="flex flex-col md:flex-row w-full flex-grow">
                    {/* --- LEFT COLUMN (Info) --- Hidden on mobile, visible on desktop */}
                    <div className="hidden md:flex w-full md:w-[40%] p-8 md:p-16 pt-0 flex-col justify-between border-r border-black/5">
                        {/* Top Address Group */}
                        <div className="space-y-12">
                            <div className="space-y-2">
                                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4">Location</p>
                                <p className="text-xl md:text-2xl text-black">
                                    123 Golf Avenue
                                </p>
                                <p className="text-xl md:text-2xl text-black">
                                    Simulator City, SC 12345
                                </p>
                            </div>

                            <div className="space-y-4 pt-8 border-t border-black/5">
                                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4">Get in touch</p>
                                <a href="mailto:info@happyguilmore.golf" className="block text-xl hover:text-green-600 transition-colors">
                                    info@happyguilmore.golf
                                </a>
                                <a href="tel:5551230198" className="block text-xl hover:text-green-600 transition-colors">
                                    (555) 123-0198
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN (Form) --- */}
                    <div className="w-full md:w-[60%] p-8 md:p-16 pt-0 flex flex-col">
                        <form className="w-full space-y-10 flex-grow" onSubmit={handleSubmit}>
                            {/* Status Message */}
                            {status.message && (
                                <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                    {status.message}
                                </div>
                            )}

                            {/* Row 1: First Name & Last Name */}
                            <div className="grid grid-cols-2 gap-4 md:gap-12">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="block text-xs tracking-widest uppercase text-neutral-500">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b border-black py-3 focus:outline-none focus:border-green-500 transition-colors bg-transparent text-lg placeholder:text-neutral-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="block text-xs tracking-widest uppercase text-neutral-500">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b border-black py-3 focus:outline-none focus:border-green-500 transition-colors bg-transparent text-lg placeholder:text-neutral-300"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-neutral-500">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-b border-black py-3 focus:outline-none focus:border-green-500 transition-colors bg-transparent text-lg placeholder:text-neutral-300"
                                />
                            </div>

                            {/* Row 3: Role (Dropdown) */}
                            <div className="space-y-2 relative">
                                <label htmlFor="role" className="block text-xs tracking-widest uppercase text-neutral-500">I am a...</label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-b border-black py-3 focus:outline-none focus:border-green-500 transition-colors bg-transparent text-lg appearance-none cursor-pointer"
                                    style={{ WebkitAppearance: 'none' }}
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option value="member">New Member</option>
                                    <option value="guest">Guest</option>
                                    <option value="event">Event Organizer</option>
                                    <option value="other">Other</option>
                                </select>
                                <span className="absolute right-0 bottom-4 text-xs text-black pointer-events-none">▼</span>
                            </div>

                            {/* Row 4: Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-neutral-500">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black/10 p-4 focus:outline-none focus:border-green-500 transition-colors bg-neutral-50 text-lg min-h-[140px] resize-none rounded-2xl"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            {/* Bottom Actions */}
                            <div className="space-y-8 pt-4">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            required
                                            className="mt-1.5 h-4 w-4 md:w-5 cursor-pointer appearance-none rounded-full border border-black checked:bg-black checked:border-black focus:outline-none shrink-0"
                                        />
                                        <label htmlFor="privacy" className="text-sm md:text-base text-neutral-600 cursor-pointer select-none leading-relaxed">
                                            I agree to the <a href="#" className="underline text-black">Privacy Policy</a> and consent to data processing.*
                                        </label>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <input
                                            type="checkbox"
                                            id="marketing"
                                            name="marketing"
                                            checked={formData.marketing}
                                            onChange={handleChange}
                                            className="mt-1.5 h-4 w-4 md:w-5 cursor-pointer appearance-none rounded-full border border-black checked:bg-black checked:border-black focus:outline-none shrink-0"
                                        />
                                        <label htmlFor="marketing" className="text-sm md:text-base text-neutral-600 cursor-pointer select-none leading-relaxed">
                                            Keep me updated with promotional offers and news.
                                        </label>
                                    </div>
                                </div>

                                {/* Send Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative px-10 py-4 rounded-full border border-black overflow-hidden transition-all duration-300 bg-black disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto mt-4"
                                >
                                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-green-500 transition-transform duration-500 ease-in-out" />
                                    <span className="relative z-10 text-white group-hover:text-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                                        {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
                                        {!isSubmitting && (
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        )}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Mobile-only Address Info - shown after form */}
                <div className="w-full px-8 pb-12 pt-8 md:hidden border-t border-black/5 bg-neutral-50 mt-12">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">Location</p>
                            <p className="text-lg text-black">123 Golf Avenue</p>
                            <p className="text-lg text-black">Simulator City, SC 12345</p>
                        </div>
                        <div className="space-y-2 pt-4">
                            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">Contact</p>
                            <a href="mailto:info@happyguilmore.golf" className="block text-lg hover:text-green-600 transition-colors">info@happyguilmore.golf</a>
                            <a href="tel:5551230198" className="block text-lg hover:text-green-600 transition-colors">(555) 123-0198</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
