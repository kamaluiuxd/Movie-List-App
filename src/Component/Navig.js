import { Route, Routes } from "react-router-dom";
import MovieList from "../Pages/MovieList";
import SingleMovie from "./SingleMovie";
const Navig = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MovieList />} />
				<Route path="/:id" element={<SingleMovie />} />
			</Routes>
		</div>
	);
};
export default Navig;
