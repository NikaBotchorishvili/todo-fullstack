import Input from "../Common/Input";
import { Profile, usePatchUserProfileMutation } from "../../features/Profile/ProfileSlice";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../app/hooks";
interface FormData extends Omit<Profile, "updatedAt" | "password"> {
	newPassword: string;
	repeatNewPassword: string;
}

type Props = {
    username: string;
    email: string;
    user: string;
}

const Form: React.FC<Props> = ({ username, email, user }) => {
	const [updateProfile] = usePatchUserProfileMutation();
    
    const {
		register,
		formState: { errors },
		handleSubmit,
		setError,
		getValues,
	} = useForm<FormData>({
		defaultValues: { username: username, email: email, newPassword: "", repeatNewPassword: "" },
	});

    const onSubmit = handleSubmit(async (data) => {
		try {
			const { email, newPassword, username } = data;

			const userData = await updateProfile({
				profile: {
					email: email,
					password: newPassword === "" ? undefined : newPassword,
					username: username,
				},
				userId: user,
			}).unwrap();
		} catch (err: any) {
			if (!err.originalStatus) {
				setError("root", { message: "No server response" });
			} else if (err.originalStatus == 401) {
				setError("root", { message: "Unauthorized" });
			}
		}
	});
    return (
        <form
				onSubmit={onSubmit}
				className=" w-[80%] sm:w-[70%] md:w-[30%] flex flex-col gap-y-5 "
			>
				<Input
					register={register("username")}
					placeholder="Enter your username"
					type="text"
					error={errors.username}
				/>
				<Input
					register={register("email", {
						pattern: {
							value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
							message: "Invalid Email",
						},
					})}
					placeholder="Enter your email"
					type="text"
					error={errors.username}
				/>
				<Input
					register={register("newPassword", {
						validate: (data) => {
							const formData = getValues();
							if (data !== formData.repeatNewPassword)
								return "Passwords do not match";
						},

						minLength: {
							value: 8,
							message: "At least 8 characters",
						},
					})}
					placeholder="Enter a new password"
					type="password"
					error={errors.newPassword}
				/>
				<Input
					register={register("repeatNewPassword", {
						minLength: {
							value: 8,
							message: "At least 8 characters",
						},
					})}
					placeholder="Repeat a new password"
					type="password"
					error={errors.repeatNewPassword}
				/>

				<button className="w-full text-2xl py-2 bg-cyan dark:text-veryLightGray">
					Update
				</button>
			</form>
    );
}
 
export default Form;