
// URL base para a busca de filmes na API do TMDb
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

// URL base para carregar imagens de pôsteres dos filmes
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Adiciona um evento de clique ao botão de pesquisa
document.getElementById("searchBtn").addEventListener("click", () => {
    // Obtém o valor digitado no campo de busca, removendo espaços em branco extras
    const query = document.getElementById("search").value.trim();

    // Se houver texto no campo de busca, chama a função fetchMovies para buscar os filmes
    if (query) {
        fetchMovies(query);
    }
});

// Previne o envio do formulário
document.getElementById("pesquisa-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o recarregamento da página
});

// Função assíncrona para buscar filmes na API com base na consulta do usuário
async function fetchMovies(query) {
    // Monta a URL da requisição, incluindo a chave da API, idioma e o termo de busca codificado
    const url = `${BASE_URL}?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`;

    try {
        // Faz uma requisição HTTP para buscar os filmes
        const response = await fetch(url, {
            headers: { "Content-Type": "application/json" } // Define o cabeçalho para evitar problemas de CORS
        });

        // Se a resposta não estiver OK (status diferente de 200), lança um erro
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }

        // Converte a resposta da API para JSON
        const data = await response.json();

        // Chama a função para exibir os filmes na tela
        displayMovies(data.results);
    } catch (error) {
        // Exibe erros no console se algo der errado
        console.error("Erro ao buscar os filmes:", error);
    }
}

// Função para exibir os filmes na página
function displayMovies(movies) {
    // Obtém a referência ao container onde os filmes serão exibidos
    const moviesContainer = document.getElementById("movies-container");

    // Limpa qualquer conteúdo anterior antes de adicionar novos resultados
    moviesContainer.innerHTML = "";

    // Se a API não retornar filmes, exibe uma mensagem para o usuário
    if (!movies || movies.length === 0) {
        moviesContainer.innerHTML = "<p>Nenhum filme encontrado.</p>";
        return;
    }

    // Itera sobre a lista de filmes retornados pela API
    movies.forEach(movie => {
        // Cria um elemento <div> para cada filme
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie"); // Adiciona uma classe para estilização

        // Define o conteúdo HTML do filme, incluindo a imagem, título e nota
        movieElement.innerHTML = `
            <img src="${movie.poster_path ? IMG_URL + movie.poster_path : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.vote_average.toFixed(1)}</p>
        `;

        // Adiciona o elemento do filme ao container na página
        moviesContainer.appendChild(movieElement);
    });
}