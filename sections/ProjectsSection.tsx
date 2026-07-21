'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    title: 'Avalanche Infrastructure',
    description: 'Worked on Avalanche Testnet/Mainnet infrastructure, node management, faucet repository, Blockscout integration, blockchain monitoring, and transaction analysis.',
    tech: ['Avalanche', 'Go', 'Docker', 'Node'],
    url: 'https://www.avax.network/infrastructure'
  },
  {
    title: 'RDP Token',
    description: 'Developed ERC20 smart contracts with security auditing using Slither and Solhint.',
    tech: ['Solidity', 'Hardhat', 'Foundry']
  },
  {
    title: 'Monsoon',
    description: 'Cross-chain bridge implementation with zkEVM and CDK Validium.',
    tech: ['Polygon', 'zkEVM', 'Bridge']
  },
  {
    title: 'Hyperledger Fabric',
    description: 'Private blockchain implementation with Fabric Explorer for enterprise use cases.',
    tech: ['Hyperledger Fabric', 'Fabric Explorer'],
    url: 'https://hyperledger-fabric.readthedocs.io/en/release-2.5/'
  },
  {
    title: 'Nillion',
    description: 'Integrated Nillion SDK, built secure backend APIs, managed confidential data using NilDB, and implemented privacy-preserving Web3 solutions with Node.js and TypeScript.',
    tech: ['Nillion', 'Node.js', 'TypeScript', 'NilDB', 'Web3'],
    url: 'https://nillion.com/'
  },
  {
    title: 'AI + Blockchain',
    description: 'AI-powered blockchain analytics, smart contract auditing, wallet risk analysis, and decentralized AI agents.',
    tech: ['LLM', 'Blockchain', 'RAG', 'Smart Contract Analysis', 'AI Agents']
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#020617] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-accent-400">Projects</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Building decentralized futures.</h2>
          <p className="mt-4 text-slate-300 leading-8">A portfolio of blockchain and AI projects spanning infrastructure, tokenomics, cross-chain protocols, and intelligent systems.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
