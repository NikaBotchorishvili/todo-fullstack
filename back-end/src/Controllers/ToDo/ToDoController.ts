import { Response, Request } from "express";

export function getToDos (req: Request, res: Response){
    return res.json({"message": "To-dos!"})
}