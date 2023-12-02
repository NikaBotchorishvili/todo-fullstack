import { Link } from "react-router-dom";
import Top from "../../components/Common/Top";
import LoginForm from "../../components/Login/LoginForm";
import { useLoginMutation } from "../../features/Auth/AuthApiSlice";

function Login() {
	return (
		<Top>
			<main className="w-screen flex flex-col gap-y-5	 items-center text-center">
				<h1 className="text-4xl text-veryLightGray">Login</h1>
				<LoginForm />
				<small className="dark:text-veryLightGray text-[#000] text-xl">
					Don't have an account Login from{" "}
					<Link className="text-cyan" to="/register">Here</Link>
				</small>
			</main>
		</Top>
	);
}

export default Login;
