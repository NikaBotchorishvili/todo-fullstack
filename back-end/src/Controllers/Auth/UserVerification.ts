import User from "../../Models/User";
import { Request, Response } from "express";
import userVerification from "../../Models/UserVerification";

export async function verifyUser(req: Request, res: Response) {
	const { user_id } = req.params;

	const foundUserVerification = await userVerification
		.findById(user_id)
		.exec();

	if (!foundUserVerification) {
		//  Bad Request
		return res.status(400).json({
			error: "Invalid user ID",
			message:
				"User record doesn't exist or has been already verified. Please sing up or log in.",
		});
	}

	const foundUser = await User.findById(foundUserVerification._id).exec();
	const { expiredAt } = foundUserVerification;

	if (foundUser) {
		if (expiredAt.getTime() > Date.now()) {
			const deleteQuery = await userVerification
				.findOneAndDelete({ user: user_id })
				.exec();

			if (deleteQuery.ok) {
				return res.status(200).json({
					message: "User verification deleted successfully",
				});
			}
			return res.status(403).json({
				message: "Verification expired.",
			});
		}

		foundUser.verified = true;
		foundUser
			.save()
			.then(async () => {
				const deleteQuery = await userVerification
					.findOneAndDelete({ user: user_id })
					.exec();

				return res.sendStatus(201);
			})
			.catch((_) => {
				return res.status(500).json({
					error: "Error while verifying.",
					message: "Internal server error.",
				});
			});
	}
}
