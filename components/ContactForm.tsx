'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export function ContactForm() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
        <div className="mt-6 space-y-4 text-slate-300">
          <div>
            <p className="font-semibold text-white">Email</p>
            <a href="mailto:priyaghewade245@gmail.com" className="text-accent-400">priyaghewade245@gmail.com</a>
          </div>
          <div>
            <p className="font-semibold text-white">Location</p>
            <p>Pune, India</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-soft"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick links</p>
        <div className="mt-6 grid gap-3 text-sm text-slate-200">
          <a href="https://github.com/priyaghewade62" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white hover:text-accent-400">
            <Github className="h-4 w-4 text-accent-400" /> GitHub
          </a>
          <a href="https://linkedin.com/in/priya-ghewade-249403206" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white hover:text-accent-400">
            <Linkedin className="h-4 w-4 text-accent-400" /> LinkedIn
          </a>
          <a href="mailto:priyaghewade245@gmail.com" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white hover:text-accent-400">
            <Mail className="h-4 w-4 text-accent-400" /> Email
          </a>
        </div>
      </motion.div>
    </div>
  );
}
