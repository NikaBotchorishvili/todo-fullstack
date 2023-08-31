import { faDoorOpen, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<ul className="flex flex-col items-center gap-y-4">
			<li className="w-full">
				<ThemeSwitcher />
			</li>
			<li className="w-full">
				<Link
					to="/"
					className="flex justify-between w-full items-center px-2"
				>
					<span className="text-lg">List</span>
					<FontAwesomeIcon icon={faList} />
				</Link>
			</li>
			<li className="w-full">
				<Link
					to="/login"
					className="flex justify-between w-full items-center px-2"
				>
					<span className="text-lg">Login</span>
					<FontAwesomeIcon icon={faDoorOpen} />
				</Link>
			</li>
		</ul>
	);
}

export default Navigation;
