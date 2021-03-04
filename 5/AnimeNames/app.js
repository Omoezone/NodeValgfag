const express = require('express');
const {json} = require('express');
const app = express();

const animeNames = [
    {
        id: 1,
        title: "Attack On Titan",
        weirdness: 6.1
    },
    {
        id: 2,
        title: "One Punch Man",
        weirdness: 5.4
    }
]

app.get("/anime_names", (req,res) => {
    res.send({animeNames});
});
app.get("/anime_names/:id", (req,res) => {
    const value = Number(req.params.id);
    const foundValue = animeNames.find(animeNames => animeNames.id === value);
    res.send({Id: foundValue});
});
app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});