const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/frontPage.html');
});



app.listen(8080, (error) => {
    if(error){
        console.log("The program experienced an error" + error);
    }else {
        console.log("Starting program on port: ", 8080);
    }
});