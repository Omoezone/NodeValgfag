const express = require('express')
const app = express() 

app.use(express.json());
const dataArray = new Array();
const wine = require("./wine.json")

// GET 
app.get('/', function (req, res) {
    console.log(dataArray);
  res.send("<h1>Front Page</h1>");
})
// Get wine
app.get('/wine', (req, res) => {
  res.send(wine);
});
// POST
app.post("/data", (req, res) => {
    console.log(req.body);
    dataArray.push(req.body);
    console.log(dataArray);
    res.send({ body: req.body });
});

// PUT
app.put("/data/:value", (req, res) => {
    let value = req.params.value;
    let newValue = req.body;
    console.log(req.body);
    if(dataArray.indexOf(value)){
        dataArray.splice(value,1,newValue)
    }
    console.log(dataArray);
    res.send({ body: req.body });
});

// DELETE by using the url with "/?value=(name)" fx "/?value=Sen" deletes Sen from array
app.delete("/data", (req,res) => {
    console.log(req.body);
    dataArray.splice(req.body,1);   
    res.send({ body: req.body });
    console.log(dataArray);
});


app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});