const express = require("express");
const app = express();

const dateData = new Date();

app.get("/", (req, res) => {
    res.send({ message: "Welcome to the frontpage" });
});

app.get("/time", (req, res) => {
    const dateTime = new Date().toLocaleTimeString('en-DK');;
    res.send({dateTime});
});

app.get("/day", (req, res) => {
    const dayValue = new Date().toLocaleDateString('default', { weekday: 'long' });
    res.send({dayValue});
});

app.get("/month", (req, res) => {
    const month = new Date().toLocaleDateString('default', { month: 'long' });
    res.send({ month });
});

app.get("/about", (req, res) => {
    res.send({Version: "1.0.2"});
});

app.get("/page", (req, res) => {
    res.send("<h1>HELLO</h1>");
});

// Translate the integer value recieved from date.get functions, into name of the day or month
function nameOfValue(value){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[value];
}

app.listen(8080);