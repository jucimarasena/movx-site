# MOV-X — Site Institucional

Landing page institucional para a MOV-X, transportadora rodoviária de cargas, desenvolvida como projeto de estudo para consolidar conhecimentos em React.

> 🚧 Projeto em desenvolvimento ativo — este README é atualizado conforme o progresso.

## 🎯 Sobre o projeto

Site desenvolvido para um cliente real, com foco em apresentar os serviços da transportadora e capturar solicitações de orçamento através de um formulário controlado.

## 🛠️ Tecnologias utilizadas

- **React** (via Vite)
- **JavaScript (ES6+)**
- **ESLint** para padronização de código
- **Git** com Conventional Commits

*Em progresso: Node.js (backend), Tailwind CSS (estilização), React Router (múltiplas páginas)*

## ✅ Funcionalidades implementadas

- Componentização completa da página inicial (Header, Hero, Services, QuoteForm, Differentials, ClientLogos, CtaBanner, Footer)
- Formulário de orçamento controlado (`useState`), com validação de campos e captura de todos os dados preenchidos
- Listagem dinâmica de dados via `.map()` (serviços, diferenciais, logos de clientes)
- Carrossel de logos de clientes (CSS puro, com loop infinito)

## 🗺️ Roadmap

- [ ] Backend em Node.js/Express para processar o formulário de orçamento
- [ ] Estilização completa com Tailwind CSS
- [ ] Múltiplas páginas com React Router (Home, Sobre, Contato)
- [ ] Otimização de SEO
- [ ] Deploy em produção

## 🚀 Rodando o projeto localmente

\`\`\`bash
# Clone o repositório
git clone https://github.com/jucimarasena/movx-site.git

# Entre na pasta
cd movx-site

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
\`\`\`

O projeto estará disponível em `http://localhost:5173`.

## 📁 Estrutura do projeto

\`\`\`
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Benefits.jsx
│   ├── Services.jsx
│   ├── ServiceCard.jsx
│   ├── QuoteSection.jsx
│   ├── QuoteForm.jsx
│   ├── Differentials.jsx
│   ├── DifferentialCards.jsx
│   ├── ClientLogos.jsx
│   ├── CtaBanner.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx
\`\`\`

## 👩‍💻 Autora

**Jucimara Sena** — Desenvolvedora Front-End
[LinkedIn](https://linkedin.com/in/jucimara-sena) · [GitHub](https://github.com/jucimarasena)