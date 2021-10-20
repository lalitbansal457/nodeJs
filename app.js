const http = require("http");
const express = require("express");
const bodyParser = require("express");
const path = require("path");
//const route = require("./route");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();
app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000)
