import { Router, Request, Response } from "express";
import { getToDos } from "../Controllers/ToDo/ToDoController";
import { verifyToken } from "../middleware/auth/verifyToken";
const TodoRouter = Router();

TodoRouter.route("/").get(verifyToken, getToDos);

export default TodoRouter;
