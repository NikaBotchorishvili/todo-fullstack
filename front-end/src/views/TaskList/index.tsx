import Top from "../../components/Common/Top";
import AddForm from "../../components/TaskList/AddForm";
import List from "../../components/TaskList/List";

function TaskList() {
	return (
		<Top>
            <main className="w-screen flex flex-col gap-y-5	 items-center">
                <AddForm />
				<List />
            </main>
		</Top>
	);
}

export default TaskList;
