'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoreVertical, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
      <nav className="flex justify-between items-center px-8 h-20 w-full max-w-7xl mx-auto glass-nav shadow-lg rounded-full border border-white/20 pointer-events-auto relative">
        <Link href="/" className="text-xl font-bold text-slate-900 tracking-tighter uppercase font-headline">
          PlumHub
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-all duration-300 font-headline tracking-tight uppercase text-sm font-bold",
                pathname === link.href
                  ? "text-red-600"
                  : "text-slate-600 hover:text-red-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Emergency Button */}
        <Link 
          href="/emergency"
          className="hidden md:flex bg-on-tertiary-container text-white px-6 py-2.5 rounded-full font-headline font-bold text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md shadow-red-500/20"
        >
          Emergency
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <MoreVertical size={24} />}
          </button>
        </div>

        {/* Dropdown Menu (Mobile Only) */}
        {isOpen && (
          <div className="absolute top-20 right-0 w-64 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "transition-all duration-300 font-headline tracking-tight uppercase text-sm font-bold p-2 rounded-xl hover:bg-slate-50",
                  pathname === link.href
                    ? "text-red-600 bg-red-50"
                    : "text-slate-600 hover:text-red-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-200 my-2" />
            <Link 
              href="/emergency"
              onClick={() => setIsOpen(false)}
              className="bg-on-tertiary-container text-white px-5 py-3 rounded-2xl font-headline font-bold text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md shadow-red-500/20 text-center"
            >
              Emergency
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
