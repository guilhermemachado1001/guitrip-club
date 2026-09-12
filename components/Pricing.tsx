"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Compass, Briefcase } from "lucide-react";
import { plans, social } from "@/lib/config";
import Reveal from "@/components/Reveal";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      className={`mt-0.5 shrink-0 ${className}`}
    >
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.08.99-2.37c.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.61-.07.16-.19.68-.8.87-1.07.19-.28.37-.23.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

const waUrl = (message: string) =>
  `${social.whatsapp.url}?text=${encodeURIComponent(message)}`;

export default function Pricing() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 330, behavior: "smooth" });
  };

  return (
    <section id="planos" className="bg-white py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Escolha seu plano
          </h2>
          <p className="mt-4 text-navy/65">
            Cancele o mensal quando quiser.
            <br />
            Ou garanta o ano inteiro por um custo menor por mês.
          </p>
        </div>

        <div className="mt-10 flex justify-end gap-3">
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

        <div
          ref={trackRef}
          className="[scrollbar-width:none] [-ms-overflow-style:none] mt-6 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
        >
          {/* Monthly */}
          <Reveal className="w-[300px] shrink-0 snap-start sm:w-[320px]">
            <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-paper p-8">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/25">
                Assinatura
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                {plans.monthly.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-navy">
                  {plans.monthly.price}
                </span>
                <span className="text-base text-navy/50">
                  {plans.monthly.period}
                </span>
              </div>

              <div className="my-6 border-t border-dashed border-navy/15" />

              <ul className="flex-1 space-y-3.5">
                {plans.monthly.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-navy/70"
                  >
                    <CheckIcon className="text-blue" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plans.monthly.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {plans.monthly.cta}
              </a>
            </div>
          </Reveal>

          {/* Annual - highlighted */}
          <Reveal
            delay={0.08}
            className="w-[300px] shrink-0 snap-start sm:w-[320px]"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy p-8 shadow-soft">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
                aria-hidden
              />
              <span className="relative font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                Assinatura · destaque
              </span>
              <span className="relative mt-3 inline-flex w-fit items-center rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-navy">
                {plans.annual.tag}
              </span>

              <h3 className="relative mt-4 font-display text-2xl font-semibold text-white">
                {plans.annual.name}
              </h3>

              <div className="relative mt-4">
                <span className="text-sm text-white/45 line-through">
                  {plans.annual.priceFrom}
                </span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-white">
                    {plans.annual.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/60">
                  {plans.annual.installment}
                </p>
                <p className="mt-2 inline-flex items-center rounded-full bg-green/15 px-3 py-1 text-xs font-semibold text-green">
                  {plans.annual.savings}
                </p>
              </div>

              <div className="relative my-6 border-t border-dashed border-white/15" />

              <ul className="relative flex-1 space-y-3.5">
                {plans.annual.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <CheckIcon className="text-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plans.annual.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-7 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-[1.02]"
              >
                {plans.annual.cta}
              </a>

              <p className="relative mt-3 text-xs leading-relaxed text-white/45">
                {plans.annual.note}
              </p>
            </div>
          </Reveal>

          {/* Consultoria */}
          <Reveal
            delay={0.16}
            className="w-[300px] shrink-0 snap-start sm:w-[320px]"
          >
            <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-paper p-8">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-green">
                Consultoria pontual
              </span>
              <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green">
                <Compass size={20} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                Consultoria individual
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">
                Uma sessão só sua, de até 2 horas, 100% direcionada ao seu
                objetivo — aprender a estratégia, planejar uma viagem
                específica ou tirar dúvidas pontuais.
              </p>

              <div className="my-6 border-t border-dashed border-navy/15" />

              <ul className="flex-1 space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-navy/70">
                  <CheckIcon className="text-green" />
                  Até 2 horas, no formato que você precisar
                </li>
                <li className="flex items-start gap-3 text-sm text-navy/70">
                  <CheckIcon className="text-green" />
                  Foco total no seu objetivo de viagem
                </li>
                <li className="flex items-start gap-3 text-sm text-navy/70">
                  <CheckIcon className="text-green" />
                  Perguntas e respostas em tempo real
                </li>
              </ul>

              <a
                href={waUrl(
                  "Olá! Tenho interesse na Consultoria individual do GuiTRIP."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <WhatsAppIcon className="text-green" />
                Falar sobre a consultoria
              </a>
            </div>
          </Reveal>

          {/* Gestão de milhas */}
          <Reveal
            delay={0.24}
            className="w-[300px] shrink-0 snap-start sm:w-[320px]"
          >
            <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-paper p-8">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A9760A]">
                Feito por mim
              </span>
              <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-[#A9760A]">
                <Briefcase size={20} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                Gestão de milhas
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">
                Eu cuido de tudo por você: estratégia de acúmulo,
                transferências e emissões — do planejamento até a passagem
                emitida.
              </p>

              <div className="my-6 border-t border-dashed border-navy/15" />

              <ul className="flex-1 space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-navy/70">
                  <CheckIcon className="text-[#A9760A]" />
                  Gestão contínua dos seus pontos e milhas
                </li>
                <li className="flex items-start gap-3 text-sm text-navy/70">
                  <CheckIcon className="text-[#A9760A]" />
                  Emissões feitas por mim, de ponta a ponta
                </li>
                <li className="flex items-start gap-3 text-sm text-navy/70">
                  <CheckIcon className="text-[#A9760A]" />
                  Você só se preocupa em viajar
                </li>
              </ul>

              <a
                href={waUrl(
                  "Olá! Tenho interesse na Gestão de milhas do GuiTRIP."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <WhatsAppIcon className="text-[#A9760A]" />
                Falar sobre a gestão
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
