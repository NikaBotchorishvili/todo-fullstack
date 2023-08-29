import { config } from "dotenv";
import dbConnection from "./config/dbConnection";
config();
dbConnection();
import cors from "cors";
import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import corsOptions from "./config/corsOptions";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT;
mongoose.connection.on("open", () => {
	app.listen(PORT, () => {
		console.log(`Listening on Port: ${PORT}`);
	});
});

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
	return res.send("<h1>Initialization</h1>");
});
