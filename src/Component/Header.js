import { Link } from "react-router-dom";
import { useMovie } from "../Store/MovieContext";
import logo from "../assets/logok.png";

const Header = () => {
	return (
		<section className="bg-slate-900 py-4">
			<section className="flex justify-center mr-0">
				<Link to="/">
					<img src={logo} alt="Movie Show Case" />
				</Link>
			</section>
			<p className="text-center">Movie Show Case</p>
		</section>
	);
};
export default Header;
