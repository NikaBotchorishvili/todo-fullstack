import { useForm } from "react-hook-form";
import Input from "../Common/Input";
import { useEffect } from "react";
import { useLoginMutation } from "../../features/Auth/AuthApiSlice";
import { setCredentials } from "../../features/Auth/AuthSlice";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
	email: string;
	password: string;
};

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
		setError,
	} = useForm<LoginFormValues>();

	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();

	const navigate = useNavigate();
	useEffect(() => {
		setFocus("email");
	}, []);

	const onSubmit = async (data: LoginFormValues) => {
		try {
			const { email, password } = data;
			const userData = await login({ email, password }).unwrap();
			dispatch(
				setCredentials({
					user: userData.user,
					accessToken: userData.accessToken,
				})
			);
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
			noValidate
			onSubmit={handleSubmit(onSubmit)}
			className="w-[80%] sm:w-[70%] md:w-[30%] flex flex-col gap-y-5"
		>
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
					maxLength: {
						value: 20,
						message: "Maximum 20 characters",
					},
				})}
				error={errors.password}
			/>
			{errors.root && (
				<small className="text-[#cc0000] text-md">
					{errors.root.message}
				</small>
			)}
			<button className="w-full text-2xl py-2 bg-cyan dark:text-veryLightGray">
				Submit
			</button>
		</form>
	);
}

export default LoginForm;
