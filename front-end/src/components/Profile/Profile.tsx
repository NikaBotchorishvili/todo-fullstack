import { useGetUserProfileQuery } from "../../features/Profile/ProfileSlice";
import { SelectCurrentUser } from "../../features/Auth/AuthSlice";
import { useAppSelector } from "../../app/hooks";
import { ClipLoader } from "react-spinners";
import Form from "./Form";

const ProfileForm = () => {
	const user = useAppSelector(SelectCurrentUser) as string;
	const { data, isLoading, isSuccess, isFetching } = useGetUserProfileQuery({
		userId: user,
	});

	let content;
	if (isLoading && isFetching) {
		content = <ClipLoader color="#fff" />;
	} else if (isSuccess) {
		content = (
			<Form email={data.email} username={data.username} user={user} />
		);
	}
	return <>{content}</>;
};

export default ProfileForm;
