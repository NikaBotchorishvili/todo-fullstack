import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { SelectCurrentAccessToken } from "../features/Auth/AuthSlice";

type Props = {
	children: React.ReactElement;
};

const RequireAuth: React.FC<Props> = ({ children }): React.ReactElement => {
	const token = useAppSelector(SelectCurrentAccessToken);
	const location = useLocation();

	return token ? (
		{ ...children }
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default RequireAuth;
