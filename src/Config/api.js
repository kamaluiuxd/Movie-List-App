const API_KEY = "?apikey=c206a0af";

export const searchMovie = (search) => `https://www.omdbapi.com/${API_KEY}&s=${search}`;

export const movieDetails = (id) => `https://www.omdbapi.com/${API_KEY}&i=${id}`;
