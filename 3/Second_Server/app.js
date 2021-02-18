const express = require("express");
const app = express();

// req = request, res = response
app.get("/", (req, res) => {
    res.send({ message: "Welcome to the frontpage" });
});

app.get("/me", (req, res) => {
    res.send({ message: "My name is William" });
});

app.listen(8080);