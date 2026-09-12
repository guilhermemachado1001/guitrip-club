"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { stats } from "@/lib/config";

function HeroCopy({ theme }: { theme: "light" | "dark" }) {
  const isDark = theme === "dark";

  return (
    <div className="max-w-xl">
      <p
        className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold ${
          isDark
            ? "border-white/15 bg-white/5 text-blue-light"
            : "border-navy/10 bg-blue/5 text-blue"
        }`}
      >
        Oportunidade + conhecimento, no momento certo
      </p>

      <h1
        className={`font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.1rem] ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        Seus pontos podem valer muito mais.
      </h1>

      <p
        className={`mt-5 max-w-lg text-base leading-relaxed sm:text-lg ${
          isDark ? "text-white/85" : "text-navy/70"
        }`}
      >
        Entre no GuiTRIP Club e receba no WhatsApp alertas de promoções,
        emissões, transferências bonificadas e oportunidades — junto com
        dicas e conhecimento para tomar decisões melhores com suas milhas.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="#planos"
          className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-soft transition-transform hover:scale-[1.02]"
        >
          Quero entrar no GuiTRIP Club
        </a>
        <a
          href="#recebe"
          className={`inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors ${
            isDark
              ? "border-white/25 text-white hover:bg-white/10"
              : "border-navy/20 bg-white text-navy hover:bg-navy/5"
          }`}
        >
          Ver o que vou receber
        </a>
      </div>

      <dl
        className={`mt-11 grid grid-cols-3 gap-4 border-t pb-1 pt-6 sm:gap-8 ${
          isDark ? "border-white/10" : "border-navy/10"
        }`}
      >
        <div>
          <dt
            className={`font-display text-xl font-semibold sm:text-2xl ${isDark ? "text-white" : "text-navy"}`}
          >
            {stats.milesIssued}
          </dt>
          <dd
            className={`mt-1 text-xs sm:text-sm ${isDark ? "text-white/60" : "text-navy/55"}`}
          >
            {stats.milesIssuedLabel}
          </dd>
        </div>
        <div>
          <dt
            className={`font-display text-xl font-semibold sm:text-2xl ${isDark ? "text-white" : "text-navy"}`}
          >
            WhatsApp
          </dt>
          <dd
            className={`mt-1 text-xs sm:text-sm ${isDark ? "text-white/60" : "text-navy/55"}`}
          >
            alertas no canal que você já usa
          </dd>
        </div>
        <div>
          <dt
            className={`font-display text-xl font-semibold sm:text-2xl ${isDark ? "text-white" : "text-navy"}`}
          >
            Curadoria
          </dt>
          <dd
            className={`mt-1 text-xs sm:text-sm ${isDark ? "text-white/60" : "text-navy/55"}`}
          >
            menos ruído, mais oportunidade
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default function Hero() {
  const alt =
    "Guiga, especialista em viagens da GuiTRIP, com mala amarela e ícones como Torre Eiffel, Torre de Pisa, Big Ben e Estátua da Liberdade";

  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // As the hero scrolls up and out of view, the copy fades and lifts
  // slightly — like leaving the runway behind. Purely scroll-linked: if the
  // user stops scrolling, the animation stops exactly where it is.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  const style = reduceMotion ? {} : { opacity: textOpacity, y: textY };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden bg-paper"
    >
      {/* Mobile: photo runs full width as a banner, copy sits below it on
          solid navy. */}
      <div className="md:hidden">
        <div className="pt-16">
          <Image
            src="/images/guitrip-hero.png"
            alt={alt}
            width={1672}
            height={941}
            priority
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <div className="bg-navy pb-12 pt-8">
          <div className="container-content">
            <motion.div style={style}>
              <HeroCopy theme="dark" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop: contained within the same centered width as every other
          section — the photo lives in a rounded card instead of bleeding
          to the screen edge, so there's matching white space on both
          sides. */}
      <div className="mx-auto hidden max-w-[1440px] px-5 pb-8 pt-24 sm:px-8 md:block">
        <div className="relative min-h-[78vh] overflow-hidden rounded-[2rem] shadow-soft">
          <div className="absolute inset-0">
            <Image
              src="/images/guitrip-hero.png"
              alt={alt}
              fill
              priority
              sizes="(min-width: 768px) 1440px, 100vw"
              className="object-cover object-[78%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-paper from-0% via-paper/90 via-[52%] to-transparent" />
          <div className="relative flex min-h-[78vh] items-center px-10 py-16 lg:px-16">
            <motion.div style={style}>
              <HeroCopy theme="light" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
