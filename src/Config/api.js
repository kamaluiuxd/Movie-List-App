const API_KEY = "c206a0af";

export const searchMovie = (MOVIE_NAME) => `https://www.omdbapi.com/?s=${MOVIE_NAME}&apikey=${API_KEY}`;

export const movieDetails = (MOVIE_ID) => `https://www.omdbapi.com/?i=${MOVIE_ID}&apikey=${API_KEY}`;
