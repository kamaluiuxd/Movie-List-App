/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieDetails } from "../Config/api";
import { useMovie } from "../Store/MovieContext";
import SingleMovieTemplate from "./SingleMovieTemplate";

const SingleMovie = () => {
	const { id } = useParams();
	const { movie, setMovie } = useMovie();

	const fetchSingleMovie = async () => {
		const { data } = await axios.get(movieDetails(id));
		setMovie(data);
	};

	useEffect(() => {
		const timerOut = setTimeout(() => {
			fetchSingleMovie();
		}, 500);
		return () => clearTimeout(timerOut);
	}, [id]);

	console.log(movie);

	if (!movie)
		return (
			<div className="flex justify-center items-center h-[400px]">
				<CircularProgress />
			</div>
		);
	if (undefined != movie) {
		return (
			<div>
				<SingleMovieTemplate movie={movie} />
			</div>
		);
	}
};
export default SingleMovie;
