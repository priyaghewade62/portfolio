'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Rainfall.one',
    website: 'https://rainfall.one/',
    role: 'Junior Blockchain Developer',
    year: 'Feb 2025 - May 2026',
    details: ['Avalanche', 'Cosmos', 'Ethereum', 'Smart Contracts', 'ERC20', 'ERC721', 'ERC1155', 'Security Audits', 'Hardhat', 'Foundry', 'Slither', 'Solhint', 'Docker', 'RabbitMQ', 'IPFS', 'OrbitDB', 'NillionDB', 'Juju', 'Multipass', 'n8n']
  },
  {
    company: 'Pure Soft Solutions',
    website: 'https://puresoftsolutions.in/',
    role: 'Blockchain Developer',
    year: 'Jan 2024 - Jan 2025',
    details: ['Monsoon', 'Cross Chain Bridge', 'zkEVM', 'CDK Validium', 'Layer 2', 'Nillion', 'RabbitMQ']
  },
  {
    company: 'Mobiloitte',
    website: 'https://www.mobiloitte.com/',
    role: 'Blockchain Trainee',
    year: 'Jul 2023 - Dec 2023',
    details: ['Hyperledger Fabric', 'Fabric Explorer', 'Ethereum Geth', 'Private Blockchain']
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#020617] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-accent-400">Experience</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Career timeline with Web3 depth.</h2>
          <p className="mt-4 text-slate-300 leading-8">
            A strong trajectory in decentralized systems, cross-chain protocols and enterprise blockchain implementation with an emphasis on security tooling and automation.
          </p>
        </div>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-soft"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                    {experience.website ? (
                      <a href={experience.website} target="_blank" rel="noreferrer" className="hover:text-accent-400 transition-colors">
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{experience.role}</h3>
                  {experience.year && (
                    <span className="text-sm font-semibold text-accent-300">{experience.year}</span>
                  )}
                </div>
                <span className="rounded-full bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">Blockchain focus</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {experience.details.map((tag) => (
                  <span key={tag} className="rounded-2xl bg-white/5 px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
