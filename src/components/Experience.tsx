import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import AnimatedText from './AnimatedText';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-label"
      >
        04 · Experience
      </motion.p>

      <AnimatedText text="From production systems to moonshot engineering." className="mb-12 dark:text-[#f8f1df]" delay={0.05} />

      <div className="flex flex-col gap-6">
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white-card paper-card-soft grid gap-4 rounded-[1.5rem] bg-white p-5 md:grid-cols-[12rem_1fr]"
          >
            {/* Date badge */}
            <div>
              <p className="rounded-full border-2 border-[#181512] bg-[#ffd166] px-4 py-2 text-center text-sm font-black text-[#181512]">
                {job.period}
              </p>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-black dark:text-[#f8f1df]">{job.role}</h3>
              <p className="mt-1 font-black text-[#6f4d00] dark:text-[#ffd166]">{job.company}</p>
              <p className="mt-3 leading-7 text-[#51483f] dark:text-[#c8bfb0]">{job.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
