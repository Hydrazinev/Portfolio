import { motion } from 'framer-motion';
import { Terminal, Coffee, Pencil } from 'lucide-react';
import AnimatedText from './AnimatedText';

const notes = [
  {
    icon: Terminal,
    title: 'What I learned debugging backend systems',
    body: 'A note about logs, patience, and why the bug is usually hiding where you were too confident.',
  },
  {
    icon: Coffee,
    title: 'The coffee-to-code conversion rate',
    body: 'Unscientific, emotionally accurate, and probably not peer reviewed.',
  },
  {
    icon: Pencil,
    title: 'Writing to understand engineering',
    body: 'The best way to learn something is to explain it without sounding like a documentation goblin.',
  },
];

export default function Education() {
  return (
    <section id="notes" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-label"
      >
        05 · Field Notes
      </motion.p>

      <AnimatedText text="Tiny dispatches from the engineering trenches." className="mb-12 dark:text-[#f8f1df]" delay={0.05} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note, i) => {
          const Icon = note.icon;
          return (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white-card paper-card-soft flex flex-col gap-5 rounded-[1.5rem] bg-white p-8"
            >
              <Icon size={24} strokeWidth={2} className="text-[#181512] dark:text-[#f8f1df]" />
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-black leading-snug text-[#181512] dark:text-[#f8f1df]">
                  {note.title}
                </h3>
                <p className="leading-7 text-[#51483f] dark:text-[#c8bfb0]">{note.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
