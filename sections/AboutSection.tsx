'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="bg-[#050b1f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-accent-400">About Me</span>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">A Blockchain Engineer with AI-Powered Problem Solving</h2>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                I'm a Blockchain & AI Developer with 2.5+ years of experience designing, auditing, and deploying smart contracts, decentralized applications (dApps), and AI-powered solutions. I have hands-on experience across both EVM and non-EVM ecosystems, including Ethereum, Polygon, Avalanche, Cosmos, Polygon zkEVM, CDK Validium, Hyperledger Fabric, and Nillion.
              </p>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                My expertise spans smart contract development, blockchain infrastructure, Layer-2 solutions, decentralized storage, AI automation, and backend development. I leverage Large Language Models (LLMs), Hugging Face, LangChain, RAG, vector databases, and workflow automation (n8n) to build intelligent, secure, and scalable applications.
              </p>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                I focus on delivering production-ready solutions that combine the power of Blockchain and Artificial Intelligence to solve real-world business challenges.
              </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-5 rounded-[32px] border border-white/10 bg-[#09132b]/90 p-8 shadow-soft"
          >
            {[
              'Smart Contract Development & Security Audits',
              'Cross-Chain Infrastructure & Layer-2 Solutions',
              'AI-Powered Applications & Workflow Automation',
              'RAG, LLM Integration & Vector Databases',
              'Blockchain Node Setup & Infrastructure Management',
              'Decentralized Storage & Web3 Integration',
              'Backend API Development (Python, Node.js & FastAPI)'
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white/5 px-5 py-4 text-slate-200">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
