import Link from 'next/link';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden rounded-t-3xl border-t border-slate-200/20 bg-white/90 backdrop-blur-md shadow-[0_-10px_30px_rgba(16,26,56,0.08)] flex justify-around items-center h-16 px-6 pb-safe">
      <a className="flex flex-col items-center justify-center text-red-600 font-bold" href="tel:5550123456">
        <span className="material-symbols-outlined">call</span>
        <span className="font-body font-medium text-[11px]">Call Now</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-500 active:bg-slate-100" href="#">
        <span className="material-symbols-outlined">chat</span>
        <span className="font-body font-medium text-[11px]">WhatsApp</span>
      </a>
    </nav>
  );
}
