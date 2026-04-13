import Image from 'next/image';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-20 text-center md:text-left">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-label text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
          Get In Touch
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tight leading-none mb-6">
          Contact <span className="text-on-tertiary-container">Us</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
          Have a question or need a consultation? Our team is here to provide architectural-grade support for all your plumbing needs.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-8 rounded-2xl">
              <span className="material-symbols-outlined text-on-tertiary-container text-3xl mb-4">call</span>
              <h3 className="text-xl font-bold font-headline text-primary-container mb-2">Phone</h3>
              <p className="text-on-surface-variant">(555) 123-4567</p>
              <p className="text-on-surface-variant text-sm mt-2">Available 24/7 for emergencies</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-2xl">
              <span className="material-symbols-outlined text-on-tertiary-container text-3xl mb-4">mail</span>
              <h3 className="text-xl font-bold font-headline text-primary-container mb-2">Email</h3>
              <p className="text-on-surface-variant">concierge@archplumbing.com</p>
              <p className="text-on-surface-variant text-sm mt-2">Response within 24 hours</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-2xl md:col-span-2">
              <span className="material-symbols-outlined text-on-tertiary-container text-3xl mb-4">location_on</span>
              <h3 className="text-xl font-bold font-headline text-primary-container mb-2">Office</h3>
              <p className="text-on-surface-variant">1200 Architecture Way, Suite 100</p>
              <p className="text-on-surface-variant">Design District, NY 10012</p>
            </div>
          </div>

          <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI0xdnu4iUsGCelAg9YHzLOIPuObEaBo0qMWy3zoB0JZtE4bB3aruLpWnZMPk3WaAxi0cFJMgt7xN5VFMobuW8ZA7MqwLSUD8kDIn06lyaYY_kYoTQMTT9Ou6C7AZi-MZBxjlW5Rggd18eiL3u-RqLQpYxpoLVoy7FzkL-2sIl7flEbFH0Ku_i869RE6ANKjFIM9nl_lf2WZMm4d2GLotqbTpbhagCXGZm2Lned8pXrn-ogA2MDBPLvTZrE1Zr1HdJQMZ_mJSg"
              fill
              className="object-cover"
              alt="Map"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-xl border border-outline-variant/10">
          <h2 className="text-3xl font-bold font-headline text-primary-container mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                <input className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl px-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                <input className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl px-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all" type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
              <input className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl px-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
              <textarea rows={4} className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl px-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-on-tertiary-container text-white py-5 rounded-2xl font-headline font-bold text-lg shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
