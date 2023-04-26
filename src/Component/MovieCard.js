import { NavLink } from "react-router-dom";

const MovieCard = ({ movie: { Poster, Title, Year, imdbID } }) => {
	return (
		<NavLink to={`movie/${imdbID}`}>
			<div className="mx-6 md:mx-1 cursor-pointer">
				<div>
					<img
						src={Poster}
						alt={Title}
						onError={(e) =>
							(e.target.src = "https://movieguide.b-cdn.net/wp-content/uploads/2021/09/Poster-Not-Available.jpg")
						}
						className="md:h-96 md:w-[25rem] w-full md:object-cover md:object-center rounded-t"
					/>
				</div>
				<div className="flex justify-between items-center p-3 rounded-b bg-stone-50 children:text-lg children:text-black children:font-semibold">
					<h1 className="truncate w-40 ">{Title}</h1>
					<h1>{Year}</h1>
				</div>
			</div>
		</NavLink>
	);
};
export default MovieCard;
