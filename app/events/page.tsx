"use client";

export default function EventsPage() {
  return (
    <div className="pt-32 pb-24 w-full min-h-[85vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-6">Upcoming <span className="text-primary">Events</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
          We are currently planning our upcoming tournaments, corporate social leagues, and special events. Get ready for some serious competition and fun.
        </p>
        
        <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
           {/* Decorative top border */}
           <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent"></div>
           
           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto mb-8 opacity-80 animate-pulse"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
           
           <h2 className="text-3xl font-bold mb-4">Stay Tuned!</h2>
           <p className="text-gray-400 mb-10 text-lg">This page is currently under construction. Check back soon for exciting event updates, membership tournaments, and registration details.</p>
           
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
             <input type="email" placeholder="Enter your email" className="bg-black border border-white/20 rounded-full px-6 py-4 grow focus:outline-none focus:border-primary text-white" />
             <button className="bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap">
               Notify Me
             </button>
           </form>
        </div>
      </div>
    </div>
  );
}
