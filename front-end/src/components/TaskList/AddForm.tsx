function AddForm() {
	return (
		<form className="relative w-[90%] sm:w-[80%] md:w-[40%]">
			<input
				type="text"
				placeholder="Create a new todo..."
				className="px-12 py-3 rounded-md w-full dark:bg-darkVeryDarkDesaturatedBlue dark:text-veryLightGray"
			/>
			<div className="w-[20px] h-[20px] absolute top-1/2 left-5 -translate-y-1/2">
				{/* <img src="/images/icon-check.svg" className="w-full h-full p-1 border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full" alt="icon-check" /> */}
				<div className="border dark:border-darkGrayishBlue border-veryLightGrayishBlue hover:border-none hover:bg-gradient-to-br from-blue p-[1px] to-violet rounded-full w-full h-[20px]">
					<div className="bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue  z-10 h-full w-full rounded-full"></div>
				</div>
				<button
					name="read"
					className="opacity-0 w-full h-full border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full "
				/>
			</div>
		</form>
	);
}

export default AddForm;
