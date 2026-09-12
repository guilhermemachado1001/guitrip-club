// Este arquivo lê os dados de variáveis de ambiente (definidas na Vercel ou
// em .env.local), com os valores atuais como padrão de fallback. Assim,
// para trocar preço, link de checkout, Instagram ou WhatsApp no futuro,
// basta editar as variáveis no painel da Vercel — sem mexer em código nem
// abrir um editor. Veja o README para o passo a passo.

const env = (key: string, fallback: string) =>
  process.env[key]?.trim() || fallback;

export const site = {
  name: "GuiTRIP Club",
  brand: "GuiTRIP — Especialista em Viagens",
  domain: env("NEXT_PUBLIC_SITE_URL", "https://guitrip.com.br"),
  description:
    "Assinatura mensal ou anual com alertas, oportunidades e conhecimento sobre pontos, milhas e viagens, direto no seu WhatsApp.",
};

export const stats = {
  milesIssued: env("NEXT_PUBLIC_MILES_ISSUED", "+10 milhões"),
  milesIssuedLabel: "de milhas emitidas para clientes",
};

export const plans = {
  monthly: {
    id: "monthly",
    name: "Plano mensal",
    price: env("NEXT_PUBLIC_MONTHLY_PRICE", "R$ 49,90"),
    period: "/mês",
    checkoutUrl: env(
      "NEXT_PUBLIC_MONTHLY_CHECKOUT_URL",
      "https://www.asaas.com/c/xf4w4e6id59yuh8u"
    ),
    cta: "Assinar plano mensal",
    features: [
      "Acesso ao grupo do WhatsApp",
      "Alertas de oportunidades",
      "Dicas práticas de milhas e pontos",
      "Conhecimento e estratégias",
      "Cobrança recorrente",
      "Cancele quando quiser",
    ],
  },
  annual: {
    id: "annual",
    name: "Plano anual",
    tag: "Melhor custo-benefício",
    priceFrom: env("NEXT_PUBLIC_ANNUAL_PRICE_FROM", "R$ 598,80"),
    price: env("NEXT_PUBLIC_ANNUAL_PRICE", "R$ 499,90"),
    installment: env(
      "NEXT_PUBLIC_ANNUAL_INSTALLMENT",
      "ou até 12x de aprox. R$ 41,66"
    ),
    savings: env("NEXT_PUBLIC_ANNUAL_SAVINGS", "Economize R$ 98,90 no ano"),
    checkoutUrl: env(
      "NEXT_PUBLIC_ANNUAL_CHECKOUT_URL",
      "https://www.asaas.com/c/dxjbkgs039wgqnfv"
    ),
    cta: "Quero o plano anual",
    features: [
      "Tudo do plano mensal",
      "12 meses de acesso garantido",
      "Menor custo por mês",
      "Prioridade em alertas relâmpago",
    ],
    note: "O plano anual corresponde a 12 meses de acesso.",
  },
};

export const social = {
  instagram: {
    handle: env("NEXT_PUBLIC_INSTAGRAM_HANDLE", "@guim_machado"),
    url: env(
      "NEXT_PUBLIC_INSTAGRAM_URL",
      "https://instagram.com/guim_machado"
    ),
  },
  whatsapp: {
    display: env("NEXT_PUBLIC_WHATSAPP_DISPLAY", "(11) 99480-8115"),
    url: env("NEXT_PUBLIC_WHATSAPP_URL", "https://wa.me/5511994808115"),
    ctaMessage: env(
      "NEXT_PUBLIC_WHATSAPP_CTA_URL",
      "https://wa.me/5511994808115?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20GuiTRIP%20Club."
    ),
  },
};
