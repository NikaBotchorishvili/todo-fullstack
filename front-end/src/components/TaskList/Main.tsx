import Filters from "./components/Filters";
import List from "./components/List";

function Main() {
	return (
		<section className="w-[90%] sm:w-[80%] md:w-[40%] shadow-2xl dark:text-veryLightGrayishBlue text-veryDarkGrayishBlue">
			<List />
			<Filters />
		</section>
	);
}

export default Main;
