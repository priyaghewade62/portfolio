'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Rocket, Share2 } from 'lucide-react';
import { AnimatedBackground } from '@/components/AnimatedBackground';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#040b1a] px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedBackground />
      <div className="container relative z-10 grid gap-12 lg:items-center justify-items-center">
        <div className="space-y-8 w-full max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-white/5 px-4 py-2 text-sm text-accent-200 shadow-glow">
            <Rocket className="h-4 w-4 text-accent-400" />
            Blockchain & AI Portfolio
          </span>
          <div className="max-w-3xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Building Secure Blockchain Infrastructure & Intelligent AI Applications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl text-base leading-7 text-slate-300"
            >
              Blockchain Developer specializing in Smart Contracts, Layer-1, Layer-2, Hyperledger, AI Integration, and Decentralized Systems.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-accent-400 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-glow">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            {/* Resume download removed — file replaced/managed separately */}
            <a href="mailto:priyaghewade245@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-[#0D1331] px-6 py-3 text-sm font-semibold text-accent-200">
              Hire Me <Share2 className="h-4 w-4 text-accent-200" />
            </a>
          </motion.div>
          {/* Contact cards removed per user request */}
        </div>
        {/* Right-side live network card removed as requested */}
      </div>
    </section>
  );
}
