const API_KEY = "&apikey=c206a0af";

export const searchMovie = (search) => `https://www.omdbapi.com/?s=${search}${API_KEY}`;

export const movieDetails = (singleMovie) => `https://www.omdbapi.com/?i=${singleMovie}${API_KEY}`;
