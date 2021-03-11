const express = require('express');
const {json} = require('express');
const app = express();
app.use(express.json());
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
let autoincrement = 2;

app.get("/anime_names", (req,res) => {
    res.send({animeNames});
});
app.get("/anime_names/:id", (req,res) => {
    const value = Number(req.params.id);
    const foundValue = animeNames.find(animeNames => animeNames.id === value);
    res.send({Id: foundValue});
});

app.post("/anime_names", (req,res)=>{
    const newAnimeName = req.body;
    newAnimeName.id = ++autoincrement;
    animeNames.push(newAnimeName);
    res.send({data: newAnimeName});
});

app.patch("/anime_names/:id",(req,res)=>{
    animeNames = animeNames.map(animeName => {
        if(animeName.id === Number(req.params.id)){
            return {...animeName,...req.body, id: animeName.id}; 
        }
        return animeName;
    });
    res.send({data: wasUpdated});
})

app.delete("/anime_names/:id", (req,res) => {
    animeNames = animeNames.filter(animeName => animeName.id !== Number(req.params.id));
    res.send({data: animeNames});
});
app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});