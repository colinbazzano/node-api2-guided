const express = require("express");

const hubsRouter = require("../hubs/hubs-router.js"); // *** 1

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use("/api/hubs", hubsRouter); // *** 2

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

// export default server; // ES6 Modules
module.exports = server; // this is the way to export!

// {
//     "text": "Even the smallest person can change the course of  history",
//     "sender": "Lady Galadriel",
//     "hubId": 2
//   },
