# 🌿 Recanto Moreira

Site institucional do **Recanto Moreira**, um espaço de hospedagem e lazer, com sistema de reservas integrado ao WhatsApp.

🔗 **Site no ar:** [psholiveira.github.io/recanto-moreira](https://psholiveira.github.io/recanto-moreira/) *(disponível após ativar o GitHub Pages)*

---

## ✨ Funcionalidades

- 🎨 **Design responsivo** — adapta-se a desktop, tablet e mobile
- 📸 **Galeria interativa** com lightbox e navegação por teclado (← → Esc)
- 📅 **Formulário de reservas** com envio direto pelo WhatsApp
- 🪪 **Validação de CPF** completa (incluindo dígitos verificadores)
- 🗓️ **Validação cruzada de datas** (check-out sempre após check-in)
- 🎭 **Máscara automática de CPF** ao digitar
- 🚀 **Animações de scroll reveal** ao rolar a página
- ♿ **Acessibilidade** — navegação por teclado e atributos ARIA na galeria
- 🍔 **Menu hambúrguer** para navegação mobile

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — estilização e animações
- **JavaScript (vanilla)** — sem dependências externas

---

## 📂 Estrutura do projeto

```
recanto-moreira/
├── pictures/              # Imagens da galeria
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # Lógica e interações
├── .gitignore
└── README.md
```

---

## 🚀 Como executar localmente

Como o projeto é estático, basta abrir o `index.html` em qualquer navegador. Mas para evitar limitações de CORS e ter recarregamento automático, recomendo usar um servidor local.

### Opção 1: VS Code com Live Server

1. Instale a extensão **Live Server** no VS Code
2. Clique com o botão direito no `index.html` → **Open with Live Server**

### Opção 2: Python (já vem instalado em muitos sistemas)

```bash
# Python 3
python -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador.

### Opção 3: Node.js

```bash
npx serve
```

---

## 📱 Como funciona o sistema de reservas

O formulário **não envia e-mails** — ele monta uma mensagem formatada e abre o WhatsApp do estabelecimento com os dados preenchidos pelo cliente:

1. Cliente preenche nome, CPF, datas, quantidade de pessoas e ocasião
2. O sistema valida CPF e datas no front-end
3. Ao enviar, abre o WhatsApp Web/App com a mensagem pronta
4. O cliente só precisa confirmar o envio

---

## 🎨 Personalização

Para adaptar o projeto para outro estabelecimento, ajuste:

- **Número do WhatsApp:** constante `WPP` no `script.js` (linha 2)
- **Imagens:** substitua os arquivos na pasta `pictures/`
- **Textos e cores:** edite `index.html` e as variáveis CSS no `style.css`

---

## 📄 Licença

Este projeto é de uso pessoal. Para utilização comercial ou adaptação, entre em contato.

---

## 👤 Autor

**Pedro Oliveira**

- GitHub: [@psholiveira](https://github.com/psholiveira)

---

Feito com 💚 em João Pessoa, PB