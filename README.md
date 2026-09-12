# GuiTRIP Club — Landing Page

Landing page de alta conversão para a assinatura GuiTRIP Club, construída com
Next.js 14 (App Router), TypeScript e Tailwind CSS.

## Estrutura de arquivos

```
guitrip-club/
├── app/
│   ├── layout.tsx        # Metadata, SEO, Open Graph, fontes
│   ├── page.tsx           # Monta as seções da home
│   ├── globals.css        # Estilos globais + Tailwind
│   ├── robots.ts          # robots.txt gerado
│   └── sitemap.ts         # sitemap.xml gerado
├── components/
│   ├── Header.tsx          # Navbar sticky + menu mobile
│   ├── Hero.tsx             # Seção principal com imagem de fundo
│   ├── Benefits.tsx         # "O que você recebe"
│   ├── Authority.tsx        # Seção de autoridade (+10M milhas)
│   ├── HowItWorks.tsx       # 4 passos
│   ├── Knowledge.tsx        # Cards de exemplo do grupo
│   ├── Pricing.tsx          # Planos mensal e anual
│   ├── FAQ.tsx               # Perguntas frequentes (accordion)
│   ├── FinalCTA.tsx          # Chamada final
│   ├── Footer.tsx            # Rodapé com contatos
│   └── WhatsAppFloat.tsx     # Botão flutuante (mobile)
├── lib/
│   └── config.ts             # Preços, links do Asaas, Instagram, WhatsApp
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── guitrip-hero.png      # ⚠️ SUBSTITUA pela sua imagem real
│       ├── og-cover.png          # Imagem de compartilhamento (OG)
│       └── apple-touch-icon.png
├── tailwind.config.ts     # Paleta de cores da marca
├── next.config.js
├── tsconfig.json
└── package.json
```

## Imagem principal do Hero

A versão atual da imagem (sem texto sobreposto, com fade transparente no
lado esquerdo) está em `public/images/guitrip-hero.png`. Ela é usada de duas
formas diferentes, dependendo do tamanho de tela:

- **Desktop:** a imagem cobre a seção inteira como fundo. Como o próprio
  arquivo já vem com uma transparência que revela o azul-marinho por trás,
  não precisamos de nenhum degradê extra por cima — o texto fica em branco,
  posicionado sobre essa área que já nasceu transparente.
- **Mobile:** uma imagem paisagem, cortada (`object-fit: cover`) numa tela
  estreita e alta, perderia a maior parte da cena. Por isso, no celular a
  foto aparece inteira, em largura total, como uma espécie de banner no
  topo — e o texto vem logo abaixo, num bloco azul-marinho sólido.

Se quiser ajustar o enquadramento no desktop (mostrar mais ou menos do lado
direito da foto), o valor a mexer é `object-[62%_center]` dentro de
`components/Hero.tsx`.

`public/images/og-cover.png` já foi gerado a partir dessa mesma foto
(recorte 1200×630, com o fundo transparente preenchido de azul-marinho) para
o card de compartilhamento no WhatsApp/Instagram.

## Tipografia

- **Fraunces** (serifada, editorial) para títulos — dá uma voz própria e
  premium, fugindo da dupla genérica Inter/Space Grotesk usada em qualquer
  landing page de SaaS.
- **Manrope** para textos de apoio e interface — limpa e discreta, sem
  competir com os títulos.

Ambas carregadas via `next/font/google` em `app/layout.tsx` (self-hosted
automaticamente pelo Next — sem chamada externa em produção).

## Como rodar localmente

Pré-requisitos: [Node.js 18+](https://nodejs.org) instalado.

```bash
# 1. instale as dependências
npm install

# 2. rode o servidor de desenvolvimento
npm run dev

# 3. abra no navegador
http://localhost:3000
```

## Conectar GitHub e Vercel pelo terminal (uma vez só)

Isso precisa ser feito no terminal do **seu computador**, porque envolve
login na sua conta do GitHub e da Vercel — eu não tenho acesso ao seu
terminal daqui. Rode estes comandos dentro da pasta `guitrip-club/`, depois
de extrair o zip:

```bash
# 1. Instale a CLI do GitHub (se ainda não tiver) e faça login
#    macOS: brew install gh   |   Windows: winget install GitHub.cli
gh auth login

# 2. Inicialize o git e crie o repositório remoto direto pelo terminal
git init
git add .
git commit -m "GuiTRIP Club — versão inicial"
gh repo create guitrip-club --private --source=. --remote=origin --push

# 3. Instale a CLI da Vercel e faça login
npm install -g vercel
vercel login

# 4. Conecte esta pasta a um projeto Vercel (só precisa rodar uma vez)
vercel link

# 5. A partir de agora, para publicar, é só rodar:
vercel --prod
```

Depois desse setup inicial, qualquer alteração no código pode ser publicada
com apenas:
```bash
git add . && git commit -m "ajustes" && git push   # atualiza o GitHub
vercel --prod                                       # publica na Vercel
```

Se preferir não usar a CLI do GitHub (`gh`), crie o repositório manualmente
em github.com/new e depois rode:
```bash
git remote add origin https://github.com/SEU-USUARIO/guitrip-club.git
git branch -M main
git push -u origin main
```

**Alternativa sem terminal:** acesse [vercel.com](https://vercel.com),
clique em **Add New → Project**, importe o repositório do GitHub e clique
em **Deploy** — a Vercel detecta o Next.js automaticamente, sem configuração
extra.

## Como conectar o domínio guitrip.com.br

1. No painel do seu projeto na Vercel, vá em **Settings → Domains**.
2. Digite `guitrip.com.br` (e opcionalmente `www.guitrip.com.br`) e clique
   em **Add**.
3. A Vercel vai mostrar os registros de DNS que você precisa configurar no
   painel do seu registrador de domínio (normalmente um registro `A`
   apontando para `76.76.21.21` e/ou um `CNAME` para `cname.vercel-dns.com`,
   mas siga exatamente o que a Vercel mostrar na hora, pois pode mudar).
4. Aguarde a propagação do DNS (pode levar de alguns minutos a algumas
   horas). A Vercel emite o certificado SSL automaticamente assim que o DNS
   estiver correto.
5. Depois de conectado, atualize `metadataBase` em `app/layout.tsx` e as
   URLs em `app/robots.ts` / `app/sitemap.ts` caso o domínio final seja
   diferente do que já está configurado (`https://guitrip.com.br`).

## Editar preços, links e contatos direto na Vercel (sem mexer em código)

Todo dado que muda com frequência — preços, links do Asaas, Instagram,
WhatsApp — agora vem de **variáveis de ambiente**, com os valores atuais em
`lib/config.ts` funcionando como padrão de segurança caso alguma variável
não esteja definida. Isso significa que, depois do primeiro deploy, você
pode atualizar qualquer um desses dados **direto no painel da Vercel**, sem
editar arquivo nenhum:

1. Acesse o projeto em [vercel.com](https://vercel.com) → aba **Settings**
   → **Environment Variables**.
2. Adicione (ou edite) a variável que quiser mudar — por exemplo, para
   atualizar o preço do plano anual, crie/edite
   `NEXT_PUBLIC_ANNUAL_PRICE` com o valor `R$ 549,90`.
3. Marque os três ambientes (**Production**, **Preview**, **Development**)
   ou só o que fizer sentido.
4. Clique em **Save**.
5. Vá em **Deployments**, abra os "..." do último deploy e clique em
   **Redeploy** (sem precisar dar `git push` de novo) — a Vercel reconstrói
   o site já com o novo valor.

A lista completa de variáveis disponíveis está em `.env.local.example`
(preço mensal e anual, links de checkout do Asaas, Instagram, WhatsApp e a
URL do site). Se quiser testar um valor diferente na sua máquina antes de
subir, copie esse arquivo para `.env.local` e rode `npm run dev` de novo.

Coisas que **não** estão em variável de ambiente (por serem conteúdo de
página, não configuração) continuam em `lib/config.ts` ou direto nos
componentes: textos de benefícios, perguntas do FAQ, passos do "como
funciona", etc.

## Próximos passos sugeridos

Depois da primeira versão no ar, vale evoluir em etapas (não tudo de uma
vez):
1. Refinar o Hero com a imagem final.
2. Revisar a seção de planos pensando em conversão (testes A/B de copy).
3. Passar o mobile a limpo, tela por tela.
4. Auditoria de performance (Lighthouse) e SEO.
5. Deixar 100% production-ready para a Vercel (analytics, Meta Pixel,
   Google Analytics, tracking de conversão nos botões de checkout).
