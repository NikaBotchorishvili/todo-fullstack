import mongoose from "mongoose";

async function dbConnection() {
	try {
		if (process.env.DATABASE_URI)
			await mongoose.connect(process.env.DATABASE_URI);
	} catch (err: any) {
		if (err) throw new Error(err);
	}
}

export default dbConnection;
