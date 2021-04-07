const express = require("express");
const app = express();

app.use(express.static('public'));


app.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/welcome/welcome.html');
});

app.get("/pizza", (req,res) => {
    res.sendFile(__dirname + "/public/pizza.html");
});

app.get("/whiskey", (req,res) => {
    res.send({barkeeper: "take this whiskey shitface"});
});

app.get("/bar", (req,res) =>{
    res.redirect("/whiskey")
});

app.get("/candle", (req,res) => {
    if (req.query.blow) {
        res.send({ lightsOn: false });
    } else {
        res.send({ lightsOn: true });
    }
});

app.get("/catfacts", (req,res) =>{
    res.sendFile(__dirname + "/public/catfacts/ catfacts.html");
});

const port = process.env.PORT || 8080;

app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }else
        console.log("Server is running on port", Number(port));
});