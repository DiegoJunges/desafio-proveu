<h1 align="center">
  <img alt="Logo" src="fluxo.pdf" width="200px">
</h1>

<h3 align="center">
  API para o desafio da Proveu</h3>

<p align="center">Calculadora de jornada de trabalho!</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/DiegoJunges/hackoverflow-api?color=%23FF9000">

  <a href="https://www.linkedin.com/in/diego-junges/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Diego%20Junges-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/DiegoJunges/hackoverflow-api?color=%23FF9000">

  <a href="https://github.com/DiegoJunges/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/DiegoJunges/hackoverflow-api?color=%23FF9000">
  </a>

  <a href="https://github.com/DiegoJunges/gobarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/DiegoJunges/hackoverflow-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/DiegoJunges/hackoverflow-api?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=desafio-proveu-backend%20-%20DiegoJunges&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDiegoJunges%2Fdesafio-proveu-backend%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

##📑🏻‍♂️ About the project

Esta aplicação foi construída unicamente para o desafio da empresa Proveo

Para ver o **web client**, clique aqui: [Desafio Proveo Web](https://github.com/DiegoJunges/desafio-proveu-frontend)<br />

## 🚀 Tecnologias

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EXPRESS](https://expressjs.com/)
- [Date-fns](https://date-fns.org/)


## 💻 Getting started!

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)


**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/DiegoJunges/desafio-proveu-backend.git && cd desafio-proveu-backend
```

**Siga os passos abaixo**

```bash
# Instale as dependencias
$ yarn

# Para finalizar, execute o serviço da API
$ yarn dev:server

# Voylà, o servidor está rodando!
```

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=GoBarber%20-%20DiegoJunges&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDiegoJunges%2Fgobarber-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

**Com o servidor rodando você pode testar a rota**

```bash
#Usando o Insomnia ou similar, envie o seguinte corpo JSON para http://localhost:3333

exemplo:

{
	"initialHour": "2021-01-21 15:00:00",
	"finalHour": "2021-01-28 22:04:00"
}
```

## 🤔 Como contribuir:

**Faça um fork deste repositório**

```bash
# Fork usando GitHub linha de commando oficial.
# Se você não tem o GitHub CLI, use o website para fazer isso.

$ gh repo fork DiegoJunges/desafio-proveo-backend
```

**Siga os passos abaixo**

```bash
# Clone o seu fork
$ git clone your-fork-url && cd hackoverflow-api

# Crie uma branch com sua 'feature'
$ git checkout -b my-feature

# Faça o commit com suas mudanças
$ git commit -m 'feat: My new feature'

# Envie o código para sua branch remota
$ git push origin my-feature
```

Depois que seu PR for 'merged', você pode deletar sua branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Diego Junges 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/diego-junges/)
