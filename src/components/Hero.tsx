import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

interface HeroProps { dark: boolean; }

export default function Hero({ dark }: HeroProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 18 });
  const sy = useSpring(my, { stiffness: 200, damping: 18 });

  const handleMagnet = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.4);
    my.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };
  const resetMagnet = () => { mx.set(0); my.set(0); };

  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1fr_0.9fr] md:pb-24 md:pt-20">
      {/* Left */}
      <div style={{ opacity: 1 }}>
        <motion.p
          {...fade(0)}
          className="hero-badge mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#181512] bg-white px-4 py-2 text-sm font-black shadow-[4px_4px_0_#181512]"
        >
          <Sparkles size={16} aria-hidden />
          AI systems · data engineering · software engineer
        </motion.p>

        <motion.h1
          {...fade(0.1)}
          className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight dark:text-[#f8f1df] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I build AI systems with <span className="sketch-underline">clean pipelines</span> and a little soul.
        </motion.h1>

        <motion.p
          {...fade(0.2)}
          className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#3d352f] dark:text-[#c8bfb0] md:text-lg"
        >
          Hi, I&rsquo;m Vaidik. I&rsquo;m a software engineer focused on AI/ML and data engineering, MS CS student at CSULB, and ex-ISRO. I build intelligent systems — from satellite pipelines to voice synthesis engines — from the messy middle of real engineering.
        </motion.p>

        <motion.div {...fade(0.3)} className="mt-8 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            style={{ x: sx, y: sy }}
            onMouseMove={handleMagnet}
            onMouseLeave={resetMagnet}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#181512] bg-[#181512] px-6 py-3 font-black text-[#f8f1df] shadow-[5px_5px_0_#ffd166] transition dark:border-[#f8f1df] dark:bg-[#f8f1df] dark:text-[#181512]"
          >
            Open case files <ArrowUpRight size={18} aria-hidden />
          </motion.a>
          <a
            href="#notes"
            className="btn-outline inline-flex items-center gap-2 rounded-full border-2 border-[#181512] bg-white px-6 py-3 font-black shadow-[5px_5px_0_#181512] transition hover:-translate-y-1"
          >
            Read field notes
          </a>
        </motion.div>

        <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap gap-3">
          {['Python', 'PyTorch', 'FastAPI', 'LangChain', 'AWS', 'React', 'PostgreSQL'].map((t) => (
            <span
              key={t}
              className="hero-tag rounded-full border-2 border-[#181512] bg-[#fffaf0] px-4 py-2 text-sm font-black shadow-[3px_3px_0_rgba(24,21,18,0.8)]"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Right: illustration */}
      <motion.div
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 1, rotate: -1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative pb-72 md:pb-64"
      >
        {/* preserve-light-art only wraps the illustration card, NOT the terminal card */}
        <div className="preserve-light-art">
          <div className="paper-card relative overflow-visible rounded-[2rem] bg-[#fffaf0] p-5">
            {/* Inner card — yellow in light, dark navy in dark */}
            <div
              className="relative overflow-hidden rounded-[1.5rem] border-2 border-[#181512] p-5 transition-colors duration-500"
              style={{ backgroundColor: dark ? '#0a1628' : '#ffd166' }}
            >
              {/* Decorative stars */}
              <div
                className="absolute left-8 top-8 select-none text-2xl transition-colors duration-500"
                style={{ color: dark ? 'rgba(248,241,223,0.3)' : '#f8f1df' }}
              >✦</div>
              <div
                className="absolute right-14 top-12 select-none text-xl transition-colors duration-500"
                style={{ color: dark ? 'rgba(248,241,223,0.2)' : '#f8f1df' }}
              >✶</div>
              <div
                className="absolute bottom-20 left-16 select-none text-xl transition-colors duration-500"
                style={{ color: dark ? 'rgba(248,241,223,0.2)' : '#f8f1df' }}
              >✧</div>

              {/* Moon — only visible in dark mode */}
              <AnimatePresence>
                {dark && (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, scale: 0.5, x: 10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, x: 10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -right-6 -top-4 z-10"
                  >
                    {/* Moon outer circle */}
                    <div className="relative h-24 w-24 rounded-full" style={{ backgroundColor: '#d4d4b8' }}>
                      {/* Shadow circle to create crescent */}
                      <div
                        className="absolute right-0 top-0 h-24 w-20 rounded-full"
                        style={{ backgroundColor: '#0a1628' }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cream circle — face container */}
              <div
                className="relative mx-auto grid aspect-square max-w-xs place-items-center rounded-full border-2 border-[#181512] transition-colors duration-500"
                style={{
                  backgroundColor: dark ? '#1a2a3a' : '#f8f1df',
                  boxShadow: dark
                    ? 'inset 8px 8px 0 rgba(0,0,0,0.3)'
                    : 'inset 8px 8px 0 rgba(24,21,18,0.08)',
                }}
              >
                {/* Floating face wrapper */}
                <motion.div
                  className="relative"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Face */}
                  <div
                    className="h-40 w-40 rounded-full border-4 border-[#181512]"
                    style={{ backgroundColor: 'rgb(144,224,239)' }}
                  />

                  {/* Eyes — open/blinking in light, sleepy in dark */}
                  <AnimatePresence mode="wait">
                    {dark ? (
                      /* Sleepy half-closed eyes */
                      <motion.div
                        key="sleepy-eyes"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute left-8 top-[4.2rem] h-2.5 w-7 overflow-hidden rounded-b-full border-b-[3px] border-[#181512]" />
                        <div className="absolute right-8 top-[4.2rem] h-2.5 w-7 overflow-hidden rounded-b-full border-b-[3px] border-[#181512]" />
                      </motion.div>
                    ) : (
                      /* Normal blinking eyes */
                      <motion.div
                        key="open-eyes"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute left-9 top-14 h-5 w-5 origin-center rounded-full bg-[#181512]"
                          animate={{ scaleY: [1, 1, 0.05, 1, 1] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.5, 0.55, 1] }}
                        />
                        <motion.div
                          className="absolute right-9 top-14 h-5 w-5 origin-center rounded-full bg-[#181512]"
                          animate={{ scaleY: [1, 1, 0.05, 1, 1] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.46, 0.51, 0.56, 1] }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Smile */}
                  <div
                    className="absolute left-1/2 top-[5.8rem] -translate-x-1/2 rounded-b-full border-b-4 border-[#181512]"
                    style={{ width: 56, height: 28 }}
                  />

                  {/* Badge — "deep work" in light, "night build" in dark */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: [0, -4, 0] }}
                    transition={{
                      opacity: { delay: 0.9, duration: 0.4 },
                      y: { delay: 1.2, duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="absolute -left-10 top-20 rounded-full border-2 border-[#181512] px-3 py-1 text-xs font-black shadow-[3px_3px_0_#181512] transition-colors duration-500"
                    style={{ backgroundColor: dark ? '#ffd166' : '#ffd166' }}
                  >
                    {dark ? 'night build' : 'deep work'}
                  </motion.div>

                  {/* "compiling..." badge — only in light mode */}
                  <AnimatePresence>
                    {!dark && (
                      <motion.div
                        key="compiling-badge"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 4, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{
                          opacity: { delay: 1.1, duration: 0.4 },
                          y: { delay: 1.4, duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        className="absolute -right-8 -top-5 rotate-12 rounded-full border-2 border-[#181512] bg-white px-3 py-1 text-xs font-black shadow-[3px_3px_0_#181512]"
                      >
                        compiling...
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* "zzzz" badge — only in dark mode */}
                  <AnimatePresence>
                    {dark && (
                      <motion.div
                        key="zzz-badge"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{
                          opacity: { duration: 0.4 },
                          scale: { duration: 0.4 },
                          y: { delay: 0.4, duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        className="absolute -right-6 -top-4 rotate-12 rounded-full border-2 border-[#181512] px-3 py-1 text-xs font-black shadow-[3px_3px_0_rgba(248,241,223,0.3)]"
                        style={{ backgroundColor: '#90e0ef', color: '#181512' }}
                      >
                        z z z
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal card — outside preserve-light-art so its own colors apply */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="absolute -bottom-16 left-6 right-0 rounded-[1.5rem] border-2 border-[#181512] bg-[#1a1a1a] p-6 text-[#f8f1df] shadow-[6px_6px_0_#f8f1df] dark:border-[#f8f1df] dark:shadow-[6px_6px_0_rgba(248,241,223,0.3)] md:-bottom-20 md:left-10"
        >
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="space-y-4 font-mono text-sm leading-relaxed">
            <div>
              <p className="text-[#f8f1df]/50">$ whoami</p>
              <p className="text-[#f8f1df]">vaidik: ai_ml_engineer</p>
            </div>
            <div>
              <p className="text-[#f8f1df]/50">$ currently</p>
              <p className="text-[#f8f1df]">MS CS @ CSULB</p>
            </div>
            <div>
              <p className="text-[#f8f1df]/50">$ next_stop</p>
              <p className="text-[#f8f1df]">
                AI research engineer<span className="animate-pulse text-[#ffd166]"> ▌</span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
