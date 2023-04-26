/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { searchMovie } from "../Config/api";

const Movie = createContext();

const MovieContext = ({ children }) => {
	const [search, setSearch] = useState("");
	const [movieList, setMovieList] = useState([]);
	const [movie, setMovie] = useState();

	const fetchMovie = async () => {
		try {
			const { data } = await axios.get(searchMovie(search));
			setMovieList(data.Search);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const timerOut = setTimeout(() => {
			fetchMovie();
		}, 500);
		return () => clearTimeout(timerOut);
	}, [search]);

	return <Movie.Provider value={{ search, setSearch, movieList, movie, setMovie }}>{children}</Movie.Provider>;
};
export default MovieContext;

export const useMovie = () => {
	return useContext(Movie);
};
