import Top from "../../components/Common/Top";
import AddForm from "../../components/TaskList/AddForm";
import Main from "../../components/TaskList/Main";

function TaskList() {
	return (
		<Top>
            <main className="w-screen flex flex-col gap-y-5	 items-center ">
                <AddForm />
				<Main />
            </main>
		</Top>
	);
}

export default TaskList;
