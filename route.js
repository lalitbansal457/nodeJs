const fs = require("fs");


const requestHandler = (req, res) => {
	const url = req.url;
	console.log(url);

	if(url == "/") {
		res.setHeader("content-type", "text/html");
		res.write("<html>")
		res.write("<head><title>My first page</title></head>")
		res.write("<body><form action='/post' method='POST'><input type='text' name='name' /><button type='submit'>Submit</button></form></body>")
		res.write("</html>")
		return res.end();
	}

	if(url == "/post" && req.method == "POST" ) {
		const body = [];
		req.on("data", (chunk) => {
			body.push(chunk);
		})

		return req.on("end", () => {
			let parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			let message = parsedBody.split("=")[1]
			fs.writeFile("data.text", message, (err) => {
				res.statusCode = 302;
				res.setHeader("Location", "/");
				return res.end();
			});
		})

		
	}
 	res.setHeader("content-type", "text/html");
	res.write("<html>")
	res.write("<head><title>My first page</title></head>")
	res.write("<body><h1> Welcome geeks</h1></body>")
	res.write("</html>")
	res.end();
}

module.exports = requestHandler;