import RatesSection from "../components/RatesSection";
import { CheckCircle2, Star, Shield, Trophy } from "lucide-react";
import TextAnimation from "../components/TextAnimation";

export default function RatesPage() {
  return (
    <div className="pt-32 pb-24 w-full flex flex-col gap-32 bg-[#f5f5f5] text-black relative overflow-hidden">
      
      {/* ── BACKGROUND DECORATIONS ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30 select-none border-b border-black">
        <div className="absolute top-[10%] -left-20 w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute top-[60%] -right-20 w-[500px] h-[500px] bg-black rounded-full blur-[150px] opacity-10"></div>
      </div>

      {/* Header */}
      <section className="container mx-auto px-6 lg:px-12 text-center relative z-10 text-black">
        <span
          className="inline-block mb-4 px-5 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-white shadow-sm transition-all bg-black"
        >
          Access & Pricing
        </span>
        <TextAnimation>
          <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
            Rates & <span className="text-[#00C950]">Memberships</span>
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto font-normal">
            Choose the plan that fits your game. Enjoy premium access, exclusive discounts, and unparalleled indoor golf experiences.
          </p>
        </TextAnimation>
      </section>

      {/* Promotions Section */}
      <section className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <TextAnimation>
            <h2 className="text-3xl md:text-4xl font-normal mb-4 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Limited Time Promotions</h2>
          </TextAnimation>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "3 Month Gold Pass", price: "$1,200", time: "60 Minute Session/Day", features: ["All-Day Access", "Priority Booking", "Free Club Rental"], highlight: false },
            { title: "6 Month Silver Pass", price: "$1,400", time: "90 Minute Session/Day", features: ["All-Day Access", "Guest Passes", "Locker Access"], highlight: true },
            { title: "12 Month Gold Pass", price: "$3,600", time: "90 Minute Session/Day", features: ["All-Day Access", "Tournament Entry", "Pro Coaching Session"], highlight: false },
          ].map((promo, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border flex flex-col relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${promo.highlight ? 'bg-black text-white border-black shadow-2xl scale-105 z-10' : 'bg-[#c9c9c9] text-black border-black/10 shadow-sm'}`}>
              {promo.highlight && <div className="absolute top-0 right-0 bg-green-500 text-black text-[10px] font-normal tracking-widest uppercase px-4 py-1.5 rounded-bl-xl shadow-md">POPULAR</div>}
              
              <h3 className="text-2xl font-normal mb-2">{promo.title}</h3>
              {promo.price && <div className="text-4xl font-normal mb-4 tracking-tighter">{promo.price}</div>}
              
              <div className={`text-sm font-normal mb-6 py-2 px-4 rounded-full border inline-block w-fit ${promo.highlight ? 'bg-white/10 border-white/10 text-white/80' : 'bg-black/5 border-black/5 text-black/80'}`}>
                {promo.time}
              </div>
              
              <ul className="space-y-4 mb-8 grow">
                {promo.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 font-normal">
                    <CheckCircle2 className={`w-5 h-5 ${promo.highlight ? 'text-green-500' : 'text-green-500'}`} />
                    <span className={promo.highlight ? 'text-white/80' : 'text-black/70'}>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-full font-normal tracking-widest uppercase text-xs transition-all ${promo.highlight ? 'bg-green-500 text-black hover:bg-green-400' : 'bg-black text-white hover:bg-neutral-800'}`}>
                Claim Offer
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Rates Table Section */}
      <section className="bg-white py-24 border-y border-black/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <TextAnimation>
              <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>Daily Rates</h2>
              <p className="text-black max-w-2xl mx-auto font-normal">Pay by the hour for flexible simulator access.</p>
            </TextAnimation>
          </div>
          <RatesSection />
        </div>
      </section>

      {/* Membership Plans - The 3 Cards */}
      <section className="container mx-auto px-6 lg:px-12 relative z-10 pb-20">
        <div className="text-center mb-16">
          <TextAnimation>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 tracking-tighter text-black" style={{ fontFamily: "'Inter', sans-serif" }}>Membership Plans</h2>
            <p className="text-black/60 max-w-2xl mx-auto text-lg md:text-xl font-normal">
              Enjoy exclusive discounts and all-access privileges with our vibrant monthly memberships.
            </p>
          </TextAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Scratch Pass - GRAY */}
          <div className="bg-[#c9c9c9] rounded-[40px] p-8 md:p-10 flex flex-col gap-8 transition-transform duration-500 hover:scale-[1.02] cursor-default group shadow-xl border border-black/5 relative overflow-hidden">
            
            <div className="flex justify-between items-start relative z-10">
               <span className="w-fit rounded-full bg-black/5 border border-black/5 px-4 py-1.5 text-[10px] uppercase tracking-widest text-black">
                 Casual Player
               </span>
               <div className="w-14 h-14 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-black shadow-sm">
                 <Star className="w-6 h-6" />
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-normal text-black leading-[1.1] mb-2 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Scratch Pass</h3>
              <div className="flex items-end gap-2 mb-6">
                 <span className="text-6xl font-normal text-black tracking-tighter">$39</span>
                 <span className="text-black/50 mb-2 uppercase text-xs tracking-widest">/ month</span>
              </div>
            </div>

            <div className="bg-black/5 rounded-[24px] p-6 flex flex-col gap-5 border border-black/5 group-hover:-translate-y-2 transition-transform duration-700 relative z-10 grow">
               <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-2">
                 <span className="text-[10px] uppercase tracking-widest text-black/50">
                   Plan Benefits
                 </span>
                 <span className="px-2 py-0.5 bg-black/10 text-black rounded-md text-[9px] uppercase tracking-wider">Active</span>
               </div>
               
               <ul className="space-y-4 flex-col grow justify-center">
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                   </div>
                   <span className="text-sm text-black/80 leading-snug">20% Off Daily Rates for Solo and Group Rates</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                   </div>
                   <span className="text-sm text-black/80 leading-snug">Access to GCHawk and EyeXO Simulators</span>
                 </li>
               </ul>
            </div>

            <button className="w-full mt-2 py-5 rounded-full bg-black text-white hover:bg-black/80 text-sm uppercase tracking-widest transition-all relative z-10">
              Join Scratch Pass
            </button>
          </div>

          {/* Silver Pass - GREEN */}
          <div className="bg-green-500 rounded-[40px] p-8 md:p-10 flex flex-col gap-8 transition-transform duration-500 hover:scale-[1.02] cursor-default group shadow-2xl relative overflow-hidden lg:-translate-y-4 z-20">
            
            <div className="flex justify-between items-start relative z-10">
               <span className="w-fit rounded-full bg-black/10 border border-black/10 px-4 py-1.5 text-[10px] uppercase tracking-widest text-black">
                 Great Value
               </span>
               <div className="w-14 h-14 rounded-full bg-black/10 border border-black/5 flex items-center justify-center text-black shadow-sm">
                 <Shield className="w-6 h-6" />
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-normal text-black leading-[1.1] mb-2 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Silver Pass</h3>
              <div className="flex items-end gap-2 mb-6">
                 <span className="text-6xl font-normal text-black tracking-tighter">$250</span>
                 <span className="text-black/70 mb-2 uppercase text-xs tracking-widest">/ month</span>
               </div>
            </div>

            <div className="bg-black/10 rounded-[24px] p-6 flex flex-col gap-5 border border-black/10 group-hover:-translate-y-2 transition-transform duration-700 relative z-10 grow">
               <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-2">
                 <span className="text-[10px] uppercase tracking-widest text-black/60">
                   Plan Benefits
                 </span>
                 <span className="px-2 py-0.5 bg-black text-white rounded-md text-[9px] uppercase tracking-wider">Popular</span>
               </div>
               
               <ul className="space-y-4 flex-col grow justify-center">
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-black" />
                   </div>
                   <span className="text-sm text-black/90 leading-snug">60 Minute Session/Day included</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-black" />
                   </div>
                   <span className="text-sm text-black/90 leading-snug">All-Day Access to the lounge</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-black" />
                   </div>
                   <span className="text-sm text-black/90 leading-snug">Uneekor EyeXO Simulator Only</span>
                 </li>
               </ul>
            </div>

            <button className="w-full mt-2 py-5 rounded-full bg-black text-white hover:bg-black/80 text-sm uppercase tracking-widest transition-all shadow-xl relative z-10">
              Join Silver Pass
            </button>
          </div>

          {/* Gold Pass - BLACK */}
          <div className="bg-black rounded-[40px] p-8 md:p-10 flex flex-col gap-8 transition-transform duration-500 hover:scale-[1.02] cursor-default group shadow-2xl relative overflow-hidden">
            
            <div className="flex justify-between items-start relative z-10">
               <span className="w-fit rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-[10px] uppercase tracking-widest text-white">
                 Elite Status
               </span>
               <div className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-sm">
                 <Trophy className="w-6 h-6" />
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-normal text-white leading-[1.1] mb-2 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Gold Pass</h3>
              <div className="flex items-end gap-2 mb-6">
                 <span className="text-6xl font-normal text-white tracking-tighter">$400</span>
                 <span className="text-white/50 mb-2 uppercase text-xs tracking-widest">/ month</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-[24px] p-6 flex flex-col gap-5 border border-white/10 group-hover:-translate-y-2 transition-transform duration-700 relative z-10 grow">
               <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                 <span className="text-[10px] uppercase tracking-widest text-white/50">
                   Plan Benefits
                 </span>
                 <span className="px-2 py-0.5 bg-green-500 text-black rounded-md text-[9px] uppercase tracking-wider">VIP</span>
               </div>
               
               <ul className="space-y-4 flex-col grow justify-center">
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                   </div>
                   <span className="text-sm text-white/80 leading-snug">90 Minute Session/Day included</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                   </div>
                   <span className="text-sm text-white/80 leading-snug">Priority All-Day Access</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                   </div>
                   <span className="text-sm text-white/80 leading-snug">GCHawk and EyeXO Simulators</span>
                 </li>
               </ul>
            </div>

            <button className="w-full mt-2 py-5 rounded-full bg-white text-black hover:bg-neutral-200 text-sm uppercase tracking-widest transition-all relative z-10">
              Join Gold Pass
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
