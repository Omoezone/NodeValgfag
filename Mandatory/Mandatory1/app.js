const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/frontPage.html');
});


app.listen(8080);