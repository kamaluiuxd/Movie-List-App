import { LinearProgress } from "@mui/material";

const SingleMovieTemplate = ({
	movie: { Poster, imdbRating, Year, Title, Plot, Runtime, Actors, Genre, Language },
}) => {
	return (
		<section className="container mx-auto">
			<div className="grid md:grid-cols-12 m-8 md:space-x-8">
				<div className="md:col-span-3 ">
					<img src={Poster} alt="" className=" w-screen object-cover object-center rounded-t" />
				</div>
				<div className="md:col-span-9 md:mt-0 mt-6">
					<h1>{Title}</h1>
					<h1>{Language}</h1>
					<h2>{Year}</h2>

					<p>{Runtime}</p>

					<p>{Genre}</p>

					<p className="flex space-x-2 items-center">
						<LinearProgress
							className="w-[60%] p-1 rounded-xl"
							variant="determinate"
							color="secondary"
							value={imdbRating * 10}
						/>
						<p>{imdbRating}</p>
					</p>
					<h1 className="italic ">Story</h1>
					<p>{Plot}</p>
					<hr className="my-2" />
					<p>{Actors}</p>
				</div>
			</div>
		</section>
	);
};
export default SingleMovieTemplate;
