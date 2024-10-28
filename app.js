const express = require("express");
const app = express();
const http = require("http").Server(app)
const io = require("socket.io")(http);
const path = require("path");
let PORT = process.env.PORT || 3000;

const router = require("./routes/router");
app.use("/", router);

let users = 0;

io.on("connection", (socket) => {
    users++;
    socket.on("sendMsg", (data) => {
        io.emit("receiveMsg", data);
    });
    socket.on("disconnect", () => {
        users--;
    })
})

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
