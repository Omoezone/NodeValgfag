const express = require("express");
const fs = require("fs/promises")
const fetch = require("node-fetch");  
const app = express();

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
});

app.get("/proxy", (req,res) =>{
    fetch("https://google.dk") // Fetch html data (text) from google.dk
        .then(response => response.text()) // take the text part of the response 
        .then(text => {
            fs.writeFile(__dirname + "/public/proxy.html", text, function(error){ // using fs's writefile to write the html to the html proxy
                //If the proxy file is empty, will the text have to be inputted before you can use the html file. U therefore need to call the /proxy url twice before it showes
                if(error){ 
                    return console.log(err);
                } 
            })
        })
        res.sendFile(__dirname+"/public/proxy.html") //Sends the proxy file to the client
})

app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});