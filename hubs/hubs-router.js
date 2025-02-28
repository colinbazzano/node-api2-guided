const express = require("express");

// make sure to invoke and use uppercase R in Router!!!
const router = express.Router();

// const Hubs = require("../hubs/hubs-model.js"); // we needed to change this path after we moved it
const Hubs = require("./hubs-model.js");

// router.use(express.json());

// if I am here, it means the path has /api/hubs already
// we need to add any additional URL part that goes after /api/hubs here

router.get("/", (req, res) => {
  // we are using the query string parameters
  console.log(req.query);
  Hubs.find(req.query)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the hubs"
      });
    });
});

router.get("/:id", (req, res) => {
  Hubs.findById(req.params.id)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: "Hub not found" });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the hub"
      });
    });
});

router.post("/", (req, res) => {
  Hubs.add(req.body)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error adding the hub"
      });
    });
});

router.delete("/:id", (req, res) => {
  Hubs.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "The hub has been nuked" });
      } else {
        res.status(404).json({ message: "The hub could not be found" });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error removing the hub"
      });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  Hubs.update(req.params.id, changes)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: "The hub could not be found" });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error updating the hub"
      });
    });
});

// add an endpoint that returns all the messages for a hub
// GET /api/hubs/:id/messages
router.get("/:id/messages", (req, res) => {
  Hubs.findHubMessages(req.params.id)
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "error getting hubs messages" });
    });
});

// add an endpoint for adding new message to a hub
router.post("/:id/messages", (req, res) => {
  Hubs.addMessage(req.body)
    .then(message => {
      res.status(201).json(message);
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ errorMessage: "error creating a new hubs message" });
    });
});
// export default server; // ES6 Modules
module.exports = router; // this is the way to export, here we are exporting the ROUTER!
