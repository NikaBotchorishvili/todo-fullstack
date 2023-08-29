import {config} from "dotenv"
config();
import express, {Request, Response} from "express"

const app = express();
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})

app.get("/", (req: Request, res: Response) => {
    return res.send("<h1>Initialization</h1>")
})