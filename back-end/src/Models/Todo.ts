import mongoose, { Schema, model } from "mongoose";
import User from "./User";

type Todo = {
	title: string;
	completed: boolean;
	user: mongoose.Schema.Types.ObjectId;
};

const todoSchema = new Schema<Todo>({
	title: { type: String, required: true },
	completed: { type: Boolean, required: true },
	user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

export default model("Todo", todoSchema);
