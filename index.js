const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});