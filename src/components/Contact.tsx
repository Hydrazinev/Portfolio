import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="paper-card overflow-hidden rounded-[2rem] bg-[#181512] p-8 text-[#f8f1df] md:p-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          {/* Left */}
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#f8f1df] px-4 py-2 text-sm font-black">
              <MapPin size={16} aria-hidden /> Long Beach, CA
            </p>

            <AnimatedText
              text="Got an AI problem, research idea, or excellent debugging story?"
              className="max-w-3xl text-4xl font-black leading-tight text-[#f8f1df] md:text-6xl"
              delay={0.1}
            />

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#e8dcc4]">
              I&rsquo;m always happy to talk AI systems, data engineering, internships, research, developer tools, and ideas that sound slightly too ambitious at first.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:vaidikshah03@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#f8f1df] bg-[#f8f1df] px-5 py-3 font-black text-[#181512] transition hover:-translate-y-1"
              >
                <Mail size={18} aria-hidden /> Email me
              </a>
              <a
                href="https://github.com/Hydrazinev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#f8f1df] bg-[#f8f1df] px-5 py-3 font-black text-[#181512] transition hover:-translate-y-1"
              >
                <Github size={18} aria-hidden /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vaidik-shah/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#ffd166] bg-[#ffd166] px-5 py-3 font-black text-[#181512] transition hover:-translate-y-1"
              >
                <Linkedin size={18} aria-hidden /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: email/communication illustration — preserve-light-art keeps it cream in dark mode */}
          <div className="preserve-light-art relative mx-auto hidden w-full max-w-sm lg:block">
            <div className="paper-card-soft relative overflow-hidden rounded-[2rem] bg-[#fffaf0] p-5 text-[#181512]">
              {/* Blue inner scene */}
              <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem] border-2 border-[#181512] bg-[#90e0ef] p-5">
                {/* Notebook grid overlay */}
                <div className="notebook-grid absolute inset-0 opacity-30" />

                {/* Decorative dashed rotating circles */}
                <div
                  className="absolute left-1/4 top-1/3 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#181512]/20 animate-spin"
                  style={{ animationDuration: '10s' }}
                />
                <div
                  className="absolute right-1/4 bottom-1/3 h-14 w-14 rounded-full border-2 border-dashed border-[#181512]/20 animate-spin"
                  style={{ animationDuration: '14s', animationDirection: 'reverse' }}
                />

                {/* Stars */}
                <span className="absolute left-7 top-8 select-none text-lg text-[#181512]/40">✦</span>
                <span className="absolute right-24 top-28 select-none text-base text-[#181512]/40">✶</span>
                <span className="absolute bottom-32 left-28 select-none text-base text-[#181512]/40">✧</span>

                {/* Floating email card — top center */}
                <div className="absolute left-1/2 top-20 z-20 -translate-x-1/2 rounded-2xl border-2 border-[#181512] bg-[#fffaf0] px-7 py-5 shadow-[6px_6px_0_#181512]">
                  {/* Traffic light dots */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ffadad]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
                    <span className="h-3 w-3 rounded-full bg-[#181512]" />
                  </div>
                  {/* Envelope shape */}
                  <div className="relative h-20 w-32">
                    <div className="absolute inset-0 rounded-md border-2 border-[#181512] bg-white" />
                    <div
                      className="absolute inset-0 bg-[#fffaf0]"
                      style={{ clipPath: 'polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)' }}
                    />
                    <div className="absolute inset-x-0 bottom-2 flex justify-center">
                      <span className="rounded-full border-2 border-[#181512] bg-[#ffd166] px-3 py-0.5 text-[10px] font-black shadow-[2px_2px_0_#181512]">
                        ping
                      </span>
                    </div>
                  </div>
                </div>

                {/* Person silhouette — bottom left */}
                <div className="absolute bottom-12 left-8 z-10 h-24 w-28 rounded-t-full border-2 border-[#181512] bg-[#ffd166] shadow-[5px_5px_0_#181512]">
                  {/* Head */}
                  <div className="absolute left-1/2 top-5 h-14 w-14 -translate-x-1/2 rounded-full border-2 border-[#181512] bg-[#fffaf0]" />
                  {/* Hair bar */}
                  <div className="absolute left-1/2 top-11 h-4 w-20 -translate-x-1/2 rounded-full bg-[#181512]" />
                  {/* Arms */}
                  <div className="absolute -right-10 top-6 h-5 w-12 rotate-12 rounded-full border-2 border-[#181512] bg-[#ffadad]" />
                  <div className="absolute -right-12 top-14 h-5 w-14 rotate-12 rounded-full border-2 border-[#181512] bg-[#ffadad]" />
                  <div className="absolute -right-10 top-[5.5rem] h-5 w-12 rotate-12 rounded-full border-2 border-[#181512] bg-[#ffadad]" />
                </div>

                {/* "signal: strong" badge — top right */}
                <div className="absolute right-5 top-5 z-30 rotate-6 rounded-xl border-2 border-[#181512] bg-[#fffaf0] p-3 text-xs font-black shadow-[4px_4px_0_#181512]">
                  signal: strong
                </div>

                {/* "reply latency: low" badge — bottom right */}
                <div className="absolute bottom-5 right-5 z-30 -rotate-3 rounded-xl border-2 border-[#181512] bg-[#ffadad] p-3 text-xs font-black shadow-[4px_4px_0_#181512]">
                  reply latency: low
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
