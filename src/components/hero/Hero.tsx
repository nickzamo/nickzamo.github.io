"use client";

import { MotionConfig, motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import type { Dictionary } from "@/data/translations";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="relative overflow-hidden pt-16">
        <Waves />
        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.1 }}
            className="order-2 lg:order-1"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>{t.eyebrow}</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl"
            >
              <span className="from-cyan to-violet bg-gradient-to-r bg-clip-text text-transparent">
                Building
              </span>{" "}
              Digital Solutions
            </motion.h1>
            <motion.p variants={fadeUp} className="text-fg-muted mt-6 max-w-xl text-lg">
              {t.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">{t.ctaProjects} →</Button>
              <Button href="#contact" variant="ghost">
                {t.ctaContact}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative order-1 mx-auto w-full max-w-[19rem] sm:max-w-sm lg:order-2"
          >
            <PhotoFrame alt={t.photoAlt} />
            <div className="bg-surface/90 absolute -bottom-5 -left-4 rounded-lg border border-white/15 px-4 py-2.5 shadow-[0_0_30px_-10px_var(--color-violet)] backdrop-blur sm:-left-8">
              <p className="text-sm font-semibold">{t.badgeName}</p>
              <p className="text-cyan font-mono text-xs">{t.badgeRole}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

/** Marco angular con borde en degradado. La foto se muestra sin modificaciones. */
function PhotoFrame({ alt }: { alt: string }) {
  return (
    <div className="from-cyan via-violet to-magenta clip-angular bg-gradient-to-br p-[2px]">
      <div className="clip-angular bg-surface relative aspect-[3/4]">
        <Image
          src="/images/profile.webp"
          alt={alt}
          fill
          priority
          sizes="(min-width: 640px) 24rem, 19rem"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function Waves() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full opacity-60"
    >
      <defs>
        <linearGradient id="wave" x1="0" x2="1">
          <stop offset="0" stopColor="#00d9ff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#a855f7" stopOpacity="0.6" />
          <stop offset="1" stopColor="#d946ef" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="wave-line"
          style={{ animationDelay: `${i * -4}s` }}
          d={`M0 ${200 + i * 24} C 240 ${130 + i * 24}, 480 ${270 + i * 24}, 720 ${200 + i * 24} S 1200 ${130 + i * 24}, 1440 ${200 + i * 24}`}
          fill="none"
          stroke="url(#wave)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
