import { Link } from "react-router-dom";
import { useMovie } from "../Store/MovieContext";
import logo from "../assets/logok.png";

const Header = () => {
	const { search, setSearch } = useMovie();

	return (
		<section className="bg-slate-900 py-4">
			<section className="flex justify-around items-center container mx-auto ">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
				<input
					value={search}
					placeholder="Search"
					className="h-10 md:w-80 w-64 border-0  px-3 hover:border-none text-black   outline-none"
					type="search"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</section>
		</section>
	);
};
export default Header;
