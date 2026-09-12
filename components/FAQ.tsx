"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "Preciso entender de milhas para entrar?",
    a: "Não. O GuiTRIP Club foi pensado tanto para quem já entende do assunto quanto para quem está começando agora. As dicas e alertas são explicados de forma simples e direta.",
  },
  {
    q: "Quantos alertas vou receber?",
    a: "A quantidade varia de acordo com as oportunidades do mercado. O foco é qualidade, não volume: preferimos enviar menos alertas e mais relevantes do que lotar seu WhatsApp.",
  },
  {
    q: "É só promoção ou também tem conteúdo?",
    a: "Os dois. Além dos alertas de oportunidades, você recebe dicas práticas e conhecimento sobre cartões, pontos, milhas e estratégias de viagem.",
  },
  {
    q: "Onde recebo os alertas?",
    a: "Tudo acontece em um grupo exclusivo no WhatsApp — o canal que você já usa no dia a dia, sem precisar instalar outro aplicativo.",
  },
  {
    q: "Posso cancelar o plano mensal?",
    a: "Sim. O plano mensal é uma assinatura recorrente e você pode cancelar quando quiser, sem multa ou burocracia.",
  },
  {
    q: "Como funciona o plano anual?",
    a: "O plano anual dá acesso a 12 meses do GuiTRIP Club por um valor fixo, com desconto em relação ao plano mensal. Ele pode ser parcelado em até 12x — o parcelamento é apenas uma facilidade de pagamento do valor total, não uma cobrança mensal recorrente.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-paper py-20 md:py-28">
      <div className="container-content">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Perguntas frequentes
        </h2>

        <Reveal className="mx-auto mt-10 max-w-2xl divide-y divide-navy/10 border-t border-navy/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-center gap-4 py-5 text-center"
                >
                  <span className="font-display text-base font-semibold text-navy sm:text-lg">
                    {faq.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`shrink-0 text-navy/50 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 pb-5 text-center text-sm leading-relaxed text-navy/65">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
