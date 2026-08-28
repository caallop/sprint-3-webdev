# RALUGUVA

## Sobre o projeto

O RALUGUVA é uma aplicação web desenvolvida com o objetivo de transformar sons do ambiente em informações visuais, facilitando a percepção de sons por meio de uma interface visual.

A partir da proposta da JOVI, criamos um sistema de "ver sons", utilizando microfone e câmera, pensado principalmente para pessoas com algum nível de deficiencia auditiva, ou até para quem quiser saber o que seu microfone está "pegando".

## Tecnologias utilizadas

* React
* Next.js
* JavaScript
* HTML/JSX
* CSS
* Git e GitHub
* Vercel

## Estrutura do projeto

A aplicação foi dividida em componentes funcionais, seguindo uma estrutura de componente pai para componentes filhos:

* `Navbar` — cabeçalho e navegação da aplicação.
* `Main` — conteúdo principal e funcionalidades do projeto.
* `Footer` — rodapé e links das redes sociais.
* `Home` — componente principal responsável por organizar os demais componentes.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

* Sistema de login;
* Identificação do usuário logado;
* Armazenamento de informações utilizando `localStorage`;
* Ativação e desativação do flash;
* Timer para tirar foto;
* Simulação de captura de foto;
* Modo de acessibilidade;
* Exibição de níveis de som em decibéis;
* Geração de valores aleatórios utilizando `Math.random()` e `Math.floor()`;
* Notificações visuais dentro da interface.

## Como instalar

### 1. Pré-requisitos

É necessário possuir instalado:

* Node.js
* npm

### 2. Instalação

Após baixar ou clonar o projeto, abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Esse comando instala todas as dependências necessárias para executar a aplicação.

## Como executar

Após instalar as dependências, execute:

```bash
npm run dev
```

Depois, abra o endereço indicado pelo terminal, normalmente:

```text
http://localhost:3000
```

## Usuário para teste

O login não exige cadastro prévio. Para testar, basta informar qualquer nome de usuário e senha.

## Utilização de Inteligência Artificial

A Inteligência Artificial foi usada, principalmente para resolver problemas e tirar dúvidas do codigo. Toda a implementação e alterção direta do codigo foi feita pela equipe.

## GitHub

Repositório do projeto:

(https://github.com/caallop/sprint-3-webdev)

## Deploy

Aplicação publicada na Vercel:

(https://sprint-3-webdev-nine.vercel.app/)