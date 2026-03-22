"use client";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8" id="footer">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to tee off?</h2>
          <p className="text-gray-400 text-lg">Book your session today and experience premium indoor golf.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Details */}
          <div>
            <h3 className="text-primary text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex flex-col">
                <span className="text-white font-medium mb-1">Address</span>
                123 Golf Avenue, Simulator City, SC 12345
              </p>
              <p className="flex flex-col">
                <span className="text-white font-medium mb-1">Email</span>
                <a href="mailto:info@happyguilmore.golf" className="hover:text-primary transition-colors">
                  info@happyguilmore.golf
                </a>
              </p>
              <p className="flex flex-col">
                <span className="text-white font-medium mb-1">Phone number</span>
                <a href="tel:555-0198" className="hover:text-primary transition-colors">
                  (555) 123-0198
                </a>
              </p>
            </div>
            
            <div className="mt-8">
              <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="text-primary">Happy</span> Guilmore Golf
              </h1>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-400 mb-2">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="contact"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 px-6 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Happy Guilmore Golf. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
