import TextAnimation from "./TextAnimation";

export default function RatesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10 w-full max-w-4xl mx-auto">
      {/* Hours */}
      <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-neutral-200 flex flex-col justify-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <TextAnimation>
            <h3 className="text-3xl text-neutral-950 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Hours</h3>
          </TextAnimation>
        </div>
        <div className="space-y-4 text-lg">
          <div className="flex justify-between items-center border-b border-black/5 pb-4">
            <span className="text-neutral-500 uppercase tracking-wider text-sm">7 days a week</span>
            <span className="text-neutral-900 text-xl">10am - 12am</span>
          </div>
        </div>
      </div>

      {/* Rates */}
      <div className="bg-black backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-white/10 flex flex-col justify-center shadow-2xl transition-transform duration-500 hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <TextAnimation>
            <h3 className="text-3xl text-white tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Rates</h3>
          </TextAnimation>
        </div>
        <div className="space-y-5 text-lg">
          <div className="flex justify-between items-center border-b border-white/10 pb-5">
            <span className="text-white/70 flex flex-col">
              Standard Rate
              <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Hourly</span>
            </span>
            <span className="text-white text-3xl tracking-tighter">$45</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-green-400 flex flex-col">
              Special Hours
              <span className="text-[10px] text-green-400/60 uppercase tracking-widest mt-1">Mon - Thu (10am-6pm)</span>
            </span>
            <span className="text-green-400 text-3xl tracking-tighter">$35</span>
          </div>
        </div>
      </div>
    </div>
  );
}
