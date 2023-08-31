function List() {
	return (
		<section className="md:w-[30%]">
			<ul className="w-full [&>*:first-child]:rounded-t-md ">
				<li className="w-full relative px-12 py-5 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue text-veryDarkGrayishBlue dark:text-veryLightGrayishBlue">
					<p>Jog around the park 3x</p>
					<button className="absolute w-[20px] h-[20px] border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full top-1/2 left-5 -translate-y-1/2"></button>
				</li>
				<li className="w-full relative px-12 py-5 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue text-veryDarkGrayishBlue dark:text-veryLightGrayishBlue">
					<p>10 minutes meditation</p>
					<button className="absolute w-[20px] h-[20px] border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full top-1/2 left-5 -translate-y-1/2"></button>
				</li>
				<li className="w-full relative px-12 py-5 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue text-veryDarkGrayishBlue dark:text-veryLightGrayishBlue">
					<p>Read for 1 hour</p>
					<button className="absolute w-[20px] h-[20px] border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full top-1/2 left-5 -translate-y-1/2"></button>
				</li>
			</ul>
		</section>
	);
}

export default List;
