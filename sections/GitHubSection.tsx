'use client';

import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';
import { fetchGitHubRepos } from '@/lib/github';
import { Suspense } from 'react';

async function GitHubContent() {
  const repos = await fetchGitHubRepos();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.length > 0
        ? repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group glass-panel rounded-[32px] border border-white/10 p-8 shadow-soft transition"
            >
              <div className="flex items-start justify-between">
                <Github className="h-8 w-8 text-accent-400" />
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">
                    <Star className="h-4 w-4 text-yellow-400" />
                    {repo.stargazers_count}
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{repo.name}</h3>
              <p className="mt-2 line-clamp-2 text-slate-300">{repo.description || 'A GitHub repository'}</p>
              {repo.language && <p className="mt-4 text-sm text-accent-400">{repo.language}</p>}
            </motion.a>
          ))
        : Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-soft"
            >
              <div className="space-y-3">
                <div className="h-8 w-8 rounded-lg bg-white/5" />
                <div className="h-6 w-32 rounded-lg bg-white/5" />
                <div className="h-12 w-full rounded-lg bg-white/5" />
                <div className="h-4 w-20 rounded-lg bg-white/5" />
              </div>
            </motion.div>
          ))}
    </div>
  );
}

export function GitHubSection() {
  return (
    <section id="github" className="bg-[#020617] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-accent-400">GitHub</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Open-source and public work.</h2>
          <p className="mt-4 text-slate-300 leading-8">Latest repositories showcasing blockchain implementations, smart contracts, and AI integrations.</p>
        </div>
        <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-white/5" />}>
          <GitHubContent />
        </Suspense>
      </div>
    </section>
  );
}
