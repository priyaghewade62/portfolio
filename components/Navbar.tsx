'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020617]/95 shadow-soft backdrop-blur-xl'
          : 'bg-[#020617]/70 backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.3em] text-white hover:text-accent-400">
          Priya Ghewade
        </Link>
        <nav className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.24em] text-slate-300">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToId('about'); }} className="transition hover:text-accent-400 cursor-pointer">
            About
          </a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToId('skills'); }} className="transition hover:text-accent-400 cursor-pointer">
            Skills
          </a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToId('experience'); }} className="transition hover:text-accent-400 cursor-pointer">
            Experience
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToId('projects'); }} className="transition hover:text-accent-400 cursor-pointer">
            Projects
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }} className="transition hover:text-accent-400 cursor-pointer">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
