import Image from 'next/image';

export default function About() {
  return (
    <main className="pt-28">
      {/* Hero Section / Editorial Intro */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-on-tertiary-container font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Established 2014</span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-container leading-[1.1] tracking-tight mb-8">
                The intersection of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-tertiary-container to-secondary">Precision & Design.</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
                We don&apos;t just fix pipes; we engineer fluid systems for the modern architectural masterpiece. Our approach combines rigorous technical skill with an aesthetic eye for high-end residential infrastructure.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-20">
                <Image 
                  alt="Luxury Bathroom Installation" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMx8EEpSz6_SEGuYQTRQtcxqC5M9RBn5xElTJV1523JvNyr4QaIjpHHAky-POLQ8_7fgiqkbP7qKjlefeupWNuOv6bFFyId-uK0MCiep29QUH5dxGliuy7RdenCJHimkUW6dRNx5VkS9ZbTnO2lizkuySMdMKJOzSh7X6NYZqPXrgg4NtiTyAMOo-AL-IU8-VB9A2jGo9i_RxK7JEhcLJHmGsyGwP8SwAaE4rrqZyVLjVIFjwDvfzKERzzcbCJ2T8PCgcYelKv"
                  width={600}
                  height={750}
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Overlapping Glass Card */}
              <div className="absolute -bottom-10 -left-10 md:-left-20 bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl max-w-[280px] z-30 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-on-tertiary-container text-3xl">verified_user</span>
                  <span className="font-bold text-primary-container uppercase tracking-tighter">Certified Master Plumbers</span>
                </div>
                <p className="text-sm text-on-surface-variant">Setting the gold standard for residential and commercial hydraulic engineering.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -z-10 skew-x-[-12deg] translate-x-20"></div>
      </header>

      {/* Experience Stats */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-headline font-extrabold mb-2">10+</div>
              <div className="text-on-primary-container uppercase tracking-[0.2em] text-xs font-bold">Years of Mastery</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-headline font-extrabold mb-2">1000+</div>
              <div className="text-on-primary-container uppercase tracking-[0.2em] text-xs font-bold">Premium Projects</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-headline font-extrabold mb-2">15+</div>
              <div className="text-on-primary-container uppercase tracking-[0.2em] text-xs font-bold">Design Awards</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-headline font-extrabold mb-2">24/7</div>
              <div className="text-on-primary-container uppercase tracking-[0.2em] text-xs font-bold">Expert Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container/10 text-on-tertiary-container text-xs font-bold uppercase tracking-widest">
                Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary-container">Integrity in every <br />fitting, beauty in every line.</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  PlumHub was founded on the belief that the vital systems of a home should be treated with the same reverence as its facade. We saw a gap in the market: where traditional plumbing focused only on function, modern architecture demanded a partner who understood the nuances of luxury materials and invisible integration.
                </p>
                <p>
                  Our journey began in the high-stakes world of commercial development, where we mastered the complexities of large-scale water management. Today, we bring that industrial-grade precision to the most exclusive private residences.
                </p>
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg relative">
                  <Image 
                    alt="Technical Blueprint" 
                    className="object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4FU8lTLclu--14ncbhZHGKCdAtwYsbAXnvVa2zaP-QV7QFRXDAHs8xms-cSEOkUXus84rFEa9APwxD4NgxFs6QG_btAabrjgnz3fJ1Q0wc0YhWPjph7YH0zQVeP3B6eSTfbbii0RKO_SnISHlNDDp7TN9eSz5ys6DexN7UKnLEASon9FMkSQQbPP7xSt_iX6X6cHb53CUqx31ToPqkMQCLezK3EAaYwkeo2UeTiXfvMIXW6Klcfh4lHFqQGALjETqAjiV1QAs"
                    fill
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg relative">
                  <Image 
                    alt="High End Construction" 
                    className="object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC444QUkWaMk4md81RUSWbqED5ZfoF5I8NctEHctViUfUoqLZoiir2qfYNh9eUAQMbhX4ar9hQxIGH6BzMOBLxkj73vxl1UbEgP7ZtvlNzRA0qhxbv9pUgBjmZlLuRxeFdEYk8eD0Hok2c9hEavwXa1NK7GyrLO5yRjbnMAsHwA5ji1rEEakRY5LBpsd_ZFGIoikp_iNeAGUjNYTIHkp2ngoKKFnga79abdKg99AmTEZnLNRHr6WUkBlJKfFyCD26Avi-wwPrNS"
                    fill
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg relative">
                  <Image 
                    alt="Expert Craftsmanship" 
                    className="object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGUJqoAiIz5NHGZ0_hR3oCbt7ZHY5bDo-iV35xdFK6nj87nUmOwLwRbCw_pb8ei4U4NRK4_7idXsoKlwTYAvAXMUe5vK0Hy6wZ6Ri4ubHmELcxsf-wjT0oZRpiZQf-d8o_4-3QiXd5Y4pYVtWxiqox1LBX-4gBMy4hLNTe-65nhFcAUZrIBiA2MC_W9rdZO4ZsY4IoAa_k7R5jwyCCvTsGmnYnsVKWiDG5xBm-Bt0mHGtLeEQ86Chdu2MnCK8CpVqcWpSKssgx"
                    fill
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg relative">
                  <Image 
                    alt="Quality Finishes" 
                    className="object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHL-5a_mtJ_ciNWyi_qoZKrj8uP8GQUNXDINgpwz7nMEjjQComddiIoVXjU7RP5B_5qac-8m_85SAuSqqaB6fiVOkRjckTfAkfNMvzCzBp8gaCqHGps5AKqrOwToM8kujDWnYyElf1jKaVoDd_4Fu8Ql2Arh3JrUKiCf8-lQw9y7gF98jHPZpv8o0KWkP6JYkUcFKuqlz787Jn5SJwU2K5X_i3r-wrOoy3yVVUp1XwdaAoUyuKX4mlHdMSBzRe44DjKsVXLHx"
                    fill
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team (Editorial Grid) */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-on-tertiary-container font-medium tracking-[0.2em] uppercase text-xs mb-4 block">The Experts</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary-container">Architects of Flow</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm mb-2">Our team is comprised of industry veterans who blend traditional apprenticeship knowledge with modern technological expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 relative">
                <Image 
                  alt="Founder" 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgAz1_dmxTUBbK8SMNUUO1fBWQVZNGvg55cOcWotn4Rbgiqp2e0LBNTUZyMHgAlDfs25z5QP1lApgvOPacW7hp8vwE6UoT12dNEkfD0ykbq-vkDGIz0PIH8hVTRL0l9PvYE7zj3_Oo6hX808rWVEBpo0qMvBErUZwA6zimPZyYvbESoHk4npbkexcgWIf-vu598ZDJWsG0s-iRtD_nyH1VtKyprHtiZoB9mBlrS4LIeRMz8IH-OZc_f7-k2hoOdv_y0ipRtZR"
                  fill
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container">Julian Thorne</h3>
              <p className="text-on-tertiary-container text-xs font-bold uppercase tracking-widest mb-2">Founder & Lead Engineer</p>
              <p className="text-on-surface-variant text-sm">20 years of experience in luxury residential hydraulics and system design.</p>
            </div>
            {/* Team Member 2 */}
            <div className="group">
              <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 relative">
                <Image 
                  alt="Operations Manager" 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHirTn3TsTemz7W50_ysn1jvA-blwTOBGyq8bzZTmdi5HEBhSkrZN6QRbMTBzrbRjikPI8d9bZa9ip2WdUY-nTZe4QMEQyDYod12AH7eo7GLMrhiIPhNjy5F9BWOu2Zd1f3DVwiwL1I-5EKuhN9suvmFmWKDDdP6KCSPpTZyEqS1ZcMwsJEf0yimqYHQ_UYYa8Dq8fhIyIQDuSGsm5y5qyEp8mwbaI3M5mCcCouKQmS8yrn-PC-yrQEbJJS8Lv4yJauR4Y_0G2"
                  fill
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container">Elena Vance</h3>
              <p className="text-on-tertiary-container text-xs font-bold uppercase tracking-widest mb-2">Operations Director</p>
              <p className="text-on-surface-variant text-sm">Ensuring every project meets our rigorous architectural standards and timelines.</p>
            </div>
            {/* Team Member 3 */}
            <div className="group">
              <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 relative">
                <Image 
                  alt="Master Plumber" 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1yhHjkTq6nzh7UAL-qzzTaxPzU4l8KMnYMFyB-uF6AnK7t8uPeMBL6wBw0DDdRIbr-L5tJsGR8Do7VaF9dM3XU0Tv00_O7qhJ4rTP8Gfs8OuWiuWHnF71bRFFGIjmQzJC8bX9gQR87NDmv1nddL7Rk6GPIqwl4Gu9ULbtk9hO49NyenKz6VtEQ7kSKZJwtGCKohegnTJWVFHYchaQi0s-94xvN20gWZPjTYLW6sbigHL4z7lQ7PsP7A-14AV4AhuA95IPXnws"
                  fill
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container">Marcus Chen</h3>
              <p className="text-on-tertiary-container text-xs font-bold uppercase tracking-widest mb-2">Senior Technician</p>
              <p className="text-on-surface-variant text-sm">Expert in complex filtration and smart-home integrated water systems.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
