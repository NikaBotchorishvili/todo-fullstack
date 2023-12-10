import { useForm } from "react-hook-form";
import { usePostTodoByUserMutation } from "../../features/Todo/TodoSlice";
import { useAppSelector } from "../../app/hooks";
import { SelectCurrentUser } from "../../features/Auth/AuthSlice";

type FormData = {
	title: string;
};

function AddForm() {
	const { register, handleSubmit, resetField } = useForm<FormData>();
	const userId = useAppSelector(SelectCurrentUser)!
	const [postTodo] = usePostTodoByUserMutation();

	const onSubmit = handleSubmit(({ title }) => {
		postTodo({ completed: false, title: title, user: userId });
		resetField("title");
	});

	return (
		<form
			onSubmit={onSubmit}
			className="relative w-[90%] sm:w-[80%] md:w-[40%]"
		>
			<input
				type="text"
				placeholder="Create a new todo..."
				className="px-12 py-3 rounded-md w-full dark:bg-darkVeryDarkDesaturatedBlue dark:text-veryLightGray"
				{...register("title")}
			/>
			<button className="absolute w-[20px] h-[20px] border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full top-1/2 left-5 -translate-y-1/2"></button>
		</form>
	);
}

export default AddForm;
