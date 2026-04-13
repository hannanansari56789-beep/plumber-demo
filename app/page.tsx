import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 py-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest rounded-full">Premier Quality</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline text-primary-container leading-[1.1] mb-6 tracking-tight">
              Fast, Reliable Plumbing <span className="text-on-tertiary-container">Services You Can Trust</span>
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              24/7 Emergency • Certified Experts • Instant Booking. We treat your home with the architectural precision it deserves.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/booking" className="bg-on-tertiary-container text-white px-8 py-4 rounded-xl font-headline font-bold text-base shadow-lg shadow-on-tertiary-container/20 hover:-translate-y-1 transition-all">
                Book Now
              </Link>
              <a href="tel:5550123456" className="border-2 border-primary-container text-primary-container px-8 py-4 rounded-xl font-headline font-bold text-base hover:bg-primary-container hover:text-white transition-all text-center">
                Call Now
              </a>
            </div>
            <div className="flex gap-8 items-center pt-8 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline text-primary-container">⭐ 4.9</span>
                <span className="text-xs text-on-surface-variant uppercase tracking-widest font-medium">Customer Rating</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline text-primary-container">500+</span>
                <span className="text-xs text-on-surface-variant uppercase tracking-widest font-medium">Jobs Completed</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] hidden md:block group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/40 to-transparent z-10 rounded-3xl"></div>
            <Image 
              alt="Plumbing Expert" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYHIVxWMkkBCO5cXfzbgdmMp24CCuQRkLoSTGXG22-qx91lZYMEf-5K6xdckGnIb40AEXvB4xMT6Gj4hkDGi2cfqeZXq_pOWJlAyYNrmwDzXvqKMUFMnivgOpYcTEhLkXZcFA_FOpwzKZyerQXrC7x7eGStXgG3KQ6o4uTEXlI6NmKahv4pC0JIC5vUIKtmUMNnHgg9JdfA6ldzCABq0PBLfO4RKMWDiX1vHeMeE6P5RrrGx3iNas91o8QkJ65UwmrWOEval-1"
              width={800}
              height={600}
              referrerPolicy="no-referrer"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl z-20 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-on-tertiary-container p-3 rounded-full text-white">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tighter text-on-surface-variant">Guaranteed Service</p>
                  <p className="text-sm font-bold text-primary-container">Certified Professionals Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-container mb-4">Precision Plumbing Solutions</h2>
            <p className="text-on-surface-variant">High-end care for every pipe, fixture, and drain. We combine modern technology with classic craftsmanship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(16,26,56,0.06)] hover:-translate-y-2 hover:ring-1 hover:ring-secondary-container/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-on-tertiary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">leak_remove</span>
              </div>
              <h3 className="text-xl font-bold font-headline text-primary-container mb-3">Leak Detection</h3>
              <p className="text-on-surface-variant leading-relaxed">Advanced sonic and thermal imaging to find hidden leaks before they damage your structure.</p>
              <Link className="mt-6 inline-flex items-center text-on-tertiary-container font-bold text-sm uppercase tracking-widest gap-2" href="/services">
                Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Service 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(16,26,56,0.06)] hover:-translate-y-2 hover:ring-1 hover:ring-secondary-container/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-on-tertiary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">water_heater</span>
              </div>
              <h3 className="text-xl font-bold font-headline text-primary-container mb-3">Water Heaters</h3>
              <p className="text-on-surface-variant leading-relaxed">Installation and maintenance of tankless and high-efficiency solar water heating systems.</p>
              <Link className="mt-6 inline-flex items-center text-on-tertiary-container font-bold text-sm uppercase tracking-widest gap-2" href="/services">
                Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Service 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(16,26,56,0.06)] hover:-translate-y-2 hover:ring-1 hover:ring-secondary-container/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-on-tertiary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">construction</span>
              </div>
              <h3 className="text-xl font-bold font-headline text-primary-container mb-3">Pipe Repair</h3>
              <p className="text-on-surface-variant leading-relaxed">Expert replacement and repair of vintage plumbing using modern PEX and copper solutions.</p>
              <Link className="mt-6 inline-flex items-center text-on-tertiary-container font-bold text-sm uppercase tracking-widest gap-2" href="/services">
                Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-on-tertiary-container py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white animate-pulse">
              <span className="material-symbols-outlined text-3xl">emergency_home</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-white">Need urgent plumbing help?</h2>
              <p className="text-white/80">Our emergency units are on standby 24/7. Response within 60 minutes.</p>
            </div>
          </div>
          <Link href="/emergency" className="bg-white text-on-tertiary-container px-10 py-4 rounded-xl font-headline font-extrabold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">
            CALL NOW: (555) 012-3456
          </Link>
        </div>
        {/* Decorative circle */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-primary-container p-10 rounded-3xl text-white relative overflow-hidden">
              <span className="material-symbols-outlined text-5xl mb-6 text-on-tertiary-container">speed</span>
              <h3 className="text-2xl font-bold font-headline mb-4">Fast Response</h3>
              <p className="text-on-primary-container">We value your time. Our localized dispatch system ensures we&apos;re at your door in record time.</p>
            </div>
            <div className="flex-1 bg-surface-container-high p-10 rounded-3xl">
              <span className="material-symbols-outlined text-5xl mb-6 text-primary-container">payments</span>
              <h3 className="text-2xl font-bold font-headline text-primary-container mb-4">Affordable Pricing</h3>
              <p className="text-on-surface-variant">Premium service doesn&apos;t mean overpriced. Transparent upfront quotes with no hidden fees.</p>
            </div>
            <div className="flex-1 bg-surface-container-high p-10 rounded-3xl">
              <span className="material-symbols-outlined text-5xl mb-6 text-primary-container">award_star</span>
              <h3 className="text-2xl font-bold font-headline text-primary-container mb-4">Certified Experts</h3>
              <p className="text-on-surface-variant">Every technician is licensed, insured, and has undergone rigorous architectural plumbing training.</p>
            </div>
            <div className="flex-1 bg-surface-container-high p-10 rounded-3xl">
              <span className="material-symbols-outlined text-5xl mb-6 text-primary-container">schedule</span>
              <h3 className="text-2xl font-bold font-headline text-primary-container mb-4">24/7 Availability</h3>
              <p className="text-on-surface-variant">Leaks don&apos;t follow office hours. Neither do we. We&apos;re here for you every hour of every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form & Testimonial Mix */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Booking Form */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold font-headline text-primary-container mb-2">Instant Booking</h2>
            <p className="text-on-surface-variant mb-8">Secure your slot with our expert team today.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
                <input className="w-full bg-surface-container-highest/40 border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-on-tertiary-container focus:border-transparent outline-none transition-all" placeholder="John Doe" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Phone</label>
                  <input className="w-full bg-surface-container-highest/40 border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-on-tertiary-container focus:border-transparent outline-none transition-all" placeholder="(555) 000-0000" type="tel" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Date</label>
                  <input className="w-full bg-surface-container-highest/40 border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-on-tertiary-container focus:border-transparent outline-none transition-all" type="date" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Service Type</label>
                <select className="w-full bg-surface-container-highest/40 border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-on-tertiary-container focus:border-transparent outline-none transition-all">
                  <option>Emergency Repair</option>
                  <option>Leak Detection</option>
                  <option>Water Heater Installation</option>
                  <option>General Maintenance</option>
                </select>
              </div>
              <button className="w-full bg-on-tertiary-container text-white py-4 rounded-xl font-headline font-bold text-lg mt-4 shadow-lg hover:-translate-y-1 transition-all" type="submit">
                Book Service
              </button>
            </form>
          </div>
          {/* Testimonials */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold font-headline text-primary-container mb-12">Trusted by the Community</h2>
            <div className="space-y-6">
              {/* Testimonial 1 */}
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-4">
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-lg text-primary-container font-medium mb-6 italic">&quot;Absolutely professional. They fixed a leak that three other companies couldn&apos;t even find. The cleanup was so thorough, I didn&apos;t even know they were there!&quot;</p>
                <div className="flex items-center gap-4">
                  <Image 
                    className="w-12 h-12 rounded-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY5QYIMkuEx3PEgJmBTIr7T1EubPQqeqER_TooqKjqOjV3xr60Z2V8O6nvczk0EpbwSxAYUQCpwtXsNxHHLv_YaLksYLaxiuvrOuQze6elfa6d2HQ6sN63DJ6fUeSp6BeifPO3_XTo2zBP-67rIeS5SUFOlR5M_8W7El4VdfDiU8NBn8Ky2DqVuuXgjdmbxEauT_2WH4m2fGuFdBCdHmFncBxQjD_7vJs0bEyd0LH420qVtSLxBsuRjysEacefIB7DUvxI5YZ7"
                    width={48}
                    height={48}
                    referrerPolicy="no-referrer"
                    alt="Sarah Jenkins"
                  />
                  <div>
                    <h4 className="font-bold text-primary-container">Sarah Jenkins</h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Homeowner in West End</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-4">
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-lg text-primary-container font-medium mb-6 italic">&quot;The tankless water heater installation was seamless. They explained everything clearly and finished ahead of schedule. Highly recommend!&quot;</p>
                <div className="flex items-center gap-4">
                  <Image 
                    className="w-12 h-12 rounded-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdvFBn0A7WsrHKMz5KBOxqJPDijEJk9i1ySVDMitTjY4uEBPTBnj_cKjIqsHol-DwKqFlZ5Zv9l4O3GcrnNgFSzqRSPV4pDVBXtbMtYuWzrteCos__zLcUnd8VGY4-lqZId5ZzWnq727CdkogruhfLqILxds_dD5AJX8vo67MkY-PplqcsuK9wILmjo96JQHUiT8nda1wcL599qRnkVGnDZFR05NeH3-DGmxE21t0ZZBBMfKJl22JK09bY_OGLLqKyOOYRZKD"
                    width={48}
                    height={48}
                    referrerPolicy="no-referrer"
                    alt="David Richardson"
                  />
                  <div>
                    <h4 className="font-bold text-primary-container">David Richardson</h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Property Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
