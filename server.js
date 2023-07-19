const express = require("express");
const { tasks } = require('./Tasks');

const app = express();


app.get("/tasks", (req,res) => {
    res.json(tasks)
})

app.listen(3000,() => {
    console.log("el servidor escucha",3000)
})