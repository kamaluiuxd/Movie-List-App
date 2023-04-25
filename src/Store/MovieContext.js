/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import SingleMovie from "../Component/SingleMovie";
import { searchMovie } from "../Config/api";

const Movie = createContext();

const MovieContext = ({ children }) => {
	const [search, setSearch] = useState("");

	const [movieList, setMovieList] = useState([]);
	const [movieId, setMovieId] = useState("");
	const [getId, setGetId] = useState("");

	const fetchMovie = async () => {
		const { data } = await axios.get(searchMovie(search));
		setMovieList(data.Search);
	};
	const fetchSingleMovie = async () => {
		const { data } = await axios.get(SingleMovie(getId));
		setMovieId(data);
		console.log(data);
	};

	useEffect(() => {
		fetchSingleMovie();
	}, []);

	useEffect(() => {
		fetchMovie();
	}, [search]);

	console.log(movieId);

	return <Movie.Provider value={{ search, setSearch, movieList, setGetId }}>{children}</Movie.Provider>;
};
export default MovieContext;

export const useMovie = () => {
	return useContext(Movie);
};
