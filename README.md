# 🎬 CineSearch

> App de busca de filmes, consumindo a API do TMDb (The Movie Database) para exibir pôster, título e nota de forma rápida e simples.

## 🖼️ Prévia

<img width="1490" height="850" alt="image" src="https://github.com/user-attachments/assets/1d25efc8-a6f9-4c7c-ba61-0c56ec2db5aa" />

## 🚀 Funcionalidades

- Busca de filmes por título
- Exibição de pôster, nome e nota (⭐) de cada resultado
- Tratamento de filmes sem pôster disponível (imagem placeholder)
- Mensagem amigável quando nenhum filme é encontrado
- Layout simples e responsivo

## 🛠️ Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **HTML5** — estrutura da página
- **CSS3** — estilização
- **JavaScript** — requisições assíncronas (fetch/async-await) e manipulação dinâmica do DOM
- **API TMDb** — fonte dos dados de filmes

## ▶️ Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/EmanuelVieiira/CineSearch.git
   cd CineSearch
   ```
2. Crie sua própria chave de API gratuita em [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).
3. Copie `js/config.example.js` para um novo arquivo `js/config.js` e cole sua chave:
   ```js
   const API_KEY = "SUA_CHAVE_AQUI";
   ```
4. Abra o `index.html` no navegador (ou use a extensão "Live Server" do VS Code).

> ⚠️ O arquivo `js/config.js` é ignorado pelo Git (está no `.gitignore`) porque contém sua chave pessoal — nunca suba esse arquivo com uma chave real para o repositório.

## 🎯 Objetivo

Projeto feito para praticar consumo de API externa, requisições assíncronas e manipulação dinâmica de conteúdo em JavaScript puro.
