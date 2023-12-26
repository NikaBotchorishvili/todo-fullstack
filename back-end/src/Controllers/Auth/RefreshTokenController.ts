import User from "../../Models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function refreshToken(req: Request, res: Response) {
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(401);
	const refreshToken = cookies.jwt;
	const foundUser = await User.findOne({ refreshToken }).exec();
	if (!foundUser) return res.sendStatus(403);
	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET!,
		(err: any, decoded: any) => {
            if(err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { username: decoded.username},
                process.env.ACCESS_TOKEN_SECRET!,
                {expiresIn: "10s" }
            )

            return res.json({accessToken})
        }
	);
}
