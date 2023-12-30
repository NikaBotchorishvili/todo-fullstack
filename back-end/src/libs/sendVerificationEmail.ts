import nodeMailer from "nodemailer";
import { User } from "../Models/User";
import { Response } from "express";
import { EmailTemplate } from "./EmailTemplate";
import UserVerification from "../Models/UserVerification";
const transporter = nodeMailer.createTransport({
	host: "smtp-relay.brevo.com",
	port: 587,
	auth: {
		user: process.env.AUTH_EMAIL,
		pass: process.env.AUTH_PASSWORD,
	},
});

transporter.verify((error, success) => {
	if (error) {
		console.log(error.message);
	} else {
		console.log("ready for messages");
	}
});

export async function sendVerificationEmail(user: User, res: Response) {
	let currentURL = "http://localhost:8000";
	const { _id, email } = user;
	const mailOptions = {
		from: process.env.AUTH_EMAIL,
		to: email,
		subject: "Verify your email",
		html: EmailTemplate({
			currentURL: currentURL,
			refreshToken: String(_id),
		}),
	};

	const newUserVerification = new UserVerification({
		user: user._id,
		expiredAt: Date.now() + 1000 * 60 * 6,
	});

	newUserVerification
		.save()
		.then(() => {
			transporter.sendMail(mailOptions);
		})
		.catch((err: any) => {
			console.log(err);
			res.json({
				status: "Failed",
				message: "Error ocurred while saving the verification data!",
			}).status(500);
		});
}
