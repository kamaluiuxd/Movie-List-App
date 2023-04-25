import { useMovie } from "../Store/MovieContext";
import empty from "../assets/logok.png";

const MovieCard = () => {
	const { movieList } = useMovie();
	console.log(movieList);
	return (
		<div>
			{movieList ? (
				movieList.map((movie) => {
					return (
						<div className="grid md:grid-cols-4 gap-x-6 my-8 mx-auto md:w-[1240px]">
							{movie.poster == "N/A" ? (
								<img src={empty} alt="" />
							) : (
								<img
									src={movie.Poster}
									alt={movie.Title}
									className="h-96 w-80 mx-8 object-cover object-top rounded-t"
								/>
							)}
							<div className="flex justify-between items-center p-3 rounded-b bg-stone-50 mx-8 w-80 children:text-xl children:text-black children:font-semibold">
								<h1 className="truncate w-48 ">{movie.Title}</h1>
								<h1>{movie.Year}</h1>
							</div>
						</div>
					);
				})
			) : (
				<div className="flex justify-center items-center mt-80">
					<h1 className="text-2xl md:text-9xl text-opacity-50 text-white text-center ">Search Movie</h1>
				</div>
			)}
		</div>
	);
};
export default MovieCard;
