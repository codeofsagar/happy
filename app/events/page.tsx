"use client";

import React, { useState } from "react";
import TextAnimation from "../components/TextAnimation";

export default function EventsPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <div className="pt-32 pb-32 w-full bg-[#f5f5f5] text-black relative flex flex-col justify-center min-h-[90vh] overflow-hidden">
      
      {/* HEADER */}
      <section className="container mx-auto px-6 lg:px-12 text-center relative z-10 mb-20">
        <span className="inline-block mb-4 px-5 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-white shadow-sm transition-all bg-black">
          Calendar
        </span>
        <TextAnimation>
          <h1 className="text-5xl md:text-7xl font-normal mb-8 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
            Upcoming <span className="text-[#22C55E]">Events</span>
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-3xl mx-auto font-normal leading-relaxed">
            We are currently planning our upcoming tournaments, corporate social leagues, and special events. Get ready for some serious competition and fun.
          </p>
        </TextAnimation>
      </section>

      {/* STAY TUNED CARD */}
      <section className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="w-full max-w-4xl mx-auto bg-white shadow-xl overflow-hidden flex flex-col items-center justify-center p-12 md:p-20 border border-black/5 relative">
          
          <div className="mb-10 w-16 h-px bg-black/10"></div>
          
          <TextAnimation delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
              Stay Tuned
            </h2>
            <p className="text-black/60 mb-10 text-lg md:text-xl text-center max-w-xl mx-auto font-normal leading-relaxed">
              Our calendar is currently under construction. Join the waitlist to receive early access to tournament registrations and member-only event details.
            </p>
          </TextAnimation>

          {status === "success" ? (
             <div className="flex flex-col items-center justify-center py-6 px-10 border border-green-500/20 bg-green-500/5">
                <p className="text-green-600 uppercase tracking-widest text-xs font-normal">You're on the list</p>
             </div>
          ) : (
             <form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="bg-[#f5f5f5] border border-black/5 px-6 py-4 grow focus:outline-none focus:border-black/50 text-black text-sm transition-colors rounded-none" 
                  disabled={status === "submitting"}
                />
                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-black hover:bg-neutral-800 text-white px-8 py-4 text-xs uppercase tracking-widest transition-colors flex items-center justify-center min-w-[160px] rounded-none shadow-md disabled:opacity-70"
                >
                  {status === "submitting" ? "Joining..." : "Notify Me"}
                </button>
             </form>
          )}

        </div>
      </section>

    </div>
  );
}
