function List() {
	return (
		<ul className="w-full [&>*:first-child]:rounded-t-md ">
			<li className="w-full relative px-12 py-5 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue">
				<p>Jog around the park 3x</p>
				<div className="w-[20px] h-[20px] absolute top-1/2 left-5 -translate-y-1/2">
					<img
						src="/images/icon-check.svg"
						className="w-full bg-gradient-to-br from-blue to-violet h-full p-1  rounded-full"
						alt="icon-check"
					/>
					<input
						type="checkbox"
						name="jog"
						className="opacity-0 w-full h-full border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full"
					/>
				</div>
			</li>
			<li className="w-full relative px-12 py-5 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue ">
				<p>10 minutes meditation</p>
				<div className="w-[20px] h-[20px] absolute top-1/2 left-5 -translate-y-1/2">
					{/* <img src="/images/icon-check.svg" className="w-full h-full p-1 border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full" alt="icon-check" /> */}
					<div className="border dark:border-darkGrayishBlue border-veryLightGrayishBlue hover:border-none hover:bg-gradient-to-br from-blue p-[1px] to-violet rounded-full w-full h-[20px]">
						<div className="bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue  z-10 h-full w-full rounded-full"></div>
					</div>
					<input
						type="checkbox"
						name="meditate"
						className="opacity-0 w-full h-full border "
					/>
				</div>
			</li>
			<li className="w-full relative px-12 py-5 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue ">
				<p>Read for 1 hour</p>
				<div className="w-[20px] h-[20px] absolute top-1/2 left-5 -translate-y-1/2">
					{/* <img src="/images/icon-check.svg" className="w-full h-full p-1 border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full" alt="icon-check" /> */}
					<div className="border dark:border-darkGrayishBlue border-veryLightGrayishBlue hover:border-none hover:bg-gradient-to-br from-blue p-[1px] to-violet rounded-full w-full h-[20px]">
						<div className="bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue  z-10 h-full w-full rounded-full"></div>
					</div>
					<input
						type="checkbox"
						name="read"
						className="opacity-0 w-full h-full border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full "
					/>
				</div>
			</li>
		</ul>
	);
}

export default List;
