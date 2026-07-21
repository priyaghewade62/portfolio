import { Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
};

export function ProjectCard({ title, description, tech, url }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group rounded-[28px] border border-white/10 bg-[#0D1327]/80 p-6 shadow-soft"
    >
      <div className="flex items-center justify-between text-slate-300">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Project</p>
        <Sparkles className="h-5 w-5 text-accent-400" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">
        {url ? (
          <a href={url} target="_blank" rel="noreferrer" className="hover:text-accent-400 transition-colors">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="mt-4 text-slate-300 leading-7">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded-2xl bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
