'use client';

import { motion } from 'framer-motion';
import { SkillBadge } from '@/components/SkillBadge';

const skillGroups = [
  {
    title: 'Blockchain Networks & Protocols',
    items: [
      'Public Blockchains: Ethereum, Polygon PoS, Polygon zkEVM, Polygon CDK, Avalanche, Avalanche Subnet-EVM, Cosmos SDK, Tendermint / CometBFT, Solana, Nillion Network, Polkadot, Substrate, Casper Network',
      'Layer 2 & Scaling: Polygon CDK Validium, zkEVM, Validium, Layer-2 Rollups, Cross-Chain Bridge (LXLY Bridge)',
      'Enterprise / Private: Hyperledger Fabric, Private Ethereum Network (Geth), Private Blockchain Development',
      'EVM-Compatible Chains: Ethereum Mainnet, Sepolia Testnet, Polygon, Avalanche C-Chain, Avalanche Subnet-EVM, Monsoon Testnet',
      'Infrastructure: Geth Node, Avalanche Node, Blockscout Explorer, RPC Node Setup, Validator Node Setup, Archive Node, Full Node',
      'Web3 & Decentralized Tech: web3.js, ethers.js, IPFS, OrbitDB, Bacalhau, MetaMask',
      'Zero-Knowledge: Circom, SnarkJS, Groth16, Polygon ID, zk-SNARKs, Poseidon Hash',
      'Smart Contract Dev: Solidity, ERC-20, ERC-721, ERC-1155, ERC-6551, Staking Contracts, Token Contracts, NFT Contracts, Bridge Contracts'
    ]
  },
  {
    title: 'AI',
    items: ['Python', 'Hugging Face', 'Llama', 'Whisper', 'Jupyter', 'Prompt Engineering', 'AI APIs', 'RAG', 'Vector Databases', 'LLMs']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'FastAPI', 'Flask', 'PostgreSQL', 'MySQL', 'REST APIs']
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    title: 'DevOps',
    items: ['Docker', 'RabbitMQ', 'Juju', 'Multipass', 'Linux', 'Git', 'GitHub']
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#050b1f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-accent-400">Technical Skills</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A deep, expressive toolset for blockchain, AI, and full-stack systems.</h2>
          <p className="mt-4 text-slate-300 leading-8">Beautiful animated cards showcase expertise across on-chain development, backend architecture, frontend experiences, AI integrations, and infrastructure automation.</p>
          <p className="mt-4 text-slate-300 leading-8">Blockchain expertise spans public chains, Layer 2 scaling, enterprise/private networks, cross-chain systems, node infrastructure, Web3 tooling, zero-knowledge proofs, and smart contract engineering.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
