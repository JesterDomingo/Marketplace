const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hi")
    res.end()
});

app.listen(5000, () =>{
    console.log("Server is running.")
});