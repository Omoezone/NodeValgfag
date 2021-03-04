const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/welcome.html');
});

app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }else
        console.log("Server is running on port", 8080);
});