const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const uid = require("uid");
console.log(uid());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("db"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})