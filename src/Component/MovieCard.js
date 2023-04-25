import { useMovie } from "../Store/MovieContext";
import emptyImg from "../assets/logok.png";

const MovieCard = ({ movie }) => {
	const { setGetId } = useMovie();
	const onMovieClick = () => {
		alert(movie.imdbID);
		setGetId(movie.imdbID);
	};

	return (
		<div className="mx-6 cursor-pointer" onClick={onMovieClick}>
			<div>
				<img
					src={movie.Poster}
					alt={movie.Title}
					onError={(e) =>
						(e.target.onerror = null)(
							(e.target.src = "https://movieguide.b-cdn.net/wp-content/uploads/2021/09/Poster-Not-Available.jpg")
						)
					}
					className="md:h-96 md:w-[25rem] w-full md:object-cover md:object-top rounded-t"
				/>
			</div>
			<div className="flex justify-between items-center p-3 rounded-b bg-stone-50 children:text-lg children:text-black children:font-semibold">
				<h1 className="truncate w-40 ">{movie.Title}</h1>
				<h1>{movie.Year}</h1>
			</div>
		</div>
	);
};
export default MovieCard;
