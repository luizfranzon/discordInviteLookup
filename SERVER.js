const express = require("express");
const discordInv = require('discord-inv');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static('./src'));

app.get("/", function (req, res) {
    res.render("pages/index");
    console.log("Index page loaded!");
});

app.get("/invite/:invite", function(req, res) {
    discordInv.getInv(discordInv.getCodeFromUrl(req.params.invite)).then(invite => {
        res.json(invite)
    }).catch(err => {
        res.json(err)
    })
});

app.listen(port);

console.log("----------------=----------------")
console.log(`Server running on port: ${port}`);
console.log(`http://localhost:${port}/`);
console.log("----------------=----------------")