import Image from 'next/image';

export default function Services() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-20 text-center md:text-left relative">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-label text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
          Precision & Excellence
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tight leading-none mb-6">
          Our Plumbing <br /><span className="text-on-tertiary-container">Services</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
          Elevating utility to architecture. We provide sophisticated plumbing solutions for discerning residential and commercial properties.
        </p>
      </header>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        {/* Leak Repair (Large) */}
        <div className="md:col-span-8 group bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(16,26,56,0.06)] transition-all duration-500 hover:-translate-y-2 relative">
          <div className="aspect-[16/9] overflow-hidden relative">
            <Image 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALojAczG2iulz5YUqaSpCeQuOc--PRLh8LKistqDj1p7IPRq_N2CqaruUqJ074phR2Q59crWRrspura6KUdcMIxZhIi3xzSWvIUarh8IH9m1Akg2pxIPX25rf5oHJTiC-NZLvoUYsp9sGWocVXwcVmP7LVZEv4Ka8DRAKihen942B6bjukfzk2ht4bfzm2_nQsTlIyn-7ol-PhhV_knriMrQ2XEiV8ptJuQknMs8zaWZndLY05V50IYzNcgBXki4NjVVF8HjLI"
              width={1200}
              height={675}
              referrerPolicy="no-referrer"
              alt="Leak Repair"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-headline font-bold mb-2">Leak Repair</h3>
              <p className="text-on-primary-container/90 max-w-md">Precision diagnostics and invisible repairs for premium infrastructure.</p>
            </div>
          </div>
          <div className="p-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
              <span className="text-sm font-label font-bold uppercase tracking-widest text-on-surface-variant">24/7 Priority Support</span>
            </div>
            <button className="bg-primary-container text-white px-8 py-3 rounded-xl font-headline font-bold text-sm tracking-wide transition-all group-hover:bg-on-tertiary-container">
              Request Service
            </button>
          </div>
        </div>

        {/* Pipe Installation (Small) */}
        <div className="md:col-span-4 group bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(16,26,56,0.06)] transition-all duration-500 hover:-translate-y-2">
          <div className="aspect-square relative overflow-hidden">
            <Image 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjGqtUYYxeAhmhZ_zK1qxoMrVNIFmxp0XkkjTtBWDszOXhD-GRI4p_FKWkb1fi6eSV41GdGXyQE6vt05h6mINuNrFnVmfo2h8uwY706gXD61EATxN-PRrwgqtSe-mcVNzZM6HOqEnPfMd7hVm0vagzjxKcRguquSY_jY-4KP4Ts8ITh9TBDK9CPX3fBXM2e9ZF6o3IWwOlr4RO-NJBCt9xffQvIB-0SR8G6nT-c9Ch3lkYFOqJxUNKSiki4sbQFdkGx0epzP3f"
              width={600}
              height={600}
              referrerPolicy="no-referrer"
              alt="Pipe Installation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-headline font-bold mb-3">Pipe Installation</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Structural piping solutions using medical-grade materials and laser-aligned precision.</p>
            <button className="w-full border border-outline-variant/30 py-3 rounded-xl font-headline font-bold text-sm hover:bg-primary-container hover:text-white transition-colors">Details</button>
          </div>
        </div>

        {/* Drain Cleaning */}
        <div className="md:col-span-4 group bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(16,26,56,0.06)] transition-all duration-500 hover:-translate-y-2">
          <div className="p-8 flex flex-col h-full">
            <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center mb-6 group-hover:bg-on-tertiary-container/10 transition-colors">
              <span className="material-symbols-outlined text-on-tertiary-container">cyclone</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">Drain Cleaning</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">Hydro-jetting technology to restore flow without damaging delicate architectural finishes.</p>
            <div className="relative w-full h-40 mb-6 overflow-hidden rounded-xl grayscale hover:grayscale-0 transition-all duration-500">
              <Image 
                className="object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3RksfTfdXcYDE8qKZlTHMWvCwaJs7Anc7i3xUsC7aFuAIDOu03daEC5zW5Bu6LveRBkCPi9ASl87fTDL7ewBNPsYesQfy3i7-UNbvBpmKUprQWSfGLHdH_1fhbCa3ax5SjWsYzG0HXH4tEmgaj1Z3uqKKP22-t_pFB4YMNl7dHAedUqujVYjSB1Ui2yb4Lo-XZcJVagMhem_neNyBITw3ncD-CczOapCmzP4IFAATc6b0hWL3KBVMyZYeG7PWCVsfpuIPkWrr"
                fill
                referrerPolicy="no-referrer"
                alt="Drain Cleaning"
              />
            </div>
            <button className="text-on-tertiary-container font-headline font-bold text-sm flex items-center gap-2 group">
              Book Now <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Bathroom Fittings */}
        <div className="md:col-span-4 group bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(16,26,56,0.06)] transition-all duration-500 hover:-translate-y-2">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDy3KiE38kkzRJtKuQcdZVXcW8HOu9xUNbVC6EZhRXC2l5yJInJ_LZ9y5IWDHmprN9J1kSklpm3fMrTLuQ2Cj89_LyKiXvjmTOIzST92fXJ8KAyNXJFo7KRXJErfvn4gvUNKLp9ENDhwpCvKbHpmQAq68uaaA-sq4dbObLcbborkslgAwtcbsKR1pz2yzDKpsmdF9XUCuFgBxdm1I57Cd_Kw-Z5qUjCHLB7r3k4sNrPDGdj0g4plOThbY4xcO4V6PwgIV-kW_l"
              width={600}
              height={450}
              referrerPolicy="no-referrer"
              alt="Bathroom Fittings"
            />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-headline font-bold mb-3">Bathroom Fittings</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">White-glove installation of boutique hardware and smart-home integrated water systems.</p>
            <button className="w-full bg-surface-container-low py-3 rounded-xl font-headline font-bold text-sm hover:bg-primary-container hover:text-white transition-colors">View Catalog</button>
          </div>
        </div>

        {/* Water Tank Cleaning */}
        <div className="md:col-span-4 group bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(16,26,56,0.06)] transition-all duration-500 hover:-translate-y-2">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary-container">sanitizer</span>
              </div>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Hygiene Pro</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">Water Tank Cleaning</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Certified sterilization and filtration maintenance for pure, architectural-grade water supply.</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-xs">check_circle</span> UV Sterilization Included
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-xs">check_circle</span> Multi-stage Filtration
              </div>
            </div>
            <button className="w-full bg-on-tertiary-container text-white py-3 rounded-xl font-headline font-bold text-sm shadow-lg shadow-red-500/20 active:scale-95 transition-transform">Schedule Now</button>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <section className="relative bg-primary-container rounded-[3rem] p-12 md:p-20 overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBd1eZ2j9iwDsPURIsU_qaabEShXxMINQI-21fLzEhOkHBN0UnvOkPoZUME3xFVZeIiOb_pzskpeuN-9x1yaGijHiPWMr1rbtq7_jUs6Kbjj-G_ptgLoMG9iqJL0GOvjasol1n6Av1sEbsD5eLQ9_q7Fqbe0sfFlODiRzIqjzq-aDtNiXkkcE-_84381EIBhRifWr9Jd8xxkJxJS2wGhaDigYeVIeQyJj8ortNxDT1LLZJAJ5coi4LYTDzQhFgLK5EL6HZwNNIn')" }}></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6 leading-tight">
              Experience Precision <br />Engineering
            </h2>
            <p className="text-on-primary-container text-lg mb-10 max-w-md">
              Every system we design and maintain follows rigorous architectural standards. Contact us for a bespoke service consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-on-tertiary-container text-white px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl shadow-red-500/30">
                Get Custom Quote
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
                Consultation
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 w-full max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-on-tertiary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">verified</span>
                </div>
                <div>
                  <h4 className="text-white font-headline font-bold">Premium Guarantee</h4>
                  <p className="text-on-primary-container text-xs">Architectural grade standards in every task.</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="material-symbols-outlined text-xs text-on-tertiary-container">done_all</span> Specialized Tooling Technology
                </li>
                <li className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="material-symbols-outlined text-xs text-on-tertiary-container">done_all</span> Non-Invasive Diagnostic Methods
                </li>
                <li className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="material-symbols-outlined text-xs text-on-tertiary-container">done_all</span> Licensed Master Plumbers Only
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
