const router = require("express").Router();

const projects = [{
    title: "Nodefolio",
    description: "Personal portfolio implemented in Node.js",
    startDate: new Date("2021-04-08"),
    endDate: new Date("2021-04-15"),
    gitLink: "https://github.com/Omoezone/NodeValgfag.git"
}, {
    title: "new project",
    description: "This is the newest thing that I'm sinking my time into"
}];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};
