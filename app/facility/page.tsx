import Image from "next/image";

export default function FacilityPage() {
  return (
    <div className="pt-32 pb-32 w-full bg-white text-neutral-950 relative overflow-hidden">
      
      {/* ── AMBIENT GLOWS ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30 select-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#B5AAFF] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#C8FF6A] rounded-full blur-[150px]"></div>
      </div>

      <section className="container mx-auto px-6 lg:px-12 text-center mb-20 relative z-10">
        <span
          className="inline-block mb-4 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-900 shadow-sm"
          style={{ backgroundColor: "#FFD572" }}
        >
          Inside The Lounge
        </span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
          Our <span className="text-neutral-500 opacity-60">Facility</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
          Take a look at the meticulously crafted indoor golf simulators we have built to deliver the ultimate experience. Minimal aesthetics, maximum precision.
        </p>
      </section>

      <section className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[350px]">
          
          {/* Large featured image (Col 1-2, Row 1-2) */}
          <div className="lg:col-span-2 lg:row-span-2 relative rounded-[32px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-neutral-100">
            <Image src="/assets/images/fairwaylab-hero.jpg" alt="Simulator Bay" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-10 pt-32">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-widest mb-3 inline-block">Main Bay</span>
                <h3 className="text-4xl font-black mb-2 text-white tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Premium Experience</h3>
                <p className="text-white/80 text-lg font-medium">Ample seating and immersive 4K projection for you and your group.</p>
              </div>
            </div>
          </div>
          
          {/* Tech Image (Col 3, Row 1) */}
          <div className="relative rounded-[32px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-neutral-100">
            <Image src="/assets/images/trackman-lifestyle.webp" alt="Simulator Tech" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-2xl font-black text-white tracking-tight leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>Industry Leading Tech</h3>
            </div>
          </div>
          
          {/* Text Block - Lime (Col 3, Row 2) */}
          <div className="relative rounded-[32px] overflow-hidden group md:col-span-2 lg:col-span-1 border border-neutral-200 flex flex-col items-start justify-center p-10 shadow-[0_20px_50px_rgba(200,255,106,0.2)] transition-transform duration-500 hover:-translate-y-2" style={{ backgroundColor: "#C8FF6A" }}>
             <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             </div>
             <div>
                <h3 className="text-3xl font-black mb-4 text-neutral-950 tracking-tight leading-[1.1]" style={{ fontFamily: "'Inter', sans-serif" }}>State of the Art</h3>
                <p className="text-neutral-800 text-lg font-medium leading-snug">Every bay is equipped with auto-tee technology, premium striking mats, and integrated entertainment systems.</p>
             </div>
          </div>

          {/* Lounge Area (Col 1-2, Row 3) */}
          <div className="md:col-span-2 relative rounded-[32px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-neutral-100">
            <Image src="/assets/images/nineteenth-hero.jpg" alt="Lounge Area" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex items-center justify-start p-10 w-2/3">
              <div className="max-w-sm translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-500">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-widest mb-3 inline-block">Relax</span>
                <h3 className="text-4xl font-black mb-2 text-white tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Lounge Area</h3>
                <p className="text-white/80 font-medium text-lg">Unwind with friends between swings. Enjoy premium food and beverages while watching the game.</p>
              </div>
            </div>
          </div>

          {/* Precision Tracking (Col 3, Row 3) */}
          <div className="relative rounded-[32px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-[#B5AAFF]/20 border border-[#B5AAFF]/30">
            <Image src="/assets/images/uneekor-interior.webp" alt="Tracker details" fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.05] mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B5AAFF]/90 via-[#B5AAFF]/20 to-transparent flex items-end p-8">
              <h3 className="text-3xl font-black text-neutral-950 uppercase tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>Precision<br/>Tracking</h3>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
