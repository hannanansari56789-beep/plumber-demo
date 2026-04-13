import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-2xl font-bold text-slate-900 font-headline tracking-tighter">
            PlumHub
          </div>
          <p className="text-slate-500 font-body text-sm leading-relaxed">
            Defining excellence in plumbing through architectural precision and rapid, reliable response.
          </p>
        </div>
        <div>
          <h4 className="font-headline font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Our Services</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200 font-body text-sm block" href="/emergency">Emergency Services</Link></li>
            <li><Link className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200 font-body text-sm block" href="/services">Leak Detection</Link></li>
            <li><Link className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200 font-body text-sm block" href="/services">Water Heaters</Link></li>
            <li><Link className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200 font-body text-sm block" href="/services">Pipe Repair</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200 font-body text-sm block" href="/about">About Us</Link></li>
            <li><Link className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200 font-body text-sm block" href="/contact">Contact Us</Link></li>
            <li><Link className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200 font-body text-sm block" href="#">Privacy Policy</Link></li>
            <li><Link className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200 font-body text-sm block" href="#">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Emergency 24/7</h4>
          <div className="flex items-center gap-4 text-red-600 mb-4">
            <span className="material-symbols-outlined">call</span>
            <span className="font-headline font-bold text-xl">(555) 012-3456</span>
          </div>
          <p className="text-slate-500 text-sm">Call us anytime, our team is always ready for emergency repairs.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm font-body">© 2024 PlumHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
