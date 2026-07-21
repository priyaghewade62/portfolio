'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, -42, 0], y: [0, -18, 0], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-10 top-16 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, 28, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-16 top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -28, 0], y: [0, 22, 0], opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-[18rem] h-60 w-60 -translate-x-1/2 rounded-full bg-slate-500/10 blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.16),transparent_18%),radial-gradient(circle_at_20%_40%,rgba(6,182,212,0.12),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(20,184,166,0.1),transparent_15%)]" />
    </div>
  );
}
