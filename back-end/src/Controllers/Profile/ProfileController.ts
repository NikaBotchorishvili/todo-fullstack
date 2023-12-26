import { Request, Response } from "express";
import User, { UserType } from "../../Models/User";
import { Model } from "mongoose";

export async function getUserProfile(req: Request, res: Response) {
	const { user_id } = req.params;
	const foundUser = await User.findById(user_id).exec();

	return res.json(foundUser);
}

export async function patchUserProfile(req: Request, res: Response) {
	const { user_id } = req.params;
	const { username, email, password } = req.body;
	const foundUser = await User.findById(user_id).exec();
	if (!foundUser) return res.json(400);
	console.log("body:", req.body )
	console.log("Found user before Update: ", foundUser);
	foundUser.username = username;
	foundUser.email = email;
	if (password === undefined || password === "") {
		foundUser.password = foundUser.password;
	}else{
		foundUser.password = password
	}
	console.log("Found user after Update: ", foundUser);

	foundUser.save({ validateBeforeSave: false });
	return res.sendStatus(204);
}