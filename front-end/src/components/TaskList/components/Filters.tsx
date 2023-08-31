import { Link } from "react-router-dom";


function Filters() {
	return (
		<div className="w-full flex justify-center lg:justify-between py-2 px-6 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue rounded-b-md  items-center">
			<small className="lg:block hidden text-darkGrayishBlue">
				5 items left
			</small>
			<section className="flex gap-x-5 lg:gap-x-2 font-bold">
				<Link to="/" className="text-cyan">All</Link>
				<Link to="?mode=active" className="text-darkGrayishBlue">Active</Link>
				<Link to="?mode=completed" className="text-darkGrayishBlue">Completed</Link>
			</section>
			<button className="lg:block  hidden text-darkGrayishBlue">
				Clear Completed
			</button>
		</div>
	);
}

export default Filters;
