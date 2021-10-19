const http = require("http");
const express = require("express");
//const route = require("./route");

const app = express();

app.use((req, res, next) => {
	console.log("Inside request")
	next();
})

app.listen(3000)
