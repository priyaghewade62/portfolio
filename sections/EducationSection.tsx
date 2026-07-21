'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  { degree: 'Master of Computer Applications', school: 'MCA', year: '2023–2025' },
  { degree: 'Bachelor of Computer Science', school: 'BCS', year: '2020–2023' }
];

export function EducationSection() {
  return (
    <section id="education" className="bg-[#020617] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-accent-400">Education</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Foundation in computer science and systems.</h2>
          <p className="mt-4 text-slate-300 leading-8">Formal training in software engineering, distributed systems, and advanced computing concepts.</p>
        </div>
        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-soft"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-r from-brand-500 to-accent-400 p-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.school}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.degree}</h3>
                    <p className="mt-1 text-sm text-slate-400">Savitribai Phule Pune University</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-accent-300">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
