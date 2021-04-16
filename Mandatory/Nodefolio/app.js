const express = require("express");
const app = express();
app.use(express.static('public'));

const projectsRoute = require("./routes/projects.js")
console.log(projectsRoute);
app.use(projectsRoute.router);

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");  

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");                        //projects
const contactpage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");                           //contact
const skillspage = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8");                              //skills    
const educationpage = fs.readFileSync(__dirname + "/public/education/education.html", "utf-8");                     //education
const recommendationspage = fs.readFileSync(__dirname + "/public/recommendations/recommendations.html", "utf-8");   //recommendations


app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req,res) => {
    res.send(header + projectspage + footer)
})

app.get("/contact", (req,res) => {
    res.send(header + contactpage + footer)
})

app.get("/skills", (req,res) => {
    res.send(header + skillspage + footer)
})

app.get("/education", (req,res) => {
    res.send(header + educationpage + footer)
})
app.get("/recommendations", (req,res) => {
    res.send(header + recommendationspage + footer)
})

const port = process.env.PORT;
const server = app.listen(port, (error) => {
    if(error){
        console.log("The program experienced an error" + error);
    }else {
        console.log("Starting program on port: ", server.address().port);
    }
});