'use client';

import { motion } from 'framer-motion';
import { StatPulse } from '@/components/StatPulse';

export function AchievementsSection() {
  return (
    <section id="achievements" className="bg-[#050b1f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-accent-400">Achievements</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Metrics of impact and growth.</h2>
          <p className="mt-4 text-slate-300 leading-8">A quantified journey through smart contract deployments, blockchain networks, technologies mastered, and continuous learning.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <StatPulse label="Smart Contracts" value="50+" accent="from-brand-500 to-purple-600" />
          <StatPulse label="Blockchain Networks" value="8+" accent="from-accent-400 to-cyan-500" />
          <StatPulse label="Projects" value="15+" accent="from-emerald-500 to-teal-600" />
          <StatPulse label="Technologies" value="25+" accent="from-blue-500 to-indigo-600" />
          <StatPulse label="Years" value="3+" accent="from-orange-500 to-pink-600" />
        </div>
      </div>
    </section>
  );
}
