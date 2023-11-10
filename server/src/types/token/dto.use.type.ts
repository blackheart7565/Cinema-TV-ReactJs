import mongoose from "mongoose";

export interface IDtoUser {
	id: typeof mongoose.Types.ObjectId;
	username: string;
	email: string;
}