const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static('./src'));

app.get("/", function (req, res) {
    res.render("pages/index");
    console.log("'Index' page loaded!");
});

app.listen(port);

console.log("----------------=----------------")
console.log(`Server running on port: ${port}`);
console.log(`http://localhost:${port}/`);
console.log("----------------=----------------")