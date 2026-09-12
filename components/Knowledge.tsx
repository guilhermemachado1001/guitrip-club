"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { CheckCheck } from "lucide-react";

const messages = [
  { text: "Ótima transferência de pontos somente hoje para a Latam. Recomendo a transferência!!", time: "09:14" },
  {
    text: "Oportunidade única de executiva para Doha com a QSuites, segue datas disponíveis em Maio de 2027...",
    time: "12:47",
  },
  { text: "Novo cartão no mercado e com ótima pontuação. Se você ainda está em dúvida sobre qual cartão é o melhor para você, me chame no particular!", time: "18:32" },
];

// Each message gets its own slice of the scroll progress to arrive in.
const ranges: [number, number][] = [
  [0.06, 0.28],
  [0.38, 0.6],
  [0.7, 0.92],
];

function PhoneHeader() {
  return (
    <div className="flex items-center gap-2.5 border-b border-navy/10 bg-white px-4 py-3">
      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/images/guiga-avatar.png"
          alt="GuiTRIP"
          fill
          sizes="32px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-display text-sm font-semibold text-navy">
          GuiTRIP
        </p>
        <p className="text-[11px] text-green">online</p>
      </div>
    </div>
  );
}

function Bubble({ text, time }: { text: string; time: string }) {
  return (
    <div className="relative max-w-[85%] rounded-xl rounded-tl-sm bg-[#dcf8c6] px-3.5 py-2.5 shadow-sm">
      <p className="text-[14px] leading-snug text-[#111b21]">{text}</p>
      <div className="mt-1.5 flex items-center justify-end gap-1">
        <span className="text-[10px] text-[#667781]">{time}</span>
        <CheckCheck size={13} className="text-[#53bdeb]" />
      </div>
    </div>
  );
}

function ScrollBubble({
  text,
  time,
  progress,
  range,
}: {
  text: string;
  time: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [16, 0]);
  const scale = useTransform(progress, range, [0.92, 1]);

  return (
    <motion.div style={{ opacity, y, scale }} className="origin-top-left">
      <Bubble text={text} time={time} />
    </motion.div>
  );
}

export default function Knowledge() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const heading = (
    <div className="max-w-xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        O que chega no seu WhatsApp
      </h2>
      <p className="mt-4 text-navy/65">
        O grupo mistura velocidade, curadoria, conteúdo e educação — não é só
        uma enxurrada de promoções.
      </p>
    </div>
  );

  // Reduced motion: no pin, no scroll-jacking — just the phone with every
  // message already there.
  if (reduceMotion) {
    return (
      <section className="bg-paper py-20 md:py-28">
        <div className="container-content">
          {heading}
          <div className="mx-auto mt-10 w-[300px] overflow-hidden rounded-[2.5rem] border-8 border-navy bg-[#e5ddd5] shadow-soft sm:w-[320px]">
            <PhoneHeader />
            <div className="flex flex-col gap-3 p-4 pb-6">
              {messages.map((m) => (
                <Bubble key={m.text} text={m.text} time={m.time} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      className="relative h-[160vh] bg-paper md:h-[220vh]"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="container-content w-full">{heading}</div>

        <div className="mx-auto mt-8 w-[280px] overflow-hidden rounded-[2.5rem] border-8 border-navy bg-[#e5ddd5] shadow-soft sm:w-[320px]">
          <PhoneHeader />
          <div className="flex min-h-[320px] flex-col gap-3 p-4 pb-6">
            {messages.map((m, i) => (
              <ScrollBubble
                key={m.text}
                text={m.text}
                time={m.time}
                progress={scrollYProgress}
                range={ranges[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
