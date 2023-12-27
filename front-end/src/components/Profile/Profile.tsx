import { useGetUserProfileQuery } from "../../features/Profile/ProfileSlice";
import { SelectCurrentUser } from "../../features/Auth/AuthSlice";
import { useAppSelector } from "../../app/hooks";
import { ClipLoader } from "react-spinners";
import Form from "./Form";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const ProfileForm = () => {
	const user = useAppSelector(SelectCurrentUser) as string;
	const { data, isLoading, isSuccess, isFetching } = useGetUserProfileQuery({
		userId: user,
	});
	const timeAgo = new TimeAgo('en-US')
	let content;
	if (isLoading && isFetching) {
		content = <ClipLoader color="#fff" />;
	} else if (isSuccess && data) {
		content = (
			<>
				<Form email={data.email} username={data.username} user={user} />
				<small className="text-left text-2xl dark:bg-darkVeryDarkDesaturatedBlue dark:text-veryLightGray">Last Updated: {timeAgo.format(new Date(data.updatedAt))}</small>

			</>
		);
	}
	return (
		<>
			{content}
		</>
	);
};

export default ProfileForm;
