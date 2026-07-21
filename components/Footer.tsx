'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020617] px-4 py-12 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <Rocket className="h-5 w-5 text-accent-400" />
              <span className="text-sm font-semibold text-white">Priya Ghewade</span>
            </div>
            <p className="text-slate-400">Building the future with blockchain and artificial intelligence.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }} className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Connect</p>
            <div className="space-y-2 text-slate-300">
              <a href="https://github.com/priyaghewade62" target="_blank" rel="noreferrer" className="block text-sm hover:text-accent-400">
                GitHub
              </a>
              <a href="https://linkedin.com/in/priya-ghewade-249403206" target="_blank" rel="noreferrer" className="block text-sm hover:text-accent-400">
                LinkedIn
              </a>
              <a href="mailto:priyaghewade245@gmail.com" className="block text-sm hover:text-accent-400">
                Email
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-slate-500">© Priya Ghewade. All rights reserved. — Building the future with Blockchain & Artificial Intelligence.</p>
        </div>
      </div>
    </footer>
  );
}
