const router = require("express").Router();

router.get("/api/projects", (req,res)=>{
    res.send({texting:"information text"})
})
const information = {
    texting : "Information text",
    number : "4",
    name : "information name"
}
module.exports = {
    router : router
}

