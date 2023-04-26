import MovieCard from "../Component/MovieCard";
import { useMovie } from "../Store/MovieContext";
// import logo from "../assets/logok.png";

const MovieList = () => {
	const { movieList, setMovieId } = useMovie();
	const { search, setSearch } = useMovie();

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	return (
		<section>
			<div className="text-center mt-5">
				<input
					value={search}
					placeholder="Search"
					className="h-10 md:w-80 w-80 border-0  px-3 hover:border-none text-black   outline-none"
					type="search"
					onChange={handleSearch}
				/>
			</div>
			<section>
				{movieList ? (
					<div className="grid md:grid-cols-4 gap-6 my-8 mx-auto md:w-[1240px]">
						{movieList.map((movie, i) => {
							return <MovieCard key={i} movie={movie} setMovieId={setMovieId} />;
						})}
					</div>
				) : (
					<div className="mt-72 text-center ">
						{/* <img src={logo} alt="" /> */}
						<h1 className="text-lg md:text-4xl font-bold">Search Movies</h1>
					</div>
				)}
			</section>
		</section>
	);
};
export default MovieList;
