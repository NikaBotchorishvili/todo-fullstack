import User from "../../Models/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function login(req: Request, res: Response) {
	const { email, password } = req.body;
	if (!email || !password)
		return res
			.status(400)
			.json({ message: "email and password fields are required" });

	const foundUser = await User.findOne({ email }).exec();
	try {
		if (foundUser) {
			if(await bcrypt.compare(password, foundUser.password)){
				const accessToken = jwt.sign(
					{ username: foundUser.username },
					process.env.ACCESS_TOKEN_SECRET!,
					{ algorithm: "HS512", expiresIn: "15m" },
				);
				const refreshToken = jwt.sign(
					{ username: foundUser.username },
					process.env.REFRESH_TOKEN_SECRET!,
					{ algorithm: "HS512", expiresIn: "1d" },
				);
				foundUser.refreshToken = refreshToken;
				foundUser.save();
				res.cookie('jwt', refreshToken, { maxAge: 60 * 1000 * 15, httpOnly: true, sameSite: "none", secure: true })
				
				return res.json({ user: foundUser._id, accessToken});
			}
			return res.sendStatus(401);
		}
	} catch (err) {
		return res.sendStatus(500);
	}
}
