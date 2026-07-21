import { motion } from 'framer-motion';

type StatPulseProps = {
  label: string;
  value: string;
  accent?: string;
};

export function StatPulse({ label, value, accent = 'from-brand-500 to-accent-400' }: StatPulseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="glass-panel rounded-3xl border border-white/10 p-6 shadow-glow"
    >
      <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
      <div className={`mt-4 h-1 w-24 rounded-full bg-gradient-to-r ${accent}`} />
    </motion.div>
  );
}
