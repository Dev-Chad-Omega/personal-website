"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";

type HeroContentProps = {
  heroHighlights: string[];
};

const containerVariants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.12 } as const,
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } as const,
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as const,
  },
};

const portraitVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 } as const,
  },
};

const rotatingWords = [
  "Environmental intelligence",
  "Responsible AI",
  "Civic storytelling",
] as const;

const typingIntroText = "Dave Patel helps teams translate complex environmental data into";
const highlightTypingText = "press-ready narratives.";

const WORD_FLIP_INTERVAL_MS = 3600;
const WORD_FLIP_INITIAL_DELAY_MS = 1200;
const WORD_FLIP_TRANSITION_MS = 620;

type WordFlipState = {
  currentIndex: number;
  previousIndex: number | null;
};

function WordFlip() {
  const [state, setState] = useState<WordFlipState>({
    currentIndex: 0,
    previousIndex: null,
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const initialTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const totalWords = rotatingWords.length;

    const triggerCycle = () => {
      setState((prev) => {
        const nextIndex = (prev.currentIndex + 1) % totalWords;
        return { currentIndex: nextIndex, previousIndex: prev.currentIndex };
      });
    };

    initialTimeoutRef.current = setTimeout(() => {
      triggerCycle();
      intervalRef.current = setInterval(triggerCycle, WORD_FLIP_INTERVAL_MS);
    }, WORD_FLIP_INITIAL_DELAY_MS);

    return () => {
      if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.previousIndex === null) {
      return;
    }

    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
    }

    exitTimeoutRef.current = setTimeout(() => {
      setState((prev) => ({ ...prev, previousIndex: null }));
    }, WORD_FLIP_TRANSITION_MS);
  }, [state.previousIndex]);

  return (
    <span className="word-flip hidden sm:inline" role="text" aria-live="polite">
      <span className="word-flip-backdrop" aria-hidden />
      <span className="word-flip-inner">
        {rotatingWords.map((word, index) => {
          let wordClass = "word-flip-word";
          if (index === state.currentIndex) {
            wordClass += " is-active";
          } else if (index === state.previousIndex) {
            wordClass += " is-exit";
          } else {
            wordClass += " is-idle";
          }
          return (
            <span key={word} className={wordClass}>
              {word}
            </span>
          );
        })}
      </span>
      <span className="sr-only">{rotatingWords.join(", ")}</span>
    </span>
  );
}

export default function HeroContent({ heroHighlights }: HeroContentProps) {
  const highlightTypingStyles = {
    "--typing-width": `${highlightTypingText.length}ch`,
    "--typing-duration": "2.4s",
    "--typing-delay": "0s",
  } as CSSProperties;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <motion.div
      className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.85fr)] md:gap-10 lg:gap-16"
      data-reveal
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="space-y-6 max-w-xl md:pr-6" variants={childVariants}>
        <motion.span className="tag-pill" variants={childVariants}>
          Applied AI & Data Storytelling
        </motion.span>
        <motion.h1
          className="max-w-[32ch] text-[2rem] font-semibold leading-tight text-slate-900 sm:text-[2.15rem] md:text-[2.3rem] lg:text-[2.45rem] xl:text-[2.6rem]"
          variants={childVariants}
        >
          <span className="typing-intro">{typingIntroText}</span>{" "}
          <span className="typing-word text-gradient-animated" style={highlightTypingStyles}>
            {highlightTypingText}
          </span>
        </motion.h1>
        <motion.div
          className="text-xs uppercase tracking-[0.26em] text-slate-500"
          variants={childVariants}
        >
          <WordFlip />
        </motion.div>
        <motion.p className="text-lg text-slate-600 md:text-xl" variants={childVariants}>
          I build AI systems that connect live data to real insight using LangChain, RAG, and MCP to power IoT dashboards
          and retrieval-driven briefings for civic and media partners.
        </motion.p>
        <motion.div className="flex flex-wrap items-center gap-3" variants={childVariants}>
          <motion.a
            className="btn button-glow rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:shadow-xl"
            href="#projects"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            Explore work
          </motion.a>
          <motion.a
            className="btn button-glow rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700"
            href="#contact"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            Media inquiries
          </motion.a>
          <motion.a
            className="btn button-glow rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700"
            href="/Dev%20Patel%20Resume%20fall%202025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            View resume
          </motion.a>
        </motion.div>
        <motion.div className="divider" variants={childVariants} />
        <motion.ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3" variants={childVariants}>
          {heroHighlights.map((highlight) => (
            <motion.li key={highlight} className="leading-relaxed" variants={listItemVariants}>
              {highlight}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        className="parallax-element md:ml-auto md:mt-[30%]"
        data-parallax
        data-parallax-speed="0.18"
        data-reveal
        variants={portraitVariants}
      >
        <div className="hero-portrait-card glass-card md:ml-auto md:max-w-[240px]">
          <div className="hero-portrait-image">
            <img
              src={`${basePath}/profile.jpg`}
              alt="Portrait of Dave Patel"
              className="h-auto w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="hero-portrait-meta">
            <span className="hero-portrait-meta-title">Media Ready</span>
            <span>Based in Grand Forks, ND — open to features, panels, and strategic partnerships.</span>
            <span>Recent highlights include ICRTEC &#39;23 Best Paper and $500K+ in funded analytics initiatives.</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


