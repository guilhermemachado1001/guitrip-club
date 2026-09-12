"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Estava cotado R$22.000,00 nem nossas passagens direto no site da cia aérea. O Gui conseguiu emitir por R$15.500,00 com milhas — uma economia enorme pra mim e pro meu esposo. Somos muito gratos a ele por isso!",
    context: "Casal • viagem internacional em executiva",
    saved: "Economia de R$ 6.500",
  },
  {
    quote:
      "Estava pesquisando uma passagem nacional que estava R$1.500,00 na Latam e o Gui conseguiu essa mesma passagem por R$980,00 reais, uma baita economia!",
    context: "Viagem nacional",
    saved: "Economia de R$ 520",
  },
  {
    quote:
      "O Gui me ajudou na troca do meu cartão de crédito e também em aproveitar uma transferência bonificada muito boa e multiplicar meus pontos parados. Sozinho eu nem saberia que dava pra fazer isso.",
    context: "Troca de cartão • transferência bonificada",
    saved: null,
  },
  {
    quote:
      "Pesquisei por uma passagem em executiva de GRU para Madrid que estava uma fortuna!! O Gui conseguiu emitir essa passagem para mim por menos de R$6.000,00!",
    context: "Classe executiva • GRU → Madrid",
    saved: "Menos de R$ 6.000 na executiva",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="resultados" className="bg-paper py-20 md:py-28">
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Resultados de quem já usou as estratégias
            </h2>
            <p className="mt-4 text-navy/65">
              Alguns exemplos reais de economia conquistada com as dicas e
              alertas do GuiTRIP.
            </p>
          </Reveal>

          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy/5"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Próximo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy/5"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="[scrollbar-width:none] [-ms-overflow-style:none] mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.quote}
              className="min-w-[300px] max-w-[340px] shrink-0 snap-start rounded-2xl border border-navy/10 bg-white p-6 shadow-card"
            >
              <Quote className="text-gold" size={22} />
              <p className="mt-4 text-[15px] leading-relaxed text-navy/80">
                “{t.quote}”
              </p>
              {t.saved && (
                <p className="mt-4 inline-flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">
                  {t.saved}
                </p>
              )}
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy/40">
                {t.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
