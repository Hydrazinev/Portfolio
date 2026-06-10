import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const links = ['About', 'Projects', 'Skills', 'Experience', 'Notes', 'Contact'];

interface NavProps {
  dark: boolean;
  onToggle: () => void;
}

export default function Nav({ dark, onToggle }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  const bgColor = scrolled
    ? dark ? 'rgba(17,16,14,0.92)' : 'rgba(248,241,223,0.92)'
    : dark ? '#11100e' : '#f8f1df';

  return (
    <header
      className="sticky top-0 z-50 border-b-2 border-[#181512] transition-colors duration-300 dark:border-[#f8f1df] relative"
      style={{ backgroundColor: bgColor, backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
        <a href="#" aria-label="Home">
          <div className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#181512] bg-[#ffd166] text-sm font-black text-[#181512] shadow-[2px_2px_0_#181512] select-none dark:border-[#f8f1df] dark:shadow-[2px_2px_0_#f8f1df]">
            VS
          </div>
        </a>

        <nav className="ml-2 hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="rounded-full border-2 border-transparent px-3 py-1.5 text-sm font-bold transition hover:border-[#181512] hover:bg-[#fffaf0] dark:text-[#f8f1df] dark:hover:border-[#f8f1df] dark:hover:bg-[#2a2824]"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="/Vaidik_Shah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pill hidden md:inline-flex"
          >
            resume
          </a>
          <a href="#contact" className="pill pill-filled hidden md:inline-flex">
            say hi
          </a>

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={onToggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="group relative h-11 w-20 rounded-full border-2 border-[#181512] bg-white p-1 shadow-[3px_3px_0_#181512] transition-colors duration-500 hover:-translate-y-0.5 dark:border-[#f8f1df] dark:bg-[#1f1d1a] dark:shadow-[3px_3px_0_#f8f1df]"
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#181512] bg-[#ffd166] text-sm shadow-[2px_2px_0_#181512] transition-transform duration-500 dark:border-[#f8f1df] dark:bg-[#90e0ef] dark:shadow-[2px_2px_0_#f8f1df]"
              style={{ transform: dark ? 'translateX(36px)' : 'translateX(0)' }}
            >
              {dark ? '🔦' : '🌙'}
            </span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-[#181512] bg-white shadow-[2px_2px_0_#181512] dark:border-[#f8f1df] dark:bg-[#1f1d1a] dark:shadow-[2px_2px_0_#f8f1df] md:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-4 bg-[#181512] dark:bg-[#f8f1df]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-4 bg-[#181512] dark:bg-[#f8f1df]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-4 bg-[#181512] dark:bg-[#f8f1df]"
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full z-40 border-b-2 border-[#181512] px-5 pb-5 pt-4 dark:border-[#f8f1df]"
            style={{ backgroundColor: bgColor, backdropFilter: 'blur(12px)' }}
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border-2 border-transparent px-4 py-3 text-base font-bold transition hover:border-[#181512] hover:bg-[#fffaf0] dark:text-[#f8f1df] dark:hover:border-[#f8f1df] dark:hover:bg-[#2a2824]"
                >
                  {l}
                </motion.a>
              ))}
              <div className="mt-3 flex gap-3 border-t-2 border-[#181512]/20 pt-3 dark:border-[#f8f1df]/20">
                <a
                  href="/Vaidik_Shah_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill flex-1 justify-center text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  resume
                </a>
                <a
                  href="#contact"
                  className="pill pill-filled flex-1 justify-center text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  say hi
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-[#ffd166]"
        style={{ scaleX }}
      />
    </header>
  );
}
