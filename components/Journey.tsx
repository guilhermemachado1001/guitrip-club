import Image from "next/image";
import Reveal from "@/components/Reveal";

const photos = [
  "/images/journey-1.jpg",
  "/images/journey-2.jpg",
  "/images/journey-3.jpg",
  "/images/journey-4.jpg",
  "/images/journey-5.jpg",
  "/images/journey-6.jpg",
];

export default function Journey() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue">
            Quem está por trás do GuiTRIP
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
            Não é teoria. Já rodei o mundo pra aprender isso na prática.
          </h2>
          <p className="mt-5 leading-relaxed text-navy/70">
            Já visitei mais de 21 países usando pontos, milhas e as mesmas
            estratégias que compartilho no Club. Cada alerta e cada dica que
            chega no seu WhatsApp já foi testado por mim, na prática, antes
            de virar conteúdo.
          </p>
          <div className="mt-8 inline-flex items-baseline gap-2 rounded-2xl border border-navy/10 bg-paper px-6 py-4">
            <span className="font-display text-4xl font-semibold text-navy">
              21+
            </span>
            <span className="text-sm text-navy/60">países visitados</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-3">
            {photos.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="Viagem do Guiga"
                  fill
                  sizes="(min-width: 1024px) 220px, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
