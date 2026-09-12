"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Escolha seu plano",
    desc: "Mensal ou anual — você decide o que faz mais sentido agora.",
  },
  {
    n: "02",
    title: "Faça o pagamento",
    desc: "Checkout rápido e seguro, direto pelo link do plano escolhido.",
  },
  {
    n: "03",
    title: "Entre no grupo do WhatsApp",
    desc: "Acesso liberado no canal que você já usa todos os dias.",
  },
  {
    n: "04",
    title: "Receba, aprenda e aproveite",
    desc: "Alertas, conhecimento e oportunidades reais de milhas e pontos.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "start 0.2"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="como-funciona" className="bg-white py-20 md:py-28">
      <div className="container-content">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Como funciona
        </h2>

        <div ref={sectionRef} className="relative mt-12">
          {/* Track + progressively-drawn line, aligned with the step
              numbers. Desktop only — on narrower layouts the steps wrap
              onto multiple rows, where a single line wouldn't line up. */}
          <div
            className="absolute inset-x-0 top-[26px] hidden h-px bg-navy/10 lg:block"
            aria-hidden
          />
          <motion.div
            className="absolute left-0 top-[26px] hidden h-px origin-left bg-blue lg:block"
            style={{
              right: 0,
              scaleX: reduceMotion ? 1 : lineScale,
            }}
            aria-hidden
          />

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.09} className="relative">
                <span className="relative z-10 bg-white pr-3 font-display text-4xl font-semibold text-blue/40">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
