const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/frontPage.html');
});

app.get("/basic", (req, res) =>{
    res.sendFile(__dirname + '/views/basic.html');
});

app.get("/express", (req, res) =>{
    res.sendFile(__dirname + '/views/express.html');
});

app.get("/terminal", (req, res) =>{
    res.sendFile(__dirname + '/views/terminal.html');
});

const port = process.env.PORT || 8080;

app.listen(8080, (error) => {
    if(error){
        console.log("The program experienced an error" + error);
    }else {
        console.log("Starting program on port: ", port);
    }
});