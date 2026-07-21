'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#050b1f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-accent-400">Get in Touch</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let's build something extraordinary together.</h2>
          <p className="mt-4 text-slate-300 leading-8">Interested in blockchain consulting, smart contract development, AI integrations, or freelance work? Reach out and let's discuss how I can contribute to your vision.</p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
}
