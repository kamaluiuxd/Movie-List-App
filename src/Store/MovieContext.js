/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { searchMovie } from "../Config/api";

const Movie = createContext();

const MovieContext = ({ children }) => {
	const [search, setSearch] = useState("");

	console.log(search);
	const [movieList, setMovieList] = useState([]);

	const fetchMovie = async () => {
		const { data } = await axios.get(searchMovie(search));
		setMovieList(data.Search);
	};

	useEffect(() => {
		fetchMovie();
	}, [search]);

	return <Movie.Provider value={{ search, setSearch, movieList }}>{children}</Movie.Provider>;
};
export default MovieContext;

export const useMovie = () => {
	return useContext(Movie);
};
