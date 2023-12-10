import { CallbackError, model, Schema } from "mongoose";
import { validateEmail } from "../libs/validation";
import bcrypt from "bcrypt";
export type UserType = {
	username: string;
	email: string;
	password: string;
	refreshToken?: string;
};

export const userSchema = new Schema<UserType>(
	{
		username: {
			trim: true,
			type: String,
			required: true,
			minlength: [8, "Minimum 8 letters required"],
		},
		email: {
			trim: true,
			type: String,
			required: true,
			validate: [validateEmail, "Invalid email format"],
		},
		password: { trim: true, type: String, required: true },
		refreshToken: { type: String },
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	const user = this;
	if (!user.isModified("password")) return next();
	try {
		const saltRounds = 10;
		user.password = await bcrypt.hash(user.password, saltRounds);
		next();
	} catch (err) {
		return next(err as CallbackError);
	}
});

export default model("User", userSchema);
