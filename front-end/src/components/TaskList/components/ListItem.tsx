import {
	useDeleteTodoMutation,
	usePatchTodoMutation,
} from "../../../features/Todo/TodoSlice";

type Props = {
	id: string;
	userId: string;
	title: string;
	completed: boolean;
};

const ListItem: React.FC<Props> = ({ id, userId, title, completed }) => {
	const [deleteTodo] = useDeleteTodoMutation();
	const [patchTodo] = usePatchTodoMutation();
	return (
		<li className="w-full flex justify-between items-center group relative px-12 py-5 bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue ">
			<p>{title}</p>
			<div className="w-[20px] h-[20px] absolute top-1/2 left-5 -translate-y-1/2">
				{/* <img src="/images/icon-check.svg" className="w-full h-full p-1 border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full" alt="icon-check" /> */}
				<div
					onClick={() =>{
						patchTodo({
							completed: !completed,
							_id: id,
							title: title,
						})}
					}
					className="border relative dark:border-darkGrayishBlue border-veryLightGrayishBlue hover:border-none hover:bg-gradient-to-br from-blue p-[1px] to-violet rounded-full w-full h-[20px]"
				>
					<div className="bg-veryLightGray dark:bg-darkVeryDarkDesaturatedBlue border-b border-b-lightGrayishBlue dark:border-b-darkLighterVeryDarkGrayishBlue  z-10 h-full w-full rounded-full"></div>
					{completed && (<img className="absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2" src="/images/icon-check.svg" />)}
				</div>
				<input
					type="checkbox"
					name="read"
					checked={completed} 
					className="opacity-0 w-full h-full border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full "
				/>
			</div>
			<div
				onClick={() => deleteTodo(id)}
				className="cursor-pointer md:group-hover:opacity-100 opacity-100 md:opacity-0 transition-all duration-200"
			>
				<img src="/images/icon-cross.svg" alt="" />
			</div>
		</li>
	);
};

export default ListItem;
