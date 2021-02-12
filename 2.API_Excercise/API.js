const express = require("express");
const conn = express();

//Array of teachers (Nouns)
const teachers = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Michael Angelo"},
    {id: 3, name: "John Smith"},
    {id: 4, name: "Frank Sinato"}
];
// Frontpage
conn.get("/", (req, res) => {
    res.send({ message: "Welcome to the frontpage" });
});

// Get all teachers
conn.get("/teacher", (req, res) => {
    res.send(teachers);
});

// Get teacher by id
conn.get("/teacher/:id", (req, res) => {
    let teacherList = teachers.filter((teacher) => teacher.id == req.params.id);
    res.send(teacherList);
  });

conn.listen(8080);