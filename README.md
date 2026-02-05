# Projeto: Lista de Perfis com React (Módulo 34 - Finalizado)

## Descrição do Projeto
Este projeto é uma aplicação web desenvolvida em **React** como parte do **Módulo 34 - Introdução ao React** do curso JavaScript Impressionador da HashTag Treinamentos.. O objetivo principal foi aplicar os conceitos fundamentais do React para criar uma página de listagem de perfis, onde cada perfil é exibido em um "card" interativo e estilizado. A aplicação demonstra o uso de componentes, props, estilização modular e global, e integração com bibliotecas externas.

## Funcionalidades Principais
*   **Listagem de Perfis:** Exibe uma coleção de perfis de usuários em formato de cards.
*   **Cards de Perfil Detalhados:** Cada card de perfil inclui:
    *   Foto de avatar
    *   Nome completo
    *   Profissão
    *   Número de contato
    *   E-mail de contato
    *   Links para redes sociais (GitHub, LinkedIn, Instagram) com ícones.
*   **Estilização Condicional:** Os cards de perfil possuem um "color code" (gradiente de fundo nos links) que varia entre perfis femininos e masculinos, demonstrando lógica condicional na estilização.
*   **Navegação:** Componente de cabeçalho (`Header`) com links de navegação e ícones.
*   **Rodapé Dinâmico:** Componente de rodapé (`Footer`) com ano atualizado dinamicamente.
*   **Estilização Responsiva:** Utilização de CSS modular para componentes e CSS global para o layout geral e plano de fundo.

## Tecnologias Utilizadas
*   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite**: Ferramenta de build para um ambiente de desenvolvimento rápido e otimizado.
*   **JavaScript**: Linguagem de programação principal para a lógica da aplicação.
*   **HTML**: Estrutura semântica dos componentes.
*   **CSS Modules**: Para estilização encapsulada e modular de componentes (`.module.css`).
*   **CSS Global**: Para estilos gerais da aplicação (`global.css`).
*   **`react-icons`**: Biblioteca para fácil integração de ícones populares (Font Awesome, etc.) em componentes React.
*   **Git & GitHub**: Para controle de versão, commits e hospedagem do código.

## Estrutura de Componentes
O projeto é organizado em componentes reutilizáveis:
*   **`App.jsx`**: Componente raiz que orquestra a renderização do `Header`, `Profile` (ou lista de `Profile`s) e `Footer`.
*   **`Header`**: Componente de cabeçalho com título e links de navegação, utilizando `react-icons` e CSS modular.
*   **`Footer`**: Componente de rodapé simples, com ano dinâmico e CSS modular.
*   **`Profile`**: Componente principal para exibir os detalhes de um único perfil. Recebe dados via `props` (avatar, nome, bio, contatos, links de redes sociais, `theme`) e aplica estilização condicional.

## Detalhes de Implementação Chave
*   **Inicialização do Projeto:** Utilização do Vite para criar o projeto React, com limpeza de arquivos padrão e configuração de exportação nomeada.
*   **`react-icons`:** Instalação (`npm i react-icons`) e uso de ícones como componentes (ex: `<FaHome />`).
*   **Estilização:**
    *   **CSS Modular:** Arquivos `.module.css` para estilos específicos de componentes, importados como objetos (ex: `import styles from './header.module.css';`).
    *   **CSS Global:** Arquivo `global.css` para estilos que afetam toda a aplicação (reset CSS, background).
*   **Props:** Passagem de dados de `App.jsx` para o componente `Profile` via props, com desestruturação para acesso fácil.
*   **Links Externos Seguros:** Uso de `target="_blank"` para abrir links em novas abas e `rel="noreferer"` para segurança e privacidade.
*   **Lógica Condicional de Estilo:** Aplicação de diferentes classes CSS (`linkButtonMale` vs. `linkButton`) com base na prop `theme` do perfil, utilizando operadores ternários no `className`.
*   **Gerenciamento de Versão:** Uso de Git para commits regulares e push para o GitHub, registrando o progresso do projeto.

## Como Rodar o Projeto

Para configurar e executar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clonar o repositório:**
    ```bash
    git clone [URL do seu repositório GitHub]
    ```
    *(Substitua `[URL do seu repositório GitHub]` pelo link real do seu projeto.)*

2.  **Navegar até a pasta do projeto:**
    ```bash
    cd [nome-da-pasta-do-projeto]
    ```

3.  **Instalar as dependências:**
    ```bash
    # Se você usa npm
    npm install

    # Ou se você usa yarn
    # yarn install
    ```

4.  **Iniciar o servidor de desenvolvimento:**
    ```bash
    # Se você usa npm
    npm run dev

    # Ou se você usa yarn
    # yarn dev
    ```

5.  **Acessar a aplicação:**
    Abra seu navegador e acesse o endereço `http://localhost:XXXX` (a porta exata será indicada no terminal após a execução do comando `npm run dev`).

## Links Úteis
*   [Documentação Oficial do React](https://react.dev/)
*   [Documentação Oficial do Vite](https://vitejs.dev/)
*   [Site da Biblioteca React Icons](https://react-icons.github.io/react-icons/)
*   [MDN Web Docs - target="_blank" e rel="noreferer"](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Atributos/rel/noreferrer)

## Autor
*  Nicollas Lott/NicolasLtt-Hub
