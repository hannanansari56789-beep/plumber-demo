import Image from 'next/image';

export default function Booking() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-on-tertiary-container/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-2xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-primary-container mb-3 block">Premium Experience</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-container tracking-tight mb-4">
            Schedule Your <span className="text-on-tertiary-container">Precision</span> Service
          </h1>
          <p className="text-on-surface-variant max-w-md mx-auto text-lg">
            Experience architectural-grade plumbing maintenance tailored to your schedule.
          </p>
        </div>

        {/* Centered Clean Card (The Form) */}
        <div className="bg-surface-container-lowest rounded-[2rem] shadow-[0px_40px_80px_rgba(16,26,56,0.08)] p-8 md:p-12">
          <form className="space-y-8">
            {/* Name & Phone Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant ml-1">Full Name</label>
                <input className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl px-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Julian Anderson" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant ml-1">Phone Number</label>
                <input className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl px-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all placeholder:text-slate-400" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant ml-1">Service Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container text-xl">location_on</span>
                <input className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all placeholder:text-slate-400" placeholder="Street address, City, Zip" type="text" />
              </div>
            </div>

            {/* Service Type & Date Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant ml-1">Service Type</label>
                <select className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl px-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all appearance-none cursor-pointer">
                  <option>General Inspection</option>
                  <option>Architectural Fitting</option>
                  <option>Leak Detection</option>
                  <option>Water Heater Premium</option>
                  <option>Pipe Architecture</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant ml-1">Preferred Date</label>
                <input className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl px-5 py-4 focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container outline-none transition-all cursor-pointer" type="date" />
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-4 space-y-6">
              <button className="w-full bg-on-tertiary-container text-white py-5 rounded-2xl font-headline font-bold text-lg shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all" type="submit">
                Confirm Booking
              </button>
              <div className="flex items-center justify-center gap-8 pt-4">
                <a className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors font-medium text-sm" href="#">
                  <span className="material-symbols-outlined text-green-600">chat</span>
                  WhatsApp
                </a>
                <div className="w-px h-4 bg-outline-variant/30"></div>
                <a className="flex items-center gap-2 text-slate-600 hover:text-on-tertiary-container transition-colors font-medium text-sm" href="tel:1234567890">
                  <span className="material-symbols-outlined text-on-tertiary-container">call</span>
                  Call Now
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Trust Badge Overlay */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white/50 backdrop-blur-xl px-6 py-3 rounded-full flex items-center gap-4 shadow-sm">
            <div className="flex -space-x-2">
              <Image 
                className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpsPsmtZe8VnpwkKBSSksxsa6xGhVZSRrIb1FT3eBQuz5HFPjzTojJ6J3Lc2ZBjIM6UTDAWWsOaRn4ICCA7D_VicANut3AVqHGPtMVm2xsruS6X6c6PmHfT05IppmTOjZ0LlUGB7sLACOBvACRnlrNe4i7P8NqLOlR6VEDOJOAiWTOUjYBnwFjmi36DoKLANXKQuj_aLe22CMsTXKj3-rcxCbhyYqafqsqzRvQHQm_cq8Ryt29H5tjLtTFbnIOWOnQ7xevrXYy"
                width={32}
                height={32}
                referrerPolicy="no-referrer"
                alt="Technician 1"
              />
              <Image 
                className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQRbVPu47mwhkOW__geJDnM1yDngN5m4SJYovsd_RuoaOo-nuVeVpFP5NT0M0H6JGH4zWFGqscpKkd2biorbvQ9poVdYwW_5i6g8md6iv8zKun7ruH33_UIWgV0c0CG5jYZzPb_G2oPSYW3S0IsVaSk_WXi_DOvUQNajMeXHMegFfi_5iZR8fSGo5CxAnU0Zkzhm0Lonh-VI9eWExIrC-NIfc2AoLhz4svuoUQTDNOWGCkIOhMWiNtz2aCXh-bNhq9vQ5cLBaB"
                width={32}
                height={32}
                referrerPolicy="no-referrer"
                alt="Technician 2"
              />
              <Image 
                className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5ojW9pBvYVCcZiu9z9ZHSzfWkHx613ZaVJDluH6bJiTOQkyfFSn3HfEdAbcg2QBxzwXrz-7ymCnvXGPGyclqnM9cvMF3tw3-XbAbF7NM1N_yyn6F3eP5uj7A0J74UkLgVJ3XDTVmQD-9s4VDXiHIXkKe4a4jQMrFtN87EePYhRGpr_nHYtvCXi9eaWKNPm6cc77rCvefjamARXqnrn_4x4NyZWYdb-PvEt9Gx6uY0oTzfbHthXtDBkYyqVSv1LuXlIULhgsWF"
                width={32}
                height={32}
                referrerPolicy="no-referrer"
                alt="Tool"
              />
            </div>
            <span className="text-xs font-semibold text-primary-container">Certified Technicians Available Today</span>
          </div>
        </div>
      </div>
    </main>
  );
}
