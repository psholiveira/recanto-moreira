<div align="center">

# 🌿 Recanto Moreira

**Site institucional de uma chácara de temporada em Village Jacumã, Conde/PB — com reservas via WhatsApp, SEO estruturado e rastreamento de conversão.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Dependencies](https://img.shields.io/badge/dependências-zero-success)](#-tecnologias)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel&logoColor=white)](https://recanto-moreira.vercel.app/)

[**Ver site no ar →**](https://recanto-moreira.vercel.app/)

</div>

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar localmente](#-como-executar-localmente)
- [Arquitetura da página](#-arquitetura-da-página)
- [Fluxo de reserva](#-fluxo-de-reserva)
- [SEO e analytics](#-seo-e-analytics)
- [Personalização](#-personalização)
- [Deploy](#-deploy)
- [Roadmap](#-roadmap)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 📖 Sobre o projeto

O **Recanto Moreira** é uma chácara para aluguel de temporada em Village Jacumã (Conde/PB), a cinco minutos da Praia de Jacumã. Este repositório contém o site institucional do imóvel: uma landing page única que apresenta a estrutura, a galeria de fotos e vídeos, os depoimentos de hóspedes e converte o visitante em contato direto pelo WhatsApp.

O projeto foi construído deliberadamente **sem framework, sem build step e sem dependências** — três arquivos e uma pasta de mídia. Para uma landing page de conversão, isso significa carregamento rápido, deploy trivial e manutenção que qualquer pessoa consegue fazer abrindo um editor de texto.

**Decisões de projeto:**

- **Conversão como objetivo único** — não há carrinho, login ou pagamento. Todo caminho leva ao WhatsApp, e cada clique é rastreado como conversão no Google Ads.
- **SEO local levado a sério** — meta tags completas, Open Graph para compartilhamento no WhatsApp e dados estruturados `LodgingBusiness` (Schema.org) para aparecer bem no Google.
- **Validação no cliente** — CPF e datas são validados antes do envio, evitando mensagens incompletas chegando ao anfitrião.

---

## ✨ Funcionalidades

| | Funcionalidade | Descrição |
|:--|:--|:--|
| 🎨 | **Design responsivo** | Layout fluido para desktop, tablet e mobile. |
| 📸 | **Galeria com lightbox** | 11 fotos com zoom, navegação por setas, contador e fechamento por `Esc`. |
| 🎬 | **Seção de vídeos** | Player nativo HTML5 com `preload="metadata"` para não pesar o carregamento. |
| 📅 | **Formulário de reservas** | Nome, CPF, check-in/check-out, número de pessoas, ocasião e mensagem livre. |
| 🪪 | **Validação de CPF** | Verificação completa, incluindo dígitos verificadores, com máscara automática. |
| 🗓️ | **Validação cruzada de datas** | Garante que o check-out seja sempre posterior ao check-in. |
| 💬 | **Envio via WhatsApp** | Monta a mensagem formatada e abre a conversa com o anfitrião. |
| 🔍 | **SEO estruturado** | Meta tags, Open Graph, Twitter Card e JSON-LD `LodgingBusiness`. |
| 📊 | **Rastreamento de conversão** | Google Ads (gtag.js) dispara evento em todo clique em link `wa.me`. |
| 🗺️ | **Mapa integrado** | Google Maps embed com link direto para rota. |
| 🚀 | **Scroll reveal** | Animações de entrada progressiva conforme a rolagem. |
| ♿ | **Acessibilidade** | Navegação por teclado, atributos ARIA e `alt` descritivo nas imagens. |
| 🍔 | **Menu hambúrguer** | Navegação mobile com menu colapsável. |
| 🎪 | **Varal decorativo** | Banner de bandeirinhas para períodos sazonais (festas juninas). |

---

## 🛠 Tecnologias

| Camada | Tecnologia |
|:--|:--|
| Marcação | HTML5 semântico |
| Estilo | CSS3 com custom properties (design tokens) |
| Comportamento | JavaScript vanilla (ES6+), sem bibliotecas |
| Tipografia | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts |
| Dados estruturados | Schema.org JSON-LD (`LodgingBusiness`) |
| Analytics | Google Ads / gtag.js |
| Hospedagem | [Vercel](https://vercel.com/) |

> **Zero dependências de runtime.** Não há `package.json`, `node_modules` nem etapa de build — o que está no repositório é exatamente o que vai para produção.

---

## 📂 Estrutura do projeto

```
recanto-moreira/
├── pictures/           # Fotos da galeria, quartos e logo
├── videos/             # Vídeos institucionais (.mp4)
├── index.html          # Página única (todas as seções)
├── style.css           # Design tokens, layout e animações
├── script.js           # Lightbox, validações, máscara e envio ao WhatsApp
├── .gitignore
└── README.md
```

---

## 🚀 Como executar localmente

O projeto é estático — abrir o `index.html` direto no navegador já funciona. Ainda assim, um servidor local é recomendado para evitar restrições de CORS e ter recarregamento automático.

**Opção 1 — VS Code + Live Server**

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. Clique com o botão direito em `index.html` → **Open with Live Server**.

**Opção 2 — Python** (já instalado na maioria dos sistemas)

```bash
python3 -m http.server 8000
```

**Opção 3 — Node.js**

```bash
npx serve
```

Depois acesse `http://localhost:8000` (ou a porta indicada no terminal).

---

## 🧩 Arquitetura da página

A landing page é dividida em seções ancoradas, todas navegáveis pelo menu:

| Âncora | Seção | Conteúdo |
|:--|:--|:--|
| `#top` | Hero | Chamada principal, CTA de reserva e destaques rápidos. |
| `#sobre` | Sobre | História do local e diferenciais. |
| `#estrutura` | Estrutura | Grade de comodidades (piscina, área gourmet, sinuca, pebolim, áreas verdes). |
| `#galeria` | Galeria | Grid de fotos com lightbox. |
| `#videos` | Vídeos | Prévia em movimento do espaço. |
| `#quartos` | Quartos | Cards dos 4 quartos com foto e descrição. |
| `#depoimentos` | Depoimentos | Avaliações reais de hóspedes. |
| — | Valores | Explicação da política de diárias + CTA para consulta. |
| `#agendar` | Agendamento | Formulário de reserva e dados de contato. |
| `#mapa` | Localização | Endereço e Google Maps embed. |

---

## 📱 Fluxo de reserva

O formulário **não envia e-mails nem grava dados em servidor algum**. Ele monta uma mensagem formatada e redireciona para o WhatsApp do anfitrião:

```
Cliente preenche o formulário
        ↓
Validação no front-end (CPF + datas + campos obrigatórios)
        ↓
Montagem da mensagem em texto formatado
        ↓
Abertura do WhatsApp Web/App com a mensagem pronta
        ↓
Cliente revisa e confirma o envio
```

**Implicação de privacidade:** como não há backend, nenhum dado pessoal (incluindo o CPF) trafega para servidores próprios — as informações vão diretamente do navegador do cliente para a conversa do WhatsApp. Isso simplifica bastante a conformidade com a LGPD, mas o CPF permanece visível na URL gerada; considere torná-lo opcional se a coleta não for estritamente necessária no primeiro contato.

---

## 🔍 SEO e analytics

O `index.html` já inclui:

- **Meta tags básicas** — `description`, `robots`, `lang="pt-BR"`.
- **Open Graph** — título, descrição e imagem para prévia no WhatsApp, Facebook e Instagram.
- **Twitter Card** — formato `summary_large_image`.
- **JSON-LD** — schema `LodgingBusiness` com endereço, coordenadas geográficas, telefone, número de quartos e lista de comodidades (`amenityFeature`), o que habilita rich results no Google.
- **Google Ads (gtag.js)** — um listener em todos os links `a[href*="wa.me"]` dispara um evento de conversão a cada clique, permitindo medir o custo real por lead das campanhas.

---

## 🎨 Personalização

Para adaptar o site a outro estabelecimento:

| O que mudar | Onde |
|:--|:--|
| Número do WhatsApp | Constante `WPP` no topo do `script.js` **e** os links `wa.me` espalhados pelo `index.html` |
| Dados do negócio (endereço, coordenadas, telefone, comodidades) | Bloco JSON-LD no `<head>` do `index.html` |
| Prévia de compartilhamento | Meta tags `og:` e `twitter:` no `<head>` |
| ID de conversão do Google Ads | Scripts `gtag` no `<head>` |
| Fotos e vídeos | Pastas `pictures/` e `videos/` |
| Cores e tipografia | Variáveis CSS no topo do `style.css` |
| Textos, seções e depoimentos | Diretamente no `index.html` |
| Banner sazonal de bandeirinhas | Bloco `.bunting-banner` no início do `<body>` |

---

## ☁️ Deploy

Por ser estático, o site roda em qualquer hospedagem de arquivos: **Vercel**, **Netlify**, **Cloudflare Pages**, **GitHub Pages** ou até um servidor Apache/Nginx comum.

**Vercel (configuração atual):**

1. Importe o repositório no painel da Vercel.
2. Framework preset: **Other**.
3. Build command: *(vazio)* · Output directory: `.` (raiz).
4. Cada push na `main` dispara um novo deploy automaticamente.

---

## 🧭 Roadmap

- [x] Landing page responsiva completa
- [x] Galeria com lightbox e navegação por teclado
- [x] Formulário de reservas com validação de CPF e datas
- [x] SEO estruturado (Open Graph + JSON-LD)
- [x] Rastreamento de conversão no Google Ads
- [ ] Otimizar imagens (WebP/AVIF + `srcset` responsivo)
- [ ] Servir os vídeos por CDN em vez de versioná-los no Git
- [ ] Calendário de disponibilidade em tempo real
- [ ] Página de política de privacidade (LGPD)
- [ ] Versão em inglês para turistas estrangeiros
- [ ] Auditoria de performance no Lighthouse

---

## 📄 Licença

Projeto de uso pessoal. Para utilização comercial ou adaptação, entre em contato com o autor.

---

## 👤 Autor

**Pedro Oliveira**

- GitHub: [@psholiveira](https://github.com/psholiveira)

---

<div align="center">

Feito com 💚 na Paraíba · [Recanto Moreira](https://www.instagram.com/recantomoreirapb/) · Village Jacumã, Conde — PB

</div>
