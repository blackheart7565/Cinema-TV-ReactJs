import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import router from "./src/routs";
import { IDtoUser } from "./src/types/token/dto.use.type";

declare global {
	namespace Express {
		interface Request {
			users?: IDtoUser | null;
		}
	}
}

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors({
	credentials: true,
	origin: process.env.CLIENT_URL
}));
app.use(cookieParser());
app.use("/api/v1", router);

// const port = process.env.PORT || 5000;
const port = 8000;

mongoose.connect(`${process.env.BASE_URL_DB}`).then(() => {
	console.log("Connection to Mongo Database");
	server.listen(port, () => {
		console.log(`Server listen on port ${port}`);
	})
}).catch((err) => { console.error(err) });
