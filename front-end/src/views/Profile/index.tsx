import Top from "../../components/Common/Top";
import ProfileForm from "../../components/Profile/ProfileForm";

const Profile = () => {
	return (
		<Top>
			<main className="w-screen flex flex-col gap-y-5	 items-center text-center">
				<h1 className="text-4xl text-veryLightGray text-center">
					Profile
				</h1>
				<ProfileForm />
			</main>
		</Top>
	);
};

export default Profile;
