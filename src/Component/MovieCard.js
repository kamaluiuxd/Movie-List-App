const MovieCard = ({ movie }) => {
	return (
		<div className="m-4">
			<div>
				<img
					src={movie.Poster}
					alt={movie.Title}
					className="h-96 md:w-80 w-[25rem] object-cover object-top rounded-t"
				/>
			</div>
			<div className="flex justify-between items-center p-3 rounded-b bg-stone-50 children:text-xl children:text-black children:font-semibold">
				<h1 className="truncate w-48 ">{movie.Title}</h1>
				<h1>{movie.Year}</h1>
			</div>
		</div>
	);
};
export default MovieCard;
