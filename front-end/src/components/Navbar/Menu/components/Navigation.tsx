import {
	faDoorClosed,
	faDoorOpen,
	faList,
	faPerson,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";
import { SelectCurrentUser, logOut } from "../../../../features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

function Navigation() {
	const user = useAppSelector(SelectCurrentUser);
	const dispatch = useAppDispatch();
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
				{user && (
					<Link
						to="/profile"
						className="flex justify-between w-full items-center px-2"
					>
						<span>Profile</span>
						<FontAwesomeIcon icon={faUser} />
					</Link>
				)}
			</li>
			<li className="w-full">
				{user ? (
					<button
						onClick={() => dispatch(logOut())}
						className="flex justify-between w-full items-center px-2"
					>
						<span>Logout</span>
						<FontAwesomeIcon icon={faDoorClosed} />
					</button>
				) : (
					<Link
						to="/login"
						className="flex justify-between w-full items-center px-2"
					>
						<span className="text-lg">Login</span>
						<FontAwesomeIcon icon={faDoorOpen} />
					</Link>
				)}
			</li>
		</ul>
	);
}

export default Navigation;
