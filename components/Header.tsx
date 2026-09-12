"use client";

import { useEffect, useState } from "react";
import { plans } from "@/lib/config";

const links = [
  { href: "#recebe", label: "O que você recebe" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(7,27,51,0.08)]" : ""
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-navy md:text-xl">
            Gui<span className="text-blue">TRIP</span>{" "}
            <span className="text-[#A9760A]">Club</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={plans.annual.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.03] md:inline-block"
        >
          Faça parte do GuiTRIP Club
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white md:hidden">
          <div className="container-content flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-navy/80 hover:bg-navy/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={plans.annual.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy"
            >
              Faça parte do GuiTRIP Club
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
