import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyToken(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authHeader = req.headers["authorization"];

	if (!authHeader) return res.sendStatus(401);

	const token = authHeader.split(" ")[1];
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, decoded) => {
		if (err) return res.sendStatus(403);
		const { username } = decoded as JwtPayload;
		req.user = username;
		next();
	});
}
