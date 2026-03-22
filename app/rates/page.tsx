import RatesSection from "../components/RatesSection";
import { CheckCircle2, Star, Shield, Trophy } from "lucide-react";

export default function RatesPage() {
  return (
    <div className="pt-32 pb-24 w-full flex flex-col gap-32 bg-white text-neutral-950 relative overflow-hidden">
      
      {/* ── BACKGROUND DECORATIONS ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30 select-none">
        <div className="absolute top-[-5%] -left-20 w-[600px] h-[600px] bg-[#B5AAFF] rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-[#C8FF6A] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-[#FFD572] rounded-full blur-[200px] opacity-50"></div>
      </div>

      {/* Header */}
      <section className="container mx-auto px-6 lg:px-12 text-center relative z-10 text-neutral-950">
        <span
          className="inline-block mb-4 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-900 shadow-sm"
          style={{ backgroundColor: "#CCFF00" }}
        >
          Access & Pricing
        </span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
          Rates & <span className="text-neutral-500 opacity-60">Memberships</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
          Choose the plan that fits your game. Enjoy premium access, exclusive discounts, and unparalleled indoor golf experiences.
        </p>
      </section>

      {/* Promotions Section */}
      <section className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Limited Time Promotions</h2>
          <div className="w-16 h-1 bg-neutral-950 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "3 Month Gold Pass", price: "$1,200", time: "60 Minute Session/Day", features: ["All-Day Access", "Priority Booking", "Free Club Rental"], highlight: false },
            { title: "6 Month Silver Pass", price: "$1,400", time: "90 Minute Session/Day", features: ["All-Day Access", "Guest Passes", "Locker Access"], highlight: true },
            { title: "12 Month Gold Pass", price: "$3,600", time: "90 Minute Session/Day", features: ["All-Day Access", "Tournament Entry", "Pro Coaching Session"], highlight: false },
          ].map((promo, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border flex flex-col relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${promo.highlight ? 'bg-white border-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] scale-105 z-10' : 'bg-white/60 backdrop-blur-lg border-white/50 shadow-sm'}`}>
              {promo.highlight && <div className="absolute top-0 right-0 bg-neutral-900 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-xl shadow-md">POPULAR</div>}
              <h3 className="text-2xl font-bold mb-2 text-neutral-900">{promo.title}</h3>
              {promo.price && <div className="text-4xl font-black text-neutral-950 mb-4 tracking-tight">{promo.price}</div>}
              <div className="text-neutral-800 text-sm font-bold mb-6 py-2 px-4 bg-black/5 rounded-xl border border-black/5 inline-block w-fit">{promo.time}</div>
              
              <ul className="space-y-4 mb-8 grow">
                {promo.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-neutral-600 font-medium">
                    <CheckCircle2 className={`w-5 h-5 ${promo.highlight ? 'text-green-500' : 'text-neutral-400'}`} />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-2xl font-bold tracking-wide transition-all ${promo.highlight ? 'bg-neutral-950 text-white hover:bg-neutral-800 shadow-xl' : 'bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 shadow-sm'}`}>
                Claim Offer
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Rates Table Section */}
      <section className="bg-neutral-50/80 py-24 border-y border-neutral-200/50 relative overflow-hidden">
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-[linear-gradient(to_left,#C8FF6A22,transparent)]"></div>
        <div className="absolute left-0 top-0 -z-10 h-full w-1/2 bg-[linear-gradient(to_right,#B5AAFF11,transparent)]"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>Daily Rates</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto font-medium">Pay by the hour for flexible simulator access.</p>
          </div>
          <RatesSection />
        </div>
      </section>

      {/* Membership Plans - The 3 Cards */}
      <section className="container mx-auto px-6 lg:px-12 relative z-10 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-neutral-950" style={{ fontFamily: "'Inter', sans-serif" }}>Membership Plans</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Enjoy exclusive discounts and all-access privileges with our vibrant monthly memberships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Scratch Pass - PURPLE (#B5AAFF) */}
          <div className="rounded-[40px] p-8 md:p-10 flex flex-col gap-8 transition-transform duration-500 hover:scale-[1.02] cursor-default group shadow-[0_20px_40px_rgba(181,170,255,0.3)] relative overflow-hidden" style={{ backgroundColor: "#B5AAFF" }}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex justify-between items-start relative z-10">
               <span className="w-fit rounded-full bg-white/40 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-900">
                 Casual Player
               </span>
               <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-neutral-900 shadow-sm">
                 <Star className="w-6 h-6 fill-current" />
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white leading-[1.1] mb-2 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Scratch Pass</h3>
              <div className="flex items-end gap-2 mb-6">
                 <span className="text-6xl font-black text-white tracking-tighter">$39</span>
                 <span className="text-white/80 font-bold mb-2 uppercase text-xs tracking-widest">/ month</span>
              </div>
            </div>

            {/* Glassmorphic Mockup Area */}
            <div className="bg-white/80 backdrop-blur-xl rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/60 group-hover:-translate-y-2 transition-transform duration-700 relative z-10 grow">
               <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-2">
                 <span className="text-[10px] uppercase font-black tracking-widest text-neutral-500">
                   Plan Benefits
                 </span>
                 <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-md text-[9px] font-black uppercase tracking-wider shadow-inner">Active</span>
               </div>
               
               <ul className="space-y-4 flex-col grow justify-center">
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#B5AAFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-[#B5AAFF]" />
                   </div>
                   <span className="text-sm font-bold text-neutral-800 leading-snug">20% Off Daily Rates for Solo and Group Rates</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#B5AAFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-[#B5AAFF]" />
                   </div>
                   <span className="text-sm font-bold text-neutral-800 leading-snug">Access to GCHawk and EyeXO Simulators</span>
                 </li>
               </ul>
            </div>

            <button className="w-full mt-2 py-5 rounded-[20px] bg-white text-neutral-900 hover:bg-neutral-50 font-black text-sm uppercase tracking-widest transition-all shadow-xl border border-white/50 relative z-10">
              Join Scratch Pass
            </button>
          </div>

          {/* Silver Pass - YELLOW (#FFD572) */}
          <div className="rounded-[40px] p-8 md:p-10 flex flex-col gap-8 transition-transform duration-500 hover:scale-[1.02] cursor-default group shadow-[0_20px_40px_rgba(255,213,114,0.3)] relative overflow-hidden lg:-translate-y-4 z-20" style={{ backgroundColor: "#FFD572" }}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex justify-between items-start relative z-10">
               <span className="w-fit rounded-full bg-black/10 backdrop-blur-sm border border-black/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-900">
                 Great Value
               </span>
               <div className="w-14 h-14 rounded-full bg-black/10 backdrop-blur-md border border-black/5 flex items-center justify-center text-neutral-950 shadow-sm">
                 <Shield className="w-6 h-6 fill-current" />
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-black text-neutral-950 leading-[1.1] mb-2 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Silver Pass</h3>
              <div className="flex items-end gap-2 mb-6">
                 <span className="text-6xl font-black text-neutral-950 tracking-tighter">$250</span>
                 <span className="text-neutral-800 font-bold mb-2 uppercase text-xs tracking-widest">/ month</span>
              </div>
            </div>

            {/* Glassmorphic Mockup Area */}
            <div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white/80 group-hover:-translate-y-2 transition-transform duration-700 relative z-10 grow">
               <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-2">
                 <span className="text-[10px] uppercase font-black tracking-widest text-neutral-500">
                   Plan Benefits
                 </span>
                 <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-md text-[9px] font-black uppercase tracking-wider shadow-inner">Popular</span>
               </div>
               
               <ul className="space-y-4 flex-col grow justify-center">
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#FFD572]/30 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-yellow-600" />
                   </div>
                   <span className="text-sm font-bold text-neutral-800 leading-snug">60 Minute Session/Day included</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#FFD572]/30 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-yellow-600" />
                   </div>
                   <span className="text-sm font-bold text-neutral-800 leading-snug">All-Day Access to the lounge</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#FFD572]/30 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-yellow-600" />
                   </div>
                   <span className="text-sm font-bold text-neutral-800 leading-snug">Uneekor EyeXO Simulator Only</span>
                 </li>
               </ul>
            </div>

            <button className="w-full mt-2 py-5 rounded-[20px] bg-neutral-950 text-white hover:bg-neutral-800 font-black text-sm uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] relative z-10">
              Join Silver Pass
            </button>
          </div>

          {/* Gold Pass - LIME (#C8FF6A) */}
          <div className="rounded-[40px] p-8 md:p-10 flex flex-col gap-8 transition-transform duration-500 hover:scale-[1.02] cursor-default group shadow-[0_20px_40px_rgba(200,255,106,0.3)] relative overflow-hidden" style={{ backgroundColor: "#C8FF6A" }}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex justify-between items-start relative z-10">
               <span className="w-fit rounded-full bg-black/10 backdrop-blur-sm border border-black/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-950">
                 Elite Status
               </span>
               <div className="w-14 h-14 rounded-full bg-black/10 backdrop-blur-md border border-black/5 flex items-center justify-center text-neutral-950 shadow-sm">
                 <Trophy className="w-6 h-6 fill-current" />
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-black text-neutral-950 leading-[1.1] mb-2 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Gold Pass</h3>
              <div className="flex items-end gap-2 mb-6">
                 <span className="text-6xl font-black text-neutral-950 tracking-tighter">$400</span>
                 <span className="text-neutral-800 font-bold mb-2 uppercase text-xs tracking-widest">/ month</span>
              </div>
            </div>

             {/* Glassmorphic Mockup Area */}
             <div className="bg-white/80 backdrop-blur-xl rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/60 group-hover:-translate-y-2 transition-transform duration-700 relative z-10 grow">
               <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-2">
                 <span className="text-[10px] uppercase font-black tracking-widest text-neutral-500">
                   Plan Benefits
                 </span>
                 <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-md text-[9px] font-black uppercase tracking-wider shadow-inner">VIP</span>
               </div>
               
               <ul className="space-y-4 flex-col grow justify-center">
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#C8FF6A]/50 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-green-700" />
                   </div>
                   <span className="text-sm font-bold text-neutral-800 leading-snug">90 Minute Session/Day included</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#C8FF6A]/50 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-green-700" />
                   </div>
                   <span className="text-sm font-bold text-neutral-800 leading-snug">Priority All-Day Access</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-[#C8FF6A]/50 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-green-700" />
                   </div>
                   <span className="text-sm font-bold text-neutral-800 leading-snug">GCHawk and EyeXO Simulators</span>
                 </li>
               </ul>
            </div>

            <button className="w-full mt-2 py-5 rounded-[20px] bg-neutral-950 text-white hover:bg-neutral-800 font-black text-sm uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] relative z-10">
              Join Gold Pass
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
