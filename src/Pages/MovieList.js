import MovieCard from "../Component/MovieCard";
import { useMovie } from "../Store/MovieContext";

const MovieList = () => {
	const { movieList } = useMovie();

	return (
		<section>
			{movieList ? (
				<div className="grid md:grid-cols-4 gap-6 my-8 mx-auto md:w-[1240px]">
					{movieList.map((movie, i) => {
						return <MovieCard key={i} movie={movie} />;
					})}
				</div>
			) : (
				<div className="mt-72 text-center">
					<h1 className="text-lg md:text-4xl font-bold">Search Movies</h1>
				</div>
			)}
		</section>
	);
};
export default MovieList;
