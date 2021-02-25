const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({ message: "Welcome to the frontpage of Data_API" });
});

app.get("/search", (req, res) => {
    res.send({ searchquery: req.query });
});

app.get("/telegram/:message", (req, res) => {
    res.send({message: req.params.message});
});

app.get("/telegram/:message/:name", (req, res) => {​​
    res.send({​​ name: req.params.name, message: req.params.message }​​);
    }​​);

app.listen(8080);