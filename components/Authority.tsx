"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { stats } from "@/lib/config";
import AnimatedCounter from "@/components/AnimatedCounter";

const points = [
  "quando transferir pontos",
  "como avaliar uma emissão",
  "quando uma promoção vale a pena",
  "como acumular com eficiência",
];

function Blobs() {
  return (
    <>
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-blue/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-green/10 blur-3xl"
        aria-hidden
      />
    </>
  );
}

function Content() {
  return (
    <div className="container-content relative grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
      <div>
        <span className="font-display text-6xl font-semibold text-gold sm:text-7xl">
          <AnimatedCounter value={stats.milesIssued.replace("+", "")} />
          <span className="align-top text-3xl sm:text-4xl">+</span>
        </span>
        <p className="mt-2 text-sm text-white/60 sm:text-base">
          {stats.milesIssuedLabel}
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
          Mais do que economizar: você começa a entender o jogo.
        </h2>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm text-white/75 sm:text-base"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-light" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Authority() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const numberScale = useTransform(scrollYProgress, [0, 0.35], [0.8, 1]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.3], [0.25, 1]);
  const rightOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const rightY = useTransform(scrollYProgress, [0.15, 0.5], [28, 0]);

  // Reduced motion: no scroll-jacking pin, no scale/slide — just the
  // section, static, content fully visible immediately.
  if (reduceMotion) {
    return (
      <section className="relative overflow-hidden bg-navy py-20 md:py-28">
        <Blobs />
        <Content />
      </section>
    );
  }

  return (
    <section ref={trackRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-navy">
        <Blobs />
        <div className="container-content relative grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
          <motion.div style={{ scale: numberScale, opacity: numberOpacity }}>
            <span className="font-display text-6xl font-semibold text-gold sm:text-7xl">
              <AnimatedCounter value={stats.milesIssued.replace("+", "")} />
              <span className="align-top text-3xl sm:text-4xl">+</span>
            </span>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              {stats.milesIssuedLabel}
            </p>
          </motion.div>

          <motion.div style={{ opacity: rightOpacity, y: rightY }}>
            <h2 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Mais do que economizar: você começa a entender o jogo.
            </h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-white/75 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-light" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
