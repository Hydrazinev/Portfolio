import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import AnimatedText from './AnimatedText';

function TiltCard({ project, delay }: { project: Project; delay: number }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rotateX.set(((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 7);
    rotateY.set(-((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 7);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      style={{ rotateX: springX, rotateY: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="paper-card flex min-h-[28rem] cursor-pointer flex-col rounded-[1.75rem] p-5"
    >
      {/* Colored header */}
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        className="mb-5 rounded-2xl border-2 border-[#181512] p-4"
        style={{ backgroundColor: project.accent }}
      >
        <div className="mb-16 flex items-start justify-between gap-4">
          <span className="rounded-full border-2 border-[#181512] bg-white px-3 py-1 text-xs font-black text-[#181512]">
            {project.caseNum}
          </span>
          <span className="rotate-3 rounded-md border-2 border-[#181512] bg-[#181512] px-3 py-1 text-xs font-black text-white">
            {project.status}
          </span>
        </div>
        <p className="font-black uppercase tracking-[0.2em] text-[#181512]">
          {project.category}
        </p>
      </motion.div>

      <h3 className="text-2xl font-black dark:text-[#f8f1df]">{project.name}</h3>
      <p className="mt-4 font-bold leading-7 text-[#51483f] dark:text-[#c8bfb0]">{project.shortDescription}</p>
      <p className="mt-4 leading-7 text-[#51483f] dark:text-[#c8bfb0]">{project.description}</p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="hero-tag rounded-full border-2 border-[#181512] bg-[#fffaf0] px-3 py-1 text-xs font-black"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-auto flex items-center gap-4 pt-8">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-black underline decoration-4 underline-offset-4 transition hover:-translate-y-0.5 dark:text-[#f8f1df]"
          >
            Open case file <ArrowUpRight size={18} aria-hidden />
          </a>
        )}
        {!project.github && project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-black underline decoration-4 underline-offset-4 transition hover:-translate-y-0.5 dark:text-[#f8f1df]"
          >
            Open case file <ArrowUpRight size={18} aria-hidden />
          </a>
        )}
        {project.live && project.github && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-black text-[#51483f] underline underline-offset-2 hover:text-[#181512] dark:text-[#c8bfb0] dark:hover:text-[#f8f1df]"
          >
            live ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-label"
      >
        02 · Projects
      </motion.p>

      <AnimatedText
        text="Selected case files from the lab."
        className="mb-12 dark:text-[#f8f1df]"
        delay={0.05}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <TiltCard key={project.id} project={project} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}
