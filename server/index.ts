import "dotenv/config";
import express from "express";
import http from "http";
import mongoose from "mongoose";

const app = express();
const server = http.createServer(app);

// const port = process.env.PORT || 5000
const port = 7000

mongoose.connect(`${process.env.BASE_URL_DB}`).then(() => {
	console.log("Connection to Mongo Database");
	server.listen(port, () => {
		console.log(`Server listen on port ${port}`);
	})
}).catch((err) => { console.error(err) });
