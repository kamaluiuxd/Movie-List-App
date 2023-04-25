const API_KEY = "c206a0af";

export const searchMovie = (search) => `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`;

export const movieDetails = (singleMovie) => `https://www.omdbapi.com/?i=${singleMovie}&apikey=${API_KEY}`;
