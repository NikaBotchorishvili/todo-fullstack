import { Response, Request } from "express";
import Todo from "../../Models/Todo";

export async function getToDos(req: Request, res: Response) {
	const todos = await Todo.find().exec();

	return res.json({ todos });
}
export async function getTodoById(req: Request, res: Response) {
	const { id } = req.query;
	const todo = await Todo.findById(id).exec();

	return res.json({ todo });
}

export async function getTodosByUser(req: Request, res: Response) {
	// 	state can be active: false or completed: true
	const { state } = req.query;
	const userId = req.params.user_id;
	const todos = await (state
		? Todo.find({ user: userId, completed: state === "completed" })
		: Todo.find({ user: userId }));

	return res.json({ todos }).status(200);
}

export async function postTodo(req: Request, res: Response) {
	const { title } = req.body;
	const userId = req.params.user_id;
	const addPost = new Todo({ user: userId, title: title, completed: false });
	try {
		const newPost = await addPost.save();
		return res.sendStatus(201);
	} catch (err: any) {
		console.log(err);
		return res.sendStatus(400);
	}
}

export async function deleteTodo(req: Request, res: Response) {
	const { todo_id } = req.params;
	if (!todo_id) {
		return res.sendStatus(400);
	}
	console.log(todo_id)
	const deletedPost = await Todo.findByIdAndDelete(todo_id).exec();

	return res.sendStatus(204);
}

export async function patchTodo(req: Request, res: Response) {
	const { _id, title, completed } = req.body;

	if (!_id) {
		return res.sendStatus(400);
	}
	const updatedPost = await Todo.findByIdAndUpdate(_id, {
		title,
		completed,
	}).exec();

	return res.sendStatus(204);
}

export async function deleteCompleted(req: Request, res: Response) {
	const userId = req.params.user_id;
	const deletedTodos = await Todo.deleteMany({
		completed: true,
		user: userId,
	}).exec();

	return res.sendStatus(204);
}
