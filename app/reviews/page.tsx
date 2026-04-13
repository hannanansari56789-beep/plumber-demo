import Image from 'next/image';

export default function Reviews() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section: Editorial Header */}
      <header className="relative mb-20">
        <div className="max-w-3xl">
          <span className="text-on-tertiary-container font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Trust & Excellence</span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter text-on-surface leading-[1.1] mb-8">
            Voices of <br />Precision.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl">
            Discover how our architectural approach to plumbing has transformed homes and commercial spaces across the region.
          </p>
        </div>
        {/* Floating Service Badge */}
        <div className="hidden lg:flex absolute top-0 right-0 items-center gap-4 p-6 rounded-2xl glass-nav shadow-[0px_20px_40px_rgba(16,26,56,0.06)] border border-white/20">
          <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-on-tertiary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
          <div>
            <div className="font-headline font-bold text-lg">4.9/5 Rating</div>
            <div className="text-xs uppercase tracking-wider text-on-surface-variant">Based on 500+ Reviews</div>
          </div>
        </div>
      </header>

      {/* Bento Grid Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {/* Featured Review - Large Bento */}
        <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-[0px_20px_40px_rgba(16,26,56,0.06)] relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex gap-1 mb-6 text-on-tertiary-container">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <h3 className="font-headline font-bold text-2xl md:text-3xl text-on-surface mb-6 leading-tight">
              &quot;The level of detail in their pipe layout is something I&apos;ve only seen in architectural blueprints. Truly high-end work.&quot;
            </h3>
            <div className="flex items-center gap-4">
              <Image 
                className="w-14 h-14 rounded-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSDsQFGmMn_LrDIghrZAySVaNollD_U9JTlnY1m9Ue9HUtVFMp94kI0M_mlJnXzv6yZMrMtHH6mQAkupnFQvGDPOnQwFNlwXxFGtgiXTYfvjBYt9rsYvQoxURT4yd00M7sb0TN_nzUmceTxv5bDy3EcYE1M9Kkpzxh_7nukDjOCgCp8M4leqNmD2bmyrVDZm_s0O5MgrTP-0m35s_IiCWQ7Mfp_cJ4Rs0iH8uO-in7ak4gs4xfSndeDQcrW5GCUm01AlZak-BS"
                width={56}
                height={56}
                referrerPolicy="no-referrer"
                alt="Julian V."
              />
              <div>
                <div className="font-bold text-on-surface">Julian V.</div>
                <div className="text-sm text-on-surface-variant">Lead Architect, Westside Studios</div>
              </div>
            </div>
          </div>
          <span className="absolute top-8 right-8 material-symbols-outlined text-surface-container-highest text-8xl opacity-30 select-none">format_quote</span>
        </div>

        {/* Standard Card 1 */}
        <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex gap-0.5 mb-4 text-on-tertiary-container scale-90 origin-left">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-8 italic">
              &quot;Cleanest installation I&apos;ve ever seen. They didn&apos;t just fix the leak; they redesigned the manifold to be more efficient.&quot;
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-white font-bold text-xs">SM</div>
            <div>
              <div className="font-bold text-sm">Sarah Miller</div>
              <div className="text-xs text-on-surface-variant">Residential, Lake View</div>
            </div>
          </div>
        </div>

        {/* Standard Card 2 */}
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_20px_40px_rgba(16,26,56,0.06)] flex flex-col justify-between border border-outline-variant/10">
          <div>
            <div className="flex gap-0.5 mb-4 text-on-tertiary-container scale-90 origin-left">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              &quot;Their emergency response was professional and incredibly fast. The price was transparent from the start.&quot;
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image 
              className="w-10 h-10 rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnD6u_airv2suuQMfg4dKw1b6IFuinMZADrygnxtIWIbM0TfhkPzPotegecS1NEnvpAjbk8gzsDow27W1zpwlrllBXY5ok30DaNYLP5qD-rDOmHLD5O3StUo4lepkiJ-NZVR2ABwOKEp5MCIL1HzRe7IpCIYS5jHzY58ZFgNrfa9LPd6HJ1s1K2_nJI_ydo6-dhW0XtsrTwcFxLzU5jddTdeQoQ99tjS09ZnmCH9lXlMWYKv8M5RXmeDxnRiEsJFszfImMPVeU"
              width={40}
              height={40}
              referrerPolicy="no-referrer"
              alt="David Chen"
            />
            <div>
              <div className="font-bold text-sm">David Chen</div>
              <div className="text-xs text-on-surface-variant">Owner, Blue Bottle Cafe</div>
            </div>
          </div>
        </div>

        {/* Visual Break: Editorial Image */}
        <div className="relative rounded-xl overflow-hidden min-h-[300px]">
          <Image 
            className="absolute inset-0 w-full h-full object-cover brightness-75" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj5TEOctU_4x8H1xDfl5rtgdFCxuijnV2RPKd1tY5xWLyz3RnXuntvcIq4OOABnB3zFPHSfsuHPyb9x6Pvuy_lFCEh13j-2SB4KkYU2Ey8G8QoL14GIzSCbU2SWNmlg_VlQT2AwZWh2R7RRfVigaJDeMGk34pLZgWv1-xWsH82UPXH2aSd7b5sc1i6EJHhVPtJl5OQf17wS2Vzt4IYF9jk-lgEfzO7bHRMSPm33EHkCG5YKhfnsbLu00SBzoz68QWkFUKjScrp"
            fill
            referrerPolicy="no-referrer"
            alt="Standard of Pipework"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent flex flex-col justify-end p-8">
            <span className="text-white/60 uppercase text-[10px] tracking-widest mb-2">Our Standard</span>
            <h4 className="text-white font-headline font-bold text-xl">The Gold Standard of Pipework</h4>
          </div>
        </div>

        {/* Standard Card 3 */}
        <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex gap-0.5 mb-4 text-on-tertiary-container scale-90 origin-left">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-8 italic">
              &quot;Finally, a plumber who treats your home like an art gallery. No mess, no fuss, just perfect results.&quot;
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xs">RK</div>
            <div>
              <div className="font-bold text-sm">Robert K.</div>
              <div className="text-xs text-on-surface-variant">Modernist Estate Owner</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-primary-container rounded-3xl p-12 md:p-20 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">Share Your <br />Experience.</h2>
          <p className="text-white/70 text-lg mb-8 max-w-md">Your feedback drives our architectural standard. Join our community of satisfied clients and tell us how we did.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-on-tertiary-container text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:translate-y-[-4px] transition-all shadow-[0px_20px_40px_rgba(16,26,56,0.06)]">
              Leave a Review
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
              View More Stories
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          {/* Overlapping cards for editorial feel */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl transform rotate-3 translate-x-12 translate-y-8 shadow-[0px_20px_40px_rgba(16,26,56,0.06)]">
            <div className="flex gap-1 mb-3 text-on-tertiary-container">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div className="text-white font-medium italic">&quot;Exceptional care taken with our 1920s restoration project.&quot;</div>
          </div>
          <div className="bg-white p-8 rounded-2xl transform -rotate-3 shadow-[0px_20px_40px_rgba(16,26,56,0.06)] relative z-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-on-tertiary-container"></div>
              <div className="font-bold text-sm">Join the Conversation</div>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-surface-container-highest rounded-full"></div>
              <div className="h-2 w-5/6 bg-surface-container-highest rounded-full"></div>
              <div className="h-2 w-4/6 bg-surface-container-highest rounded-full"></div>
            </div>
          </div>
        </div>
        {/* Metallic Sheen Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      </section>
    </main>
  );
}
