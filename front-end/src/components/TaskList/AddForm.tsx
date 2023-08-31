import { useForm } from "react-hook-form";

function AddForm() {
	const { register } = useForm();
	return (
		<form className="relative w-[90%] sm:w-[80%] md:w-[40%]">
			<input
				type="text"
				placeholder="Create a new todo..."
				className="px-12 py-3 rounded-md w-full dark:bg-darkVeryDarkDesaturatedBlue dark:text-veryLightGray"
                {...register("todo_item")}
			/>
			<button className="absolute w-[20px] h-[20px] border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full top-1/2 left-5 -translate-y-1/2"></button>
		</form>
	);
}

export default AddForm;
