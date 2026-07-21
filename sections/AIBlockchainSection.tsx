'use client';

import { motion } from 'framer-motion';

const aiTech = [
  'Python',
  'FastAPI',
  'Llama 3.2',
  'LangChain',
  'Vector Database',
  'Embeddings',
  'RAG',
  'n8n',
  'Neo4j',
  'NumPy',
  'PyTorch',
  'Docker',
  'PostgreSQL',
  'REST APIs',
  'Node.js',
  'Git',
  'Linux'
];

const aiSummary = `Built AI-powered backend applications and scalable APIs using Python and FastAPI, integrated LLMs (Llama 3.2) with RAG pipelines, vector search, and embeddings; automated AI workflows with n8n; developed document processing and knowledge retrieval systems; and integrated AI features with blockchain and Web3 applications. Worked with Neo4j for knowledge graphs and used NumPy/PyTorch for model development.`;

export function AIBlockchainSection() {
  return (
    <section id="ai-blockchain" className="bg-[#050b1f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-accent-400">AI & Generative AI</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl md:text-4xl">Building intelligent applications with Large Language Models, vector embeddings, retrieval systems, and workflow automation to deliver smart, scalable, and efficient AI solutions.</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-white">AI Tools & Technologies</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {aiTech.map((t) => (
                <span key={t} className="rounded-2xl bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-white">AI Summary</h3>
            <p className="mt-4 text-slate-300 leading-7">{aiSummary}</p>
            <p className="mt-4 text-slate-300 leading-7">Integrated AI systems with blockchain and Web3, created RAG pipelines and vector-based search, and containerized deployments for scalable, production-ready services.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
