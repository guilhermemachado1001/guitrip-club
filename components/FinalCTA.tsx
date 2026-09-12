import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-center md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue/15 blur-3xl"
        aria-hidden
      />
      <Reveal className="container-content relative">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          Uma boa oportunidade pode valer muito mais que a sua assinatura.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70">
          Entre no GuiTRIP Club e transforme alertas, conhecimento e
          estratégia em viagens melhores.
        </p>
        <a
          href="#planos"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy shadow-soft transition-transform hover:scale-[1.02]"
        >
          Escolher meu plano
        </a>
      </Reveal>
    </section>
  );
}
