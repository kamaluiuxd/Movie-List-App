import { Route, Routes } from "react-router-dom";
import MovieList from "../Pages/MovieList";
import Error from "./Error";
import SingleMovie from "./SingleMovie";
const Navig = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MovieList />} />
				<Route path="movie/:id" element={<SingleMovie />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};
export default Navig;
