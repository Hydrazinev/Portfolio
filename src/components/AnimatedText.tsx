import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

const wordVariant = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedText({ text, className, delay = 0 }: Props) {
  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
    >
      {text.split(' ').map((w, i) => (
        <motion.span key={i} variants={wordVariant} style={{ display: 'inline-block', marginRight: '0.28em' }}>
          {w}
        </motion.span>
      ))}
    </motion.h2>
  );
}
