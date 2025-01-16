const express = require("express");
const http = require("http");
const { initializeAPI } = require("./api");

// Create the express server
const app = express();
app.use(express.json());
const server = http.createServer(app);

// Static files from Client
app.use(express.static("client"));

// Homepage route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

initializeAPI(app);

// Start Webserver
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Express Webserver started on port ${serverPort}`);
});
