const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/welcome.html');
});

app.get("/pizza", (req,res) => {
    res.sendFile(__dirname + "/public/pizza.html");
});

app.get("/whiskey", (req,res) => {
    res.send({barkeeper: "take this whiskey shitface"});
})

app.get("/bar", (req,res) =>{
    res.redirect("/whiskey")
})
const port = process.env.PORT || 8080;

app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }else
        console.log("Server is running on port", Number(port));
});