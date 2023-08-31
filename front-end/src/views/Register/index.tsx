import { Link } from "react-router-dom";
import Top from "../../components/Common/Top";
import RegisterForm from "../../components/Register/RegisterForm";

function Register() {
	return (
		<Top>
			<main className="w-screen flex flex-col gap-y-5	 items-center">
				<h1 className="text-4xl text-veryLightGray">Register</h1>
				<RegisterForm />
                <small className="dark:text-veryLightGray text-[#000] text-xl">
					Already Have an Account? Login from {" "}
					<Link className="text-cyan" to="/login">Here</Link>
				</small>
			</main>
		</Top>
	);
}

export default Register;
