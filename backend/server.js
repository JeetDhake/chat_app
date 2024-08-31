const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

app.get('/api/chat/', (req, res) => {
    res.send("api running");
});

app.get('/api/chat/:id', (req, res) => {
    const singlechat = chats.find((c) => c._id === req.params.id);
    res.send(singlechat);
});

const port = process.env.PORT || 4000;
app.listen(port, console.log(`SERVER RUNNING: http://localhost:${port}/`));