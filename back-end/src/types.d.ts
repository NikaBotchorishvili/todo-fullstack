namespace Express {
	export interface Request {
		user: string;
	}
}
type JwtPayload = {
	username: string;
};