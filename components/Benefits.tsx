import { BellRing, PlaneTakeoff, CreditCard, Lightbulb, Zap, Stamp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

const items: {
  title: string;
  desc: string;
  icon: LucideIcon;
  accent: string;
}[] = [
  {
    title: "Alertas relevantes",
    desc: "Transferências, compra de pontos e oportunidades relâmpago.",
    icon: BellRing,
    accent: "bg-blue/10 text-blue",
  },
  {
    title: "Emissões promocionais",
    desc: "Passagens com milhas e boas oportunidades de resgate.",
    icon: PlaneTakeoff,
    accent: "bg-green/10 text-green",
  },
  {
    title: "Estratégia de acúmulo",
    desc: "Cartões, compras bonificadas e campanhas.",
    icon: CreditCard,
    accent: "bg-gold/15 text-[#A9760A]",
  },
  {
    title: "Conhecimento prático",
    desc: "Dicas simples e aplicáveis, sem enrolação.",
    icon: Lightbulb,
    accent: "bg-blue-light/15 text-[#0F84C2]",
  },
  {
    title: "Velocidade",
    desc: "Algumas oportunidades duram apenas horas.",
    icon: Zap,
    accent: "bg-navy/5 text-navy",
  },
  {
    title: "Curadoria",
    desc: "Nem toda promoção vale a pena — a gente filtra.",
    icon: Stamp,
    accent: "bg-green/10 text-green",
  },
];

export default function Benefits() {
  return (
    <section id="recebe" className="bg-paper pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
            Não é só um grupo de promoções. É uma central de inteligência em
            milhas.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="group h-full rounded-2xl border border-navy/8 bg-white p-6 shadow-card transition-shadow hover:shadow-soft">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.accent}`}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
