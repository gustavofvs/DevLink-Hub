# 🏆 Desafio Front-end: DevLink Hub

Este projeto é o resultado de um desafio de front-end proposto pela IA Gemini. O objetivo era construir um "hub de links" (similar a um Linktree) para desenvolvedores, utilizando um conjunto de tecnologias modernas e seguindo especificações claras.

**Resultado no GitHub:** [github.com/gustavofvs/DevLink-Hub]([https://github.com/gustavofvs/DevLink-Hub](https://devlink-hub.vercel.app/))

---

## 🎯 A Missão Proposta pelo Gemini

O desafio consistia em criar uma página única, limpa e profissional, focada em desenvolvedores, para agregar links importantes (GitHub, LinkedIn, Portfólio).

**O Kit de Ferramentas Definido:**
* **Framework/Lib:** React com TypeScript
* **Build Tool:** Vite
* **Estilização:** TailwindCSS
* **Biblioteca de Componentes:** `shadcn/ui`
* **Ícones:** `lucide-react`

---

## 📋 Especificações do Desafio (O que foi pedido)

Para completar a missão, as seguintes funcionalidades e componentes deveriam ser implementados:

### 1. Estrutura e Layout
* **Layout Centralizado:** O card principal deveria ficar perfeitamente centralizado (horizontal e verticalmente) na tela.
* **Tema (Dark Mode):** A aplicação deveria ter um `ThemeProvider` funcional.
* **Seletor de Tema:** Um `Toggle` (botão de alternância) deveria ser posicionado no canto superior direito para trocar entre os modos Light e Dark.

### 2. O Card Principal (`DevLinkCard`)
O componente central da aplicação, construído com os componentes do `shadcn/ui`:

* **`Card`:** Usar como o contêiner principal.
* **`CardHeader`:** Para a seção de perfil, contendo:
    * `Avatar`: Para a foto do usuário.
    * `CardTitle`: Para o nome (ex: "Gustavo F V S").
    * `CardDescription`: Para o @username ou cargo (ex: "@gustavofvs").
* **`CardContent`:** Para a lista de links.
    * Deveria conter uma lista vertical de botões (`Button`).
    * Cada botão deveria ter a variante `variant="outline"`.
    * Cada botão deveria conter um ícone (`lucide-react`) + o texto do link.
    * Todos os botões deveriam ser links funcionais (`<a>`).
* **`CardFooter`:** Um rodapé simples com um texto (ex: "Feito com React e shadcn/ui").

### 3. Componentização
* O desafio exigia uma boa separação de responsabilidades, dividindo a aplicação em componentes claros (ex: `App.tsx`, `ThemeToggle.tsx`, `DevLinkCard.tsx`).

---

## 🚀 Como Executar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/gustavofvs/DevLink-Hub.git](https://github.com/gustavofvs/DevLink-Hub.git)
    cd DevLink-Hub
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    pnpm run dev
    ```
