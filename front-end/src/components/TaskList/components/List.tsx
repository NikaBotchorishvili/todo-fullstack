import { useAppSelector } from "../../../app/hooks";
import { SelectCurrentUser } from "../../../features/Auth/AuthSlice";
import { useGetTodosByUserQuery } from "../../../features/Todo/TodoSlice";
import ListItem from "./ListItem";
import UseQueryParams from "../../../libs/UseQueryParams";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function List() {
	const user = useAppSelector(SelectCurrentUser) as string;
	const params = UseQueryParams();

	const { data, isSuccess, isError, isLoading, status } =
		useGetTodosByUserQuery({ userId: user, state: params.state });
	let content;
	if (isSuccess) {
		content = data.todos.map((todo, idx) => {
			return (
				<ListItem
					key={idx}
					id={todo._id}
					completed={todo.completed}
					userId={todo.user}
					title={todo.title}
				/>
			);
		});
	} else if (isLoading) {
		content = <ClipLoader className="mx-auto" color="#fff" />;
	} else if (isError) {
			
		content = <i>Error: {status}</i>;
	}
	return (
		<ul
			key={useLocation().pathname}
			className="w-full flex flex-col items-center  mx-auto [&>*:first-child]:rounded-t-md "
		>
			{content}
		</ul>
	);
}

export default List;
