import { Link } from "react-router-dom";
import MovieCard from "../Component/MovieCard";
import { useMovie } from "../Store/MovieContext";

const MovieList = () => {
	const { movieList } = useMovie();
	console.log(movieList);
	return (
		<section className="grid md:grid-cols-4 gap-6 my-8 mx-auto md:w-[1240px]">
			{movieList &&
				movieList.map((movie, i) => {
					return <MovieCard key={i} movie={movie} />;
				})}
		</section>
	);
};
export default MovieList;
