import { Request, Response } from "express";
import User from "../../Models/User";
import jwt from "jsonwebtoken";

export async function register(req: Request, res: Response) {
	const { username, email, password } = req.body;
	if (!username || !email || !password)
		return res.status(400).json({
			Message: "Username, email and password field are all required",
		});

	const duplicateUsername = await User.findOne({ username }).exec();
	const duplicateEmail = await User.findOne({ email }).exec();

	if (duplicateUsername)
		return res.status(409).json({ message: "duplicate username" });
	if (duplicateEmail)
		return res.status(409).json({ message: "duplicate email" });

	try {
		const user = new User({ username, email, password });

		await user.save();
		const accessToken = jwt.sign(
			{ username: user.username },
			process.env.ACCESS_TOKEN_SECRET!,
			{ expiresIn: "10s" }
		);
		return res.json({ user: user._id, accessToken });
	} catch (err) {
		return res.status(500).json({ error: err });
	}
}
