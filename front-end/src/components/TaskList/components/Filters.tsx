import { Link } from "react-router-dom";
import { useDeleteCompletedMutation } from "../../../features/Todo/TodoSlice";
import { useAppSelector } from "../../../app/hooks";
import { SelectCurrentUser } from "../../../features/Auth/AuthSlice";
import UseQueryParams from "../../../libs/UseQueryParams";

function Filters() {
	const user = useAppSelector(SelectCurrentUser) as string;
	const params = UseQueryParams();
	const [deleteCompleted] = useDeleteCompletedMutation();
	return (
		<div className="w-full flex justify-center lg:justify-between py-2 px-6 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue rounded-b-md  items-center">
			<small className="lg:block hidden text-darkGrayishBlue">
				5 items left
			</small>
			<section className="flex gap-x-5 lg:gap-x-2 font-bold">
				<Link
					className={` ${
						!params.state ||
						(params.state !== "completed" &&
							params.state !== "active")
							? "text-cyan"
							: "text-darkGrayishBlue"
					}`}
					to="/"
				>
					All
				</Link>
				<Link
					to="?state=active"
					className={` ${
						params.state === "active"
							? "text-cyan"
							: "text-darkGrayishBlue"
					}`}
				>
					Active
				</Link>
				<Link
					className={` ${
						params.state === "completed"
							? "text-cyan"
							: "text-darkGrayishBlue"
					}`}
					to="?state=completed"
				>
					Completed
				</Link>
			</section>
			<button
				onClick={() => deleteCompleted(user)}
				className="lg:block  hidden text-darkGrayishBlue"
			>
				Clear Completed
			</button>
		</div>
	);
}

export default Filters;
