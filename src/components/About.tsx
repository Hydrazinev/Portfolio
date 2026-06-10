import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import AnimatedText from './AnimatedText';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const notes = [
  'MS CS student at CSULB. Ex-ISRO, AWS Certified Solutions Architect.',
  'Built production ML systems at Technolee serving real-time predictions <200ms for 20+ product lines.',
  'Currently building AI/ML platforms — from medication safety (DrugShield AI) to multi-voice TTS (PageSpeaks).',
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-16 md:py-24">
      <div className="pointer-events-none absolute -left-48 -top-24 h-[600px] w-[600px] rounded-full opacity-50" style={{ background: 'radial-gradient(circle, rgba(255,209,102,0.5) 0%, transparent 70%)' }} />
      <motion.p {...inView()} className="section-label">
        01 · About
      </motion.p>

      <AnimatedText text="A portfolio that behaves like a field notebook." className="mb-12 dark:text-[#f8f1df]" delay={0.05} />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left: bio card */}
        <motion.div
          {...inView(0.1)}
          className="bg-white-card flex flex-col gap-5 rounded-2xl border-2 border-[#181512] bg-white p-8 shadow-[4px_4px_0_#181512]"
        >
          <BookOpen size={28} strokeWidth={2} className="dark:text-[#f8f1df]" />
          <p className="text-lg font-bold leading-8 text-[#181512] dark:text-[#f8f1df]">
            I&rsquo;m a software engineer specializing in AI/ML and data engineering. I&rsquo;ve built systems ranging from satellite data pipelines at ISRO to production ML APIs serving real-time dashboards for 20+ product lines.
          </p>
          <p className="text-lg font-bold leading-8 text-[#181512] dark:text-[#f8f1df]">
            I care about systems that actually ship — reliable, observable, and fast. Whether it&rsquo;s a RAG pipeline, a TTS model, or a medication safety platform, I build from first principles.
          </p>
        </motion.div>

        {/* Right: notes */}
        <div className="flex flex-col gap-4">
          {notes.map((note, i) => (
            <motion.div
              key={i}
              {...inView(0.15 + i * 0.08)}
              className="note-card rounded-2xl border-2 border-[#181512] bg-[#fffaf0] px-6 py-5 shadow-[4px_4px_0_#181512]"
            >
              <p className="mb-1.5 text-sm font-black text-[#6f4d00] dark:text-[#ffd166]">
                note {i + 1}
              </p>
              <p className="font-bold leading-7 text-[#181512] dark:text-[#f8f1df]">{note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
