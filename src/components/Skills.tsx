import { motion } from 'framer-motion';
import { Braces } from 'lucide-react';
import { skillGroups } from '../data/skills';
import AnimatedText from './AnimatedText';

const pillVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -6 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-label"
      >
        03 · Skills
      </motion.p>

      <AnimatedText
        text="Tools, grouped like a sane person packed them."
        className="mb-12 dark:text-[#f8f1df]"
        delay={0.05}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="skill-card paper-card-soft rounded-[1.5rem] bg-[#fffaf0] p-6"
          >
            <h3 className="mb-5 flex items-center gap-2 text-2xl font-black dark:text-[#f8f1df]">
              <Braces size={24} aria-hidden /> {group.label}
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: i * 0.07 + 0.15 } } }}
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={pillVariants}
                  className="hero-tag rounded-full border-2 border-[#181512] bg-white px-4 py-2 text-sm font-black shadow-[2px_2px_0_#181512]"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
