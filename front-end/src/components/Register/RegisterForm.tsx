import { useForm } from "react-hook-form";
import Input from "../Common/Input";
import { useRegisterMutation } from "../../features/Auth/AuthApiSlice";
import { setCredentials } from "../../features/Auth/AuthSlice";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

type RegisterFormValues = {
	email: string;
	username: string;
	password: string;
	repeat_password: string;
};

function RegisterForm() {
	const { register, formState, handleSubmit, getValues, setError } =
		useForm<RegisterFormValues>();
	const { errors } = formState;
	const [registerUser] = useRegisterMutation();

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit = async (data: RegisterFormValues) => {
		try {
			const { email, username, password } = data;
			
			const userData = await registerUser({
				email,
				password,
				username,
			}).unwrap();

			dispatch(
				setCredentials({
					user: userData.user,
					accessToken: userData.accessToken,
				})
			)
			alert("dsada");
			navigate("/");
		} catch (err: any) {
			if (!err.originalStatus) {
				setError("root", { message: "No server response" });
			} else if (err.originalStatus == 401) {
				setError("root", { message: "Unauthorized" });
			} else {
				setError("root", { message: "Login Failed" });
			}
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-[80%] sm:w-[70%] md:w-[30%] flex flex-col gap-y-5"
			noValidate
		>
			<Input
				type="text"
				placeholder="Username"
				register={register("username", {
					required: true,
					minLength: {
						value: 8,
						message: "Minimum 8 characters required",
					},
				})}
				error={errors.username}
			/>
			<Input
				type="email"
				placeholder="Email"
				register={register("email", {
					required: true,
					pattern: {
						value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
						message: "Invalid Email",
					},
				})}
				error={errors.email}
			/>

			<Input
				type="password"
				placeholder="Password"
				register={register("password", {
					required: true,
					minLength: {
						value: 8,
						message: "Minimum 8 characters required",
					},
				})}
				error={errors.password}
			/>
			<Input
				type="password"
				placeholder="Repeat Password"
				register={register("repeat_password", {
					required: true,
					validate: (fieldValue) => {
						const password = getValues("password");
						return (
							fieldValue === password || "passwords Do not match"
						);
					},
				})}
				error={errors.repeat_password}
			/>
			<button className="w-full text-2xl py-2 bg-cyan dark:text-veryLightGray">
				Submit
			</button>
		</form>
	);
}

export default RegisterForm;
