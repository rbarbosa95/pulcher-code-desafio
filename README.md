<h1 align="center">
    <img alt="Stack Games" title="#StackGames" src="static/logo.svg" />
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •  
 <a href="#-autor">Autor</a> • 
</p>


## 💻 Sobre o projeto

Stack Games é uma plataforma online que permite que você liste todos os seus jogos comprados em um só lugar. Com sua interface simples e fácil de usar, você pode navegar por sua biblioteca de jogos de forma rápida e eficiente.

---

## ⚙️ Funcionalidades

- [x] Listagem de todos os jogos
- [x] Filtro por datas
- [x] Filtro por preço
- [x] Filtro por Tipo de Loja

---

## 🎨 Layout

[Figma](https://www.figma.com/file/9tWGTpf2fW2DO7vaA2h2AD/StackGames?node-id=1%3A82&t=HVCKBZfVUydjVsOq-1)


<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="JoelhoEmFoco" title="#JoelhoEmFoco" src="static/StackGamesPreview.png" width="400px">
</p>

---

## 🚀 Como executar o projeto

Este projeto não tem back-end, mas é necessário subir o [JSON Server](https://github.com/typicode/json-server)

### Recomendações
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


### Pré-requisitos

- [Git](https://git-scm.com)
- [Node.js (v18.14.2)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)
- [JSON Server](https://github.com/typicode/json-server)


#### 🧭 Subindo a aplicação

##### JSON Server

```bash

# Instale globalmente o json-server
$ npm install -g json-server

# Clone este repositório
$ git clone git@github.com:rbarbosa95/pulcher-code-desafio.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd pulcher-code-desafio

# Vá para a pasta Json
$ cd json

# Execute o seguinte comando
$ json-server --watch db.json --port 1337

# O JSON server será aberto na porta:1337 - acesse http://localhost:1337

```

##### Projeto

```bash

# Clone este repositório, caso não tenha feito
$ git clone git@github.com:rbarbosa95/pulcher-code-desafio.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd pulcher-code-desafio

# Acesse a pasta do projeto no seu terminal/cmd
$ cd pulcher-code-desafio

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:5173 -  http://localhost:5173/


```
---

#### 🪲 Rodando os testes

##### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

##### Run Covarege Test with [Vitest](https://vitest.dev/)

```sh
yarn test:coverage
```

##### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```


---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Frontend**  ([Vue3](https://vuejs.org/)

-   **[Vue Router](https://router.vuejs.org/)**
-   **[Pinia](https://pinia.vuejs.org/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Cypress](https://www.cypress.io/)**
-   **[Vitest](https://vitest.dev/)**

> Veja o arquivo  [package.json](https://github.com/rbarbosa95/fisio-repo-project/blob/master/frontend/package.json)


---

## 👨🏽‍💻 Autor

<div align="left">
<table>
  <tr align="center">
    <td>Coded By</td>
  </tr>
  <tr align="center">
    <td>
      <a href="https://github.com/rbarbosa95">
        <img src="https://avatars0.githubusercontent.com/u/15218743?s=460&u=d76d008067b2ee2fe2f55db081ea78cdad461e57&v=4" width="100" />
      </a>
    </td>
  </tr>
</table>
</div>

---