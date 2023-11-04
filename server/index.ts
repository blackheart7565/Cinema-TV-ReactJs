import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import router from "./src/routs";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use("/api/v1", router)

const port = process.env.PORT || 5000;

mongoose.connect(`${process.env.BASE_URL_DB}`).then(() => {
	console.log("Connection to Mongo Database");
	server.listen(port, () => {
		console.log(`Server listen on port ${port}`);
	})
}).catch((err) => { console.error(err) });