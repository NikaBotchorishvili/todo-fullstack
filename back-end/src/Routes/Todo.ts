import { Router } from "express";
import {
	getTodosByUser,
	postTodo,
    deleteTodo,
    patchTodo,
	deleteCompleted
} from "../Controllers/ToDo/ToDoController";
import { verifyToken } from "../middleware/auth/verifyToken";

const TodoRouter = Router();

TodoRouter.route("/user/:user_id")
	.get(verifyToken, getTodosByUser)
	.post(verifyToken, postTodo)
    .patch(verifyToken, patchTodo)

TodoRouter.route("/:todo_id").delete(verifyToken, deleteTodo)

TodoRouter.route("/user/completed/:user_id")
	.delete(verifyToken, deleteCompleted)
	
export default TodoRouter;
