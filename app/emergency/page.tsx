import Image from 'next/image';

export default function Emergency() {
  return (
    <main className="pt-28">
      {/* Hero Section: Emergency High Urgency */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-primary-container">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvYub1Dyf63URrH2pvIT5c5dXMmEu71Iz2TGxhm1tWhvW0dN-DZ8i8zD4TUDUUfrbtXuB122zAgTUyYqyV5-Mc2YktVAtd8_bfs1JdPKq5KX7GY6vibcadOesiBPG2NqLUwWvka3m1S2Kg0T1tNl9ke8Qlb4-GA410TgyKmo94NpCphq40i9KMbUPP6TsY3tkAHC5AKjTgKbST86QeTFyAXqdo9-WCeLJSPjfoZ20IVKy6Y1PbNu5SkpUA1L7dZKGsqzTmlyyg"
            fill
            referrerPolicy="no-referrer"
            alt="Emergency Plumbing"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <div>
            {/* Fast Response Badge & Live Indicator */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="inline-flex items-center px-4 py-1.5 bg-on-tertiary-container/10 border border-on-tertiary-container/20 rounded-full text-on-tertiary-container font-bold text-xs uppercase tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Live Availability
              </span>
              <span className="bg-tertiary-fixed-dim text-tertiary-container px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                Fast Response
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline text-white leading-[1.1] mb-6 tracking-tight">
              24/7 Emergency <br />
              <span className="text-on-tertiary-container">Plumbing Service</span>
            </h1>
            <p className="text-on-primary-container text-xl md:text-2xl font-light mb-12 max-w-xl leading-relaxed">
              We are available anytime, anywhere. Expert help arriving in <span className="text-white font-bold">30-60 minutes</span>. Your architectural integrity is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="inline-flex items-center justify-center bg-on-tertiary-container text-white px-10 py-5 rounded-xl font-bold text-lg shadow-[0_20px_40px_rgba(241,65,66,0.3)] hover:-translate-y-1 transition-all duration-300" href="tel:1-800-PLUMBING">
                <span className="material-symbols-outlined mr-2">call</span>
                Call Now
              </a>
              <a className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300" href="#emergency-list">
                View Issues
              </a>
            </div>
          </div>
          {/* Floating Editorial Card */}
          <div className="hidden lg:block relative">
            <div className="bg-surface-container-lowest/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-on-tertiary-container/20 rounded-full blur-3xl group-hover:bg-on-tertiary-container/30 transition-colors"></div>
              <div className="relative z-10">
                <h3 className="text-white text-2xl font-bold mb-6 font-headline">On-Site Within the Hour</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-on-tertiary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white">location_on</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Local Technicians</p>
                      <p className="text-on-primary-container text-sm">Dispatched from your immediate neighborhood.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-on-tertiary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white">shield</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Licensed & Bonded</p>
                      <p className="text-on-primary-container text-sm">Fully certified for premium residential repairs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-on-tertiary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white">verified</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Price Guarantee</p>
                      <p className="text-on-primary-container text-sm">Upfront pricing before we start any work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Issues: Bento Grid Layout */}
      <section className="py-24 bg-surface px-8" id="emergency-list">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <span className="text-on-tertiary-container font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary-container tracking-tight">Common Emergency Issues</h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-2xl">If you are experiencing any of these, don&apos;t wait. Further delay can lead to catastrophic structural damage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            {/* Bento Card 1 */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-primary-container h-64 md:h-auto">
              <Image 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh7Y1q7FB3i7l6fyPaZNe0dwfhxAeI2hhSxQDu29QWsWG_XBUf73_1BiFGMe3PcKRk35dSJ_rnzayUWKNTGFNmvCoFuV2RRYmYXALR6Irj5E16Tjj0gB0oyBiFxpwwhJGcX4Lh9cktX1tuQoqUpBPqJQ3Fe9L4i8JS-kZtvqZqdq6dApDRtQqd_tfrKI_ZZDiMydRlh--dp-liFYPk_jggAr_oQfaGZPiE_pujqwY-ujyrDIqy2l5F2tR5I_K5GSlDauhRffs1"
                fill
                referrerPolicy="no-referrer"
                alt="Burst Pipes"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-8">
                <h3 className="text-white text-3xl font-bold mb-2">Burst Pipes</h3>
                <p className="text-on-primary-container max-w-md">The most critical emergency. We provide immediate isolation and surgical replacement of compromised lines.</p>
              </div>
            </div>
            {/* Bento Card 2 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm h-64 md:h-auto">
              <div className="p-8 flex flex-col h-full">
                <span className="material-symbols-outlined text-on-tertiary-container text-4xl mb-4">water_drop</span>
                <h3 className="text-primary-container text-2xl font-bold mb-4">Severe Leaks</h3>
                <p className="text-on-surface-variant flex-grow">Invisible leaks behind walls can destroy foundations. We use thermal imaging to find them fast.</p>
                <div className="mt-4 flex items-center text-on-tertiary-container font-bold">
                  <span>Request Repair</span>
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </div>
              </div>
            </div>
            {/* Bento Card 3 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-high h-64 md:h-auto">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-primary-container text-2xl font-bold mb-2">Sewer Backup</h3>
                  <p className="text-on-surface-variant">Prevent biohazard risks with our rapid extraction and sanitation protocol.</p>
                </div>
                <div className="bg-white/50 p-4 rounded-2xl flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-container">warning</span>
                  <span className="text-xs font-bold text-primary-container">Urgent Attention Required</span>
                </div>
              </div>
            </div>
            {/* Bento Card 4 */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-primary-container h-64 md:h-auto">
              <Image 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrbVOFi0z6px2XW4Y6-6QexVM1_teEfCie8ep6lTb5M5h8j2KCe9FSznYVLkm97Mx04XHRKKzgYXXXcPaLGKZn3G4YWa9FOCeGbXOKRjc9MS4RGupYm81rJB2KSNqPPKommLYitXqfZcSMEyu16FLmgjdwFpQ3E6uXyjjncGupXCYWkquQLLBQib-7fIey30VQ8x51OemFtiUTK_ZbY4tu96lNb0V5DRXqV4MPZC-MTFLM9oBK_7tyW0c9e3JSO8g-DZNzsyaK"
                fill
                referrerPolicy="no-referrer"
                alt="Water Heaters"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 p-8 flex flex-col justify-center max-w-md">
                <h3 className="text-white text-3xl font-bold mb-2">Water Heaters</h3>
                <p className="text-on-primary-container">No hot water is more than an inconvenience. We repair and replace all premium brands 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Callout */}
      <section className="py-24 bg-on-tertiary-container text-white px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight">Emergency Specialist <br />En Route Now.</h2>
            <p className="text-white/80 text-xl mt-4">Average dispatch time for metropolitan areas is 22 minutes.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a className="bg-white text-on-tertiary-container px-12 py-6 rounded-2xl font-black text-2xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform" href="tel:1-800-PLUMBING">
              <span className="material-symbols-outlined text-3xl">call</span>
              1-800-PLUMBING
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
