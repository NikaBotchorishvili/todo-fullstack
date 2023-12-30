import { config } from "dotenv";
import dbConnection from "./config/dbConnection";
config();
dbConnection();
import cors from "cors";
import express, { Request, Response } from "express";
import corsOptions from "./config/corsOptions";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import AuthRouter from "./Routes/Auth";
import TodoRouter from "./Routes/Todo";
import ProfileRouter from "./Routes/Profile";
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT;
mongoose.connection.on("open", () => {
	app.listen(PORT, () => {
		console.log(`Listening on Port: ${PORT}`);
	});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/auth/", AuthRouter);
app.use("/todos/", TodoRouter);
app.use("/profile/", ProfileRouter);
app.get("/", (req: Request, res: Response) => {
	return res.send("<h1>Initialization</h1>");
});
